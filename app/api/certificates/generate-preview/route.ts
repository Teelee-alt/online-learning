import { NextRequest, NextResponse } from 'next/server'
import { generateCertificateHTML } from '@/lib/certificate-generator'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      studentName,
      courseName,
      certificateType = 'certificate',
      completionDate,
      certificateId,
      skills = '',
    } = body

    // Validate required fields
    if (!studentName || !courseName) {
      return NextResponse.json(
        { error: 'Missing required fields: studentName, courseName' },
        { status: 400 }
      )
    }

    // Generate HTML for the certificate
    const html = generateCertificateHTML({
      studentName,
      courseName,
      certificateType,
      completionDate: completionDate || new Date().toISOString().split('T')[0],
      certificateId: certificateId || `CERT-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      skillsList: skills ? skills.split(',').map((s: string) => s.trim()) : [],
    })

    // Return HTML as response for preview
    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    })
  } catch (error) {
    console.error('[Certificate Preview] Error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to generate preview' },
      { status: 500 }
    )
  }
}
