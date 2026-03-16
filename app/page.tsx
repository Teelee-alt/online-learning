"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Globe, ArrowRight, Play, CheckCircle, GraduationCap } from "lucide-react"
import { useSecretAdminAccess } from "@/hooks/use-secret-admin-access"
import { SecretAdminModal } from "@/components/secret-admin-modal"
import { platformBenefits, platformFeatures } from "@/lib/seo-content"

export default function HomePage() {
  const {
    showSecretPrompt,
    code1,
    setCode1,
    code2,
    setCode2,
    codeError,
    isVerifying,
    handleLogoTap,
    handleCodeSubmit,
    closePrompt,
  } = useSecretAdminAccess()

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Dual Certification System",
      description: "Choose Certificate or Diploma level for any course you complete",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Global Community",
      description: "Connect with learners from Africa and around the world",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Stackable Credentials",
      description: "Start with Certificate, upgrade to Diploma with discount",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Accessible Anywhere",
      description: "Mobile-first design for learning on any device",
    },
  ]

  const stats = [
    { number: "70+", label: "Courses (A-Z)" },
    { number: "2 Levels", label: "Certificate & Diploma" },
    { number: "FREE", label: "Learning" },
    { number: "24/7", label: "Support" },
  ]

  return (
    <>
      <SecretAdminModal
        isOpen={showSecretPrompt}
        code1={code1}
        code2={code2}
        codeError={codeError}
        isVerifying={isVerifying}
        onCode1Change={setCode1}
        onCode2Change={setCode2}
        onSubmit={handleCodeSubmit}
        onClose={closePrompt}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-white">
        {/* Navigation */}
        <nav className="glass-card fixed top-0 w-full z-50 border-b border-gray-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <button
                onClick={handleLogoTap}
                className="flex items-center space-x-3 hover:opacity-90 transition"
                title="Edusanna - Elevate Your Mind"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg border-2 border-blue-600">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%2022%2C%202026%2C%2012_21_21%20AM-WKqkdSRv1DtoghNmzkCDSdNQKXoMsG.png"
                    alt="Edusanna Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-3xl font-bold gradient-text">EDUSANNA</span>
                  <div className="text-xs text-blue-600 font-medium">Elevate Your Mind</div>
                </div>
              </button>
              <div className="flex items-center space-x-4">
                <Link href="/login">
                  <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="premium-button">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

          {/* Hero Section */}
        <section className="pt-35 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 text-sm font-semibold shadow-lg mb-8">
              Free Learning - Certificate & Diploma Programs A-Z
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance mt-12">
              <span className="gradient-text">Learn Anything.</span>
              <br />
              <span className="text-gray-800">Completely Free.</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Create a free account and access all courses instantly. Learn at your own pace completely for free, track your progress and only pay when you're ready to receive an official, prestigious Certificate ($12) or Diploma ($18).
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/courses">
                <Button className="premium-button text-lg px-8 py-4">
                  <Play className="w-5 h-5 mr-2" />
                  Browse All Courses
                </Button>
              </Link>
              <Link href="/verify">
                <Button
                  variant="outline"
                  className="text-lg px-8 py-4 border-2 hover:bg-blue-50 bg-white border-gray-300"
                >
                  Verify Certificate
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </section>

          {/* Platform Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Edusanna Benefits for Everyone</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're a student, professional, teacher or entrepreneur, Edusanna empowers you with the skills to succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {platformBenefits.map((category) => (
              <div
                key={category.title}
                className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-8 border border-blue-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        </section>

          {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Why Choose EDUSANNA?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Africa's leading online learning platform with proven excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="course-card text-center border-gray-200">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {platformFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        </section>

          {/* How It Works */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple, transparent, and student-focused</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-green-600">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Sign Up Free</h3>
              <p className="text-gray-600">
                Create your account in seconds. No credit card required. Access all courses immediately.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-600">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Learn & Progress</h3>
              <p className="text-gray-600">
                Study as many courses as you want. Your progress is automatically saved across all devices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-yellow-600">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Get Certified</h3>
              <p className="text-gray-600">
                When ready, purchase your Certificate ($12) or Diploma ($18) to prove your achievement.
              </p>
            </div>
          </div>
        </div>
        </section>

          {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-gray-200 shadow-2xl">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold gradient-text mb-4">Ready to Transform Your Life?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join our community of learners and start your journey to personal and professional excellence today.
              </p>
              <Link href="/signup">
                <Button className="premium-button text-lg px-10 py-4">
                  Start Learning Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        </section>

          {/* Footer */}
        <footer className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg border-2 border-blue-400">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%2022%2C%202026%2C%2012_21_21%20AM-WKqkdSRv1DtoghNmzkCDSdNQKXoMsG.png"
                  alt="Edusanna Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold">EDUSANNA</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300">© 2025 EDUSANNA. Transforming lives through education.</p>
            </div>
          </div>
        </div>
        </footer>
      </div>
    </>
  )
}
