"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { LogOut, ArrowLeft, Plus, Search, Edit2, Trash2, Building2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

interface Institution {
  id: string
  name: string
  country: string
  city: string
  principal_name?: string
  principal_email?: string
  status: "active" | "inactive" | "pending"
  subscription_tier: "basic" | "premium" | "enterprise"
  created_at: string
}

export default function AcademiaPage() {
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)
  const [institutions, setInstitutions] = useState<Institution[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    city: "",
    principal_name: "",
    principal_email: "",
    contact_email: "",
  })

  useEffect(() => {
    const admin = localStorage.getItem("isAdmin") === "true"
    if (!admin) {
      router.push("/login")
      return
    }
    setIsAdmin(true)
    loadInstitutions()
  }, [router])

  const loadInstitutions = async () => {
    // This will load real data once database is set up
    // For now, show empty state with instructions
    setInstitutions([])
  }

  const handleLogout = () => {
    localStorage.setItem("isAdmin", "false")
    localStorage.removeItem("adminSession")
    window.location.href = "/login"
  }

  const handleAddInstitution = async () => {
    setIsLoading(true)
    try {
      // Add institution logic will go here
      // This will call an API endpoint once database is set up
      console.log("Adding institution:", formData)
      setIsOpen(false)
      setFormData({
        name: "",
        country: "",
        city: "",
        principal_name: "",
        principal_email: "",
        contact_email: "",
      })
    } catch (err) {
      console.error("Error adding institution:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const filteredInstitutions = institutions.filter(
    (inst) =>
      inst.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inst.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inst.city.toLowerCase().includes(searchTerm.toLowerCase())
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
            <h1 className="text-2xl font-bold gradient-text">Academia Management</h1>
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
                placeholder="Search by name, country, or city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 border-blue-200"
              />
            </div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button className="premium-button">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Institution
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Add New Institution</DialogTitle>
                  <DialogDescription>
                    Create a new school or educational institution
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Institution Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., St. Mary's High School"
                      className="mt-1"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g., Zimbabwe"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g., Harare"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="principal">Principal Name</Label>
                    <Input
                      id="principal"
                      value={formData.principal_name}
                      onChange={(e) => setFormData({ ...formData, principal_name: e.target.value })}
                      placeholder="e.g., John Doe"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Contact Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.contact_email}
                      onChange={(e) => setFormData({ ...formData, contact_email: e.target.value })}
                      placeholder="school@example.com"
                      className="mt-1"
                    />
                  </div>
                  <Button
                    onClick={handleAddInstitution}
                    disabled={isLoading || !formData.name || !formData.country || !formData.city}
                    className="w-full premium-button mt-4"
                  >
                    {isLoading ? "Adding..." : "Add Institution"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Institutions Table */}
          <Card className="glass-card-light">
            <CardHeader className="border-b border-blue-100">
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Institutions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {filteredInstitutions.length === 0 ? (
                <div className="p-12 text-center">
                  <Building2 className="w-12 h-12 text-blue-200 mx-auto mb-4" />
                  <p className="text-blue-700 font-medium mb-2">No institutions yet</p>
                  <p className="text-gray-600 text-sm">Create your first institution to get started with academia management</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-50 border-b border-blue-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Location</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Principal</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Tier</th>
                        <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-blue-100">
                      {filteredInstitutions.map((inst) => (
                        <tr key={inst.id} className="hover:bg-blue-50/50 transition">
                          <td className="px-6 py-4 text-sm text-gray-900 font-medium">{inst.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {inst.city}, {inst.country}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {inst.principal_name || "N/A"}
                          </td>
                          <td className="px-6 py-4 text-sm">
                            <span
                              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                                inst.status === "active"
                                  ? "bg-green-100 text-green-800"
                                  : inst.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {inst.status.charAt(0).toUpperCase() + inst.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                              {inst.subscription_tier.charAt(0).toUpperCase() + inst.subscription_tier.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <div className="flex justify-center gap-2">
                              <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                                <Edit2 className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="glass-card-light">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-gray-600 mb-1">Total Institutions</p>
                <p className="text-3xl font-bold text-blue-900">{institutions.length}</p>
              </CardContent>
            </Card>
            <Card className="glass-card-light">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-gray-600 mb-1">Active</p>
                <p className="text-3xl font-bold text-green-600">
                  {institutions.filter((i) => i.status === "active").length}
                </p>
              </CardContent>
            </Card>
            <Card className="glass-card-light">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-gray-600 mb-1">Countries</p>
                <p className="text-3xl font-bold text-purple-600">
                  {new Set(institutions.map((i) => i.country)).size}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
