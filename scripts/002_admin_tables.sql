-- Admin Platform Tables and Enhanced RLS

-- Create institutions table (for academia)
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

-- Create payments table
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

-- Create agreements table (legal agreements tracking)
CREATE TABLE public.agreements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  agreement_type TEXT NOT NULL,
  agreed_at TIMESTAMP DEFAULT now(),
  ip_address TEXT,
  user_agent TEXT,
  version TEXT DEFAULT '1.0'
);

-- Create notifications table
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

-- Create admin_2fa_secrets table (for TOTP 2FA)
CREATE TABLE public.admin_2fa_secrets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  secret TEXT NOT NULL,
  enabled BOOLEAN DEFAULT FALSE,
  backup_codes TEXT[],
  created_at TIMESTAMP DEFAULT now()
);

-- Create admin_sessions table (for audit trail)
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

-- Create admin_action_logs table (detailed audit logging)
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

-- Create institution_users table (linking users to institutions for academia)
CREATE TABLE public.institution_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  institution_id UUID NOT NULL REFERENCES public.institutions(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'student',
  created_at TIMESTAMP DEFAULT now(),
  UNIQUE(institution_id, user_id)
);

-- Create institution_courses table (courses assigned to institutions)
CREATE TABLE public.institution_courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  institution_id UUID NOT NULL REFERENCES public.institutions(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT now(),
  UNIQUE(institution_id, course_id)
);

-- Enable RLS on new tables
ALTER TABLE public.institutions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agreements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_2fa_secrets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_action_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.institution_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.institution_courses ENABLE ROW LEVEL SECURITY;

-- RLS Policies for institutions (admin only)
DROP POLICY IF EXISTS "admin_view_all_institutions" ON public.institutions;
DROP POLICY IF EXISTS "admin_manage_institutions" ON public.institutions;
DROP POLICY IF EXISTS "institution_admins_view_own" ON public.institutions;

CREATE POLICY "admin_view_all_institutions" ON public.institutions FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

CREATE POLICY "admin_manage_institutions" ON public.institutions FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- RLS Policies for payments
DROP POLICY IF EXISTS "users_view_own_payments" ON public.payments;
DROP POLICY IF EXISTS "admin_view_all_payments" ON public.payments;
DROP POLICY IF EXISTS "admin_manage_payments" ON public.payments;

CREATE POLICY "users_view_own_payments" ON public.payments FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "admin_view_all_payments" ON public.payments FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

CREATE POLICY "admin_manage_payments" ON public.payments FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- RLS Policies for agreements
DROP POLICY IF EXISTS "users_view_own_agreements" ON public.agreements;
DROP POLICY IF EXISTS "users_create_agreements" ON public.agreements;
DROP POLICY IF EXISTS "admin_view_all_agreements" ON public.agreements;

CREATE POLICY "users_view_own_agreements" ON public.agreements FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "users_create_agreements" ON public.agreements FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "admin_view_all_agreements" ON public.agreements FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- RLS Policies for notifications
DROP POLICY IF EXISTS "users_view_own_notifications" ON public.notifications;
DROP POLICY IF EXISTS "users_update_own_notifications" ON public.notifications;
DROP POLICY IF EXISTS "admin_view_all_notifications" ON public.notifications;
DROP POLICY IF EXISTS "admin_manage_notifications" ON public.notifications;

CREATE POLICY "users_view_own_notifications" ON public.notifications FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "users_update_own_notifications" ON public.notifications FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "admin_view_all_notifications" ON public.notifications FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

CREATE POLICY "admin_manage_notifications" ON public.notifications FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- RLS Policies for admin 2FA secrets
DROP POLICY IF EXISTS "admins_view_own_2fa" ON public.admin_2fa_secrets;
DROP POLICY IF EXISTS "admins_manage_own_2fa" ON public.admin_2fa_secrets;

CREATE POLICY "admins_view_own_2fa" ON public.admin_2fa_secrets FOR SELECT
  USING (auth.uid() = admin_id);

CREATE POLICY "admins_manage_own_2fa" ON public.admin_2fa_secrets FOR ALL
  USING (auth.uid() = admin_id);

-- RLS Policies for admin sessions
DROP POLICY IF EXISTS "admins_view_own_sessions" ON public.admin_sessions;
DROP POLICY IF EXISTS "admin_view_all_sessions" ON public.admin_sessions;

CREATE POLICY "admins_view_own_sessions" ON public.admin_sessions FOR SELECT
  USING (auth.uid() = admin_id);

CREATE POLICY "admin_view_all_sessions" ON public.admin_sessions FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- RLS Policies for admin action logs
DROP POLICY IF EXISTS "admin_view_action_logs" ON public.admin_action_logs;
DROP POLICY IF EXISTS "admin_create_action_logs" ON public.admin_action_logs;

CREATE POLICY "admin_view_action_logs" ON public.admin_action_logs FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

CREATE POLICY "admin_create_action_logs" ON public.admin_action_logs FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- RLS Policies for institution users
DROP POLICY IF EXISTS "institution_members_view_own" ON public.institution_users;
DROP POLICY IF EXISTS "admin_manage_institution_users" ON public.institution_users;

CREATE POLICY "institution_members_view_own" ON public.institution_users FOR SELECT
  USING (
    auth.uid() = user_id OR
    EXISTS (
      SELECT 1 FROM public.institution_users iu
      WHERE iu.institution_id = institution_users.institution_id
      AND iu.user_id = auth.uid()
      AND iu.role IN ('admin', 'principal')
    )
  );

CREATE POLICY "admin_manage_institution_users" ON public.institution_users FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- RLS Policies for institution courses
DROP POLICY IF EXISTS "admin_view_institution_courses" ON public.institution_courses;
DROP POLICY IF EXISTS "admin_manage_institution_courses" ON public.institution_courses;

CREATE POLICY "admin_view_institution_courses" ON public.institution_courses FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

CREATE POLICY "admin_manage_institution_courses" ON public.institution_courses FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- Create indexes for better performance
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
