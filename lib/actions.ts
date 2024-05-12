"use server"

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (name: string, email: string, message: string, subject?: string, phoneNumber?: string) => {
    const { data, error } = await resend.emails.send({
        from: 'My Portfolio 😃 <website@wilsonkinyua.com>',
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

export const sendResumeViewedEmail = async () => {
    const { data, error } = await resend.emails.send({
        from: 'My Portfolio 😃 <website@wilsonkinyua.com>',
        to: ["wilsonkinyuam@gmail.com"],
        subject: 'Someone viewed your resume as at ' + new Date().toLocaleString(),
        html: `
            <h5>Someone viewed your resume</h5>
        `
    });

    if (error) {
        console.log(error);
        return { error };
    }

    return { data };
}