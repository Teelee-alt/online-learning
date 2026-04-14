import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Shield, Cookie, Home, Mail } from "lucide-react"

export default function LegalPage() {
  const legalDocuments = [
    {
      title: "Privacy Policy",
      description: "Learn how we collect, use, and protect your personal information",
      href: "/legal/privacy-policy",
      icon: Shield,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Terms of Service",
      description: "Our terms and conditions governing your use of our platform",
      href: "/legal/terms-of-service",
      icon: FileText,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Cookie Policy",
      description: "Information about how we use cookies and tracking technologies",
      href: "/legal/cookie-policy",
      icon: Cookie,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-blue-200/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-2">
              <Home className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-medium">Home</span>
            </Link>
            <h1 className="text-2xl font-bold gradient-text">Legal & Compliance</h1>
            <div className="w-20" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Legal & Compliance</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              At Edusanna, we believe in transparency and protecting your rights. Read our legal documents to understand how we operate and how your data is handled.
            </p>
          </div>

          {/* Legal Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {legalDocuments.map((doc) => {
              const IconComponent = doc.icon
              return (
                <Link key={doc.href} href={doc.href}>
                  <Card className="glass-card-light cursor-pointer hover:shadow-lg transition-shadow h-full">
                    <CardHeader className={`${doc.bgColor}`}>
                      <div className="flex items-center gap-3">
                        <IconComponent className={`w-8 h-8 ${doc.color}`} />
                        <CardTitle className="text-xl text-blue-900">{doc.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-4">{doc.description}</p>
                      <Button className="premium-button w-full">Read Full Policy</Button>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-md p-8 border border-blue-100 mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-8">Frequently Asked Questions</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Is my data secure on Edusanna?</h4>
                <p className="text-gray-700">
                  Yes, we implement comprehensive security measures including encryption, secure authentication, and regular security audits. Please see our Privacy Policy for detailed information about data protection.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">How can I delete my account and data?</h4>
                <p className="text-gray-700">
                  You can request account deletion by contacting our support team at <a href="mailto:privacy@edusanna.com" className="text-blue-600 hover:text-blue-700">privacy@edusanna.com</a>. We will process your request within 30 days in compliance with applicable laws.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Do you sell my personal information?</h4>
                <p className="text-gray-700">
                  No, we do not sell your personal information to third parties. We may share information with service providers who assist in operating our platform, but only as necessary and under strict confidentiality agreements.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">How do I control cookies on my device?</h4>
                <p className="text-gray-700">
                  You can control cookies through your browser settings. Most browsers allow you to block cookies, accept only certain types, or delete existing cookies. See our Cookie Policy for more details.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">What is your refund policy?</h4>
                <p className="text-gray-700">
                  Refunds are handled on a case-by-case basis. Generally, we do not offer refunds for partial periods. Please contact our support team to discuss your specific situation.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">How often are these policies updated?</h4>
                <p className="text-gray-700">
                  We may update our policies periodically to reflect changes in our practices or applicable laws. We will provide notice of significant changes with at least 30 days&apos; advance notice.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">What if I have a privacy complaint?</h4>
                <p className="text-gray-700">
                  We take privacy concerns seriously. Please contact our privacy team at <a href="mailto:privacy@edusanna.com" className="text-blue-600 hover:text-blue-700">privacy@edusanna.com</a> with details of your complaint, and we will investigate promptly.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Privacy Inquiries */}
            <Card className="glass-card-light border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Privacy & Data Protection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  For questions about our privacy practices, data subject requests, or privacy concerns:
                </p>
                <a
                  href="mailto:privacy@edusanna.com"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  privacy@edusanna.com
                </a>
              </CardContent>
            </Card>

            {/* Legal Inquiries */}
            <Card className="glass-card-light border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  Legal & Compliance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  For legal questions, contract matters, or compliance inquiries:
                </p>
                <a
                  href="mailto:legal@edusanna.com"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  legal@edusanna.com
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm">
              Last updated: April 15, 2026 | All policies are subject to change at our discretion
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
