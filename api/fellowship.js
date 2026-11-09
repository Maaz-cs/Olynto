import { Resend } from 'resend';
import getDatabase from './_lib/mongodb.js';

const resend = new Resend(process.env.FELLOWSHIP_RESEND_API_KEY);

const escapeHTML = (value = '') =>
  String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char]);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    });
  }

  try {
    const {
      fullName,
      college,
      yearBranch,
      email,
      portfolio = '',
      reason,
    } = req.body || {};

    // Server-side validation
    if (!fullName || !college || !yearBranch || !email || !reason) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields.',
      });
    }

    const application = {
      fullName: String(fullName).trim(),
      college: String(college).trim(),
      yearBranch: String(yearBranch).trim(),
      email: String(email).trim().toLowerCase(),
      portfolio: String(portfolio).trim(),
      reason: String(reason).trim(),
      status: 'Pending',
      createdAt: new Date(),
    };

    if (
      application.fullName.length > 120 ||
      application.college.length > 200 ||
      application.yearBranch.length > 100 ||
      application.email.length > 254 ||
      application.portfolio.length > 500 ||
      application.reason.length > 3000
    ) {
      return res.status(400).json({
        success: false,
        message: 'One or more fields exceed the allowed length.',
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(application.email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.',
      });
    }

    if (
      application.portfolio &&
      !/^https?:\/\/.+/i.test(application.portfolio)
    ) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid portfolio URL.',
      });
    }

    if (
      !application.fullName ||
      !application.college ||
      !application.yearBranch ||
      !application.reason
    ) {
      return res.status(400).json({
        success: false,
        message: 'Required fields cannot be empty.',
      });
    }

    // Store application in MongoDB
    const db = await getDatabase();

    const result = await db.collection('fellowship_applications').insertOne({
      ...application,
      notificationStatus: 'pending',
    });

    // Send notification email
    const { error } = await resend.emails.send({
     from: 'Olynto Elevate <Olynto.elevate@olyntollp.com>',
      to: ['Olynto.elevate@olyntollp.com'],
      replyTo: application.email,
      subject: `New Olynto Elevate Fellowship Application - ${application.fullName}`,

      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111;max-width:700px;margin:auto;">
          <h2>New Fellowship Application</h2>

          <p><strong>Application ID:</strong> ${result.insertedId}</p>
          <p><strong>Full Name:</strong><br>${escapeHTML(application.fullName)}</p>
          <p><strong>College:</strong><br>${escapeHTML(application.college)}</p>
          <p><strong>Year and Branch:</strong><br>${escapeHTML(application.yearBranch)}</p>
          <p><strong>Email:</strong><br>${escapeHTML(application.email)}</p>
          <p><strong>Portfolio:</strong><br>${escapeHTML(application.portfolio || 'Not provided')}</p>

          <p><strong>Why do you want to be a Fellow?</strong></p>
          <div style="padding:16px;background:#f5f5f5;white-space:pre-wrap;">
            ${escapeHTML(application.reason)}
          </div>

          <hr>
          <p style="font-size:12px;color:#666;">
            Submitted through the Olynto Elevate website.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Fellowship notification error:', error);

      return res.status(201).json({
        success: true,
        notificationSent: false,
        message: 'Application received successfully. Email notification is pending.',
        applicationId: result.insertedId,
      });
    }

    await db.collection('fellowship_applications').updateOne(
      { _id: result.insertedId },
      { $set: { notificationStatus: 'sent' } }
    );

    return res.status(201).json({
      success: true,
      notificationSent: true,
      message: 'Your Fellowship application has been submitted successfully.',
    });

  } catch (error) {
    console.error('Fellowship API error:', error);

    return res.status(500).json({
      success: false,
      message: 'Unable to submit your application right now. Please try again.',
    });
  }
}