import { supabase } from './supabase-admin';

// Admin credentials from environment variables (NEVER hardcode)
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'tinasheleev@gmail.com';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '';
const ADMIN_2FA_SECRET = process.env.ADMIN_2FA_SECRET || '';

/**
 * Admin login - validates email and password
 * Password should be hashed using bcrypt in production
 */
export async function validateAdminCredentials(email: string, password: string): Promise<boolean> {
  // In production, use bcrypt.compare(password, ADMIN_PASSWORD_HASH)
  // For now, use a simple validation (NOT RECOMMENDED FOR PRODUCTION)
  
  // Get admin credentials from environment (should be securely stored)
  const envPassword = process.env.ADMIN_PASSWORD || '';
  
  return email === ADMIN_EMAIL && password === envPassword;
}

/**
 * Create or update Supabase user for admin
 */
export async function ensureAdminUser() {
  try {
    // Try to get the admin user
    const { data: { user }, error: getError } = await supabase.auth.getUser();

    if (!getError && user && user.email === ADMIN_EMAIL) {
      return { success: true, user, isNewUser: false };
    }

    // Create admin user if doesn't exist
    // Note: This requires SERVICE_ROLE_KEY to create users without email confirmation
    const { data, error } = await supabase.auth.admin.createUser({
      email: ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD || '',
      email_confirm: true,
      user_metadata: {
        is_admin: true,
        role: 'admin',
      },
    });

    if (error) {
      // User might already exist
      if (error.message.includes('User already registered')) {
        return { success: true, isNewUser: false };
      }
      throw error;
    }

    return { success: true, user: data?.user, isNewUser: true };
  } catch (err) {
    console.error('Error ensuring admin user:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

/**
 * Generate 2FA secret for admin
 */
export async function generateTwoFASecret(adminId: string) {
  try {
    // In production, use 'speakeasy' library to generate TOTP secrets
    // For now, generate a simple secret
    const secret = generateRandomSecret();

    const { data, error } = await supabase
      .from('admin_2fa_secrets')
      .insert([{
        admin_id: adminId,
        secret,
        enabled: false,
        backup_codes: generateBackupCodes(),
      }])
      .select()
      .single();

    if (error) {
      if (error.message.includes('duplicate key')) {
        // Already exists, update it
        const { data: updated, error: updateError } = await supabase
          .from('admin_2fa_secrets')
          .update({
            secret,
            enabled: false,
            backup_codes: generateBackupCodes(),
          })
          .eq('admin_id', adminId)
          .select()
          .single();

        if (updateError) throw updateError;
        return { success: true, secret, backupCodes: updated.backup_codes };
      }
      throw error;
    }

    return { success: true, secret, backupCodes: data.backup_codes };
  } catch (err) {
    console.error('Error generating 2FA secret:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

/**
 * Verify 2FA code
 */
export async function verifyTwoFACode(adminId: string, code: string): Promise<{ success: boolean; error?: string }> {
  try {
    // Get admin's 2FA secret
    const { data: twoFaData, error: fetchError } = await supabase
      .from('admin_2fa_secrets')
      .select('secret, enabled, backup_codes')
      .eq('admin_id', adminId)
      .single();

    if (fetchError || !twoFaData) {
      return { success: false, error: '2FA not configured' };
    }

    if (!twoFaData.enabled) {
      return { success: false, error: '2FA not enabled' };
    }

    // Check if it's a backup code
    if (Array.isArray(twoFaData.backup_codes) && twoFaData.backup_codes.includes(code)) {
      // Backup code used, remove it
      const updatedCodes = twoFaData.backup_codes.filter((c: string) => c !== code);
      await supabase
        .from('admin_2fa_secrets')
        .update({ backup_codes: updatedCodes })
        .eq('admin_id', adminId);

      return { success: true };
    }

    // In production, use speakeasy.totp.verify() to check the code
    // For now, use a simple validation
    // This is a placeholder - replace with actual TOTP verification
    const isValidCode = verifyTOTPCode(twoFaData.secret, code);

    return { success: isValidCode, error: isValidCode ? undefined : 'Invalid 2FA code' };
  } catch (err) {
    console.error('Error verifying 2FA code:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

/**
 * Enable 2FA for admin
 */
export async function enableTwoFA(adminId: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('admin_2fa_secrets')
      .update({ enabled: true })
      .eq('admin_id', adminId);

    if (error) throw error;
    return { success: true };
  } catch (err) {
    console.error('Error enabling 2FA:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

/**
 * Create admin session
 */
export async function createAdminSession(
  adminId: string,
  ipAddress?: string,
  userAgent?: string
): Promise<{ success: boolean; sessionToken?: string; error?: string }> {
  try {
    const sessionToken = generateSessionToken();

    const { data, error } = await supabase
      .from('admin_sessions')
      .insert([{
        admin_id: adminId,
        session_token: sessionToken,
        ip_address: ipAddress,
        user_agent: userAgent,
        is_active: true,
      }])
      .select()
      .single();

    if (error) throw error;

    return { success: true, sessionToken };
  } catch (err) {
    console.error('Error creating admin session:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

/**
 * Verify admin session
 */
export async function verifyAdminSession(sessionToken: string): Promise<{ success: boolean; adminId?: string; error?: string }> {
  try {
    const { data, error } = await supabase
      .from('admin_sessions')
      .select('admin_id, is_active, login_time')
      .eq('session_token', sessionToken)
      .single();

    if (error || !data || !data.is_active) {
      return { success: false, error: 'Invalid or expired session' };
    }

    // Check session age (24 hours)
    const loginTime = new Date(data.login_time);
    const now = new Date();
    const ageHours = (now.getTime() - loginTime.getTime()) / (1000 * 60 * 60);

    if (ageHours > 24) {
      // Invalidate session
      await supabase
        .from('admin_sessions')
        .update({ is_active: false, logout_time: now.toISOString() })
        .eq('session_token', sessionToken);

      return { success: false, error: 'Session expired' };
    }

    return { success: true, adminId: data.admin_id };
  } catch (err) {
    console.error('Error verifying admin session:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

/**
 * End admin session
 */
export async function endAdminSession(sessionToken: string): Promise<{ success: boolean; error?: string }> {
  try {
    const now = new Date();
    const { error } = await supabase
      .from('admin_sessions')
      .update({ is_active: false, logout_time: now.toISOString() })
      .eq('session_token', sessionToken);

    if (error) throw error;
    return { success: true };
  } catch (err) {
    console.error('Error ending admin session:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

// Helper functions

function generateRandomSecret(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  let secret = '';
  for (let i = 0; i < 32; i++) {
    secret += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return secret;
}

function generateBackupCodes(): string[] {
  const codes = [];
  for (let i = 0; i < 10; i++) {
    codes.push(Math.random().toString(36).substring(2, 10).toUpperCase());
  }
  return codes;
}

function generateSessionToken(): string {
  return 'session_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function verifyTOTPCode(secret: string, code: string): boolean {
  // This is a placeholder implementation
  // In production, use speakeasy library:
  // import speakeasy from 'speakeasy';
  // return speakeasy.totp.verify({
  //   secret,
  //   encoding: 'base32',
  //   token: code,
  //   window: 2,
  // });

  // For now, just check if the code has 6 digits
  // Replace with actual TOTP verification in production
  return /^\d{6}$/.test(code);
}
