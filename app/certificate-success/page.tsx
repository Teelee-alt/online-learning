import { Suspense } from 'react';
import CertificateSuccessClient from './CertificateSuccessClient';

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-32 pb-20 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-blue-700">Loading your certificate details...</p>
      </div>
    </div>
  );
}

export default function CertificateSuccessPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <CertificateSuccessClient />
    </Suspense>
  );
}
