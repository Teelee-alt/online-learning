'use client';

import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Home, Download } from 'lucide-react';
import Link from 'next/link';

export default function CertificateSuccessClient() {
  const searchParams = useSearchParams();
  const certificateId = searchParams.get('certificateId');
  const courseId = searchParams.get('courseId');
  const type = searchParams.get('type');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4">
        {/* Success Card */}
        <Card className="glass-card-light shadow-lg border-blue-100">
          <CardContent className="p-12 text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-blue-900 mb-2">
              Payment Successful!
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-blue-700 mb-8">
              Your {type === 'diploma' ? 'diploma' : 'certificate'} is being
              processed.
            </p>

            {/* Details Box */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-100 mb-8">
              <CardContent className="p-6 space-y-4">
                <div className="text-left">
                  <p className="text-sm text-blue-600 font-medium mb-1">
                    Certificate ID
                  </p>
                  <p className="text-lg font-mono font-bold text-blue-900">
                    {certificateId || 'Processing...'}
                  </p>
                </div>
                <div className="w-full h-px bg-blue-200"></div>
                <div className="text-left">
                  <p className="text-sm text-blue-600 font-medium mb-1">
                    Status
                  </p>
                  <p className="text-blue-900 font-semibold">
                    Pending Admin Review
                  </p>
                  <p className="text-sm text-blue-600 mt-1">
                    Your credential will be sent within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Information */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-left">
              <h3 className="font-semibold text-blue-900 mb-3">What Happens Next?</h3>
              <ol className="space-y-2 text-blue-700">
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">1.</span>
                  <span>Admin will review and verify your payment</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">2.</span>
                  <span>Your {type === 'diploma' ? 'diploma' : 'certificate'} PDF will be generated</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">3.</span>
                  <span>You'll receive an email with your credential</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">4.</span>
                  <span>Download and share your achievement!</span>
                </li>
              </ol>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/user-dashboard">
                <Button className="premium-button w-full sm:w-auto">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <Link href="/courses">
                <Button
                  variant="outline"
                  className="border-blue-200 text-blue-600 hover:bg-blue-50 w-full sm:w-auto"
                >
                  Explore More Courses
                </Button>
              </Link>
            </div>

            {/* Support Note */}
            <div className="mt-12 pt-8 border-t border-blue-200">
              <p className="text-sm text-blue-600 mb-4">
                Need help? Check your email for payment confirmation and certificate details.
              </p>
              <p className="text-xs text-blue-500">
                Certificate ID: {certificateId}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
