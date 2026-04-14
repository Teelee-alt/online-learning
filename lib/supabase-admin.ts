import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Service role client for admin operations
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

// Regular client for authenticated operations
export const supabase = createClient(
  supabaseUrl,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

// Admin authentication utilities
export async function getAdminUser() {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) return null;
    return user;
  } catch (err) {
    console.error('Error getting admin user:', err);
    return null;
  }
}

export async function isAdminUser(userId: string) {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('is_admin')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error checking admin status:', error);
      return false;
    }

    return data?.is_admin === true;
  } catch (err) {
    console.error('Error in isAdminUser:', err);
    return false;
  }
}

// Payment utilities
export async function getPayments(filter?: {
  status?: string;
  userId?: string;
  startDate?: string;
  endDate?: string;
}) {
  try {
    let query = supabase
      .from('certificate_payments')
      .select('*')
      .order('created_at', { ascending: false });

    if (filter?.status) {
      query = query.eq('payment_status', filter.status);
    }
    if (filter?.userId) {
      query = query.eq('user_id', filter.userId);
    }
    if (filter?.startDate) {
      query = query.gte('created_at', filter.startDate);
    }
    if (filter?.endDate) {
      query = query.lte('created_at', filter.endDate);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error('Error fetching payments:', err);
    return [];
  }
}

export async function markPaymentAsPaid(paymentId: string, adminId: string, notes?: string) {
  try {
    const { error } = await supabase
      .from('payments')
      .update({
        status: 'completed',
        marked_paid_by_admin: adminId,
        marked_paid_at: new Date().toISOString(),
        notes: notes || null,
      })
      .eq('id', paymentId);

    if (error) throw error;

    // Log admin action
    await logAdminAction(adminId, 'mark_payment_paid', 'payments', paymentId, { notes });

    return { success: true };
  } catch (err) {
    console.error('Error marking payment as paid:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

// User utilities
export async function getUsers(filter?: {
  search?: string;
  limit?: number;
  offset?: number;
}) {
  try {
    let query = supabase.auth.admin.listUsers();

    // Note: Supabase Auth doesn't support direct query filtering in the list method
    // We need to fetch all users and filter client-side, or query the profiles table

    const { data: profilesData, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    let users = profilesData || [];

    if (filter?.search) {
      const search = filter.search.toLowerCase();
      users = users.filter(
        (u: any) =>
          u.email?.toLowerCase().includes(search) ||
          u.full_name?.toLowerCase().includes(search)
      );
    }

    if (filter?.limit) {
      const offset = filter?.offset || 0;
      users = users.slice(offset, offset + filter.limit);
    }

    return users;
  } catch (err) {
    console.error('Error fetching users:', err);
    return [];
  }
}

export async function updateUserStatus(userId: string, adminId: string, status: string) {
  try {
    const { error } = await supabase
      .from('profiles')
      .update({ status })
      .eq('id', userId);

    if (error) throw error;

    // Log admin action
    await logAdminAction(adminId, 'update_user_status', 'users', userId, { new_status: status });

    return { success: true };
  } catch (err) {
    console.error('Error updating user status:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

// Institutions/Academia utilities
export async function getInstitutions(filter?: {
  country?: string;
  status?: string;
  limit?: number;
  offset?: number;
}) {
  try {
    let query = supabase
      .from('institutions')
      .select('*')
      .order('created_at', { ascending: false });

    if (filter?.country) {
      query = query.eq('country', filter.country);
    }
    if (filter?.status) {
      query = query.eq('status', filter.status);
    }

    const { data, error } = await query;
    if (error) throw error;

    let institutions = data || [];

    if (filter?.limit) {
      const offset = filter?.offset || 0;
      institutions = institutions.slice(offset, offset + filter.limit);
    }

    return institutions;
  } catch (err) {
    console.error('Error fetching institutions:', err);
    return [];
  }
}

export async function createInstitution(adminId: string, data: {
  name: string;
  country: string;
  city: string;
  contact_email: string;
  contact_phone?: string;
  address?: string;
  principal_name?: string;
  principal_email?: string;
}) {
  try {
    const { data: institution, error } = await supabase
      .from('institutions')
      .insert([data])
      .select()
      .single();

    if (error) throw error;

    // Log admin action
    await logAdminAction(adminId, 'create_institution', 'institutions', institution.id, data);

    return { success: true, data: institution };
  } catch (err) {
    console.error('Error creating institution:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

// Notifications utilities
export async function sendNotification(adminId: string, notification: {
  user_id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  action_url?: string;
}) {
  try {
    const { error } = await supabase
      .from('notifications')
      .insert([notification]);

    if (error) throw error;

    // Log admin action
    await logAdminAction(adminId, 'send_notification', 'notifications', notification.user_id, {
      title: notification.title,
      type: notification.type,
    });

    return { success: true };
  } catch (err) {
    console.error('Error sending notification:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

export async function getNotifications(userId: string, unreadOnly?: boolean) {
  try {
    let query = supabase
      .from('notifications')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (unreadOnly) {
      query = query.eq('read', false);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error('Error fetching notifications:', err);
    return [];
  }
}

export async function markNotificationAsRead(notificationId: string) {
  try {
    const { error } = await supabase
      .from('notifications')
      .update({
        read: true,
        read_at: new Date().toISOString(),
      })
      .eq('id', notificationId);

    if (error) throw error;
    return { success: true };
  } catch (err) {
    console.error('Error marking notification as read:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

// Agreement/Legal utilities
export async function recordAgreement(userId: string, agreementType: string, ipAddress?: string, userAgent?: string) {
  try {
    const { error } = await supabase
      .from('agreements')
      .insert([{
        user_id: userId,
        agreement_type: agreementType,
        ip_address: ipAddress,
        user_agent: userAgent,
      }]);

    if (error) throw error;
    return { success: true };
  } catch (err) {
    console.error('Error recording agreement:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

export async function getUserAgreements(userId: string) {
  try {
    const { data, error } = await supabase
      .from('agreements')
      .select('*')
      .eq('user_id', userId)
      .order('agreed_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error('Error fetching agreements:', err);
    return [];
  }
}

// Audit logging utility
export async function logAdminAction(
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
    const { error } = await supabase
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

    if (error) {
      console.error('Error logging admin action:', error);
    }
  } catch (err) {
    console.error('Error in logAdminAction:', err);
  }
}

// Analytics utilities
export async function getAnalytics() {
  try {
    const [users, payments, institutions] = await Promise.all([
      supabase.from('profiles').select('id', { count: 'exact' }),
      supabase.from('certificate_payments').select('amount', { count: 'exact' }),
      supabase.from('institutions').select('id', { count: 'exact' }),
    ]);

    return {
      totalUsers: users.count || 0,
      totalPayments: payments.count || 0,
      totalInstitutions: institutions.count || 0,
      totalRevenue: payments.data?.reduce((sum, p) => sum + (p.amount || 0), 0) || 0,
    };
  } catch (err) {
    console.error('Error fetching analytics:', err);
    return {
      totalUsers: 0,
      totalPayments: 0,
      totalInstitutions: 0,
      totalRevenue: 0,
    };
  }
}

export async function getPaymentAnalytics(startDate?: string, endDate?: string) {
  try {
    let query = supabase
      .from('certificate_payments')
      .select('payment_method, status, amount, created_at');

    if (startDate) {
      query = query.gte('created_at', startDate);
    }
    if (endDate) {
      query = query.lte('created_at', endDate);
    }

    const { data, error } = await query;
    if (error) throw error;

    // Group by payment method
    const byMethod: { [key: string]: number } = {};
    const byStatus: { [key: string]: number } = {};

    (data || []).forEach((payment: any) => {
      byMethod[payment.payment_method] = (byMethod[payment.payment_method] || 0) + payment.amount;
      byStatus[payment.status] = (byStatus[payment.status] || 0) + 1;
    });

    return { byMethod, byStatus, totalAmount: data?.reduce((sum, p) => sum + p.amount, 0) || 0 };
  } catch (err) {
    console.error('Error fetching payment analytics:', err);
    return { byMethod: {}, byStatus: {}, totalAmount: 0 };
  }
}
