'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Verify2FAPage() {
  const [code, setCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // 2FA verification - using a simple code for now
    // In production, integrate with proper 2FA service
    if (code === '000000' || code === process.env.NEXT_PUBLIC_2FA_CODE) {
      localStorage.setItem('admin2FAVerified', 'true')
      window.location.href = '/admin/dashboard'
      return
    }

    setError('Invalid verification code. Please try again.')
    setCode('')
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="w-full max-w-md">
        <Link href="/login" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Login
        </Link>

        <Card className="glass-card-light shadow-lg border-blue-100">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>

            <h1 className="text-2xl font-bold text-blue-900 mb-2">Two-Factor Authentication</h1>
            <p className="text-blue-700 mb-8">
              Enter your verification code to continue
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="000000"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value.slice(0, 6))
                    setError('')
                  }}
                  maxLength={6}
                  className="h-12 text-center text-2xl tracking-widest border-blue-200 focus:border-blue-500 focus:ring-blue-500 font-mono"
                  disabled={isLoading}
                />
                {error && (
                  <p className="text-red-600 text-sm mt-2">{error}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={code.length !== 6 || isLoading}
                className="w-full premium-button h-12 text-lg"
              >
                {isLoading ? 'Verifying...' : 'Verify Code'}
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-blue-200">
              <p className="text-sm text-blue-600">
                For testing: Use code <span className="font-mono font-bold">000000</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
