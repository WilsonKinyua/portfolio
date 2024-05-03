"use server"

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (name: string, email: string, message: string, subject?: string, phoneNumber?: string) => {
    const { data, error } = await resend.emails.send({
        from: 'My Portfolio 😃 <wilson@wdev.co.ke>',
        to: ["wilsonkinyuam@gmail.com"],
        subject: subject || `New Message from ${name} on My Portfolio`,
        html: `
            <h5>New Message from ${name}</h1>
            <p><strong>Message</strong> -${message}</p>
            <p>Email: ${email}</p>
            ${phoneNumber ? `<p>Phone Number: ${phoneNumber}</p>` : ''}
        `
    });

    if (error) {
        console.log(error);
        return { error };
    }

    return { data };
};

export default sendEmail;