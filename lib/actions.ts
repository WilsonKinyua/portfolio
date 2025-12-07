'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (
  name: string,
  email: string,
  message: string,
  subject?: string,
  phoneNumber?: string
) => {
  const { data, error } = await resend.emails.send({
    from: 'My Portfolio 😃 <website@wilsonkinyua.com>',
    to: ['wilsonkinyuam@gmail.com'],
    subject: subject || `New Message from ${name} on My Portfolio`,
    html: `
            <h5>New Message from ${name}</h1>
            <p><strong>Message</strong> -${message}</p>
            <p>Email: ${email}</p>
            ${phoneNumber ? `<p>Phone Number: ${phoneNumber}</p>` : ''}
        `,
  });

  if (error) {
    // Only log errors in development environment
    if (process.env.NODE_ENV === 'development') {
      console.error('Email sending error:', error);
    }
    return { error };
  }

  return { data };
};

type VisitorData = {
  userAgent: string;
  ip: string;
  screenSize: string;
  language: string;
  platform: string;
  referrer: string;
  visitedAt: string;
};