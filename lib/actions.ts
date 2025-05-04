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
    console.log(error);
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

export async function sendResumeViewedEmail(
  visitorDataString: string
): Promise<{ success: boolean; message: string }> {
  try {
    // Parse the visitor data from the client
    const visitorData: VisitorData = JSON.parse(visitorDataString);

    // Now use the IP from client-side to get location information
    const geoResponse = await fetch(`https://ipapi.co/${visitorData.ip}/json/`);
    const geoData = await geoResponse.json();

    // Combine the data
    const locationData = {
      ip: visitorData.ip,
      country: geoData.country_name || 'Unknown',
      region: geoData.region || 'Unknown',
      city: geoData.city || 'Unknown',
      latitude: geoData.latitude || 0,
      longitude: geoData.longitude || 0,
      timezone: geoData.timezone || 'Unknown',
      userAgent: visitorData.userAgent,
      screenSize: visitorData.screenSize,
      language: visitorData.language,
      platform: visitorData.platform,
      referrer: visitorData.referrer,
      visitedAt: visitorData.visitedAt,
    };

    // Log this information
    console.log(
      'Resume downloaded by user with the following details:',
      locationData
    );

    // Send an email notification about the resume view
    const { data, error } = await resend.emails.send({
      from: 'Resume Viewer Alert <website@wilsonkinyua.com>',
      to: ['wilsonkinyuam@gmail.com'],
      subject: `👀 Resume viewed from ${locationData.city}, ${locationData.country}`,
      html: `
        <h2>Someone just viewed your resume!</h2>
        <p>A visitor from <strong>${locationData.city}, ${
        locationData.region
      }, ${locationData.country}</strong> has just viewed your resume.</p>
        <h3>Visitor Details:</h3>
        <ul>
          <li><strong>IP Address:</strong> ${locationData.ip}</li>
          <li><strong>Location:</strong> ${locationData.city}, ${
        locationData.region
      }, ${locationData.country}</li>
          <li><strong>Timezone:</strong> ${locationData.timezone}</li>
          <li><strong>Date/Time:</strong> ${new Date(
            locationData.visitedAt
          ).toLocaleString()}</li>
          <li><strong>Browser/Device:</strong> ${locationData.userAgent}</li>
          <li><strong>Screen Size:</strong> ${locationData.screenSize}</li>
          <li><strong>Language:</strong> ${locationData.language}</li>
          <li><strong>Platform:</strong> ${locationData.platform}</li>
          <li><strong>Referrer:</strong> ${locationData.referrer}</li>
        </ul>
        <p>This visitor might be a potential recruiter or client interested in your services!</p>
      `,
    });

    if (error) {
      console.error('Error sending resume view notification email:', error);
    }

    return {
      success: true,
      message: 'Captured resume view data successfully',
    };
  } catch (error) {
    console.error('Error capturing resume view data:', error);
    return {
      success: false,
      message: 'Failed to capture resume view data',
    };
  }
}
