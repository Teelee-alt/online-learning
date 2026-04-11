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

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!")
      setIsLoading(false)
      return
    }

    // Simulate API call to create account
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Automatically sign in the user by storing session
    localStorage.setItem("isLoggedIn", "true")
    localStorage.setItem("userEmail", formData.email)
    localStorage.setItem("userName", formData.fullName)
    localStorage.setItem("joinDate", new Date().toISOString().split('T')[0])
    localStorage.setItem("userPhone", formData.mobileNumber)
    localStorage.setItem("userCountry", formData.country)
    localStorage.setItem("userCity", formData.city)

    // Redirect to dashboard (auto-logged in)
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
