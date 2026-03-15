"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AdminPricingEditor } from "@/components/admin-pricing-editor"
import {
  BookOpen,
  Users,
  Trophy,
  Search,
  Eye,
  CheckCircle,
  Download,
  GraduationCap,
  Award,
  DollarSign,
  TrendingUp,
  BookText,
  Settings,
  BarChart3,
  HardDrive,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  Calendar,
  LogOut,
  Edit,
  Trash2,
  MoreVertical,
  CheckCircle2,
} from "lucide-react"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCourse, setSelectedCourse] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("")
  const [storageWarning, setStorageWarning] = useState(false)
  const [showPricingEditor, setShowPricingEditor] = useState(false)

  // Advanced Statistics
  const stats = {
    totalUsers: 15420,
    activeUsers: 3250,
    activeCourses: 147,
    certificatesIssued: 8950,
    diplomasIssued: 3420,
    totalEnrollments: 12370,
    completionRate: 72.4,
    totalRevenue: 0, // Free platform
    storageUsed: 45, // Percentage
    databaseRecords: 45230,
    pendingCompletions: 23,
  }

  const completionNotifications = [
    {
      id: 1,
      userName: "Samuel Mukonyo",
      userEmail: "samuel.m@example.com",
      country: "Zimbabwe",
      city: "Harare",
      course: "Web Development",
      level: "diploma",
      score: 94,
      startDate: "2024-11-15",
      finishDate: "2025-01-18",
      whatsapp: "+263712345678",
    },
    {
      id: 2,
      userName: "Amara Okafor",
      userEmail: "amara.ok@example.com",
      country: "Nigeria",
      city: "Lagos",
      course: "Digital Marketing",
      level: "certificate",
      score: 88,
      startDate: "2024-12-01",
      finishDate: "2025-01-17",
      whatsapp: "+2347012345678",
    },
    {
      id: 3,
      userName: "Njeri Kamau",
      userEmail: "njeri.k@example.com",
      country: "Kenya",
      city: "Nairobi",
      course: "Data Analysis",
      level: "diploma",
      score: 91,
      startDate: "2024-10-20",
      finishDate: "2025-01-16",
      whatsapp: "+254712345678",
    },
  ]

  const userManagement = [
    {
      id: 1,
      name: "Samuel Mukonyo",
      email: "samuel.m@example.com",
      country: "Zimbabwe",
      role: "student",
      enrollments: 5,
      completions: 2,
      joinDate: "2024-09-15",
      status: "active",
      access: "full",
    },
    {
      id: 2,
      name: "Amara Okafor",
      email: "amara.ok@example.com",
      country: "Nigeria",
      role: "student",
      enrollments: 3,
      completions: 1,
      joinDate: "2024-10-02",
      status: "active",
      access: "full",
    },
  ]

  const feedbackAndRatings = [
    {
      id: 1,
      userName: "Samuel M.",
      course: "Web Development",
      rating: 5,
      feedback: "Excellent course, very comprehensive and well-structured. Instructors are knowledgeable.",
      date: "2025-01-18",
      status: "published",
    },
    {
      id: 2,
      userName: "Amara O.",
      course: "Digital Marketing",
      rating: 4,
      feedback: "Great content but would benefit from more real-world case studies.",
      date: "2025-01-17",
      status: "published",
    },
  ]

  const courseCatalog = [
    // A Courses
    { name: "Accounting Fundamentals", cert: true, dip: true, enrollments: 1250 },
    { name: "Agriculture Management", cert: true, dip: true, enrollments: 890 },
    { name: "Android Development", cert: true, dip: true, enrollments: 650 },
    { name: "Anthropology Studies", cert: true, dip: false, enrollments: 320 },
    { name: "Art Therapy", cert: true, dip: true, enrollments: 420 },
    { name: "Artificial Intelligence Basics", cert: true, dip: true, enrollments: 2100 },
    { name: "Aviation Safety", cert: true, dip: true, enrollments: 280 },
    // B Courses
    { name: "Behavioral Psychology", cert: true, dip: true, enrollments: 750 },
    { name: "Biotechnology", cert: true, dip: true, enrollments: 520 },
    { name: "Blockchain Technology", cert: true, dip: true, enrollments: 980 },
    { name: "Business Management", cert: true, dip: true, enrollments: 1650 },
    { name: "Business Analytics", cert: true, dip: true, enrollments: 890 },
    // C Courses
    { name: "Cloud Computing", cert: true, dip: true, enrollments: 1200 },
    { name: "Cybersecurity", cert: true, dip: true, enrollments: 1450 },
    { name: "Culinary Arts", cert: true, dip: true, enrollments: 680 },
    // D Courses
    { name: "Data Analysis", cert: true, dip: true, enrollments: 1550 },
    { name: "Digital Marketing", cert: true, dip: true, enrollments: 1890 },
    // And more...
  ]

  const filteredCourses = courseCatalog.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLevel = !selectedLevel || (selectedLevel === "cert" && course.cert) || (selectedLevel === "dip" && course.dip)
    return matchesSearch && matchesLevel
  })

  const handleEditUser = (userId: string | number) => {
    alert(`Edit user ${userId} - Form would open here`)
  }

  const handleEditRating = (ratingId: string | number) => {
    alert(`Edit rating ${ratingId} - Rating editor would open here`)
  }

  const handleDeleteRating = (ratingId: string | number) => {
    alert(`Rating ${ratingId} deleted`)
  }

  const handleDownloadReport = () => {
    alert("Downloading comprehensive admin report...")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Admin Header */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Edusanna Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Advanced Platform Management System</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleDownloadReport}>
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Link href="/">
                <Button variant="ghost">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-blue-600 font-medium">Total Users</p>
                  <p className="text-3xl font-bold text-blue-900 mt-1">{stats.totalUsers.toLocaleString()}</p>
                  <p className="text-xs text-blue-600 mt-2">↑ {stats.activeUsers} active today</p>
                </div>
                <Users className="w-8 h-8 text-blue-600 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-green-100">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-green-600 font-medium">Courses Active</p>
                  <p className="text-3xl font-bold text-green-900 mt-1">{stats.activeCourses}</p>
                  <p className="text-xs text-green-600 mt-2">Across all levels</p>
                </div>
                <BookOpen className="w-8 h-8 text-green-600 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-purple-600 font-medium">Completion Rate</p>
                  <p className="text-3xl font-bold text-purple-900 mt-1">{stats.completionRate}%</p>
                  <p className="text-xs text-purple-600 mt-2">Course completion</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-600 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-amber-100">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-amber-600 font-medium">Total Enrollments</p>
                  <p className="text-3xl font-bold text-amber-900 mt-1">{stats.totalEnrollments.toLocaleString()}</p>
                  <p className="text-xs text-amber-600 mt-2">Certificates + Diplomas</p>
                </div>
                <Award className="w-8 h-8 text-amber-600 opacity-20" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Storage & System Health */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-blue-600" />
                Storage Monitor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Database Usage</span>
                    <span className="text-sm text-gray-600">{stats.storageUsed}%</span>
                  </div>
                  <Progress value={stats.storageUsed} className="h-2" />
                </div>
                <p className="text-xs text-gray-600">
                  {stats.databaseRecords.toLocaleString()} records • Free tier compatible
                </p>
                {stats.storageUsed > 80 && (
                  <div className="flex gap-2 items-start p-3 bg-amber-50 rounded border border-amber-200">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-amber-700">Monitor storage closely</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-600" />
                Certificates vs Diplomas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Certificates</span>
                    <span className="font-bold">{stats.certificatesIssued.toLocaleString()}</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Diplomas</span>
                    <span className="font-bold">{stats.diplomasIssued.toLocaleString()}</span>
                  </div>
                  <Progress value={28} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                Pending Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-red-50 rounded border border-red-200">
                  <span className="text-sm font-medium">Course Completions</span>
                  <Badge variant="destructive">{stats.pendingCompletions}</Badge>
                </div>
                <Button variant="outline" className="w-full" size="sm">
                  Review All
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-5 w-full mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="completions">Completions</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4">System Status</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Database: Operational</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Authentication: Active</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Course Engine: Running</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Notifications: Enabled</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Quick Actions</h3>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Settings className="w-4 h-4 mr-2" />
                        Platform Settings
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Notifications
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        View Analytics
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full justify-start" 
                        onClick={() => setShowPricingEditor(true)}
                      >
                        <DollarSign className="w-4 h-4 mr-2" />
                        Edit Pricing
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Completions Tab */}
          <TabsContent value="completions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Completions Notifications</CardTitle>
                <p className="text-sm text-gray-600">Users who have recently completed courses</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {completionNotifications.map((completion) => (
                    <div key={completion.id} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{completion.userName}</p>
                          <p className="text-xs text-gray-600 flex items-center gap-1 mt-1">
                            <Mail className="w-3 h-3" />
                            {completion.userEmail}
                          </p>
                          <p className="text-xs text-gray-600 flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            {completion.whatsapp}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">
                            <span className="font-semibold">Location:</span> {completion.city}, {completion.country}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            <span className="font-semibold">Course:</span> {completion.course}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-semibold">Level:</span>
                            <Badge className="ml-1" variant={completion.level === "diploma" ? "default" : "secondary"}>
                              {completion.level.charAt(0).toUpperCase() + completion.level.slice(1)}
                            </Badge>
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">
                            <span className="font-semibold">Score:</span> {completion.score}%
                          </p>
                          <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            Started: {completion.startDate}
                          </p>
                          <p className="text-sm text-gray-600 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            Completed: {completion.finishDate}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <p className="text-sm text-gray-600">Manage user access and view user details</p>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left p-3 font-semibold">Name</th>
                        <th className="text-left p-3 font-semibold">Email</th>
                        <th className="text-left p-3 font-semibold">Country</th>
                        <th className="text-left p-3 font-semibold">Enrollments</th>
                        <th className="text-left p-3 font-semibold">Completions</th>
                        <th className="text-left p-3 font-semibold">Status</th>
                        <th className="text-left p-3 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userManagement.map((user) => (
                        <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="p-3">
                            <p className="font-medium">{user.name}</p>
                            <p className="text-xs text-gray-600">{user.joinDate}</p>
                          </td>
                          <td className="p-3 text-gray-600">{user.email}</td>
                          <td className="p-3">{user.country}</td>
                          <td className="p-3 font-semibold">{user.enrollments}</td>
                          <td className="p-3 font-semibold text-green-600">{user.completions}</td>
                          <td className="p-3">
                            <Badge variant={user.status === "active" ? "default" : "secondary"}>{user.status}</Badge>
                          </td>
                          <td className="p-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEditUser(user.id)}
                              className="text-xs"
                            >
                              <Edit className="w-3 h-3 mr-1" />
                              Edit Access
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Catalog Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6 flex gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Search courses..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="">All Levels</option>
                    <option value="cert">Certificates</option>
                    <option value="dip">Diplomas</option>
                  </select>
                </div>

                <div className="space-y-3">
                  {filteredCourses.map((course, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <p className="font-semibold">{course.name}</p>
                        <p className="text-sm text-gray-600">{course.enrollments.toLocaleString()} enrolled</p>
                      </div>
                      <div className="flex gap-2">
                        {course.cert && <Badge variant="outline">Certificate</Badge>}
                        {course.dip && <Badge>Diploma</Badge>}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Feedback Tab */}
          <TabsContent value="feedback" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Feedback & Ratings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {feedbackAndRatings.map((item) => (
                    <div key={item.id} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="font-semibold">{item.userName}</p>
                          <p className="text-sm text-gray-600">{item.course}</p>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-lg ${i < item.rating ? "text-yellow-400" : "text-gray-300"}`}>
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">{item.feedback}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">{item.date}</span>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditRating(item.id)}
                            className="text-xs"
                          >
                            <Edit className="w-3 h-3 mr-1" />
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteRating(item.id)}
                            className="text-xs text-red-600"
                          >
                            <Trash2 className="w-3 h-3 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Admin Manual */}
        <Card className="mt-8 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900">Admin Dashboard User Manual</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-blue-900 space-y-3">
            <div>
              <h4 className="font-semibold mb-2">Overview Tab</h4>
              <p>View system status and quick access to platform settings, notifications, and analytics.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Completions Tab</h4>
              <p>Monitor all course completions with full details: user info, location, course, level, score, start/finish dates, and WhatsApp contact.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Users Tab</h4>
              <p>Manage user access controls. Edit user details and permissions. View enrollment and completion statistics per user.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Courses Tab</h4>
              <p>Browse all 147+ courses with certificate and diploma options. Search and filter by course name and level. Track enrollment numbers.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Feedback Tab</h4>
              <p>Review user ratings and feedback. Edit or delete ratings as needed. Monitor course quality through user reviews.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Storage Monitor</h4>
              <p>Track database usage and record counts. Optimized for free tier Supabase. Alerts when storage exceeds 80%.</p>
            </div>
          </CardContent>
        </Card>

        {/* Pricing Editor Modal */}
        <AdminPricingEditor isOpen={showPricingEditor} onClose={() => setShowPricingEditor(false)} />
      </div>
    </div>
  )
}
