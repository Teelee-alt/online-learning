# Getting Started with Edusanna Admin Dashboard

Welcome to the Edusanna Admin Dashboard! This guide will help you get up and running quickly.

## Quick Start (5 minutes)

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Set Up Environment Variables

Create `.env.local` in the root directory:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

### 3. Start Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Access Admin Dashboard

1. Go to [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
2. Enter your admin credentials
3. Complete 2FA verification
4. You're in! 🎉

## Project Structure

```
edusanna/
├── app/
│   ├── admin/
│   │   ├── dashboard/          # Main admin dashboard
│   │   ├── users/              # User management
│   │   ├── payments/           # Payment tracking
│   │   ├── academia/           # Institution management
│   │   ├── notifications/      # Notification management
│   │   ├── login/              # Admin login
│   │   └── verify-2fa/         # 2FA verification
│   ├── legal/
│   │   ├── privacy-policy/     # Privacy policy
│   │   ├── terms-of-service/   # Terms of service
│   │   ├── cookie-policy/      # Cookie policy
│   │   └── page.tsx            # Legal hub
│   ├── api/
│   │   └── admin/
│   │       ├── login.ts        # Login endpoint
│   │       ├── verify-2fa.ts   # 2FA verification
│   │       ├── logout.ts       # Logout endpoint
│   │       └── ...
│   └── layout.tsx              # Root layout
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── admin/                  # Admin-specific components
│   └── ...
├── hooks/
│   └── use-secret-admin-access.ts  # Secret admin mode
├── lib/
│   ├── auth.ts                 # Authentication utilities
│   └── ...
├── scripts/
│   └── setup-database.sql      # Database setup
├── public/
│   ├── favicon.ico
│   └── edusanna-logo.png
└── ...
```

## Key Pages Overview

### Public Pages

- **Home** (`/`) - Landing page with platform overview
- **Login** (`/login`) - User login
- **Signup** (`/signup`) - User registration
- **Verify Certificate** (`/verify`) - Certificate verification

### Legal Pages

- **Legal Hub** (`/legal`) - Overview of all legal documents
- **Privacy Policy** (`/legal/privacy-policy`) - Data privacy information
- **Terms of Service** (`/legal/terms-of-service`) - Terms and conditions
- **Cookie Policy** (`/legal/cookie-policy`) - Cookie usage information

### Admin Pages (Requires 2FA)

- **Admin Login** (`/admin/login`) - Admin authentication
- **2FA Verification** (`/admin/verify-2fa`) - Two-factor authentication
- **Dashboard** (`/admin/dashboard`) - Admin overview
- **User Management** (`/admin/users`) - Manage users
- **Payment Management** (`/admin/payments`) - Track payments
- **Academia Management** (`/admin/academia`) - Manage institutions
- **Notifications** (`/admin/notifications`) - Send notifications
- **Certificates** (`/admin/certificates`) - Manage certificates
- **Settings** (`/admin/settings`) - Admin settings

## Authentication Flow

```
┌─────────────────┐
│  Admin Login    │
│  (Email+Pass)   │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────┐
│ Email & Password Check      │
│ (bcrypt verification)       │
└────────┬────────────────────┘
         │
         ▼
┌─────────────────────────────┐
│ Generate Temp Session Token │
│ (valid for 10 minutes)      │
└────────┬────────────────────┘
         │
         ▼
┌──────────────────────────────┐
│  2FA Verification Required   │
│  (TOTP 6-digit code)         │
└────────┬─────────────────────┘
         │
         ▼
┌────────────────────────────────┐
│ Verify 2FA Code                │
│ Create Permanent Session       │
└────────┬───────────────────────┘
         │
         ▼
┌──────────────────────────────────┐
│  Admin Dashboard Access Granted  │
│  (Session stored in localStorage)│
└───────────────────────────────────┘
```

## Development Tips

### Testing the Admin System

1. **Create Test Admin User**
   ```sql
   INSERT INTO admin_users (email, password_hash, name, totp_secret, 2fa_enabled)
   VALUES (
     'test@edusanna.com',
     '$2b$10$...', -- bcrypt hash of password
     'Test Admin',
     'YOUR_TOTP_SECRET',
     true
   );
   ```

2. **Generate TOTP Secret**
   ```bash
   node -e "console.log(require('speakeasy').generateSecret({name: 'Edusanna'}).base32)"
   ```

3. **Generate Test 2FA Code**
   ```bash
   node -e "console.log(require('speakeasy').totp({secret: 'YOUR_SECRET'}))"
   ```

### Useful npm Scripts

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run linting
pnpm type-check       # Check TypeScript

# Database
pnpm db:migrate       # Run database migrations
pnpm db:seed          # Seed test data
pnpm db:reset         # Reset database
```

### Debugging

Enable debug logging by setting environment variable:

```bash
DEBUG=edusanna:* pnpm dev
```

### Browser DevTools

In the admin dashboard, you can use the browser console to debug:

```javascript
// Check admin session
console.log(localStorage.getItem('adminSession'));

// Check admin status
console.log(localStorage.getItem('isAdmin'));

// Clear session (useful for testing logout)
localStorage.removeItem('adminSession');
localStorage.removeItem('isAdmin');
```

## Common Tasks

### Add a New Admin User

1. Access database directly via Supabase dashboard
2. Insert into `admin_users` table:
   ```sql
   INSERT INTO admin_users (email, password_hash, name)
   VALUES ('neoadmin@edusanna.com', 'bcrypt_hash', 'New Admin');
   ```
3. Admin will be prompted to set up 2FA on first login

### Reset Admin Password

```sql
UPDATE admin_users 
SET password_hash = '$2b$10$...' 
WHERE email = 'admin@edusanna.com';
```

### Enable/Disable 2FA for Admin

```sql
UPDATE admin_users 
SET 2fa_enabled = false 
WHERE email = 'admin@edusanna.com';
```

### View Admin Login History

```sql
SELECT admin_id, created_at FROM sessions 
WHERE session_type = 'permanent' 
ORDER BY created_at DESC 
LIMIT 10;
```

## Troubleshooting

### Page Blank After Login

**Solution**:
1. Check browser console for errors
2. Verify admin credentials in database
3. Clear localStorage and try again
4. Check that 2FA code hasn't expired

### 2FA Not Working

**Solution**:
1. Verify system time is correct (TOTP is time-sensitive)
2. Check that authenticator app is synced
3. Try a different authenticator app
4. Use backup codes if available

### Database Connection Error

**Solution**:
1. Verify Supabase URL and keys in `.env.local`
2. Check internet connection
3. Verify Supabase project is running
4. Check firewall/VPN isn't blocking connection

### Styles Not Loading

**Solution**:
1. Clear `.next` cache: `rm -rf .next`
2. Rebuild: `pnpm build`
3. Restart dev server: `pnpm dev`

## Next Steps

1. **Customize the Dashboard**: Update colors and branding in `tailwind.config.ts`
2. **Connect Database**: Set up Supabase and run migrations
3. **Implement Features**: Use existing API endpoints as templates
4. **Deploy**: Follow the deployment guide in `ADMIN_SYSTEM.md`
5. **Monitor**: Set up logging and monitoring

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review `ADMIN_SYSTEM.md` for detailed documentation
3. Check GitHub issues for known problems
4. Contact the development team

---

**Happy coding!** 🚀

Last Updated: April 15, 2026
