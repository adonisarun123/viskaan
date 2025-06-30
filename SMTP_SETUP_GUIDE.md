# SMTP Email Setup Guide

This guide will help you configure SMTP email functionality for the Visskan Elite Services website.

## Overview

The contact form now uses SMTP to send emails directly to your business email address. This provides:
- Real-time email notifications for contact form submissions
- Professional email formatting with HTML and plain text versions
- Reply-to functionality so you can respond directly to customers
- Rate limiting to prevent spam

## Required Environment Variables

Add these variables to your `.env.local` file:

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_TO_EMAIL=info@visskan.com
```

## SMTP Provider Setup

### Option 1: Gmail (Recommended for testing)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Navigate to Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password as `SMTP_PASS`

3. **Configuration**:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-gmail@gmail.com
   SMTP_PASS=your-16-digit-app-password
   ```

### Option 2: Outlook/Hotmail

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### Option 3: Yahoo Mail

```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@yahoo.com
SMTP_PASS=your-app-password
```

### Option 4: Custom SMTP Server

For business email providers (GoDaddy, Namecheap, etc.):

```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@yourdomain.com
SMTP_PASS=your-email-password
```

## Testing the Setup

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Test the contact form**:
   - Go to `/contact` page
   - Fill out the form with test data
   - Submit the form
   - Check your email inbox for the notification

3. **Check server logs**:
   - Look for "Email sent successfully" messages in the console
   - If there are errors, check the SMTP configuration

## Email Format

The system sends two types of emails:

### 1. Business Notification Email
- **To**: Your business email (SMTP_TO_EMAIL)
- **From**: Your SMTP email address
- **Reply-To**: Customer's email address
- **Subject**: "New Contact Form Submission - [Service]"
- **Content**: Professional HTML email with all form details

### 2. Customer Confirmation Email (Optional)
- **To**: Customer's email address
- **From**: Your business email
- **Subject**: "Thank you for contacting Visskan Elite Services"
- **Content**: Confirmation message with business details

## Troubleshooting

### Common Issues

1. **"SMTP configuration not available"**
   - Check that all SMTP environment variables are set
   - Ensure no typos in variable names

2. **"Authentication failed"**
   - Verify your email and password are correct
   - For Gmail, ensure you're using an App Password, not your regular password
   - Check if 2FA is enabled (required for Gmail App Passwords)

3. **"Connection timeout"**
   - Verify SMTP_HOST and SMTP_PORT are correct
   - Check if your network/firewall blocks SMTP connections
   - Try different ports (587, 465, 25)

4. **"Rate limit exceeded"**
   - The system limits to 5 submissions per 15 minutes per IP
   - Wait 15 minutes before trying again

### Debug Mode

To enable detailed SMTP logging, add this to your `.env.local`:

```env
DEBUG_SMTP=true
```

## Security Considerations

1. **Never commit `.env.local` to version control**
2. **Use App Passwords instead of regular passwords**
3. **Enable 2FA on your email account**
4. **Consider using environment-specific SMTP settings**

## Production Deployment

For production deployment:

1. **Use a dedicated business email** (not personal Gmail)
2. **Set up proper DNS records** (SPF, DKIM, DMARC)
3. **Consider using a transactional email service** like:
   - SendGrid
   - Mailgun
   - AWS SES
   - Resend

## Rate Limiting

The system includes built-in rate limiting:
- **5 requests per 15 minutes** per IP address
- Helps prevent spam and abuse
- Configurable in the API route

## Monitoring

Monitor email delivery by checking:
- Server logs for "Email sent successfully" messages
- Your email inbox for received notifications
- Email service provider's delivery reports

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Verify your SMTP provider's documentation
3. Test with a simple email client first
4. Check server logs for detailed error messages 