# Admin Dashboard Implementation Roadmap

## Status: IN PROGRESS

### Current Issues to Fix
1. **Authentication**: Using localStorage (insecure) instead of Supabase Auth + 2FA
2. **Database**: No proper database tables - using mock data
3. **Admin Credentials**: Hardcoded in code (security risk) - needs to move to secure env vars
4. **2FA**: Not implemented
5. **User Management**: Mock data only, no real database operations
6. **Payments**: Only partially working with Supabase, missing manual payment marking

### Implementation Tasks

#### Task 1: Set up Supabase Database & Tables
- [ ] Create institutions table (for academia)
- [ ] Create payments table (with manual payment marking)
- [ ] Create agreements table (legal tracking)
- [ ] Create notifications table
- [ ] Create admin 2FA secrets table
- [ ] Create admin sessions table (audit trail)
- [ ] Create admin action logs table
- [ ] Enable RLS on all tables
- [ ] Create indexes for performance

**SQL Migration**: `/scripts/002_admin_tables.sql`

#### Task 2: Implement Secure Admin Authentication & 2FA
- [ ] Create secure login system (Supabase Auth)
- [ ] Implement TOTP-based 2FA using speakeasy
- [ ] Add 2FA verification page (`/admin/verify-2fa`)
- [ ] Create session management
- [ ] Implement audit logging for admin actions
- [ ] Secure credential storage in environment variables

**New API Routes**:
- POST `/api/auth/admin-login` - Secure admin login
- POST `/api/auth/verify-2fa` - Verify 2FA code
- POST `/api/auth/setup-2fa` - Setup 2FA for admin
- GET `/api/auth/admin-status` - Check admin auth status

#### Task 3: Build Complete Admin Dashboard with Analytics
- [ ] Update dashboard with real data from Supabase
- [ ] Add advanced analytics:
  - Total users, active users, conversion rates
  - Revenue analytics
  - Course enrollment trends
  - Payment method breakdown
- [ ] Implement date range filtering for analytics
- [ ] Add export functionality for reports
- [ ] Real-time notifications for new payments

**Pages Updated**:
- `/admin/dashboard` - Main dashboard with analytics
- Create `/admin/analytics` - Advanced analytics page

#### Task 4: Create User Management & Payment System
- [ ] Fetch real users from auth.users table
- [ ] Implement user filtering and search
- [ ] Add user details modal
- [ ] Manual user status management
- [ ] Manual payment marking (for offline collections)
- [ ] Payment reconciliation tools

**Pages Updated**:
- `/admin/users` - Complete rewrite with Supabase integration
- `/admin/payments` - Enhanced with manual payment marking

#### Task 5: Build Academia & Notification Pages
- [ ] Create institutions management page (`/admin/academia`)
- [ ] Multi-school management with filters
- [ ] Institution enrollment tracking
- [ ] Create notifications management page (`/admin/notifications`)
- [ ] Notification templates
- [ ] Broadcast notifications to users

**New Pages**:
- `/admin/academia` - Academia/schools management
- `/admin/notifications` - Notification management

#### Task 6: Create Legal Pages & Compliance
- [ ] Privacy Policy page
- [ ] Terms of Service page
- [ ] GDPR compliance page
- [ ] CCPA compliance page
- [ ] Cookie Policy page
- [ ] Cookie banner with acceptance tracking
- [ ] Terms acceptance tracking in database

**New Pages**:
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/gdpr` - GDPR page
- `/ccpa` - CCPA page
- `/cookies` - Cookie Policy

#### Task 7: Final Testing & Deployment
- [ ] Test all admin functions
- [ ] Verify RLS policies are working
- [ ] Test 2FA flow
- [ ] Test payment marking flow
- [ ] Load test analytics queries
- [ ] Security audit
- [ ] Deploy to production

### Security Considerations
- Admin credentials stored in environment variables only (ADMIN_EMAIL, ADMIN_PASSWORD_HASH)
- All admin actions logged to audit_logs table
- RLS policies enforce admin-only access
- 2FA required for admin login
- Session tokens with IP tracking
- All API calls validated and rate-limited

### Database Tables Schema

#### institutions
```
id UUID PRIMARY KEY
name TEXT
country TEXT
city TEXT
contact_email TEXT
contact_phone TEXT
address TEXT
principal_name TEXT
principal_email TEXT
status TEXT (active/inactive/pending)
subscription_tier TEXT (basic/premium/enterprise)
created_at TIMESTAMP
updated_at TIMESTAMP
```

#### payments
```
id UUID PRIMARY KEY
user_id UUID (FK -> auth.users)
enrollment_id UUID (FK -> enrollments)
amount DECIMAL
currency TEXT
payment_method TEXT (paypal/cash/bank_transfer)
status TEXT (pending/completed/failed/refunded)
transaction_id TEXT
notes TEXT
marked_paid_by_admin UUID (FK -> auth.users)
marked_paid_at TIMESTAMP
created_at TIMESTAMP
updated_at TIMESTAMP
```

#### agreements
```
id UUID PRIMARY KEY
user_id UUID (FK -> auth.users)
agreement_type TEXT (terms/privacy/gdpr/ccpa/cookies)
agreed_at TIMESTAMP
ip_address TEXT
user_agent TEXT
version TEXT
```

#### admin_action_logs
```
id UUID PRIMARY KEY
admin_id UUID (FK -> auth.users)
action TEXT
resource_type TEXT
resource_id TEXT
details JSONB
ip_address TEXT
user_agent TEXT
status TEXT (success/failed)
created_at TIMESTAMP
```

### Implementation Status
- ✅ Database schema designed
- ⏳ Database migration in progress
- ⏳ Authentication system in progress
- ⏳ Admin pages in progress
- ⏳ Payment system integration in progress
- ⏳ Legal pages in progress
- ⏳ Testing in progress

### Timeline
Expected completion: This session

### Notes
- Ensure NO hardcoded credentials in code
- Use environment variables for all secrets
- Log all admin actions
- Implement proper error handling
- Add proper loading states
- Implement pagination for large datasets
- Use Supabase RLS for data access control
