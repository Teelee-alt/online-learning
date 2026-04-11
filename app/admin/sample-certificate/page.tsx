'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowLeft, Download, Eye, Loader2 } from 'lucide-react'

export default function SampleCertificateGeneratorPage() {
  const [formData, setFormData] = useState({
    studentName: 'John Doe',
    courseName: 'Web Development Fundamentals',
    certificateType: 'certificate',
    completionDate: new Date().toISOString().split('T')[0],
    certificateId: `CERT-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    skills: 'HTML, CSS, JavaScript, React, Node.js',
  })

  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const generatePreview = async () => {
    setIsGenerating(true)
    try {
      const response = await fetch('/api/certificates/generate-preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        setPreviewUrl(url)
      } else {
        alert('Failed to generate preview')
      }
    } catch (error) {
      console.error('Error generating preview:', error)
      alert('Error generating certificate preview')
    } finally {
      setIsGenerating(false)
    }
  }

  const downloadCertificate = async () => {
    setIsDownloading(true)
    try {
      const response = await fetch('/api/certificates/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${formData.studentName.replace(/\s+/g, '-')}-${formData.certificateType}.pdf`
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      } else {
        alert('Failed to download certificate')
      }
    } catch (error) {
      console.error('Error downloading certificate:', error)
      alert('Error downloading certificate')
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <Link href="/admin" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-3xl font-bold text-blue-900">Sample Certificate Generator</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Form */}
          <Card className="glass-card-light shadow-lg border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">Certificate Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-blue-900 font-medium">Student Name</Label>
                <Input
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  className="border-blue-200 focus:border-blue-500"
                  placeholder="Enter student name"
                />
              </div>

              <div>
                <Label className="text-blue-900 font-medium">Course Name</Label>
                <Input
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                  className="border-blue-200 focus:border-blue-500"
                  placeholder="Enter course name"
                />
              </div>

              <div>
                <Label className="text-blue-900 font-medium">Certificate Type</Label>
                <select
                  name="certificateType"
                  value={formData.certificateType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="certificate">Certificate</option>
                  <option value="diploma">Diploma</option>
                </select>
              </div>

              <div>
                <Label className="text-blue-900 font-medium">Completion Date</Label>
                <Input
                  name="completionDate"
                  type="date"
                  value={formData.completionDate}
                  onChange={handleChange}
                  className="border-blue-200 focus:border-blue-500"
                />
              </div>

              <div>
                <Label className="text-blue-900 font-medium">Certificate ID</Label>
                <Input
                  name="certificateId"
                  value={formData.certificateId}
                  onChange={handleChange}
                  className="border-blue-200 focus:border-blue-500 font-mono text-sm"
                  placeholder="Auto-generated"
                />
                <p className="text-xs text-blue-600 mt-1">
                  Leave empty to auto-generate
                </p>
              </div>

              {formData.certificateType === 'diploma' && (
                <div>
                  <Label className="text-blue-900 font-medium">Skills (Diploma only)</Label>
                  <textarea
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
                    rows={3}
                    placeholder="Enter skills, separated by commas"
                  />
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={generatePreview}
                  disabled={isGenerating}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </>
                  )}
                </Button>
                <Button
                  onClick={downloadCertificate}
                  disabled={isDownloading || !previewUrl}
                  className="flex-1 premium-button"
                >
                  {isDownloading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Downloading...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Preview */}
          <Card className="glass-card-light shadow-lg border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">Certificate Preview</CardTitle>
            </CardHeader>
            <CardContent>
              {previewUrl ? (
                <div className="bg-white rounded-lg border border-blue-200 p-4 h-[500px] overflow-auto">
                  <iframe
                    src={previewUrl}
                    className="w-full h-full border-0"
                    title="Certificate Preview"
                  />
                </div>
              ) : (
                <div className="bg-blue-50 rounded-lg border border-dashed border-blue-300 h-[500px] flex flex-col items-center justify-center text-center p-4">
                  <p className="text-blue-700 font-medium mb-2">No preview yet</p>
                  <p className="text-blue-600 text-sm">
                    Click "Preview" to generate a certificate preview
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Info Box */}
        <Card className="mt-6 bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="font-semibold text-blue-900 mb-3">About This Tool</h3>
            <ul className="space-y-2 text-blue-700 text-sm">
              <li>• Use this tool to test and verify certificate generation</li>
              <li>• Certificates are generated with customizable student details</li>
              <li>• Diplomas include a skills section for displaying course competencies</li>
              <li>• Download generated certificates as PDF files</li>
              <li>• This is for admin testing only - use the main payment system for real certificates</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
