import { NextRequest, NextResponse } from 'next/server';
import { verifyTwoFACode } from '@/lib/admin-auth';
import { supabase } from '@/lib/supabase-admin';

export async function POST(request: NextRequest) {
  try {
    const { code, sessionToken } = await request.json();

    if (!code || !sessionToken) {
      return NextResponse.json(
        { error: 'Code and session token are required' },
        { status: 400 }
      );
    }

    // Verify session token and get admin ID
    const { data: sessionData, error: sessionError } = await supabase
      .from('admin_sessions')
      .select('admin_id, is_active')
      .eq('session_token', sessionToken)
      .single();

    if (sessionError || !sessionData || !sessionData.is_active) {
      return NextResponse.json(
        { error: 'Invalid or expired session' },
        { status: 401 }
      );
    }

    const adminId = sessionData.admin_id;

    // Verify 2FA code
    const result = await verifyTwoFACode(adminId, code);

    if (!result.success) {
      // Log failed 2FA attempt
      try {
        await supabase
          .from('admin_action_logs')
          .insert([{
            admin_id: adminId,
            action: 'failed_2fa_verification',
            resource_type: 'admin_sessions',
            resource_id: sessionToken,
            status: 'failed',
          }]);
      } catch (err) {
        console.error('Error logging failed 2FA:', err);
      }

      return NextResponse.json(
        { error: result.error || 'Invalid 2FA code' },
        { status: 401 }
      );
    }

    // Update session to mark 2FA verified
    await supabase
      .from('admin_sessions')
      .update({
        is_active: true,
      })
      .eq('session_token', sessionToken);

    // Log successful 2FA verification
    try {
      await supabase
        .from('admin_action_logs')
        .insert([{
          admin_id: adminId,
          action: 'successful_2fa_verification',
          resource_type: 'admin_sessions',
          resource_id: sessionToken,
          status: 'success',
        }]);
    } catch (err) {
      console.error('Error logging 2FA success:', err);
    }

    return NextResponse.json(
      {
        success: true,
        message: '2FA verification successful',
        adminId,
      },
      {
        status: 200,
        headers: {
          'Set-Cookie': `admin2FAVerified=true; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=86400`,
        },
      }
    );
  } catch (error) {
    console.error('[2FA Verification Error]', error);
    return NextResponse.json(
      {
        error: 'An error occurred during 2FA verification',
        details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : String(error)) : undefined,
      },
      { status: 500 }
    );
  }
}
