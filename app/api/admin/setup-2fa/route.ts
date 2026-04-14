import { NextRequest, NextResponse } from 'next/server';
import { generateTwoFASecret, enableTwoFA } from '@/lib/admin-auth';
import { supabase } from '@/lib/supabase-admin';

export async function GET(request: NextRequest) {
  try {
    // Get admin from session or auth
    const sessionToken = request.cookies.get('adminSession')?.value;
    const authHeader = request.headers.get('authorization');

    let adminId: string | null = null;

    // Try to get from session cookie
    if (sessionToken) {
      const { data, error } = await supabase
        .from('admin_sessions')
        .select('admin_id')
        .eq('session_token', sessionToken)
        .eq('is_active', true)
        .single();

      if (!error && data) {
        adminId = data.admin_id;
      }
    }

    // Try to get from auth header (Bearer token)
    if (!adminId && authHeader?.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      const { data, error } = await supabase
        .from('admin_sessions')
        .select('admin_id')
        .eq('session_token', token)
        .eq('is_active', true)
        .single();

      if (!error && data) {
        adminId = data.admin_id;
      }
    }

    if (!adminId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Generate 2FA secret
    const result = await generateTwoFASecret(adminId);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to generate 2FA secret' },
        { status: 500 }
      );
    }

    // Return secret and backup codes (but not enabled yet)
    // In production, you'd generate a QR code here
    return NextResponse.json({
      success: true,
      secret: result.secret,
      backupCodes: result.backupCodes,
      message: 'Please scan the QR code with your authenticator app and save your backup codes',
    });
  } catch (error) {
    console.error('[2FA Setup Error]', error);
    return NextResponse.json(
      {
        error: 'An error occurred during 2FA setup',
        details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : String(error)) : undefined,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { confirm } = await request.json();

    // Get admin from session or auth
    const sessionToken = request.cookies.get('adminSession')?.value;
    const authHeader = request.headers.get('authorization');

    let adminId: string | null = null;

    // Try to get from session cookie
    if (sessionToken) {
      const { data, error } = await supabase
        .from('admin_sessions')
        .select('admin_id')
        .eq('session_token', sessionToken)
        .eq('is_active', true)
        .single();

      if (!error && data) {
        adminId = data.admin_id;
      }
    }

    // Try to get from auth header
    if (!adminId && authHeader?.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      const { data, error } = await supabase
        .from('admin_sessions')
        .select('admin_id')
        .eq('session_token', token)
        .eq('is_active', true)
        .single();

      if (!error && data) {
        adminId = data.admin_id;
      }
    }

    if (!adminId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    if (confirm !== true) {
      return NextResponse.json(
        { error: 'Please confirm 2FA setup' },
        { status: 400 }
      );
    }

    // Enable 2FA
    const result = await enableTwoFA(adminId);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to enable 2FA' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: '2FA has been successfully enabled',
    });
  } catch (error) {
    console.error('[2FA Confirm Error]', error);
    return NextResponse.json(
      {
        error: 'An error occurred while confirming 2FA',
        details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : String(error)) : undefined,
      },
      { status: 500 }
    );
  }
}
