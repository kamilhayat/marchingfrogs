'use server';

import connectDB from '@/lib/mongodb';
import Quote from '@/models/Quote';
import { z } from 'zod';

const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  projectType: z.string().min(1, 'Please select a project type'),
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
