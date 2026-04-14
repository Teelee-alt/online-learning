import { NextRequest, NextResponse } from 'next/server';

// Hardcoded SQL statements for direct execution
const adminTablesMigration = `
DROP TABLE IF EXISTS public.institution_courses CASCADE;
DROP TABLE IF EXISTS public.institution_users CASCADE;
DROP TABLE IF EXISTS public.institutions CASCADE;
DROP TABLE IF EXISTS public.admin_action_logs CASCADE;
DROP TABLE IF EXISTS public.admin_sessions CASCADE;
DROP TABLE IF EXISTS public.admin_2fa_secrets CASCADE;
DROP TABLE IF EXISTS public.agreements CASCADE;
DROP TABLE IF EXISTS public.notifications CASCADE;
DROP TABLE IF EXISTS public.payments CASCADE;

CREATE TABLE public.institutions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  country TEXT NOT NULL,
  city TEXT NOT NULL,
  contact_email TEXT,
  contact_phone TEXT,
  address TEXT,
  principal_name TEXT,
  principal_email TEXT,
  status TEXT DEFAULT 'active',
  subscription_tier TEXT DEFAULT 'basic',
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

CREATE TABLE public.payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  enrollment_id UUID REFERENCES public.enrollments(id) ON DELETE CASCADE,
  amount DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  payment_method TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  transaction_id TEXT,
  notes TEXT,
  marked_paid_by_admin UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  marked_paid_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

CREATE TABLE public.agreements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  agreement_type TEXT NOT NULL,
  agreed_at TIMESTAMP DEFAULT now(),
  ip_address TEXT,
  user_agent TEXT,
  version TEXT DEFAULT '1.0'
);

CREATE TABLE public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT DEFAULT 'info',
  read BOOLEAN DEFAULT FALSE,
  action_url TEXT,
  created_at TIMESTAMP DEFAULT now(),
  read_at TIMESTAMP
);

CREATE TABLE public.admin_2fa_secrets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  secret TEXT NOT NULL,
  enabled BOOLEAN DEFAULT FALSE,
  backup_codes TEXT[],
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE public.admin_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  session_token TEXT UNIQUE NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  login_time TIMESTAMP DEFAULT now(),
  logout_time TIMESTAMP,
  is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE public.admin_action_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  action TEXT NOT NULL,
  resource_type TEXT,
  resource_id TEXT,
  details JSONB,
  ip_address TEXT,
  user_agent TEXT,
  status TEXT DEFAULT 'success',
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE public.institution_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  institution_id UUID NOT NULL REFERENCES public.institutions(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'student',
  created_at TIMESTAMP DEFAULT now(),
  UNIQUE(institution_id, user_id)
);

CREATE TABLE public.institution_courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  institution_id UUID NOT NULL REFERENCES public.institutions(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT now(),
  UNIQUE(institution_id, course_id)
);

ALTER TABLE public.institutions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agreements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_2fa_secrets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_action_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.institution_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.institution_courses ENABLE ROW LEVEL SECURITY;

CREATE INDEX idx_payments_user_id ON public.payments(user_id);
CREATE INDEX idx_payments_status ON public.payments(status);
CREATE INDEX idx_agreements_user_id ON public.agreements(user_id);
CREATE INDEX idx_notifications_user_id ON public.notifications(user_id);
CREATE INDEX idx_notifications_read ON public.notifications(read);
CREATE INDEX idx_admin_action_logs_admin_id ON public.admin_action_logs(admin_id);
CREATE INDEX idx_admin_action_logs_created_at ON public.admin_action_logs(created_at);
CREATE INDEX idx_institution_users_institution_id ON public.institution_users(institution_id);
CREATE INDEX idx_institution_users_user_id ON public.institution_users(user_id);
CREATE INDEX idx_institutions_status ON public.institutions(status);
CREATE INDEX idx_institutions_country ON public.institutions(country);
`;

export async function POST(request: NextRequest) {
  // Check for secret token
  const authHeader = request.headers.get('authorization');
  const expectedToken = process.env.MIGRATION_SECRET_TOKEN || 'migration-secret-12345';
  
  if (authHeader !== `Bearer ${expectedToken}`) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    // Return migration script for manual execution
    return NextResponse.json({
      success: true,
      message: 'Use this SQL directly in Supabase SQL Editor',
      sql: adminTablesMigration,
      instructions: 'Copy the SQL above and paste it into the Supabase SQL Editor to run the migration'
    });
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Error preparing migration',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
