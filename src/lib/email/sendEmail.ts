interface EmailData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  subject: string
  message: string
}

interface BrevoEmailRequest {
  sender: {
    name: string
    email: string
  }
  to: Array<{
    email: string
    name: string
  }>
  subject: string
  htmlContent: string
  replyTo: {
    email: string
    name: string
  }
}

export async function sendContactEmail(formData: EmailData): Promise<{ success: boolean; message: string }> {
  const apiKey = process.env.BREVO_SMTP_KEY
  const recipientEmail = process.env.NORA_CONTACT_EMAIL || 'admin@norachambers.in'

  if (!apiKey) {
    console.error('Brevo API key not found')
    return { success: false, message: 'Email service configuration error' }
  }

  // Create HTML email content
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #00a79d;">New Contact Form Submission</h2>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #115960; margin-top: 0;">Contact Details</h3>
        
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
        ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
        <p><strong>Subject:</strong> ${getSubjectLabel(formData.subject)}</p>
      </div>
      
      <div style="background-color: #edf1f1; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #115960; margin-top: 0;">Message</h3>
        <p style="white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
      </div>
      
      <hr style="border: 1px solid #e0e0e0; margin: 30px 0;">
      
      <p style="font-size: 12px; color: #666;">
        This email was sent from the contact form on norachambers.in
      </p>
    </div>
  `

  const emailRequest: BrevoEmailRequest = {
    sender: {
      name: 'Nora Chambers Website',
      email: 'noreply@norachambers.in'
    },
    to: [
      {
        email: recipientEmail,
        name: 'Nora Chambers'
      }
    ],
    subject: `[Website Contact] ${getSubjectLabel(formData.subject)} - ${formData.firstName} ${formData.lastName}`,
    htmlContent,
    replyTo: {
      email: formData.email,
      name: `${formData.firstName} ${formData.lastName}`
    }
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify(emailRequest)
    })

    const data = await response.json()

    if (response.ok) {
      console.log('Email sent successfully:', data)
      return { 
        success: true, 
        message: 'Thank you for contacting Nora Chambers. Your message has been received and our team will review it shortly. We typically respond within 24-48 hours during business days. For urgent legal matters, please call our office directly at +91 11 4107 5982 during business hours (Monday-Saturday, 10:30 AM - 7:30 PM IST).' 
      }
    } else {
      console.error('Failed to send email:', data)
      return { success: false, message: 'Failed to send message. Please try again.' }
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, message: 'An error occurred. Please try again later.' }
  }
}

function getSubjectLabel(subject: string): string {
  const subjectMap: Record<string, string> = {
    'arbitration': 'Arbitration & Dispute Resolution',
    'corporate': 'Corporate Advisory',
    'tax': 'Direct Tax & Economic Offences',
    'securities': 'Securities Law',
    'insolvency': 'Corporate Insolvency',
    'ip': 'Technology & IP',
    'general': 'General Inquiry'
  }
  
  return subjectMap[subject] || 'General Inquiry'
}