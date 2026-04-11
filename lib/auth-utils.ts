import { createClient } from "@/lib/supabase/client";

// Admin credentials from environment variables for security
const ADMIN_EMAILS = [process.env.NEXT_PUBLIC_ADMIN_EMAIL || "edusannaonlinelearning@gmail.com"];
// Secret codes for admin access (hidden in environment for production)
const SECRET_CODE_1 = process.env.NEXT_PUBLIC_ADMIN_CODE_1 || "Activate";
const SECRET_CODE_2 = process.env.NEXT_PUBLIC_ADMIN_CODE_2 || "Bankai";

export async function authenticateAdmin(email: string, password: string) {
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "edusannaonlinelearning@gmail.com";
  const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "";
  
  if (email === adminEmail && password === adminPassword) {
    return { success: true, role: "admin" };
  }
  return { success: false, role: null };
}

export async function verifySecretAdminCodes(code1: string, code2: string) {
  const isCode1Valid = code1 === SECRET_CODE_1;
  const isCode2Valid = code2 === SECRET_CODE_2;
  return isCode1Valid && isCode2Valid;
}

export async function getAdminStatus() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { isAdmin: false, user: null };

  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "edusannaonlinelearning@gmail.com";
  const isAdmin =
    user.email === adminEmail ||
    user.user_metadata?.is_admin === true;

  return { isAdmin, user };
}

export async function signOutAdmin() {
  const supabase = createClient();
  await supabase.auth.signOut();
  return true;
}
