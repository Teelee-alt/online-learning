import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TermsOfServicePage() {
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
            <h1 className="text-2xl font-bold gradient-text">Terms of Service</h1>
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

            <h2 className="text-3xl font-bold text-blue-900 mt-8 mb-4">Terms of Service</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Edusanna platform, website, and related services (collectively, the &quot;Services&quot;). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to any part of these Terms, you may not use our Services.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">1. Acceptance of Terms</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              By using Edusanna, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service, our Privacy Policy, and any other policies we publish on our platform. If you are using our Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">2. Eligibility</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              You must be at least 13 years old to use our Services. If you are under 18, you represent that you have obtained parental or guardian consent. We reserve the right to verify age and identity information at any time.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">3. User Accounts</h3>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-2">3.1 Account Creation</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              When creating an account, you agree to provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and are liable for all activity under your account.
            </p>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-2">3.2 Account Termination</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to suspend or terminate your account if you violate these Terms or engage in prohibited conduct. You may request account deletion by contacting our support team.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">4. Permitted Use</h3>

            <p className="text-gray-700 leading-relaxed mb-4">You agree to use our Services only for lawful purposes and in a way that does not infringe upon the rights of others. Prohibited conduct includes:</p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Violating any applicable laws or regulations</li>
              <li>Infringing intellectual property rights</li>
              <li>Transmitting viruses, malware, or harmful code</li>
              <li>Engaging in harassment, abuse, or threatening behavior</li>
              <li>Attempting to gain unauthorized access to our systems</li>
              <li>Interfering with the operation of our Services</li>
              <li>Collecting or tracking personal information without consent</li>
              <li>Using our Services for commercial purposes without authorization</li>
            </ul>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">5. Intellectual Property Rights</h3>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-2">5.1 Our Content</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content on our platform, including text, graphics, logos, images, and software, is the property of Edusanna or our content providers and is protected by copyright laws. You may not reproduce, modify, or distribute our content without written permission.
            </p>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-2">5.2 Your Content</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              By uploading or submitting content to our Services, you grant Edusanna a non-exclusive, royalty-free, perpetual license to use, reproduce, modify, and distribute your content for providing and improving our Services.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">6. Payment Terms</h3>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-2">6.1 Pricing and Fees</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Services may be offered on a subscription or pay-per-use basis. Prices are subject to change with 30 days&apos; notice. Continued use of paid Services constitutes acceptance of new pricing.
            </p>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-2">6.2 Billing</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use Stripe to process payments securely. You authorize us to charge your payment method for the services you use. Billing occurs according to your subscription plan.
            </p>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-2">6.3 Refunds</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Refunds are handled on a case-by-case basis. Generally, we do not offer refunds for partial periods. Please contact our support team to discuss refund requests.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">7. Disclaimers</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              OUR SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING OUR SERVICES, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE. YOU ASSUME ALL RISK RELATED TO YOUR USE OF OUR SERVICES.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">8. Limitation of Liability</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, EDUSANNA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              OUR TOTAL LIABILITY FOR ANY CLAIMS SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM, OR $100, WHICHEVER IS GREATER.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">9. Indemnification</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to indemnify, defend, and hold harmless Edusanna from any claims, losses, damages, or expenses arising from your use of our Services or violation of these Terms.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">10. Third-Party Links</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Our Services may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of external sites. Your use of third-party services is subject to their terms and policies.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">11. Termination</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms are effective until terminated. We may terminate your access to our Services at any time without notice for violations of these Terms. Sections that should survive termination include Intellectual Property Rights, Disclaimers, and Limitation of Liability.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">12. Governing Law</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of Zimbabwe, without regard to its conflict of law provisions. Any legal action or proceeding shall be brought exclusively in the courts of Zimbabwe.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">13. Dispute Resolution</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Before initiating formal legal proceedings, we encourage you to contact us to resolve any disputes. Most disputes can be resolved through good-faith negotiation.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">14. Modifications to Terms</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              We may modify these Terms at any time. Significant changes will be announced with at least 30 days&apos; notice. Your continued use of our Services constitutes acceptance of modified Terms.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">15. Contact Us</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              For questions or concerns about these Terms of Service, please contact us at:
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
              <p className="text-gray-900 font-semibold">Edusanna Legal Team</p>
              <p className="text-gray-700">Email: <a href="mailto:legal@edusanna.com" className="text-blue-600 hover:text-blue-700">legal@edusanna.com</a></p>
              <p className="text-gray-700">Address: Harare, Zimbabwe</p>
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">16. Entire Agreement</h3>

            <p className="text-gray-700 leading-relaxed">
              These Terms constitute the entire agreement between you and Edusanna regarding your use of our Services and supersede all prior agreements and understandings.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
