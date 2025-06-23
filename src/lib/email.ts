import nodemailer from 'nodemailer';
import { config } from './config';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
}

interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

// Create SMTP transporter
function createTransporter(): nodemailer.Transporter | null {
  const smtpConfig = {
    host: process.env.SMTP_HOST || '',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || '',
    },
  };

  if (!smtpConfig.host || !smtpConfig.auth.user || !smtpConfig.auth.pass) {
    console.error('SMTP configuration incomplete');
    return null;
  }

  try {
    return nodemailer.createTransport(smtpConfig);
  } catch (error) {
    console.error('Failed to create SMTP transporter:', error);
    return null;
  }
}

// Send email using SMTP
export async function sendEmail(data: EmailData): Promise<EmailResult> {
  const transporter = createTransporter();
  
  if (!transporter) {
    return {
      success: false,
      error: 'SMTP configuration not available'
    };
  }

  try {
    await transporter.verify();
    
    const mailOptions = {
      from: `"Visskan Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO_EMAIL || config.contact.email,
      replyTo: data.email,
      subject: `New Contact Form Submission - ${data.service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Sent from ${config.site.url} at ${new Date().toLocaleString()}</small></p>
      `,
      text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company || 'Not provided'}
Service: ${data.service}

Message:
${data.message}

---
Sent from ${config.site.url} at ${new Date().toLocaleString()}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', {
      messageId: info.messageId,
      to: mailOptions.to,
      subject: mailOptions.subject,
    });

    return {
      success: true,
      messageId: info.messageId,
    };

  } catch (error) {
    console.error('Failed to send email:', error);
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

// Send notification email to customer
export async function sendCustomerNotification(data: EmailData): Promise<EmailResult> {
  const transporter = createTransporter();
  
  if (!transporter) {
    return {
      success: false,
      error: 'SMTP configuration not available'
    };
  }

  try {
    const customerEmailHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank you for contacting Visskan Elite Services</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #003366; color: white; padding: 20px; text-align: center; }
          .content { background: #f9f9f9; padding: 20px; }
          .footer { background: #e9ecef; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You!</h1>
            <p>Visskan Elite Services</p>
          </div>
          
          <div class="content">
            <p>Dear ${data.name},</p>
            
            <p>Thank you for contacting Visskan Elite Services. We have received your inquiry regarding <strong>${data.service}</strong>.</p>
            
            <p>Our team will review your requirements and get back to you within 24 hours during business days.</p>
            
            <p><strong>Your inquiry details:</strong></p>
            <ul>
              <li>Service: ${data.service}</li>
              <li>Message: ${data.message.substring(0, 100)}${data.message.length > 100 ? '...' : ''}</li>
            </ul>
            
            <p>If you have any urgent requirements, please feel free to call us at <strong>${config.contact.phone}</strong>.</p>
            
            <p>Best regards,<br>
            Team Visskan Elite Services</p>
          </div>
          
          <div class="footer">
            <p><strong>Visskan Elite Services</strong></p>
            <p>📞 ${config.contact.phone} | 📧 ${config.contact.email}</p>
            <p>📍 ${config.site.address.street}, ${config.site.address.city} - ${config.site.address.pincode}</p>
            <p>🕒 Business Hours: ${config.site.businessHours.weekdays} (Mon-Fri), ${config.site.businessHours.saturday} (Sat)</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"Visskan Elite Services" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: 'Thank you for contacting Visskan Elite Services',
      html: customerEmailHTML,
    };

    const info = await transporter.sendMail(mailOptions);
    
    return {
      success: true,
      messageId: info.messageId,
    };

  } catch (error) {
    console.error('Failed to send customer notification:', error);
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
} 