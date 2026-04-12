"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { LogOut, ArrowLeft, Trash2, Edit2, Plus, Search } from "lucide-react"

interface User {
  id: string
  email: string
  name: string
  joinDate: string
  courses: number
}

export default function AdminUsersPage() {
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)
  const [users, setUsers] = useState<User[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Check admin status
    const admin = localStorage.getItem("isAdmin") === "true"
    if (!admin) {
      router.push("/login")
      return
    }
    setIsAdmin(true)

    // Load users from localStorage (placeholder for database integration)
    loadUsers()
  }, [router])

  const loadUsers = () => {
    // Placeholder - in production, this would fetch from Supabase
    const mockUsers: User[] = [
      { id: "1", email: "tinashe@example.com", name: "Tinashe Lee Vurayai", joinDate: "2025-01-15", courses: 0 },
      { id: "2", email: "user@example.com", name: "Sample User", joinDate: "2025-01-10", courses: 0 },
    ]
    setUsers(mockUsers)
  }

  const handleLogout = () => {
    localStorage.setItem("isAdmin", "false")
    localStorage.removeItem("adminEmail")
    window.location.href = "/login"
  }

  const handleDeleteUser = (userId: string) => {
    if (confirm("Are you sure you want to delete this user? This action cannot be undone.")) {
      setUsers(users.filter(u => u.id !== userId))
    }
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
            <h1 className="text-2xl font-bold gradient-text">Manage Users</h1>
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
        <div className="max-w-7xl mx-auto">
          {/* Search and Actions */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex-1 relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 border-blue-200"
              />
            </div>
            <Button className="premium-button">
              <Plus className="w-4 h-4 mr-2" />
              Add User
            </Button>
          </div>

          {/* Users Table */}
          <Card className="glass-card-light">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-50 border-b border-blue-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Join Date</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Courses</th>
                      <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-100">
                    {filteredUsers.length > 0 ? (
                      filteredUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-blue-50/50 transition">
                          <td className="px-6 py-4 text-sm text-gray-900 font-medium">{user.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{user.joinDate}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{user.courses}</td>
                          <td className="px-6 py-4 text-center">
                            <div className="flex justify-center gap-2">
                              <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                                <Edit2 className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-red-600 hover:bg-red-50"
                                onClick={() => handleDeleteUser(user.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                          No users found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Summary */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="glass-card-light">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-gray-600 mb-1">Total Users</p>
                <p className="text-3xl font-bold text-blue-900">{users.length}</p>
              </CardContent>
            </Card>
            <Card className="glass-card-light">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-gray-600 mb-1">Active Today</p>
                <p className="text-3xl font-bold text-green-600">0</p>
              </CardContent>
            </Card>
            <Card className="glass-card-light">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-gray-600 mb-1">Total Courses Enrolled</p>
                <p className="text-3xl font-bold text-purple-600">0</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
