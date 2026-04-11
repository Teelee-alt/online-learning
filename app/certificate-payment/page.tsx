'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

declare global {
  interface Window {
    paypal: any;
  }
}

interface CompletedCourse {
  course_id: string;
  course_name: string;
  progress: number;
}

interface User {
  id: string;
  email: string;
  user_metadata?: {
    full_name?: string;
  };
}

export default function CertificatePaymentPage() {
  const router = useRouter();
  const paypalButtonsRef = useRef<HTMLDivElement>(null);
  const [user, setUser] = useState<User | null>(null);
  const [completedCourses, setCompletedCourses] = useState<CompletedCourse[]>(
    []
  );
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [certificateType, setCertificateType] = useState<'certificate' | 'diploma'>('certificate');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paypalLoaded, setPaypalLoaded] = useState(false);
  const [processing, setProcessing] = useState(false);
  
  // Validate environment variables on mount
  const [envError, setEnvError] = useState<string | null>(null);
  
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID) {
      setEnvError('PayPal configuration is missing. Please contact support.');
      setLoading(false);
    }
  }, []);

  const certificatePrice = 12;
  const diplomaPrice = 18;
  const amount = certificateType === 'diploma' ? diplomaPrice : certificatePrice;

  // Load user and completed courses
  useEffect(() => {
    async function loadUserAndCourses() {
      try {
        const {
          data: { user: authUser },
          error: authError,
        } = await supabase.auth.getUser();

        if (authError || !authUser) {
          router.push('/login');
          return;
        }

        setUser(authUser as User);

        // Fetch completed courses
        const { data: completedData, error: completedError } = await supabase
          .from('user_progress')
          .select('course_id, progress')
          .eq('user_id', authUser.id)
          .eq('progress', 100);

        if (completedError) throw completedError;

        // Fetch course names
        if (completedData && completedData.length > 0) {
          const courseIds = completedData.map((c) => c.course_id);
          const { data: courseData, error: courseError } = await supabase
            .from('courses')
            .select('id, name')
            .in('id', courseIds);

          if (courseError) throw courseError;

          const coursesWithNames = completedData.map((c) => {
            const course = courseData?.find((cd) => cd.id === c.course_id);
            return {
              course_id: c.course_id,
              course_name: course?.name || 'Unknown Course',
              progress: c.progress,
            };
          });

          setCompletedCourses(coursesWithNames);

          // Auto-select if only one course
          if (coursesWithNames.length === 1) {
            setSelectedCourse(coursesWithNames[0].course_id);
          }
        }

        setLoading(false);
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Failed to load your courses. Please try again.');
        setLoading(false);
      }
    }

    loadUserAndCourses();
  }, [router]);

  // Load PayPal SDK
  useEffect(() => {
    const scriptId = 'paypal-script';
    if (!document.getElementById(scriptId) && !paypalLoaded) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=USD`;
      script.async = true;
      script.onload = () => setPaypalLoaded(true);
      script.onerror = () => setError('Failed to load PayPal SDK');
      document.body.appendChild(script);
    } else if (paypalLoaded) {
      setPaypalLoaded(true);
    }
  }, [paypalLoaded]);

  // Render PayPal buttons
  useEffect(() => {
    if (!paypalLoaded || !selectedCourse || !paypalButtonsRef.current || processing) {
      return;
    }

    // Clear previous buttons
    paypalButtonsRef.current.innerHTML = '';

    const selectedCourseData = completedCourses.find(
      (c) => c.course_id === selectedCourse
    );

    if (!selectedCourseData) return;

    window.paypal
      .Buttons({
        createOrder: async (data: any, actions: any) => {
          try {
            const response = await fetch('/api/paypal/create-order', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                amount,
                courseId: selectedCourse,
                courseName: selectedCourseData.course_name,
                certificateType,
              }),
            });

            if (!response.ok) {
              const errorData = await response.json();
              setError(errorData.error || 'Failed to create order');
              throw new Error('Failed to create order');
            }

            const { orderId } = await response.json();
            return orderId;
          } catch (err) {
            setError(
              err instanceof Error ? err.message : 'Failed to create order'
            );
            throw err;
          }
        },

        onApprove: async (data: any, actions: any) => {
          try {
            setProcessing(true);
            setError(null);

            const response = await fetch('/api/paypal/capture-order', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                orderId: data.orderID,
                userId: user?.id,
                studentName: user?.user_metadata?.full_name || user?.email || 'Student',
                email: user?.email,
                courseId: selectedCourse,
                courseName: selectedCourseData.course_name,
                certificateType,
                amount,
              }),
            });

            const responseData = await response.json();

            if (!response.ok) {
              setError(responseData.error || 'Payment failed');
              setProcessing(false);
              return;
            }

            // Redirect to success page
            router.push(
              `/certificate-success?certificateId=${responseData.certificateId}&courseId=${selectedCourse}&type=${certificateType}`
            );
          } catch (err) {
            console.error('Capture error:', err);
            setError(
              err instanceof Error ? err.message : 'Payment processing failed'
            );
            setProcessing(false);
          }
        },

        onError: (err: any) => {
          console.error('PayPal error:', err);
          setError('Payment error. Please try again.');
          setProcessing(false);
        },

        onCancel: () => {
          setError('Payment cancelled');
          setProcessing(false);
        },
      })
      .render(paypalButtonsRef.current);
  }, [paypalLoaded, selectedCourse, certificateType, completedCourses, amount, user, processing]);

  if (envError) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="glass-card-light shadow-lg border-red-100">
            <CardContent className="p-8 text-center">
              <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <p className="text-red-700 font-medium">{envError}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="glass-card-light shadow-lg border-blue-100">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin mx-auto mb-4"></div>
              <p className="text-blue-700 font-medium">Loading your courses...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link href="/user-dashboard">
            <Button
              variant="ghost"
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-4xl font-bold gradient-text mb-2">
            Get Your Certificate
          </h1>
          <p className="text-blue-700 text-lg">
            Complete your achievement with an official certificate or diploma
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <Card className="bg-red-50 border-red-200 mb-6">
            <CardContent className="p-4 flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-red-800 font-medium">Error</p>
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* No Courses Message */}
        {completedCourses.length === 0 && (
          <Card className="glass-card-light shadow-lg border-blue-100 mb-6">
            <CardContent className="p-8 text-center">
              <AlertCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                No Completed Courses
              </h3>
              <p className="text-blue-700 mb-6">
                You need to complete a course first before you can purchase a
                certificate.
              </p>
              <Link href="/courses">
                <Button className="premium-button">Browse Courses</Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* Payment Form */}
        {completedCourses.length > 0 && (
          <Card className="glass-card-light shadow-lg border-blue-100">
            <CardHeader className="border-b border-blue-100">
              <CardTitle className="text-blue-900">Payment Details</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              {/* Course Selection */}
              <div>
                <Label className="text-blue-900 font-semibold mb-2 block">
                  Select Completed Course
                </Label>
                <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                  <SelectTrigger className="h-12 border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Choose a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {completedCourses.map((course) => (
                      <SelectItem
                        key={course.course_id}
                        value={course.course_id}
                      >
                        {course.course_name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Certificate Type Selection */}
              <div>
                <Label className="text-blue-900 font-semibold mb-4 block">
                  Choose Credential Type
                </Label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setCertificateType('certificate')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      certificateType === 'certificate'
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-blue-100 hover:border-blue-300'
                    }`}
                  >
                    <CheckCircle
                      className={`w-6 h-6 mx-auto mb-2 ${
                        certificateType === 'certificate'
                          ? 'text-blue-600'
                          : 'text-blue-400'
                      }`}
                    />
                    <p className="font-semibold text-blue-900">Certificate</p>
                    <p className="text-lg font-bold text-blue-600">
                      ${certificatePrice}
                    </p>
                  </button>

                  <button
                    onClick={() => setCertificateType('diploma')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      certificateType === 'diploma'
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-blue-100 hover:border-blue-300'
                    }`}
                  >
                    <CheckCircle
                      className={`w-6 h-6 mx-auto mb-2 ${
                        certificateType === 'diploma'
                          ? 'text-purple-600'
                          : 'text-blue-400'
                      }`}
                    />
                    <p className="font-semibold text-blue-900">Diploma</p>
                    <p className="text-lg font-bold text-purple-600">
                      ${diplomaPrice}
                    </p>
                  </button>
                </div>
              </div>

              {/* Price Summary */}
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-100">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-blue-700 font-medium">
                      {certificateType === 'diploma' ? 'Diploma' : 'Certificate'}
                    </span>
                    <span className="text-2xl font-bold text-blue-900">
                      ${amount}
                    </span>
                  </div>
                  <div className="w-full h-px bg-blue-200 mb-4"></div>
                  <div className="text-sm text-blue-700">
                    <p className="mb-2">
                      This is a one-time payment for your credential.
                    </p>
                    <p>
                      Your certificate will be processed and sent within 24 hours.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* PayPal Buttons */}
              <div>
                <Label className="text-blue-900 font-semibold mb-4 block">
                  Select Payment Method
                </Label>
                <div
                  ref={paypalButtonsRef}
                  className="paypal-buttons"
                  id="paypal-button-container"
                ></div>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-blue-100">
                <div className="text-center">
                  <p className="text-sm text-blue-700 font-medium">
                    Secure Payment
                  </p>
                  <p className="text-xs text-blue-500">Powered by PayPal</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
