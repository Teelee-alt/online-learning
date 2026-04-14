-- Admin Platform Tables and Enhanced RLS

-- Create institutions table (for academia)
CREATE TABLE IF NOT EXISTS public.institutions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  country TEXT NOT NULL,
  city TEXT NOT NULL,
  contact_email TEXT,
  contact_phone TEXT,
  address TEXT,
  principal_name TEXT,
  principal_email TEXT,
  status TEXT DEFAULT 'active', -- 'active', 'inactive', 'pending'
  subscription_tier TEXT DEFAULT 'basic', -- 'basic', 'premium', 'enterprise'
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Create payments table
CREATE TABLE IF NOT EXISTS public.payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  enrollment_id UUID REFERENCES public.enrollments(id) ON DELETE CASCADE,
  amount DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  payment_method TEXT NOT NULL, -- 'paypal', 'cash', 'bank_transfer'
  status TEXT DEFAULT 'pending', -- 'pending', 'completed', 'failed', 'refunded'
  transaction_id TEXT,
  notes TEXT,
  marked_paid_by_admin UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  marked_paid_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Create agreements table (legal agreements tracking)
CREATE TABLE IF NOT EXISTS public.agreements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  agreement_type TEXT NOT NULL, -- 'terms', 'privacy', 'gdpr', 'ccpa', 'cookies'
  agreed_at TIMESTAMP DEFAULT now(),
  ip_address TEXT,
  user_agent TEXT,
  version TEXT DEFAULT '1.0'
);

-- Create notifications table
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT DEFAULT 'info', -- 'info', 'warning', 'success', 'error'
  read BOOLEAN DEFAULT FALSE,
  action_url TEXT,
  created_at TIMESTAMP DEFAULT now(),
  read_at TIMESTAMP
);

-- Create admin_2fa_secrets table (for TOTP 2FA)
CREATE TABLE IF NOT EXISTS public.admin_2fa_secrets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  secret TEXT NOT NULL,
  enabled BOOLEAN DEFAULT FALSE,
  backup_codes TEXT[], -- JSON array of backup codes
  created_at TIMESTAMP DEFAULT now()
);

-- Create admin_sessions table (for audit trail)
CREATE TABLE IF NOT EXISTS public.admin_sessions (
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
CREATE TABLE IF NOT EXISTS public.admin_action_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  action TEXT NOT NULL,
  resource_type TEXT,
  resource_id TEXT,
  details JSONB,
  ip_address TEXT,
  user_agent TEXT,
  status TEXT DEFAULT 'success', -- 'success', 'failed'
  created_at TIMESTAMP DEFAULT now()
);

-- Create institution_users table (linking users to institutions for academia)
CREATE TABLE IF NOT EXISTS public.institution_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  institution_id UUID NOT NULL REFERENCES public.institutions(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'student', -- 'student', 'teacher', 'admin', 'principal'
  created_at TIMESTAMP DEFAULT now(),
  UNIQUE(institution_id, user_id)
);

-- Create institution_courses table (courses assigned to institutions)
CREATE TABLE IF NOT EXISTS public.institution_courses (
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

-- RLS Policies for institutions
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

CREATE POLICY "institution_admins_view_own" ON public.institutions FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.institution_users
      WHERE institution_id = institutions.id 
      AND user_id = auth.uid() 
      AND role IN ('admin', 'principal')
    )
  );

-- RLS Policies for payments
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
CREATE POLICY "admins_view_own_2fa" ON public.admin_2fa_secrets FOR SELECT
  USING (auth.uid() = admin_id);

CREATE POLICY "admins_manage_own_2fa" ON public.admin_2fa_secrets FOR ALL
  USING (auth.uid() = admin_id);

-- RLS Policies for admin sessions
CREATE POLICY "admins_view_own_sessions" ON public.admin_sessions FOR SELECT
  USING (auth.uid() = admin_id);

CREATE POLICY "admin_view_all_sessions" ON public.admin_sessions FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- RLS Policies for admin action logs
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
CREATE INDEX IF NOT EXISTS idx_payments_user_id ON public.payments(user_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON public.payments(status);
CREATE INDEX IF NOT EXISTS idx_agreements_user_id ON public.agreements(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON public.notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_read ON public.notifications(read);
CREATE INDEX IF NOT EXISTS idx_admin_action_logs_admin_id ON public.admin_action_logs(admin_id);
CREATE INDEX IF NOT EXISTS idx_admin_action_logs_created_at ON public.admin_action_logs(created_at);
CREATE INDEX IF NOT EXISTS idx_institution_users_institution_id ON public.institution_users(institution_id);
CREATE INDEX IF NOT EXISTS idx_institution_users_user_id ON public.institution_users(user_id);
