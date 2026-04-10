"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen, ArrowLeft, User, Mail, Phone, MapPin } from "lucide-react"
import { GoogleSignInButton } from "@/components/auth/google-signin-button"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
    country: "",
    city: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect to courses page
    window.location.href = "/courses"
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
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-md border-2 border-blue-500">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%2022%2C%202026%2C%2012_21_21%20AM-WKqkdSRv1DtoghNmzkCDSdNQKXoMsG.png"
                alt="Edusanna Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-3xl font-bold gradient-text">EDUSANNA</span>
          </div>
          <h1 className="text-2xl font-bold text-blue-900 mb-2">Create Your Account</h1>
          <p className="text-blue-700">Join thousands of learners transforming their lives</p>
        </div>

        {/* Signup Form */}
        <Card className="glass-card-light shadow-lg border-blue-100">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl gradient-text">Get Started Today</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="flex items-center text-blue-900 mb-2">
                  <User className="w-4 h-4 mr-2" />
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="h-12 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>

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

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="password" className="text-blue-900 mb-2 block">
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
                    placeholder="Password"
                  />
                </div>
                <div>
                  <Label htmlFor="confirmPassword" className="text-blue-900 mb-2 block">
                    Confirm
                  </Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="h-12 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Confirm"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="mobileNumber" className="flex items-center text-blue-900 mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  Mobile Number (with country code)
                </Label>
                <Input
                  id="mobileNumber"
                  name="mobileNumber"
                  type="tel"
                  required
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="h-12 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="+263 780 901 929"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="country" className="flex items-center text-blue-900 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    Country
                  </Label>
                  <Input
                    id="country"
                    name="country"
                    type="text"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="h-12 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Zimbabwe"
                  />
                </div>
                <div>
                  <Label htmlFor="city" className="text-blue-900 mb-2 block">
                    City
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="h-12 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Harare"
                  />
                </div>
              </div>

              <Button type="submit" disabled={isLoading} className="w-full premium-button h-12 text-lg mt-6">
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-blue-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-blue-600">Or sign up with</span>
              </div>
            </div>

            <GoogleSignInButton />

            <div className="text-center mt-6">
              <p className="text-blue-700">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Sign In
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
