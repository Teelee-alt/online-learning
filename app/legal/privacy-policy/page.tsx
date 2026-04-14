import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-blue-200/30 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/legal" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-medium">Back</span>
            </Link>
            <h1 className="text-2xl font-bold gradient-text">Privacy Policy</h1>
            <div className="w-12" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-md p-8 border border-blue-100">
            <p className="text-sm text-gray-600 mb-8">
              <strong>Last Updated:</strong> April 15, 2026
            </p>

            <h2 className="text-3xl font-bold text-blue-900 mt-8 mb-4">Privacy Policy</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Edusanna (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or &quot;Company&quot;) operates the Edusanna platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and related services (collectively, the &quot;Services&quot;).
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">1. Information We Collect</h3>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-2">1.1 Information You Provide Directly</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Account registration information (name, email, password)</li>
              <li>Profile information (educational background, institution details)</li>
              <li>Payment information (processed securely through Stripe)</li>
              <li>Communications with our support team</li>
              <li>Content you create, upload, or submit</li>
            </ul>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-2">1.2 Information Collected Automatically</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Device information (type, OS, browser)</li>
              <li>Usage data (pages visited, time spent, interactions)</li>
              <li>IP address and general location data</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">2. How We Use Your Information</h3>

            <p className="text-gray-700 leading-relaxed mb-4">We use the information we collect for the following purposes:</p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Provide and maintain our Services</li>
              <li>Process your transactions and send related information</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Analyze usage trends to improve our Services</li>
              <li>Comply with legal obligations</li>
              <li>Detect and prevent fraudulent activity</li>
              <li>Personalize your experience</li>
            </ul>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">3. Sharing Your Information</h3>

            <p className="text-gray-700 leading-relaxed mb-4">We do not sell your personal information. We may share your information in the following circumstances:</p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li><strong>Service Providers:</strong> With vendors who assist in operating our Services</li>
              <li><strong>Legal Requirements:</strong> When required by law or in response to legal process</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or asset sale</li>
              <li><strong>With Your Consent:</strong> For any other purpose with your explicit consent</li>
              <li><strong>Aggregated Data:</strong> Non-identifying, aggregated data may be shared publicly</li>
            </ul>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">4. Data Security</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              We implement comprehensive security measures to protect your information, including encryption, secure authentication, and regular security audits. However, no method of transmission over the internet is completely secure. While we strive to protect your personal information, we cannot guarantee absolute security.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">5. Your Privacy Rights</h3>

            <p className="text-gray-700 leading-relaxed mb-4">Depending on your location, you may have the following rights:</p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li><strong>Access:</strong> The right to access your personal information</li>
              <li><strong>Correction:</strong> The right to correct inaccurate data</li>
              <li><strong>Deletion:</strong> The right to request deletion (subject to legal holds)</li>
              <li><strong>Portability:</strong> The right to receive your data in a portable format</li>
              <li><strong>Opt-Out:</strong> The right to opt-out of certain data processing</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">
              To exercise any of these rights, please contact us at <a href="mailto:privacy@edusanna.com" className="text-blue-600 hover:text-blue-700">privacy@edusanna.com</a>.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">6. Cookies and Tracking Technologies</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience. You can control cookie settings in your browser preferences. Note that disabling cookies may affect functionality.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">7. Retention of Information</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal information for as long as necessary to provide our Services and comply with legal obligations. You may request deletion of your data at any time, subject to applicable law.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">8. Children's Privacy</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Our Services are not intended for users under 13 years old. We do not knowingly collect information from children under 13. If we become aware of such collection, we will take steps to delete the information immediately.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">9. Third-Party Links</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Our Services may contain links to third-party websites. This Privacy Policy does not apply to external sites, and we are not responsible for their privacy practices.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">10. International Data Transfers</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country. By using our Services, you consent to such transfers.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">11. Contact Us</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
              <p className="text-gray-900 font-semibold">Edusanna Privacy Team</p>
              <p className="text-gray-700">Email: <a href="mailto:privacy@edusanna.com" className="text-blue-600 hover:text-blue-700">privacy@edusanna.com</a></p>
              <p className="text-gray-700">Address: Harare, Zimbabwe</p>
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">12. Changes to This Policy</h3>

            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date. Your continued use of our Services following the posting of changes constitutes your acceptance of the updated policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
