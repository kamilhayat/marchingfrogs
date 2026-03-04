'use server';

import connectDB from '@/server/mongodb';
import Quote from '@/server/models/Quote';
import { z } from 'zod';
import { sendMail } from '@/lib/send-email';

const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  projectType: z.string().optional(),
  subject: z.string().optional(),
  relevantPatents: z.string().optional(),
  additionalDetails: z.string().optional(),
  referredBy: z.string().optional(),
});

export async function submitQuote(formData: any) {
  try {
    const validatedData = quoteSchema.parse(formData);

    await connectDB();

    const quote = new Quote(validatedData);
    await quote.save();

    // 1. Send Thank You Email to User
    await sendMail({
      to: validatedData.email,
      subject: 'We Received Your Request - Marching Frogs',
      text: `Hi ${validatedData.name}, thank you for reaching out to Marching Frogs. We have received your request and our team will get back to you shortly.`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #f47e3a; font-family: serif;">Marching Frogs</h2>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 16px; color: #333;">Hi <strong>${validatedData.name}</strong>,</p>
          <p style="font-size: 16px; color: #555; line-height: 1.6;">
            Thank you for reaching out to us. We have successfully received your request regarding <strong>${validatedData.projectType || validatedData.subject || 'General Inquiry'}</strong>.
          </p>
          <p style="font-size: 16px; color: #555; line-height: 1.6;">
            Our strategic team is currently reviewing your details and will get back to you within 24 business hours.
          </p>
          <div style="background: #fdf2f2; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-size: 14px; color: #f47e3a; font-weight: bold;">Next Steps:</p>
            <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">A specialist will contact you to discuss your requirements in detail.</p>
          </div>
          <p style="font-size: 14px; color: #999; margin-top: 30px;">
            Best Regards,<br />
            <strong>The Marching Frogs Team</strong><br />
            <a href="https://marchingfrogs.com" style="color: #f47e3a; text-decoration: none;">marchingfrogs.com</a>
          </p>
        </div>
      `,
    });

    // 2. Send Lead Notification to Admin
    await sendMail({
      to: 'info@bespokegls.com',
      subject: `New Lead: ${validatedData.name} - ${validatedData.projectType || 'General'}`,
      text: `New Lead Received:\n\nName: ${validatedData.name}\nEmail: ${validatedData.email}\nType: ${validatedData.projectType}\nDetails: ${validatedData.additionalDetails}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; background-color: #f9f9f9;">
          <h2 style="color: #333;">New Lead Notification</h2>
          <div style="background: #fff; padding: 20px; border-radius: 8px; border: 1px solid #ddd;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666; width: 30%;">Name:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${validatedData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Email:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;"><a href="mailto:${validatedData.email}">${validatedData.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Project Type:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${validatedData.projectType || validatedData.subject || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Patents:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${validatedData.relevantPatents || 'None'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666; vertical-align: top;">Details:</td>
                <td style="padding: 8px 0; color: #333; line-height: 1.5;">${validatedData.additionalDetails || 'No additional details provided.'}</td>
              </tr>
              ${
                validatedData.referredBy
                  ? `
              <tr>
                <td style="padding: 8px 0; border-top: 1px solid #eee; font-weight: bold; color: #666;">Referred By:</td>
                <td style="padding: 8px 0; border-top: 1px solid #eee; color: #333;">${validatedData.referredBy}</td>
              </tr>
              `
                  : ''
              }
            </table>
          </div>
          <p style="font-size: 12px; color: #999; text-align: center; margin-top: 20px;">
            This email was automatically generated from the Marching Frogs contact system.
          </p>
        </div>
      `,
    });

    return { success: true, message: 'Quote request submitted successfully!' };
  } catch (error: any) {
    console.error('Error submitting quote:', error);
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.issues[0]?.message || 'Invalid form data',
      };
    }
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    };
  }
}
