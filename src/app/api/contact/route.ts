import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/email/sendEmail'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'subject', 'message']
    for (const field of requiredFields) {
      if (!formData[field]) {
        return NextResponse.json(
          { success: false, message: `${field} is required` },
          { status: 400 }
        )
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Send email
    const result = await sendContactEmail(formData)

    if (result.success) {
      return NextResponse.json(
        { success: true, message: result.message },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'An error occurred processing your request' },
      { status: 500 }
    )
  }
}