"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LogOut, Users, CreditCard, Award, BarChart3, Settings, School, Bell } from "lucide-react"

interface AnalyticsData {
  totalUsers: number
  totalPayments: number
  totalInstitutions: number
  totalRevenue: number
}

export default function AdminDashboard() {
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)
  const [adminId, setAdminId] = useState("")
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalUsers: 0,
    totalPayments: 0,
    totalInstitutions: 0,
    totalRevenue: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check admin status on mount
    const admin = localStorage.getItem("isAdmin") === "true"
    const session = localStorage.getItem("adminSession")
    const id = localStorage.getItem("adminId") || ""

    if (!admin || !session) {
      router.push("/login")
      return
    }

    setIsAdmin(true)
    setAdminId(id)

    // Fetch analytics data
    fetchAnalytics()
  }, [router])

  const fetchAnalytics = async () => {
    try {
      setIsLoading(true)
      
      // For now, use static data until database is set up
      // This will be updated to fetch from /api/admin/analytics
      setAnalytics({
        totalUsers: 0,
        totalPayments: 0,
        totalInstitutions: 0,
        totalRevenue: 0,
      })
    } catch (err) {
      console.error("[Analytics Error]", err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      const sessionToken = localStorage.getItem("adminSession")
      if (sessionToken) {
        await fetch("/api/admin/logout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionToken }),
        })
      }
    } catch (err) {
      console.error("[Logout Error]", err)
    }

    localStorage.setItem("isAdmin", "false")
    localStorage.removeItem("adminSession")
    localStorage.removeItem("adminId")
    window.location.href = "/login"
  }

  if (!isAdmin) {
    return null
  }

  const adminStats = [
    { label: "Total Users", value: analytics.totalUsers.toString(), icon: Users, color: "bg-blue-100 text-blue-600" },
    { label: "Payments", value: analytics.totalPayments.toString(), icon: CreditCard, color: "bg-green-100 text-green-600" },
    { label: "Institutions", value: analytics.totalInstitutions.toString(), icon: School, color: "bg-purple-100 text-purple-600" },
    { label: "Revenue", value: "$" + analytics.totalRevenue.toFixed(2), icon: BarChart3, color: "bg-orange-100 text-orange-600" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Admin Header */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-blue-200/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/admin/dashboard" className="flex items-center space-x-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-md">
                <img
                  src="/edusanna-logo.png"
                  alt="Edusanna Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:flex sm:flex-col">
                <span className="text-lg sm:text-2xl font-bold gradient-text">EDUSANNA</span>
                <span className="text-xs text-blue-600">Admin Dashboard</span>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 hidden sm:inline">{adminEmail}</span>
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
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-blue-900 mb-2">Admin Dashboard</h1>
            <p className="text-blue-700">Manage users, payments, and certificates</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {adminStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="glass-card-light">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                        <p className="text-3xl font-bold text-blue-900">{stat.value}</p>
                      </div>
                      <div className={`p-3 rounded-lg ${stat.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Main Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/admin/users">
              <Card className="glass-card-light cursor-pointer hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-8">
                  <Users className="w-12 h-12 text-blue-600 mb-4" />
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">Manage Users</h2>
                  <p className="text-gray-600 mb-6">View, edit, and manage user accounts and statuses</p>
                  <Button className="premium-button">Go to Users</Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/admin/payments">
              <Card className="glass-card-light cursor-pointer hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-8">
                  <CreditCard className="w-12 h-12 text-green-600 mb-4" />
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">Payment Management</h2>
                  <p className="text-gray-600 mb-6">Track payments and mark manual payments as paid</p>
                  <Button className="premium-button">Go to Payments</Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/admin/academia">
              <Card className="glass-card-light cursor-pointer hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-8">
                  <School className="w-12 h-12 text-indigo-600 mb-4" />
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">Academia Management</h2>
                  <p className="text-gray-600 mb-6">Manage institutions and multi-school enrollment</p>
                  <Button className="premium-button">Go to Academia</Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/admin/notifications">
              <Card className="glass-card-light cursor-pointer hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-8">
                  <Bell className="w-12 h-12 text-yellow-600 mb-4" />
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">Notifications</h2>
                  <p className="text-gray-600 mb-6">Send and manage user notifications</p>
                  <Button className="premium-button">Go to Notifications</Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/admin/certificates">
              <Card className="glass-card-light cursor-pointer hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-8">
                  <Award className="w-12 h-12 text-purple-600 mb-4" />
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">Certificates</h2>
                  <p className="text-gray-600 mb-6">View and manage generated certificates</p>
                  <Button className="premium-button">Go to Certificates</Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/admin/settings">
              <Card className="glass-card-light cursor-pointer hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-8">
                  <Settings className="w-12 h-12 text-orange-600 mb-4" />
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">Settings</h2>
                  <p className="text-gray-600 mb-6">Configure platform settings and admin policies</p>
                  <Button className="premium-button">Go to Settings</Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
