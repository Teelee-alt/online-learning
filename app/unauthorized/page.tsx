import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, Home } from 'lucide-react';
import Link from 'next/link';

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4">
        <Card className="glass-card-light shadow-lg border-blue-100">
          <CardContent className="p-12 text-center">
            {/* Error Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-12 h-12 text-red-600" />
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-blue-900 mb-2">
              Access Denied
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-blue-700 mb-8">
              You do not have permission to access this page.
            </p>

            {/* Details */}
            <Card className="bg-orange-50 border-orange-200 mb-8">
              <CardContent className="p-6 text-left">
                <p className="text-orange-800">
                  Only administrators can access the payments dashboard. If you believe you should have access, please contact the administrator.
                </p>
              </CardContent>
            </Card>

            {/* Button */}
            <Link href="/">
              <Button className="premium-button">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
