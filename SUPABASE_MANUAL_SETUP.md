# Supabase Manual Setup Instructions

## How to Create the Admin Tables

Since the automated SQL execution has issues, please follow these steps to manually create the tables in your Supabase dashboard:

### Step 1: Access Supabase SQL Editor
1. Go to your Supabase project dashboard
2. Click on "SQL Editor" in the left sidebar
3. Click "New Query" button

### Step 2: Copy and Execute SQL Commands

Paste the following SQL commands one by one (or all at once) into the SQL editor and click "Run":

```sql
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
  status TEXT DEFAULT 'active',
  subscription_tier TEXT DEFAULT 'basic',
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
CREATE TABLE IF NOT EXISTS public.agreements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  agreement_type TEXT NOT NULL,
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
  type TEXT DEFAULT 'info',
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
  backup_codes TEXT[],
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
  status TEXT DEFAULT 'success',
  created_at TIMESTAMP DEFAULT now()
);

-- Create institution_users table (linking users to institutions for academia)
CREATE TABLE IF NOT EXISTS public.institution_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  institution_id UUID NOT NULL REFERENCES public.institutions(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'student',
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

-- Enable RLS on all tables
ALTER TABLE public.institutions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agreements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_2fa_secrets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_action_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.institution_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.institution_courses ENABLE ROW LEVEL SECURITY;

-- Create indexes
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
```

### Step 3: Add RLS Policies

After creating the tables, you need to add RLS (Row Level Security) policies. Add these policies to restrict access:

```sql
-- RLS Policies for institutions (admin only)
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
```

### Step 4: Verify Tables Were Created
1. Go to "Table Editor" in your Supabase dashboard
2. You should see all the new tables listed
3. Click on each table to verify the columns were created correctly

### Step 5: Update Environment Variables (if needed)
Ensure these environment variables are set in your `.env.local` file:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Step 6: Verify RLS is Enabled
1. Go to "Authentication" > "Policies" in your Supabase dashboard
2. Verify that RLS is enabled for each table
3. Check that the policies are listed correctly

## Next Steps

After setting up the tables:
1. The admin authentication system will use these tables
2. User management will pull real data from the database
3. Payment tracking will work with the payments table
4. 2FA will store secrets in the admin_2fa_secrets table
5. All admin actions will be logged in admin_action_logs

## Troubleshooting

If you encounter any errors:
1. Check that the tables don't already exist (drop them if needed)
2. Verify all foreign key references are correct
3. Ensure the auth.users and enrollments tables exist
4. Check RLS policies for any conflicts

## Questions?
Refer to the Supabase documentation:
- https://supabase.com/docs/guides/database/overview
- https://supabase.com/docs/guides/auth/row-level-security
