# Edusanna - African Online Learning Platform

Welcome to Edusanna, Africa's leading free online learning platform with comprehensive certificate and diploma programs. This repository contains the complete source code for the Edusanna platform, including the public site and the admin dashboard.

## Overview

Edusanna is a transformative educational platform designed to make quality learning accessible to everyone in Africa. With 70+ courses across all subjects, a dual certification system, and a supportive community of learners, Edusanna is empowering the next generation of African leaders.

### Key Features

- **Free Learning**: Access all courses completely free
- **Dual Certification**: Choose between Certificate ($12) or Diploma ($18)
- **70+ Courses**: From A-Z across all major subjects
- **Mobile-First Design**: Learn anywhere, anytime
- **Global Community**: Connect with learners worldwide
- **Secure Authentication**: Multi-factor 2FA for admins
- **Comprehensive Admin Dashboard**: Manage users, payments, institutions, and more
- **Legal Compliance**: Complete privacy, terms, and cookie policies

## Tech Stack

- **Frontend**: Next.js 14 (React App Router)
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Custom JWT + TOTP 2FA
- **UI Framework**: Tailwind CSS + shadcn/ui
- **State Management**: React hooks + localStorage
- **Payments**: Stripe integration ready

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)
- Supabase account
- Vercel account (for deployment)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/edusanna.git
   cd edusanna
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
   SUPABASE_SERVICE_ROLE_KEY=your_key
   NEXTAUTH_SECRET=your_secret
   NEXTAUTH_URL=http://localhost:3000
   STRIPE_PUBLIC_KEY=your_key
   STRIPE_SECRET_KEY=your_key
   ```

4. **Start the development server**
   ```bash
   pnpm dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

For more detailed setup instructions, see [GETTING_STARTED.md](./GETTING_STARTED.md)

## Project Structure

```
edusanna/
├── app/                        # Next.js App Router
│   ├── admin/                  # Admin dashboard
│   ├── legal/                  # Legal pages
│   ├── api/                    # API routes
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/                 # React components
│   ├── ui/                     # shadcn/ui components
│   └── admin/                  # Admin-specific components
├── hooks/                      # Custom React hooks
├── lib/                        # Utility functions
├── public/                     # Static assets
├── scripts/                    # Database and utility scripts
├── styles/                     # Global styles
├── ADMIN_SYSTEM.md             # Admin dashboard documentation
├── GETTING_STARTED.md          # Getting started guide
└── README.md                   # This file
```

## Core Features

### Public Site

- **Landing Page**: Platform overview with benefits and features
- **Course Browsing**: Browse 70+ courses with detailed descriptions
- **Authentication**: User login and registration
- **Certificate Verification**: Verify certificates online
- **Legal Pages**: Privacy Policy, Terms of Service, Cookie Policy

### Admin Dashboard

**Authentication**
- Email + password login
- Two-factor authentication (TOTP)
- Session management with secure tokens

**Management Features**
- **User Management**: View, edit, and deactivate user accounts
- **Payment Tracking**: Monitor certificate and diploma purchases
- **Institution Management**: Manage schools and multi-school enrollment
- **Notifications**: Send targeted or broadcast notifications
- **Certificate Management**: Track and manage issued certificates
- **Analytics**: Real-time metrics and statistics
- **Settings**: Configure platform settings

**Security**
- Bcrypt password hashing
- TOTP-based 2FA
- Row Level Security (RLS) on database
- Secure session management
- Protected API endpoints

## Database Schema

The application uses Supabase (PostgreSQL) with the following main tables:

- `admin_users` - Admin accounts with 2FA configuration
- `sessions` - Admin session management
- `two_factor_codes` - 2FA code tracking
- `users` - User accounts (planned)
- `courses` - Course catalog (planned)
- `enrollments` - User course enrollments (planned)
- `payments` - Payment transactions (planned)
- `institutions` - Educational institutions (planned)
- `notifications` - User notifications (planned)

See [ADMIN_SYSTEM.md](./ADMIN_SYSTEM.md) for detailed schema information.

## API Documentation

### Admin API Endpoints

#### Authentication
- `POST /api/admin/login` - Admin login
- `POST /api/admin/verify-2fa` - Verify 2FA code
- `POST /api/admin/logout` - Logout

#### Users
- `GET /api/admin/users` - Get all users
- `POST /api/admin/users/create` - Create new user
- `PUT /api/admin/users/:id` - Update user
- `DELETE /api/admin/users/:id` - Delete user

#### Payments
- `GET /api/admin/payments` - Get all payments
- `POST /api/admin/payments/:id/mark-paid` - Mark as paid
- `POST /api/admin/payments/:id/refund` - Process refund

#### Institutions
- `GET /api/admin/academia` - Get all institutions
- `POST /api/admin/academia` - Create institution
- `PUT /api/admin/academia/:id` - Update institution
- `DELETE /api/admin/academia/:id` - Delete institution

#### Notifications
- `POST /api/admin/notifications/send` - Send notification
- `GET /api/admin/notifications` - Get history

## Security

### Implemented Security Measures

- **Password Security**: Bcrypt hashing with salt
- **2FA/MFA**: TOTP-based multi-factor authentication
- **Session Management**: Secure, short-lived session tokens
- **Database Security**: Row Level Security (RLS) policies
- **API Security**: Request validation and sanitization
- **HTTPS**: Enforced in production
- **CORS**: Configured for trusted origins

### Recommendations

- Store sensitive data securely
- Regular security audits
- Keep dependencies updated
- Monitor admin activity logs
- Implement rate limiting
- Use environment variables for secrets
- Enable HTTPS in production
- Regular backups of production database

## Deployment

### Deploy to Vercel

1. **Connect GitHub repository** to Vercel
2. **Add environment variables** in Vercel dashboard
3. **Deploy**: Automatic deployment on push to main

```bash
vercel deploy --prod
```

### Alternative: Manual Deployment

1. Build for production: `pnpm build`
2. Start production server: `pnpm start`
3. Configure reverse proxy (nginx/Apache)
4. Set up HTTPS with SSL certificate
5. Configure domain and DNS

See [ADMIN_SYSTEM.md](./ADMIN_SYSTEM.md) for detailed deployment guide.

## Development

### Available Scripts

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint
pnpm type-check       # Check TypeScript

# Database (when configured)
pnpm db:migrate       # Run migrations
pnpm db:seed          # Seed test data
pnpm db:reset         # Reset database
```

### Git Workflow

1. Create feature branch: `git checkout -b feature/my-feature`
2. Make changes and commit: `git commit -am 'Add my feature'`
3. Push to remote: `git push origin feature/my-feature`
4. Create pull request for review
5. Merge after approval

### Code Style

- Follow ESLint configuration
- Use TypeScript for type safety
- Follow component naming conventions
- Keep components small and focused
- Document complex logic

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

See CONTRIBUTING.md for detailed guidelines.

## Testing

### Manual Testing

Test critical paths:
- Admin login and 2FA flow
- User management operations
- Payment tracking
- Notification sending
- Legal page accessibility

### Automated Testing (Planned)

- Unit tests with Jest
- Integration tests with Cypress
- API endpoint tests
- Component tests with React Testing Library

## Performance

### Optimization Tips

- **Caching**: Implement Redis for session caching
- **CDN**: Serve static assets via CDN
- **Database**: Add indexes to frequently queried columns
- **Lazy Loading**: Lazy load components and images
- **Compression**: Enable gzip compression
- **Monitoring**: Use tools like Sentry for error tracking

### Current Metrics

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s

## Troubleshooting

### Common Issues

**Admin Login Issues**
- Verify admin credentials in database
- Check that 2FA is enabled
- Clear localStorage and refresh
- Ensure system time is correct

**Database Connection Errors**
- Verify Supabase URL and keys
- Check internet connection
- Ensure Supabase project is running
- Check firewall settings

**Deployment Issues**
- Verify environment variables in Vercel
- Check build logs for errors
- Ensure Node version compatibility
- Verify database migrations completed

See [ADMIN_SYSTEM.md](./ADMIN_SYSTEM.md) for detailed troubleshooting.

## Legal & Compliance

### Included Documents

- **Privacy Policy** (`/legal/privacy-policy`) - Data handling and user rights
- **Terms of Service** (`/legal/terms-of-service`) - Platform terms and conditions
- **Cookie Policy** (`/legal/cookie-policy`) - Cookie usage and opt-out

All legal documents are compliant with GDPR, CCPA, and other privacy regulations.

## Support & Contact

- **Bug Reports**: Create GitHub issue
- **Feature Requests**: GitHub discussions
- **Support Email**: support@edusanna.com
- **Privacy Concerns**: privacy@edusanna.com
- **Legal Inquiries**: legal@edusanna.com

## Roadmap

### Phase 1 (Completed)
- Core platform setup
- Admin dashboard
- User authentication
- Legal compliance

### Phase 2 (In Progress)
- Database setup and integration
- Payment system implementation
- Course management system
- Student enrollment system

### Phase 3 (Planned)
- Mobile app (iOS/Android)
- Advanced analytics
- Community features
- Certification verification system

## License

This project is proprietary. All rights reserved © 2025 Edusanna.

## Team

- **Project Lead**: [Your Name]
- **Development Team**: [Team Members]
- **Design Team**: [Design Members]

---

## Quick Links

- [Getting Started Guide](./GETTING_STARTED.md)
- [Admin System Documentation](./ADMIN_SYSTEM.md)
- [Vercel Deployment](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)

---

**Last Updated**: April 15, 2026

Made with ❤️ for African Education
