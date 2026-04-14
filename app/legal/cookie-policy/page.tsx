import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CookiePolicyPage() {
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
            <h1 className="text-2xl font-bold gradient-text">Cookie Policy</h1>
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

            <h2 className="text-3xl font-bold text-blue-900 mt-8 mb-4">Cookie Policy</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              This Cookie Policy explains how Edusanna uses cookies and similar tracking technologies on our website and mobile applications. Please read this policy carefully to understand our practices.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">1. What Are Cookies?</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit our website. They help us recognize you, remember your preferences, and enhance your browsing experience. Cookies typically contain a site identifier and a random number.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">2. Types of Cookies We Use</h3>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-2">2.1 Essential Cookies</h4>
            <p className="text-gray-700 leading-relaxed mb-2">
              These cookies are necessary for the platform to function properly. They enable:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Authentication and login functionality</li>
              <li>Session management</li>
              <li>Security features and fraud detection</li>
              <li>Basic platform navigation</li>
            </ul>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-2">2.2 Performance Cookies</h4>
            <p className="text-gray-700 leading-relaxed mb-2">
              These cookies collect information about how users interact with our platform:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Pages visited and time spent on each page</li>
              <li>Links clicked</li>
              <li>Errors encountered</li>
              <li>Device and browser information</li>
            </ul>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-2">2.3 Functional Cookies</h4>
            <p className="text-gray-700 leading-relaxed mb-2">
              These cookies remember your preferences and settings:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Language and region preferences</li>
              <li>Theme preferences (light/dark mode)</li>
              <li>Saved preferences for notifications</li>
            </ul>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-2">2.4 Marketing Cookies</h4>
            <p className="text-gray-700 leading-relaxed mb-2">
              With your consent, we use these cookies to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Track promotional campaign effectiveness</li>
              <li>Deliver personalized content</li>
              <li>Understand advertising ROI</li>
              <li>Prevent repeated ads to the same user</li>
            </ul>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">3. Third-Party Cookies</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              We may also use third-party cookies from partners such as:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li><strong>Analytics Providers:</strong> To analyze user behavior and platform performance</li>
              <li><strong>Payment Processors:</strong> To facilitate secure transactions</li>
              <li><strong>Social Media Platforms:</strong> To enable social sharing features</li>
              <li><strong>Advertising Networks:</strong> To deliver targeted advertisements</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">
              These third parties have their own privacy policies and are not bound by this Cookie Policy.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">4. Duration of Cookies</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies can be either:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Remain on your device until their expiration date or until you delete them</li>
            </ul>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">5. How to Control Cookies</h3>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-2">5.1 Browser Settings</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most browsers allow you to control cookies through settings. You can:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Block all cookies</li>
              <li>Allow only specific types of cookies</li>
              <li>Delete existing cookies</li>
              <li>Receive alerts when new cookies are set</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">
              Note: Disabling essential cookies may impair platform functionality and user experience.
            </p>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-2">5.2 Opt-Out Options</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can opt-out of marketing and analytics cookies by:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Updating your account preferences</li>
              <li>Using the opt-out link in marketing emails</li>
              <li>Contacting our privacy team at privacy@edusanna.com</li>
            </ul>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">6. Tracking Technologies Other Than Cookies</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              In addition to cookies, we may use other technologies to track and analyze user behavior:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li><strong>Web Beacons/Pixels:</strong> Tiny images that track page views and user interactions</li>
              <li><strong>Local Storage:</strong> Browser storage similar to cookies but with larger capacity</li>
              <li><strong>Session Replay:</strong> Tools that record user sessions to improve user experience (with consent)</li>
            </ul>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">7. Data Privacy and Cookies</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              The information collected through cookies is governed by our Privacy Policy. We take your data privacy seriously and implement security measures to protect your information. If you have concerns about how we use cookies, please review our full Privacy Policy.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">8. Cookie Consent</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              When you first visit our platform, you will see a cookie consent notice. By accepting cookies, you consent to our use of essential, functional, and (if you choose) marketing cookies. You can change your preferences at any time in your account settings.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">9. Changes to This Policy</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our cookie practices or applicable laws. We will notify you of significant changes by posting the updated policy on this page.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">10. Contact Us</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about our use of cookies or this Cookie Policy, please contact us at:
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
              <p className="text-gray-900 font-semibold">Edusanna Privacy Team</p>
              <p className="text-gray-700">Email: <a href="mailto:privacy@edusanna.com" className="text-blue-600 hover:text-blue-700">privacy@edusanna.com</a></p>
              <p className="text-gray-700">Address: Harare, Zimbabwe</p>
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">11. Summary Table of Cookies</h3>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border border-gray-300 p-2 text-left text-sm font-semibold">Cookie Type</th>
                    <th className="border border-gray-300 p-2 text-left text-sm font-semibold">Purpose</th>
                    <th className="border border-gray-300 p-2 text-left text-sm font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 text-sm">Session ID</td>
                    <td className="border border-gray-300 p-2 text-sm">User authentication</td>
                    <td className="border border-gray-300 p-2 text-sm">Session</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-sm">Preferences</td>
                    <td className="border border-gray-300 p-2 text-sm">Remember user settings</td>
                    <td className="border border-gray-300 p-2 text-sm">1 year</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-sm">Analytics</td>
                    <td className="border border-gray-300 p-2 text-sm">Track user behavior</td>
                    <td className="border border-gray-300 p-2 text-sm">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-sm">Marketing</td>
                    <td className="border border-gray-300 p-2 text-sm">Personalized ads</td>
                    <td className="border border-gray-300 p-2 text-sm">6 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
