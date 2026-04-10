import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { AuthSessionProvider } from "@/components/providers/session-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Edusanna - Free Online Learning Platform | African Online Education",
  description: "Enroll in Edusanna's African online courses and empower your future. Free learning for students, teachers, executives and professionals. Certificate and Diploma programs available.",
  keywords: "Edusanna, African online learning, free online courses Africa, e-learning platform, African education, pan-African education",
  manifest: "/manifest.json",
  openGraph: {
    title: "Edusanna - Elevate Your Mind",
    description: "Africa's leading free online learning platform with certificate and diploma programs",
    url: "https://edusanna.com",
    siteName: "Edusanna Online Learning",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Edusanna",
  },
  formatDetection: {
    telephone: false,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#3b82f6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon-192.jpg" />
      </head>
      <body className={inter.className}>
        <AuthSessionProvider>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-slate-100">{children}</div>
        </AuthSessionProvider>
      </body>
    </html>
  )
}
