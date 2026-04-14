import { NextRequest, NextResponse } from 'next/server';
import { validateAdminCredentials, ensureAdminUser, createAdminSession, logAdminAction } from '@/lib/admin-auth';
import { supabase } from '@/lib/supabase-admin';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Validate admin credentials
    const isValid = await validateAdminCredentials(email, password);

    if (!isValid) {
      // Log failed attempt
      console.warn(`[Admin] Failed login attempt for email: ${email}`);
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Get IP address
    const ipAddress =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'unknown';

    // Get user agent
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Ensure admin user exists in Supabase
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      // Try to create/ensure admin user
      const ensureResult = await ensureAdminUser();
      if (!ensureResult.success || !ensureResult.user) {
        return NextResponse.json(
          { error: 'Failed to initialize admin user' },
          { status: 500 }
        );
      }
    }

    const adminId = user?.id || ensureResult.user?.id;

    if (!adminId) {
      return NextResponse.json(
        { error: 'Failed to get admin user ID' },
        { status: 500 }
      );
    }

    // Create session
    const sessionResult = await createAdminSession(adminId, ipAddress, userAgent);

    if (!sessionResult.success) {
      return NextResponse.json(
        { error: 'Failed to create session' },
        { status: 500 }
      );
    }

    // Check if 2FA is enabled
    const { data: twoFaData, error: twoFaError } = await supabase
      .from('admin_2fa_secrets')
      .select('enabled')
      .eq('admin_id', adminId)
      .single();

    const twoFaEnabled = !twoFaError && twoFaData?.enabled === true;

    // Log successful login attempt
    await logAdminAction(
      adminId,
      'admin_login',
      'admin_sessions',
      sessionResult.sessionToken || '',
      { ip: ipAddress, userAgent, twoFaEnabled },
      ipAddress,
      userAgent,
      'success'
    );

    // Return session token and 2FA requirement
    return NextResponse.json(
      {
        success: true,
        sessionToken: sessionResult.sessionToken,
        adminId,
        requiresTwoFA: twoFaEnabled,
        message: twoFaEnabled ? 'Please verify with 2FA' : 'Login successful',
      },
      {
        status: 200,
        headers: {
          'Set-Cookie': `adminSession=${sessionResult.sessionToken}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=86400`,
        },
      }
    );
  } catch (error) {
    console.error('[Admin Login Error]', error);
    return NextResponse.json(
      {
        error: 'An error occurred during login',
        details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : String(error)) : undefined,
      },
      { status: 500 }
    );
  }
}

// Helper function that may have been referenced
async function logAdminAction(
  adminId: string,
  action: string,
  resourceType: string,
  resourceId: string,
  details?: any,
  ipAddress?: string,
  userAgent?: string,
  status: 'success' | 'failed' = 'success'
) {
  try {
    await supabase
      .from('admin_action_logs')
      .insert([{
        admin_id: adminId,
        action,
        resource_type: resourceType,
        resource_id: resourceId,
        details: details ? JSON.stringify(details) : null,
        ip_address: ipAddress,
        user_agent: userAgent,
        status,
      }]);
  } catch (err) {
    console.error('Error logging admin action:', err);
  }
}
