"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { LogOut, ArrowLeft, Plus, Bell, Trash2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Notification {
  id: string
  user_id: string
  title: string
  message: string
  type: "info" | "warning" | "success" | "error"
  read: boolean
  created_at: string
}

export default function NotificationsPage() {
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    user_id: "",
    title: "",
    message: "",
    type: "info" as const,
  })

  useEffect(() => {
    const admin = localStorage.getItem("isAdmin") === "true"
    if (!admin) {
      router.push("/login")
      return
    }
    setIsAdmin(true)
    loadNotifications()
  }, [router])

  const loadNotifications = async () => {
    // Will load real data once database is set up
    setNotifications([])
  }

  const handleLogout = () => {
    localStorage.setItem("isAdmin", "false")
    localStorage.removeItem("adminSession")
    window.location.href = "/login"
  }

  const handleSendNotification = async () => {
    setIsLoading(true)
    try {
      // Send notification logic will go here
      console.log("Sending notification:", formData)
      setIsOpen(false)
      setFormData({
        user_id: "",
        title: "",
        message: "",
        type: "info",
      })
    } catch (err) {
      console.error("Error sending notification:", err)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isAdmin) {
    return null
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-100 text-green-800 border-green-200"
      case "warning":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "error":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-blue-100 text-blue-800 border-blue-200"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "success":
        return "✓"
      case "warning":
        return "!"
      case "error":
        return "✕"
      default:
        return "ℹ"
    }
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
            <h1 className="text-2xl font-bold gradient-text">Notification Management</h1>
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
          {/* Action Button */}
          <div className="mb-8 flex justify-end">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button className="premium-button">
                  <Plus className="w-4 h-4 mr-2" />
                  Send Notification
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Send Notification</DialogTitle>
                  <DialogDescription>
                    Send a notification to a user or broadcast to all users
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="user">User Email (optional for broadcast)</Label>
                    <Input
                      id="user"
                      type="email"
                      value={formData.user_id}
                      onChange={(e) => setFormData({ ...formData, user_id: e.target.value })}
                      placeholder="user@example.com (leave blank for broadcast)"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g., Course Update"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter your notification message..."
                      className="mt-1 min-h-24"
                    />
                  </div>
                  <div>
                    <Label htmlFor="type">Type</Label>
                    <Select value={formData.type} onValueChange={(value: any) => setFormData({ ...formData, type: value })}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="info">Info</SelectItem>
                        <SelectItem value="success">Success</SelectItem>
                        <SelectItem value="warning">Warning</SelectItem>
                        <SelectItem value="error">Error</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    onClick={handleSendNotification}
                    disabled={isLoading || !formData.title || !formData.message}
                    className="w-full premium-button mt-4"
                  >
                    {isLoading ? "Sending..." : "Send Notification"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Notifications List */}
          <Card className="glass-card-light">
            <CardHeader className="border-b border-blue-100">
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Recent Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {notifications.length === 0 ? (
                <div className="p-12 text-center">
                  <Bell className="w-12 h-12 text-blue-200 mx-auto mb-4" />
                  <p className="text-blue-700 font-medium mb-2">No notifications sent yet</p>
                  <p className="text-gray-600 text-sm">Send your first notification to users or broadcast to all users</p>
                </div>
              ) : (
                <div className="space-y-2 p-6">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className={`p-4 rounded-lg border ${getTypeColor(notif.type)} flex items-start justify-between`}
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <span className="text-lg font-bold mt-0.5">{getTypeIcon(notif.type)}</span>
                        <div className="flex-1">
                          <h3 className="font-semibold">{notif.title}</h3>
                          <p className="text-sm opacity-75 mt-1">{notif.message}</p>
                          <p className="text-xs opacity-60 mt-2">
                            {new Date(notif.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:bg-red-50 ml-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="glass-card-light">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-gray-600 mb-1">Total Sent</p>
                <p className="text-3xl font-bold text-blue-900">{notifications.length}</p>
              </CardContent>
            </Card>
            <Card className="glass-card-light">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-gray-600 mb-1">Unread</p>
                <p className="text-3xl font-bold text-blue-900">
                  {notifications.filter((n) => !n.read).length}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
