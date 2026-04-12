# EDUSANNA Platform - Quick Testing Guide

## Test Scenarios

### Test 1: Regular User Flow (New User)

1. **Go to homepage**
   - URL: `http://localhost:3000/` or production URL
   - Verify: Logo is large and clear, text "EDUSANNA" + "Elevate Your Mind" visible next to logo
   - Verify: "Get Started" button visible and clickable

2. **Sign Up**
   - Click "Get Started" button
   - Fill form with:
     ```
     Name: Tinashe Lee Vurayai
     Email: tinashe@test.com
     Password: Test123456
     Confirm Password: Test123456
     Phone: +27 123456789
     Country: Zimbabwe
     City: Harare
     ```
   - Click "Create Account"
   - Expected: Auto-login to dashboard

3. **Dashboard Check**
   - Verify: Welcome message says "Welcome, Tinashe Lee Vurayai!" (NOT "Welcome back, Learner")
   - Verify: User avatar shows "T" (first letter of name)
   - Verify: Empty state shows "Welcome to Your Learning Journey!"
   - Verify: "Browse Courses" button visible

4. **Browse Courses**
   - Click "Browse Courses" or navigate to `/courses`
   - Verify: NO sign-in prompt appears
   - Verify: "My Dashboard" button in top right (not "Sign In")
   - Verify: Can see course list and filters work
   - Verify: Can click on course (if course details implemented)

---

### Test 2: Admin User Flow

1. **Logout First (if needed)**
   - Clear browser localStorage or use private/incognito window

2. **Login as Admin**
   - URL: `/login`
   - Email: `edusannaonlinelearning@gmail.com`
   - Password: `ES#1`
   - Click "Sign In"
   - Expected: Redirect to `/admin/dashboard`

3. **Admin Dashboard**
   - Verify: Page shows "Admin Dashboard" in header
   - Verify: Four stat cards: Users, Payments, Certificates, Revenue
   - Verify: Four action cards: Users, Payments, Certificates, Settings

4. **Manage Users**
   - Click "Go to Users" card or navigate to `/admin/users`
   - Verify: Users table shows (at least one test user)
   - Verify: Search box filters users
   - Verify: Edit (pencil) icon present
   - Verify: Delete (trash) icon present with confirmation

5. **Manage Payments**
   - Click "Go to Payments" card or navigate to `/admin/payments`
   - Verify: Payment stats show (Paid, Pending, Failed)
   - Verify: Filter buttons work (All, Paid, Pending, Failed)
   - Verify: Payment table displays correctly
   - Verify: Can see payment details and update status

6. **Manage Certificates**
   - Click "Go to Certificates" card or navigate to `/admin/certificates`
   - Verify: Certificate stats display
   - Verify: Search filters certificates
   - Verify: Download button present
   - Verify: Regenerate button present
   - Verify: Delete button present

7. **Settings**
   - Click "Go to Settings" card or navigate to `/admin/settings`
   - Verify: Can change certificate price (default: $12)
   - Verify: Can change diploma price (default: $18)
   - Verify: Can change platform name
   - Verify: Can change support email
   - Verify: Save button saves changes (localStorage)

8. **Logout as Admin**
   - Click "Logout" button in top right
   - Verify: Redirected to `/login`
   - Verify: Admin session cleared

---

### Test 3: Responsive Design

#### On Mobile (320px - 480px)
1. **Homepage:**
   - Logo visible and clear
   - "EDUSANNA" text might wrap or be hidden (OK on extra small)
   - Buttons properly sized and clickable
   - "Get Started" button NOT cut off or pushed right

2. **Dashboard:**
   - Welcome message fully visible
   - Stats cards stack vertically
   - Last two stats (Clock, Star) hidden (use `hidden sm:block`)
   - Tabs scroll horizontally
   - Table scrolls horizontally

3. **Admin:**
   - Navigation header adapts
   - Tables scroll horizontally on mobile
   - Buttons stay accessible

#### On Tablet (768px - 1024px)
- Two-column layouts work
- All stats cards visible
- Tables have better spacing
- Forms properly sized

#### On Desktop (1024px+)
- Full layout
- All features visible
- Optimal spacing and sizing

---

### Test 4: Logo Visibility

**All Pages Should Show:**
- Logo clearly visible (not tiny)
- "EDUSANNA" text next to logo
- "Elevate Your Mind" subtitle
- Logo: minimum 16x16px, preferably 20x20px

**Pages to Check:**
- [ ] Homepage `/`
- [ ] Login `/login`
- [ ] Signup `/signup`
- [ ] Dashboard `/dashboard`
- [ ] Courses `/courses`
- [ ] Admin Dashboard `/admin/dashboard`
- [ ] Admin Users `/admin/users`
- [ ] Admin Payments `/admin/payments`
- [ ] Admin Certificates `/admin/certificates`
- [ ] Admin Settings `/admin/settings`

---

### Test 5: LocalStorage Inspection (DevTools)

1. **Open DevTools** (F12 or right-click → Inspect)
2. **Go to Application → Local Storage**
3. **After User Signup, Check:**
   ```
   isLoggedIn: "true"
   isAdmin: "false"
   userEmail: "tinashe@test.com"
   userName: "Tinashe Lee Vurayai"
   joinDate: "2025-01-12" (today's date)
   ```

4. **After Admin Login, Check:**
   ```
   isAdmin: "true"
   isLoggedIn: "false"
   adminEmail: "edusannaonlinelearning@gmail.com"
   ```

---

## Expected Behavior Summary

| Action | Expected Result |
|--------|-----------------|
| User signs up | Auto-login to dashboard |
| User sees dashboard | Shows their actual name, not "Learner" |
| User goes to courses | No sign-in prompt, can browse freely |
| User logs out | Clears session, redirected to home |
| Admin logs in | Goes to admin dashboard |
| Admin manages users | Can CRUD users |
| Admin manages payments | Can filter and update status |
| Admin manages certificates | Can view, regenerate, delete |
| Admin changes settings | Settings saved to localStorage |
| All pages | Logo large and clear, text visible on all screens |

---

## Common Issues & Fixes

### Issue: "Welcome back, Learner" still showing
**Fix:** Hard refresh page (Ctrl+Shift+R), clear localStorage

### Issue: Admin login not working
**Fix:** Check credentials exactly: `edusannaonlinelearning@gmail.com` / `ES#1`

### Issue: Courses page showing "Sign In" button for logged-in user
**Fix:** Check localStorage has `isLoggedIn: "true"`

### Issue: Logo too small
**Fix:** Logo class should be `w-16 h-16 sm:w-20 sm:h-20` minimum

### Issue: Text cut off on mobile
**Fix:** Check responsive classes: `hidden sm:block` or `text-xs sm:text-base`

---

## Quick Test URLs

```
Homepage:              /
Login:                /login
Signup:               /signup
Courses:              /courses
Dashboard:            /dashboard
Admin Dashboard:      /admin/dashboard
Admin Users:          /admin/users
Admin Payments:       /admin/payments
Admin Certificates:   /admin/certificates
Admin Settings:       /admin/settings
```

---

## Notes for QA/Testing Team

1. **Always test in incognito/private window** to start fresh
2. **Check mobile AND desktop** - responsive design is critical
3. **Verify logo is CLEAR** - not tiny or blurry
4. **Admin credentials are hardcoded** - move to env vars before production
5. **Payment integration** is already using Supabase (check payments page)
6. **Certificate PDF generation** uses pdf-lib (not canvas)
7. **All form validation** should show friendly error messages

---

## Sign Test Credentials

### Regular User (Use for Testing):
- Email: `test@example.com` (any new email)
- Password: `Test123456`
- Or use the signup flow to create a new test account

### Admin User:
- Email: `edusannaonlinelearning@gmail.com`
- Password: `ES#1`

---

## Performance Checklist

- [ ] Page loads in < 3 seconds
- [ ] No console errors
- [ ] No console warnings
- [ ] Images optimized
- [ ] Mobile performance good (Lighthouse > 80)
- [ ] Desktop performance good (Lighthouse > 90)

---

*Ready to test! Start with Test 1 (New User), then Test 2 (Admin), then Test 3 (Responsive).*
