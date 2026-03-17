import { getServerSession } from "next-auth"
import { authOptions } from "./auth"

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)
  return session?.user
}

export async function isAuthenticated() {
  const user = await getCurrentUser()
  return !!user
}

export async function getUserEmail() {
  const user = await getCurrentUser()
  return user?.email
}
