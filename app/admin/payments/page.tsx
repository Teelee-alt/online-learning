'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Eye, Download, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

interface Payment {
  id: string;
  student_name: string;
  email: string;
  course_name: string;
  certificate_type: 'certificate' | 'diploma';
  amount: number;
  certificate_id: string;
  payment_status: 'pending' | 'paid_pending_admin' | 'noted' | 'certificate_sent';
  created_at: string;
  paypal_order_id: string;
}

export default function AdminPaymentsPage() {
  const router = useRouter();
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState<string | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);

  // Load payments
  useEffect(() => {
    async function loadPayments() {
      try {
        // Check if user is admin
        const {
          data: { user },
          error: authError,
        } = await supabase.auth.getUser();

        if (authError || !user) {
          router.push('/login');
          return;
        }

        // Check admin role - look for admin flag in user metadata
        const isAdmin = user.user_metadata?.is_admin === true || 
                       user.user_metadata?.role === 'admin' ||
                       user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL;

        if (!isAdmin) {
          console.warn('[Admin] Unauthorized access attempt:', user.email);
          router.push('/unauthorized');
          return;
        }
        const { data, error: fetchError } = await supabase
          .from('certificate_payments')
          .select('*')
          .in('payment_status', ['paid_pending_admin', 'noted'])
          .order('created_at', { ascending: false });

        if (fetchError) throw fetchError;

        setPayments((data || []) as Payment[]);
        setLoading(false);
      } catch (err) {
        console.error('Error loading payments:', err);
        setError('Failed to load payments');
        setLoading(false);
      }
    }

    loadPayments();
  }, [router]);

  // Update payment status
  async function updateStatus(
    paymentId: string,
    newStatus: 'noted' | 'certificate_sent'
  ) {
    try {
      setUpdating(paymentId);

      const { error: updateError } = await supabase
        .from('certificate_payments')
        .update({ payment_status: newStatus })
        .eq('id', paymentId);

      if (updateError) throw updateError;

      // Update local state
      setPayments(
        payments.map((p) =>
          p.id === paymentId ? { ...p, payment_status: newStatus } : p
        )
      );

      setUpdating(null);
    } catch (err) {
      console.error('Error updating status:', err);
      setError('Failed to update payment status');
      setUpdating(null);
    }
  }

  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid_pending_admin':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'noted':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'certificate_sent':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'noted':
        return <CheckCircle className="w-4 h-4" />;
      case 'certificate_sent':
        return <Download className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <Card className="glass-card-light shadow-lg border-blue-100">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin mx-auto mb-4"></div>
              <p className="text-blue-700 font-medium">Loading payments...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link href="/user-dashboard">
            <Button
              variant="ghost"
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            Payment Management
          </h1>
          <p className="text-blue-700">
            Review and process certificate/diploma payments
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <Card className="bg-red-50 border-red-200 mb-6">
            <CardContent className="p-4">
              <p className="text-red-800 font-medium">{error}</p>
            </CardContent>
          </Card>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="glass-card-light border-blue-100">
            <CardContent className="p-6">
              <p className="text-blue-600 font-medium text-sm">Total Payments</p>
              <p className="text-3xl font-bold text-blue-900 mt-2">
                {payments.length}
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card-light border-blue-100">
            <CardContent className="p-6">
              <p className="text-yellow-600 font-medium text-sm">
                Pending Review
              </p>
              <p className="text-3xl font-bold text-yellow-900 mt-2">
                {payments.filter((p) => p.payment_status === 'paid_pending_admin')
                  .length}
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card-light border-blue-100">
            <CardContent className="p-6">
              <p className="text-blue-600 font-medium text-sm">Reviewed</p>
              <p className="text-3xl font-bold text-blue-900 mt-2">
                {payments.filter((p) => p.payment_status === 'noted').length}
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card-light border-blue-100">
            <CardContent className="p-6">
              <p className="text-green-600 font-medium text-sm">Sent</p>
              <p className="text-3xl font-bold text-green-900 mt-2">
                {payments.filter((p) => p.payment_status === 'certificate_sent')
                  .length}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Payments Table */}
        <Card className="glass-card-light shadow-lg border-blue-100">
          <CardHeader className="border-b border-blue-100">
            <CardTitle className="text-blue-900">Payment Records</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {payments.length === 0 ? (
              <div className="p-8 text-center">
                <p className="text-blue-700 font-medium">No pending payments</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-blue-100 bg-blue-50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">
                        Student
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">
                        Email
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">
                        Course
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">
                        Type
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">
                        Amount
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((payment) => (
                      <tr
                        key={payment.id}
                        className="border-b border-blue-100 hover:bg-blue-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-blue-900">
                          {payment.student_name}
                        </td>
                        <td className="px-6 py-4 text-sm text-blue-700">
                          {payment.email}
                        </td>
                        <td className="px-6 py-4 text-sm text-blue-700">
                          {payment.course_name}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                              payment.certificate_type === 'diploma'
                                ? 'bg-purple-100 text-purple-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {payment.certificate_type === 'diploma'
                              ? '🎓 Diploma'
                              : '📜 Certificate'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-blue-900">
                          ${payment.amount}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span
                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                              payment.payment_status
                            )}`}
                          >
                            {getStatusIcon(payment.payment_status)}
                            {payment.payment_status === 'paid_pending_admin'
                              ? 'Pending'
                              : payment.payment_status === 'noted'
                              ? 'Reviewed'
                              : 'Sent'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-blue-200 text-blue-600 hover:bg-blue-50"
                                  onClick={() => setSelectedPayment(payment)}
                                >
                                  <Eye className="w-4 h-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle className="text-blue-900">
                                    Payment Details
                                  </DialogTitle>
                                </DialogHeader>
                                {selectedPayment && (
                                  <div className="space-y-4">
                                    <div>
                                      <p className="text-sm text-blue-600 font-medium">
                                        Certificate ID
                                      </p>
                                      <p className="text-lg font-mono font-bold text-blue-900">
                                        {selectedPayment.certificate_id}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-blue-600 font-medium">
                                        PayPal Order ID
                                      </p>
                                      <p className="font-mono text-sm text-blue-800">
                                        {selectedPayment.paypal_order_id}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-blue-600 font-medium">
                                        Date Paid
                                      </p>
                                      <p className="text-blue-900">
                                        {new Date(
                                          selectedPayment.created_at
                                        ).toLocaleDateString()}
                                      </p>
                                    </div>
                                  </div>
                                )}
                              </DialogContent>
                            </Dialog>

                            {payment.payment_status === 'paid_pending_admin' && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-yellow-200 text-yellow-600 hover:bg-yellow-50"
                                disabled={updating === payment.id}
                                onClick={() =>
                                  updateStatus(payment.id, 'noted')
                                }
                              >
                                {updating === payment.id
                                  ? 'Processing...'
                                  : 'Mark Noted'}
                              </Button>
                            )}

                            {payment.payment_status === 'noted' && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-green-200 text-green-600 hover:bg-green-50"
                                disabled={updating === payment.id}
                                onClick={() =>
                                  updateStatus(payment.id, 'certificate_sent')
                                }
                              >
                                {updating === payment.id
                                  ? 'Processing...'
                                  : 'Mark Sent'}
                              </Button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
