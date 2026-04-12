"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LogOut, ArrowLeft, Save, AlertCircle, CheckCircle } from "lucide-react"

export default function AdminSettingsPage() {
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [settings, setSettings] = useState({
    certificatePrice: 12,
    diplomaPrice: 18,
    platformName: "EDUSANNA",
    supportEmail: "support@edusanna.com",
    maxCourseEnrollments: 10,
  })

  useEffect(() => {
    // Check admin status
    const admin = localStorage.getItem("isAdmin") === "true"
    if (!admin) {
      router.push("/login")
      return
    }
    setIsAdmin(true)

    // Load settings from localStorage (placeholder for database integration)
    const savedSettings = localStorage.getItem("adminSettings")
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings))
      } catch (e) {
        console.error("Error loading settings:", e)
      }
    }
  }, [router])

  const handleLogout = () => {
    localStorage.setItem("isAdmin", "false")
    localStorage.removeItem("adminEmail")
    window.location.href = "/login"
  }

  const handleSaveSettings = async () => {
    setIsSaving(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      localStorage.setItem("adminSettings", JSON.stringify(settings))
      setMessage({ type: "success", text: "Settings saved successfully!" })
      setTimeout(() => setMessage(null), 3000)
    } catch (error) {
      setMessage({ type: "error", text: "Failed to save settings" })
    } finally {
      setIsSaving(false)
    }
  }

  if (!isAdmin) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Admin Header */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-blue-200/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/admin/dashboard" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-medium">Back to Dashboard</span>
            </Link>
            <h1 className="text-2xl font-bold gradient-text">Settings</h1>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-2xl mx-auto">
          {/* Message */}
          {message && (
            <Card className={`mb-6 ${message.type === "success" ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
              <CardContent className="p-4 flex items-center gap-3">
                {message.type === "success" ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-600" />
                )}
                <span className={message.type === "success" ? "text-green-800" : "text-red-800"}>
                  {message.text}
                </span>
              </CardContent>
            </Card>
          )}

          {/* Pricing Settings */}
          <Card className="glass-card-light mb-6">
            <CardHeader className="border-b border-blue-200">
              <CardTitle className="text-blue-900">Pricing</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div>
                <Label htmlFor="certificatePrice" className="text-blue-900 font-semibold mb-2 block">
                  Certificate Price ($)
                </Label>
                <Input
                  id="certificatePrice"
                  type="number"
                  min="0"
                  value={settings.certificatePrice}
                  onChange={(e) => setSettings({ ...settings, certificatePrice: parseFloat(e.target.value) })}
                  className="h-12 border-blue-200 focus:border-blue-500"
                />
                <p className="text-sm text-gray-600 mt-2">Price for certificate credentials</p>
              </div>

              <div>
                <Label htmlFor="diplomaPrice" className="text-blue-900 font-semibold mb-2 block">
                  Diploma Price ($)
                </Label>
                <Input
                  id="diplomaPrice"
                  type="number"
                  min="0"
                  value={settings.diplomaPrice}
                  onChange={(e) => setSettings({ ...settings, diplomaPrice: parseFloat(e.target.value) })}
                  className="h-12 border-blue-200 focus:border-blue-500"
                />
                <p className="text-sm text-gray-600 mt-2">Price for diploma credentials</p>
              </div>
            </CardContent>
          </Card>

          {/* Platform Settings */}
          <Card className="glass-card-light mb-6">
            <CardHeader className="border-b border-blue-200">
              <CardTitle className="text-blue-900">Platform Settings</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div>
                <Label htmlFor="platformName" className="text-blue-900 font-semibold mb-2 block">
                  Platform Name
                </Label>
                <Input
                  id="platformName"
                  type="text"
                  value={settings.platformName}
                  onChange={(e) => setSettings({ ...settings, platformName: e.target.value })}
                  className="h-12 border-blue-200 focus:border-blue-500"
                />
                <p className="text-sm text-gray-600 mt-2">Name displayed across the platform</p>
              </div>

              <div>
                <Label htmlFor="supportEmail" className="text-blue-900 font-semibold mb-2 block">
                  Support Email
                </Label>
                <Input
                  id="supportEmail"
                  type="email"
                  value={settings.supportEmail}
                  onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
                  className="h-12 border-blue-200 focus:border-blue-500"
                />
                <p className="text-sm text-gray-600 mt-2">Email for user support inquiries</p>
              </div>

              <div>
                <Label htmlFor="maxCourseEnrollments" className="text-blue-900 font-semibold mb-2 block">
                  Max Course Enrollments Per User
                </Label>
                <Input
                  id="maxCourseEnrollments"
                  type="number"
                  min="1"
                  value={settings.maxCourseEnrollments}
                  onChange={(e) => setSettings({ ...settings, maxCourseEnrollments: parseInt(e.target.value) })}
                  className="h-12 border-blue-200 focus:border-blue-500"
                />
                <p className="text-sm text-gray-600 mt-2">Maximum courses a user can enroll in simultaneously</p>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex gap-4">
            <Button
              onClick={handleSaveSettings}
              disabled={isSaving}
              className="premium-button flex-1"
            >
              <Save className="w-4 h-4 mr-2" />
              {isSaving ? "Saving..." : "Save Settings"}
            </Button>
            <Button
              variant="outline"
              className="border-blue-200 text-blue-600 hover:bg-blue-50"
              onClick={() => router.push("/admin/dashboard")}
            >
              Cancel
            </Button>
          </div>

          {/* Info Section */}
          <Card className="glass-card-light mt-8 bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">System Information</h3>
              <div className="space-y-2 text-sm text-blue-800">
                <p><span className="font-medium">Version:</span> 1.0.0</p>
                <p><span className="font-medium">Database:</span> Supabase PostgreSQL</p>
                <p><span className="font-medium">Last Updated:</span> {new Date().toLocaleDateString()}</p>
                <p><span className="font-medium">Admin Email:</span> {localStorage.getItem("adminEmail")}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
