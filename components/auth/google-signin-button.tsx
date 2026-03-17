"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Chrome } from "lucide-react"

export function GoogleSignInButton() {
  return (
    <Button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      variant="outline"
      className="w-full"
    >
      <Chrome className="mr-2 h-4 w-4" />
      Continue with Google
    </Button>
  )
}
