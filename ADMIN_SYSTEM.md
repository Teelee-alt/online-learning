# Edusanna Admin Dashboard - System Documentation

## Overview

The Edusanna Admin Dashboard is a comprehensive management system for administrators to oversee users, payments, institutions, and notifications. This document covers the technical architecture, authentication flow, and deployment instructions.

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Authentication & Security](#authentication--security)
3. [Admin Pages & Features](#admin-pages--features)
4. [API Endpoints](#api-endpoints)
5. [Database Schema](#database-schema)
6. [Deployment Guide](#deployment-guide)
7. [Troubleshooting](#troubleshooting)

## Architecture Overview

### Technology Stack

- **Frontend**: Next.js 14 (React with App Router)
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Custom JWT-based session management with 2FA
- **UI Components**: shadcn/ui with Tailwind CSS
- **State Management**: Local storage + React hooks

### Key Features

- **Multi-factor Authentication (2FA)**: TOTP-based 2FA for enhanced security
- **Role-based Access Control**: Admin-only access with session validation
- **Analytics Dashboard**: Real-time metrics and statistics
- **User Management**: Create, update, and manage user accounts
- **Payment Tracking**: Monitor certificate and diploma purchases
- **Institution Management**: Multi-school enrollment support
- **Notifications**: Send targeted or broadcast notifications to users
- **Legal Compliance**: Complete privacy policy and terms of service

## Authentication & Security

### Login Flow

1. **Step 1: Email & Password Verification**
   - User enters email and password on `/admin/login`
   - System verifies credentials against admin table
   - Password is validated using bcrypt

2. **Step 2: Session Token Generation**
   - Upon successful authentication, a temporary session token is created
   - Token is stored in localStorage as `tempSessionToken`
   - User is redirected to `/admin/verify-2fa`

3. **Step 3: Two-Factor Authentication (2FA)**
   - User enters 6-digit code from authenticator app
   - Code is verified via `/api/admin/verify-2fa` endpoint
   - On success, a permanent session is created
   - User is redirected to `/admin/dashboard`

### Session Management

- **Session Storage**: Uses `localStorage` for client-side session management
- **Session Keys**:
  - `isAdmin`: Boolean flag indicating admin status
  - `adminSession`: Session token for authenticated requests
  - `adminId`: Unique identifier of the admin user
  - `tempSessionToken`: Temporary token during 2FA verification

### Security Best Practices

- All passwords are hashed using bcrypt
- 2FA codes expire after a configurable duration
- Session tokens are short-lived and validated on each request
- Admin endpoints require middleware validation
- HTTPS enforced in production
- CORS policies configured for trusted origins

## Admin Pages & Features

### 1. Dashboard (`/admin/dashboard`)

**Purpose**: Central hub for admin overview and quick access to management areas

**Components**:
- Admin statistics (Users, Payments, Institutions, Revenue)
- Navigation cards to all admin sections
- Real-time analytics (when database is connected)

**Key Features**:
- At-a-glance metrics
- Quick access to all admin functions
- User session management

### 2. User Management (`/admin/users`)

**Purpose**: Manage user accounts, roles, and statuses

**Features**:
- View all user accounts
- Search and filter by email, status, role
- Edit user information
- Deactivate/activate accounts
- Bulk actions (planned)
- User analytics

**Columns**:
- Email
- Name
- Status (Active, Inactive, Pending)
- Role (User, Instructor, Moderator)
- Joined Date
- Actions (Edit, Deactivate)

### 3. Payment Management (`/admin/payments`)

**Purpose**: Track and manage certificate and diploma payments

**Features**:
- View all payment records
- Filter by status (Pending, Completed, Failed)
- View payment details and receipts
- Mark manual payments as completed
- Refund management
- Payment analytics

**Information Tracked**:
- User email
- Payment type (Certificate/Diploma)
- Amount
- Status
- Payment date
- Transaction ID

### 4. Academia Management (`/admin/academia`)

**Purpose**: Manage educational institutions and multi-school enrollment

**Features**:
- Add new institutions
- View institution details
- Manage principals and contacts
- Track institution subscription tiers
- Monitor student enrollment by institution
- Generate institution-specific reports

**Institution Information**:
- Institution name
- Location (Country, City)
- Principal name and email
- Contact email
- Subscription tier (Basic, Premium, Enterprise)
- Status (Active, Pending, Inactive)

### 5. Notifications (`/admin/notifications`)

**Purpose**: Send notifications to users

**Features**:
- Send targeted notifications to specific users
- Broadcast notifications to all users
- Notification types (Info, Success, Warning, Error)
- View notification history
- Delete notifications
- Track read/unread status

**Notification Types**:
- **Info**: General information
- **Success**: Successful actions
- **Warning**: Warnings or alerts
- **Error**: Error messages

### 6. Legal Hub (`/legal`)

**Purpose**: Display all legal and compliance documents

**Pages**:
- Privacy Policy (`/legal/privacy-policy`)
- Terms of Service (`/legal/terms-of-service`)
- Cookie Policy (`/legal/cookie-policy`)

## API Endpoints

### Authentication Endpoints

#### POST `/api/admin/login`

Login with email and password

**Request**:
```json
{
  "email": "admin@edusanna.com",
  "password": "securepassword"
}
```

**Response**:
```json
{
  "success": true,
  "tempSessionToken": "token_string"
}
```

#### POST `/api/admin/verify-2fa`

Verify 2FA code

**Request**:
```json
{
  "code": "123456",
  "sessionToken": "temp_token"
}
```

**Response**:
```json
{
  "success": true,
  "sessionToken": "permanent_session_token"
}
```

#### POST `/api/admin/logout`

Logout and invalidate session

**Request**:
```json
{
  "sessionToken": "current_session_token"
}
```

### User Management Endpoints

#### GET `/api/admin/users`

Get all users (paginated)

**Query Parameters**:
- `page`: Page number
- `limit`: Results per page
- `search`: Search term
- `status`: Filter by status

#### POST `/api/admin/users/create`

Create new user

#### PUT `/api/admin/users/:id`

Update user information

#### DELETE `/api/admin/users/:id`

Delete user account

### Payment Endpoints

#### GET `/api/admin/payments`

Get all payments

**Query Parameters**:
- `status`: Filter by payment status
- `dateRange`: Filter by date range

#### POST `/api/admin/payments/:id/mark-paid`

Mark payment as completed

#### POST `/api/admin/payments/:id/refund`

Process refund

### Institution Endpoints

#### GET `/api/admin/academia`

Get all institutions

#### POST `/api/admin/academia`

Create new institution

#### PUT `/api/admin/academia/:id`

Update institution details

#### DELETE `/api/admin/academia/:id`

Delete institution

### Notification Endpoints

#### POST `/api/admin/notifications/send`

Send notification

**Request**:
```json
{
  "userId": "optional_user_id",
  "title": "Notification Title",
  "message": "Notification message",
  "type": "info"
}
```

#### GET `/api/admin/notifications`

Get notification history

## Database Schema

### Admin Users Table

```sql
CREATE TABLE admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  totp_secret VARCHAR(255),
  2fa_enabled BOOLEAN DEFAULT true,
  backup_codes TEXT[],
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Sessions Table

```sql
CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id UUID REFERENCES admin_users(id) ON DELETE CASCADE,
  token VARCHAR(255) UNIQUE NOT NULL,
  session_type VARCHAR(50), -- 'temp' or 'permanent'
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 2FA Codes Table

```sql
CREATE TABLE two_factor_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id UUID REFERENCES admin_users(id) ON DELETE CASCADE,
  code_hash VARCHAR(255) NOT NULL,
  session_token VARCHAR(255),
  expires_at TIMESTAMP NOT NULL,
  used BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Deployment Guide

### Prerequisites

- Node.js 18+
- npm or pnpm
- Supabase account and project
- TOTP-compatible authenticator app (Google Authenticator, Microsoft Authenticator, etc.)

### Environment Variables

Create `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Installation & Setup

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd edusanna
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up database**
   - Create Supabase project
   - Run migration scripts from `/scripts` folder
   - Create admin user in database
   - Generate TOTP secret for 2FA

4. **Configure 2FA**
   - Generate TOTP secret for admin account
   - Save backup codes
   - Scan QR code with authenticator app

5. **Run development server**
   ```bash
   pnpm dev
   ```

6. **Access admin panel**
   - Navigate to `http://localhost:3000/admin/login`
   - Enter credentials
   - Complete 2FA verification

### Production Deployment

1. **Build for production**
   ```bash
   pnpm build
   ```

2. **Deploy to Vercel**
   ```bash
   vercel deploy --prod
   ```

3. **Configure environment variables** in Vercel dashboard

4. **Enable HTTPS** (automatic on Vercel)

5. **Set up backup** for database

## Troubleshooting

### Issue: Login page redirects to /login indefinitely

**Solution**:
- Clear localStorage and reload
- Check that admin credentials are correct in database
- Verify admin table exists and has proper structure

### Issue: 2FA verification fails

**Solution**:
- Ensure system time is synchronized (TOTP is time-sensitive)
- Verify TOTP secret is correct
- Check that code hasn't expired (typically 30 seconds)
- Use backup codes if 2FA app has issues

### Issue: Session expires too quickly

**Solution**:
- Check session duration settings in API
- Verify token is being saved correctly in localStorage
- Check browser's localStorage is enabled

### Issue: Admin dashboard shows no data

**Solution**:
- Verify Supabase connection string
- Check that database tables exist
- Verify Row Level Security (RLS) policies are configured
- Check that admin user has permissions

### Issue: Payment tracking not working

**Solution**:
- Verify Stripe integration is configured
- Check API keys are correct
- Ensure payment webhooks are set up
- Verify database schema is correct

## Support & Maintenance

### Regular Maintenance Tasks

- Monitor admin user activity logs
- Review session management and security logs
- Update admin credentials periodically
- Backup database regularly
- Update dependencies and security patches

### Monitoring

Set up monitoring for:
- API response times
- Error rates
- Failed login attempts
- Session management
- Database performance

### Scaling Considerations

- Implement database indexing for large datasets
- Add caching layer for analytics
- Implement pagination for large result sets
- Consider load balancing for high traffic
- Set up CDN for static assets

---

**Last Updated**: April 15, 2026

For more information, visit the main documentation or contact the development team.
