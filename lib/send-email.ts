import 'server-only';

import nodemailer from 'nodemailer';
import { ISendMailParams } from '@/types';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: Number(process.env.MAIL_PORT) === 465,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export async function sendMail({
  from = `"Marching Frogs" <${process.env.MAIL_USER}>`,
  to,
  subject,
  text,
  html,
  attachments = [],
}: ISendMailParams) {
  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
      attachments,
      replyTo: 'info@marchingfrogs.com',
      headers: {
        'X-Priority': '1 (Highest)',
        'X-Mailer': 'Nodemailer',
      },
    });
    return info;
  } catch (error) {
    console.error(`FAILED to send email to ${to}:`, error);
    throw error;
  }
}
