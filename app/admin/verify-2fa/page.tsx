'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, ArrowLeft, Lock } from 'lucide-react'
import Link from 'next/link'

export default function Verify2FAPage() {
  const router = useRouter()
  const [code, setCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [sessionToken, setSessionToken] = useState('')

  useEffect(() => {
    // Get temp session token from localStorage
    const token = localStorage.getItem('tempSessionToken')
    if (!token) {
      router.push('/login')
      return
    }
    setSessionToken(token)
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/admin/verify-2fa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code,
          sessionToken,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        
        // Clear temp token
        localStorage.removeItem('tempSessionToken')
        
        // Store verified session
        localStorage.setItem('admin2FAVerified', 'true')
        
        // Redirect to dashboard
        router.push('/admin/dashboard')
      } else {
        const data = await response.json()
        setError(data.error || 'Invalid 2FA code')
      }
    } catch (err) {
      console.error('[2FA Verification Error]', err)
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/login" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Login
          </Link>
          <div className="flex flex-col items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-blue-900">Two-Factor Authentication</h1>
          </div>
          <p className="text-blue-700">Enter the 6-digit code from your authenticator app</p>
        </div>

        {/* 2FA Form */}
        <Card className="glass-card-light shadow-lg border-blue-100">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl text-blue-900">Verify Your Identity</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm font-medium">{error}</p>
                </div>
              )}

              <div>
                <label className="flex items-center text-blue-900 mb-2 font-medium">
                  <Lock className="w-4 h-4 mr-2" />
                  Authentication Code
                </label>
                <Input
                  id="code"
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="000000"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value.replace(/\D/g, '').slice(0, 6))
                    setError('')
                  }}
                  className="h-12 text-center text-2xl tracking-widest border-blue-200 focus:border-blue-500 focus:ring-blue-500 font-mono"
                  disabled={isLoading}
                  required
                />
                <p className="text-xs text-gray-600 mt-2">Enter the 6-digit code from your authenticator app</p>
              </div>

              <Button
                type="submit"
                disabled={isLoading || code.length !== 6}
                className="w-full premium-button h-12 text-lg"
              >
                {isLoading ? 'Verifying...' : 'Verify Code'}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-blue-100">
              <p className="text-sm text-gray-600 text-center">
                Don&apos;t have access to your authenticator app?{' '}
                <Link href="/admin/backup-codes" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Use backup code
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Help Text */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Need help?</strong> Open your authenticator app (Google Authenticator, Microsoft Authenticator, etc.)
            and enter the 6-digit code shown for Edusanna.
          </p>
        </div>
      </div>
    </div>
  )
}
