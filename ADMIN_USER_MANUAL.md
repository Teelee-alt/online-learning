# EDUSANNA Admin & User Manual

## Table of Contents
1. [User Journey](#user-journey)
2. [Admin Dashboard Guide](#admin-dashboard-guide)
3. [Payment Processing](#payment-processing)
4. [Certificate Management](#certificate-management)
5. [Troubleshooting](#troubleshooting)

---

## User Journey

### Phase 1: Account Creation & First Login

#### What Users See:
1. **Homepage** - Visit edusanna.com and click "Get Started"
2. **Signup Form** - Complete registration with:
   - Full Name
   - Email Address
   - Password (min 8 characters recommended)
   - Mobile Number (with country code)
   - Country & City
3. **Instant Auto-Login** - After account creation, users are automatically signed in and redirected to their dashboard

#### What Happens Behind the Scenes:
- User data is stored in Supabase `users` table
- Session is created automatically
- Welcome email sent (optional - configure email service)
- User can immediately start browsing courses

---

### Phase 2: Course Selection & Learning

#### What Users See:
1. **Dashboard** - Personal learning hub showing:
   - Enrolled courses
   - Progress bars for each course
   - Completed certificates/diplomas
   - Learning statistics
2. **Course Page** - Access course modules:
   - Video lessons
   - Learning materials
   - Module assessments
   - Progress tracking
3. **Module Completion** - Users work through modules at their own pace

#### Admin Role:
- Monitor course completion rates via admin dashboard
- Ensure all courses are properly configured
- Update course content as needed

---

### Phase 3: Course Completion & Certification

#### What Users See:
1. **Completion Notification** - "Congratulations! You've completed [Course Name]"
2. **Certificate Options**:
   - Option to purchase Certificate ($12)
   - Option to purchase Diploma ($18)
   - Option to skip (they can purchase later)
3. **Payment Page**:
   - Course selection (can choose multiple courses)
   - Certificate/Diploma dropdown
   - Real-time price calculation
   - PayPal payment button
4. **Success Screen**:
   - Confirmation message
   - Certificate ID displayed
   - Notice: "Your certificate is pending admin review"
5. **Email Confirmation** - Receipt with Certificate ID

#### User Waits For:
- Admin verification (usually < 24 hours)
- Certificate PDF generation
- Download link via email

---

### Phase 4: Certificate Delivery

#### What Users Receive:
1. **Email with Certificate ID** - Unique verification number
2. **PDF Certificate** - Can be downloaded and shared
3. **Printable Format** - Professional layout, suitable for LinkedIn, portfolio
4. **Verification Link** - Can share with employers/schools to verify authenticity

---

## Admin Dashboard Guide

### Access Details
- **URL**: https://edusanna.com/admin/login
- **Email**: edusannaonlinelearning@gmail.com
- **Password**: ES#1
- **2FA**: Required (code: 000000 for testing)

### Admin Sections

#### 1. Payments Dashboard (`/admin/payments`)

**What You See:**
- Table of all user payments
- Status: Pending, Reviewed, Sent
- Student name, course, payment amount
- Certificate ID, payment date

**Your Actions:**

1. **Review Payment**:
   - Click payment row to view details
   - Verify PayPal transaction ID
   - Check student information is complete

2. **Mark as Noted** (After Review):
   - Click "Mark as Noted"
   - System logs review timestamp
   - Triggers certificate generation
   - Sends WhatsApp alert to admin

3. **Mark Certificate Sent**:
   - After PDF is generated and emailed
   - Click "Certificate Sent"
   - Payment is archived
   - System sends confirmation email to student

**Daily Workflow:**
```
Morning (Check overnight payments)
├─ Open /admin/payments
├─ Review pending payments
├─ Verify PayPal transactions
└─ Mark payments as "Noted"

Mid-Day (Generate certificates)
├─ Check which are marked "Noted"
├─ Review generated PDFs
├─ Send emails to students
└─ Mark as "Certificate Sent"

Evening (Final check)
├─ Confirm all processed
└─ Review any failed generations
```

#### 2. Sample Certificate Generator (`/admin/sample-certificate`)

**Purpose:**
- Test certificate generation system
- Verify PDF quality and layout
- Check both Certificate and Diploma formats

**How to Use:**
1. Fill in sample data:
   - Student Name: "Test Student"
   - Course: "Test Course"
   - Certificate Type: Certificate or Diploma
   - Completion Date: Today
2. Click "Preview" to see HTML preview
3. Click "Download PDF" to test PDF generation
4. Verify output quality and all details appear correctly

**Testing Checklist:**
- [ ] Certificate displays student name correctly
- [ ] Course name is accurate
- [ ] Certificate ID is unique and properly formatted
- [ ] Date formatting is correct
- [ ] Layout is professional and clear
- [ ] Logo and branding are visible
- [ ] PDF downloads without errors
- [ ] For diplomas: Skills list displays correctly

#### 3. Admin Settings

**Update Email Credentials:**
```
Settings → Admin Account → Change Email
Old: africanedusanna@gmail.com
New: edusannaonlinelearning@gmail.com
```

**Change 2FA Code:**
```
Settings → Security → 2FA Code
(Implement proper 2FA service in production)
```

---

## Payment Processing

### PayPal Integration

**Real-Time Payments:**
- Users pay via PayPal checkout
- Payment is verified server-side
- Certificate ID is generated automatically
- Payment record created in Supabase

**Payment Statuses:**

| Status | Meaning | Admin Action |
|--------|---------|--------------|
| Pending | Initial state - may need verification | Review & mark as Noted |
| Noted | Admin verified payment | Wait for PDF generation |
| Sent | PDF generated and emailed | Archive and close |

### Duplicate Payment Prevention

**System Prevents:**
- Same user paying twice for same course
- Multiple certificates for one course
- Accidental duplicate charges

**If Issue Occurs:**
1. Check payment history
2. Verify Supabase transaction
3. Manually refund if needed
4. Update payment status

---

## Certificate Management

### Certificate Generation Process

```
User Pays
    ↓
PayPal Verifies Payment
    ↓
Certificate ID Generated (CERT-[timestamp]-[code])
    ↓
Payment stored in Supabase
    ↓
WhatsApp Alert to Admin
    ↓
Admin Reviews Payment (/admin/payments)
    ↓
Admin Clicks "Mark as Noted"
    ↓
System Generates PDF (Certificate or Diploma)
    ↓
PDF Emailed to Student
    ↓
Admin Clicks "Certificate Sent"
    ↓
System Archives Payment
    ↓
Student Receives Email with Download Link
```

### Certificate Details

**Certificate (12 USD):**
- Student name
- Course name
- Completion date
- Certificate ID
- Edusanna seal
- Founder signature

**Diploma (18 USD):**
- All certificate details
- Plus: List of skills learned
- Multi-page format
- Professional layout

### Verification

**Users Can Share:**
- PDF certificate
- Certificate ID
- Verification URL: edusanna.com/verify/[certificate-id]

**Employers Can Verify:**
- Enter Certificate ID
- System confirms authenticity
- Shows course name and completion date

---

## Troubleshooting

### Users Can't Sign In

**Possible Causes:**
1. Email not found - User needs to create account
2. Wrong password - Use password reset
3. Account locked - Check Supabase admin console

**Solution:**
1. Ask for email used during signup
2. Check Supabase `users` table
3. If found, guide user through password reset
4. If not found, help them create new account

### Certificate Not Received

**Check This Flow:**
1. Verify payment status in admin dashboard
   - Is it marked "Sent"?
   - Is certificate ID visible?
2. Check user's spam/junk folder
3. Verify email address in payment record
4. Re-send PDF manually if needed

**If Payment Missing:**
1. Check PayPal transaction history
2. Verify Supabase `certificate_payments` table
3. If payment went through but not in system:
   - Manually create payment record
   - Generate and send certificate

### Certificate Generation Error

**If PDF fails to generate:**
1. Check server logs for error details
2. Verify Supabase connection
3. Try sample generator (/admin/sample-certificate)
4. If sample works but user's fails:
   - May be special characters in name
   - Try generating again
   - Contact system admin

### PayPal Integration Issues

**If payments not processing:**
1. Check PayPal API credentials in environment variables
2. Verify NEXT_PUBLIC_PAYPAL_CLIENT_ID is correct
3. Check PAYPAL_SECRET in backend
4. Test in PayPal dashboard (sandbox → production)
5. Review PayPal transaction logs

---

## Daily Operations Checklist

### Morning (Start of Day)
- [ ] Check WhatsApp for payment alerts
- [ ] Open admin payments dashboard
- [ ] Review overnight payments
- [ ] Verify PayPal transactions
- [ ] Mark legitimate payments as "Noted"

### Midday (Processing)
- [ ] Test sample certificate generator
- [ ] Verify generated PDFs look correct
- [ ] Send certificates to approved payments
- [ ] Mark payments as "Certificate Sent"
- [ ] Respond to any user inquiries

### Evening (Wrap-Up)
- [ ] Final check on pending certificates
- [ ] Review any error logs
- [ ] Prepare for next day's payments
- [ ] Update records if needed

---

## Security Notes

### Credentials to Keep Secret
- Admin email: edusannaonlinelearning@gmail.com
- Admin password: ES#1
- PayPal Secret (never expose to frontend)
- Database credentials
- 2FA codes

### Never:
- Share credentials with users
- Display admin password in code
- Log sensitive data
- Send passwords via unencrypted email

### Always:
- Use 2FA for admin access
- Review payment details before approval
- Verify PayPal transactions
- Keep backup of certificate records
- Monitor for suspicious activity

---

## Contact & Support

**For Technical Issues:**
- Check logs in Vercel dashboard
- Review Supabase admin console
- Test with sample certificate generator

**For User Issues:**
- Check account in Supabase
- Verify payment in admin dashboard
- Resend certificate if needed

---

*Last Updated: 2026*
*Manual Version: 1.0*
