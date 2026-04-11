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

      <div className="min-h-screen relative overflow-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-blue-200/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20 relative z-10 gap-2">
              <button
                onClick={handleLogoTap}
                className="flex items-center space-x-2 sm:space-x-3 hover:opacity-90 transition transform hover:scale-105 min-w-0"
                title="Edusanna - Elevate Your Mind"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden shadow-md border-2 border-blue-500 flex-shrink-0">
                  <img
                    src="/edusanna-logo.png"
                    alt="Edusanna Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="hidden sm:block">
                  <span className="text-xl sm:text-3xl font-bold gradient-text block">EDUSANNA</span>
                  <div className="text-xs text-blue-600 font-medium">Elevate Your Mind</div>
                </div>
              </button>
              <div className="flex items-center gap-1 sm:gap-4 flex-shrink-0">
                <Link href="/login" className="hidden sm:inline">
                  <Button variant="ghost" className="text-blue-700 hover:text-blue-800 hover:bg-blue-50 text-sm">
                    Login
                  </Button>
                </Link>
                <Link href="/signup" className="w-auto">
                  <Button className="premium-button text-xs sm:text-base px-2 sm:px-6 py-2 h-auto sm:h-10">
                    <span className="hidden sm:inline">Get Started</span>
                    <span className="sm:hidden">Start</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

          {/* Hero Section */}
        <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full backdrop-blur-md bg-blue-100/50 text-blue-900 text-sm font-semibold shadow-sm mb-8 border border-blue-200">
               Free Learning - Certificate & Diploma Programs A-Z
            </div>

            <h1 className="text-5xl md:text-8xl font-black mb-8 text-balance mt-8 leading-tight">
              <span className="text-blue-900">Learn Anything.</span>
              <br />
              <span className="text-blue-700">Completely Free.</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-800 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Create a free account and access all courses instantly. Learn at your own pace completely for free, track your progress and only pay when you're ready to receive an official, prestigious Certificate ($12) or Diploma ($18).
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link href="/courses">
                <Button className="premium-button text-lg px-8 py-4 shadow-2xl">
                  <Play className="w-5 h-5 mr-2" />
                  Browse All Courses
                </Button>
              </Link>
              <Link href="/verify">
                <Button
                  className="premium-button-outline text-lg px-8 py-3.5"
                >
                  Verify Certificate
                </Button>
              </Link>
            </div>

            {/* Stats with premium styling */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 mt-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="icon-badge-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {index === 0 && <span className="text-3xl">📚</span>}
                    {index === 1 && <span className="text-3xl">🎓</span>}
                    {index === 2 && <span className="text-3xl">💰</span>}
                    {index === 3 && <span className="text-3xl">🎧</span>}
                  </div>
                  <div className="text-4xl md:text-5xl font-black gradient-text mb-2">{stat.number}</div>
                  <div className="text-blue-700 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </section>

          {/* Platform Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Edusanna Benefits for Everyone</h2>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              Whether you're a student, professional, teacher or entrepreneur, Edusanna empowers you with the skills to succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {platformBenefits.map((category) => (
              <div
                key={category.title}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border border-blue-100 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-blue-800">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        </section>

          {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Why Choose EDUSANNA?</h2>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              Africa's leading online learning platform with proven excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="course-card text-center border-blue-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">{feature.title}</h3>
                  <p className="text-blue-700 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {platformFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 p-4 bg-white rounded-xl border border-blue-100 shadow-sm">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm font-medium text-blue-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        </section>

          {/* How It Works */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">How It Works</h2>
            <p className="text-xl text-blue-700">Simple, transparent and student-focused</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border border-blue-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-700">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Sign Up Free</h3>
              <p className="text-blue-700">
                Create your account in seconds. No credit card required. Access all courses immediately.
              </p>
            </div>

            <div className="text-center bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 border border-purple-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-purple-700">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Learn & Progress</h3>
              <p className="text-blue-700">
                Study as many courses as you want. Your progress is automatically saved across all devices.
              </p>
            </div>

            <div className="text-center bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border border-blue-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-purple-700">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Get Certified</h3>
              <p className="text-blue-700">
                When ready, purchase your Certificate ($12) or Diploma ($18) to prove your achievement.
              </p>
            </div>
          </div>
        </div>
        </section>

          {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card-light shadow-lg border-blue-100">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold gradient-text mb-4">Ready to Transform Your Life?</h2>
              <p className="text-xl text-blue-700 mb-8 max-w-2xl mx-auto">
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
        <footer className="backdrop-blur-md bg-white/80 border-t border-blue-200 text-blue-900 py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-md border-2 border-blue-500">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%2022%2C%202026%2C%2012_21_21%20AM-WKqkdSRv1DtoghNmzkCDSdNQKXoMsG.png"
                  alt="Edusanna Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold gradient-text">EDUSANNA</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-blue-700">© 2025 EDUSANNA. Transforming lives through education.</p>
            </div>
          </div>
        </div>
        </footer>
      </div>
    </>
  )
}

