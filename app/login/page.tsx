"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen, ArrowLeft, Mail, Lock } from "lucide-react"
import { GoogleSignInButton } from "@/components/auth/google-signin-button"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Check for admin credentials - use environment variable for security
    const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "edusannaonlinelearning@gmail.com"
    const isAdmin = formData.email === adminEmail && formData.password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    
    if (isAdmin) {
      localStorage.setItem("isAdmin", "true")
      localStorage.setItem("adminEmail", formData.email)
      window.location.href = "/admin/verify-2fa"
      return
    }

    // Store user session for regular users
    localStorage.setItem("isLoggedIn", "true")
    localStorage.setItem("userEmail", formData.email)

    // Simulate API call for regular users
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Redirect to dashboard
    window.location.href = "/dashboard"
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-md">
              <img
                src="/edusanna-logo.png"
                alt="Edusanna Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-blue-900 mb-2">Welcome Back</h1>
          <p className="text-blue-700">Continue your learning journey</p>
        </div>

        {/* Login Form */}
        <Card className="glass-card-light shadow-lg border-blue-100">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl gradient-text">Sign In to Your Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="flex items-center text-blue-900 mb-2">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <Label htmlFor="password" className="flex items-center text-blue-900 mb-2">
                  <Lock className="w-4 h-4 mr-2" />
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="h-12 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>

              <Button type="submit" disabled={isLoading} className="w-full premium-button h-12 text-lg">
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-blue-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-blue-600">Or continue with</span>
              </div>
            </div>

            <GoogleSignInButton />

            <div className="text-center mt-6">
              <p className="text-blue-700">
                Don't have an account?{" "}
                <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Create Account
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
