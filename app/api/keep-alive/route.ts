import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(request: NextRequest) {
  try {
    // Verify cron secret key
    const cronSecret = request.headers.get('x-cron-key')
    if (cronSecret !== process.env.CRON_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Initialize Supabase client
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )

    // Run lightweight query to keep connection alive
    const { data, error } = await supabase
      .from('users')
      .select('id')
      .limit(1)

    if (error) {
      console.error('[Keep-Alive] Database query error:', error)
      return NextResponse.json(
        { status: 'error', message: error.message },
        { status: 500 }
      )
    }

    // Log successful keep-alive ping
    console.log('[Keep-Alive] Ping received at:', new Date().toISOString())

    return NextResponse.json({
      status: 'alive',
      timestamp: new Date().toISOString(),
      database: 'connected',
    })
  } catch (error) {
    console.error('[Keep-Alive] Error:', error)
    return NextResponse.json(
      {
        status: 'error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

// Optional: GET request with cache control to prevent caching
export const revalidate = 0
