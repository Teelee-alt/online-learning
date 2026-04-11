import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

/**
 * Generate a unique certificate ID
 * Format: CERT-${timestamp}-${alphanumeric}
 * Much more collision-resistant than numeric random
 */
export function generateCertificateId(): string {
  const timestamp = Date.now();
  // Generate random alphanumeric string (more entropy than just numbers)
  const randomPart = Math.random().toString(36).substring(2, 15).toUpperCase();
  return `CERT-${timestamp}-${randomPart}`;
}

/**
 * Check if user already has a verified payment for this course
 */
export async function checkDuplicatePayment(
  userId: string,
  courseId: string,
  certificateType: 'certificate' | 'diploma'
) {
  try {
    const { data, error } = await supabase
      .from('certificate_payments')
      .select('id')
      .eq('user_id', userId)
      .eq('course_id', courseId)
      .eq('certificate_type', certificateType)
      .in('payment_status', ['paid_pending_admin', 'noted', 'certificate_sent']);

    if (error) throw error;
    return data && data.length > 0;
  } catch (error) {
    console.error('Error checking duplicate payment:', error);
    throw error;
  }
}

/**
 * Store payment record in database
 */
export async function storePaymentRecord(paymentData: {
  user_id: string;
  student_name: string;
  email: string;
  course_id: string;
  course_name: string;
  certificate_type: 'certificate' | 'diploma';
  amount: number;
  paypal_order_id: string;
  certificate_id: string;
}) {
  try {
    const { data, error } = await supabase
      .from('certificate_payments')
      .insert([
        {
          ...paymentData,
          payment_status: 'paid_pending_admin',
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) throw error;
    return data?.[0];
  } catch (error) {
    console.error('Error storing payment record:', error);
    throw error;
  }
}

/**
 * Get user's completed courses
 */
export async function getCompletedCourses(userId: string) {
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .select('course_id, progress')
      .eq('user_id', userId)
      .eq('progress', 100);

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching completed courses:', error);
    throw error;
  }
}

/**
 * Get course details by ID
 */
export async function getCourseDetails(courseId: string) {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('id, name, type, description, skills')
      .eq('id', courseId)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching course details:', error);
    throw error;
  }
}

/**
 * Get user's payment records
 */
export async function getUserPayments(userId: string) {
  try {
    const { data, error } = await supabase
      .from('certificate_payments')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching user payments:', error);
    throw error;
  }
}

/**
 * Update payment status
 */
export async function updatePaymentStatus(
  paymentId: string,
  status: 'pending' | 'paid_pending_admin' | 'noted' | 'certificate_sent'
) {
  try {
    const { data, error } = await supabase
      .from('certificate_payments')
      .update({ payment_status: status })
      .eq('id', paymentId)
      .select();

    if (error) throw error;
    return data?.[0];
  } catch (error) {
    console.error('Error updating payment status:', error);
    throw error;
  }
}

/**
 * Get all pending payments for admin
 */
export async function getPendingPayments() {
  try {
    const { data, error } = await supabase
      .from('certificate_payments')
      .select('*')
      .in('payment_status', ['paid_pending_admin', 'noted'])
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching pending payments:', error);
    throw error;
  }
}
