"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LogOut, ArrowLeft, Download, RotateCw, Trash2, Search, FileText } from "lucide-react"
import { Input } from "@/components/ui/input"

interface Certificate {
  id: string
  certificateId: string
  studentName: string
  email: string
  course: string
  type: "certificate" | "diploma"
  issuedDate: string
  expiryDate?: string
  verified: boolean
}

export default function AdminCertificatesPage() {
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)
  const [certificates, setCertificates] = useState<Certificate[]>([])
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

    // Load certificates from localStorage (placeholder for database integration)
    loadCertificates()
  }, [router])

  const loadCertificates = () => {
    // Placeholder - in production, this would fetch from Supabase
    const mockCertificates: Certificate[] = []
    setCertificates(mockCertificates)
  }

  const handleLogout = () => {
    localStorage.setItem("isAdmin", "false")
    localStorage.removeItem("adminEmail")
    window.location.href = "/login"
  }

  const handleRegenerateCertificate = async (certificateId: string) => {
    if (confirm("Are you sure you want to regenerate this certificate?")) {
      setIsLoading(true)
      // In production, this would call the PDF generation API
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsLoading(false)
    }
  }

  const handleDeleteCertificate = (certificateId: string) => {
    if (confirm("Are you sure you want to delete this certificate? This action cannot be undone.")) {
      setCertificates(certificates.filter(c => c.id !== certificateId))
    }
  }

  const filteredCertificates = certificates.filter(cert =>
    cert.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.certificateId.toLowerCase().includes(searchTerm.toLowerCase())
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
            <h1 className="text-2xl font-bold gradient-text">Certificates</h1>
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
          {/* Search */}
          <div className="mb-8 flex-1 relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search by name, email, or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 border-blue-200"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <Card className="glass-card-light">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-gray-600 mb-1">Total Certificates</p>
                <p className="text-3xl font-bold text-blue-900">{certificates.length}</p>
              </CardContent>
            </Card>
            <Card className="glass-card-light">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-gray-600 mb-1">Verified</p>
                <p className="text-3xl font-bold text-green-600">{certificates.filter(c => c.verified).length}</p>
              </CardContent>
            </Card>
            <Card className="glass-card-light">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-gray-600 mb-1">Diplomas</p>
                <p className="text-3xl font-bold text-purple-600">{certificates.filter(c => c.type === "diploma").length}</p>
              </CardContent>
            </Card>
          </div>

          {/* Certificates Table */}
          <Card className="glass-card-light">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-50 border-b border-blue-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Certificate ID</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Student</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Course</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Issued Date</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                      <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-100">
                    {filteredCertificates.length > 0 ? (
                      filteredCertificates.map((cert) => (
                        <tr key={cert.id} className="hover:bg-blue-50/50 transition">
                          <td className="px-6 py-4 text-sm font-mono text-gray-900 font-medium">{cert.certificateId}</td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">{cert.studentName}</div>
                            <div className="text-xs text-gray-500">{cert.email}</div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{cert.course}</td>
                          <td className="px-6 py-4 text-sm">
                            <Badge className={cert.type === "diploma" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"}>
                              {cert.type === "diploma" ? "Diploma" : "Certificate"}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{cert.issuedDate}</td>
                          <td className="px-6 py-4">
                            <Badge className={cert.verified ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                              {cert.verified ? "Verified" : "Pending"}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <div className="flex justify-center gap-2">
                              <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                                <Download className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-green-600 hover:bg-green-50"
                                disabled={isLoading}
                                onClick={() => handleRegenerateCertificate(cert.id)}
                              >
                                <RotateCw className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-red-600 hover:bg-red-50"
                                onClick={() => handleDeleteCertificate(cert.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                          <FileText className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                          <p>No certificates found</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
