import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    });
  }

  try {
    const {
      name,
      email,
      phone,
      type,
      message,
    } = req.body || {};

    // Validate required fields
    if (!name || !email || !type || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields.',
      });
    }

    const { data, error } = await resend.emails.send({
      from: 'Olynto Website <onboarding@resend.dev>',
     to: ['moazbin25@gmail.com'],
      replyTo: email,
      subject: `New Olynto Enquiry — ${type}`,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #111;
          max-width: 700px;
          margin: 0 auto;
        ">

          <h2>New Enquiry from Olynto Website</h2>

          <p>
            <strong>Enquiry Type:</strong><br />
            ${type}
          </p>

          <p>
            <strong>Full Name:</strong><br />
            ${name}
          </p>

          <p>
            <strong>Email:</strong><br />
            ${email}
          </p>

          <p>
            <strong>Phone:</strong><br />
            ${phone || 'Not provided'}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <div style="
            padding: 16px;
            background: #f5f5f5;
            border-left: 3px solid #111;
            white-space: pre-wrap;
          ">
            ${message}
          </div>

          <hr />

          <p style="
            font-size: 12px;
            color: #666;
          ">
            This enquiry was submitted through the Olynto website.
          </p>

        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);

      return res.status(500).json({
        success: false,
        message: 'Unable to send your enquiry right now.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Enquiry sent successfully.',
      id: data?.id,
    });

  } catch (error) {
    console.error('Contact API error:', error);

    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.',
    });
  }
}