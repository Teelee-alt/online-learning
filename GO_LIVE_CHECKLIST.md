# GO LIVE CHECKLIST - Edusanna Platform

## Pre-Deployment (Do This First)

### Code Preparation
- [ ] All files committed to GitHub
- [ ] No uncommitted changes
- [ ] Branch is "main"
- [ ] Latest commit pushed to GitHub

```bash
git status  # Should show "nothing to commit"
git log     # Should show your recent commits
```

### Environment Variables
- [ ] Google Client ID obtained from Google Cloud Console
- [ ] Google Client Secret obtained from Google Cloud Console  
- [ ] Generated NEXTAUTH_SECRET: `openssl rand -base64 32`
- [ ] Copied secret value safely

---

## Deployment Steps

### Step 1: Push Changes to GitHub ✅
```bash
git add .
git commit -m "fix: deployment ready - quotes fixed, oauth configured"
git push origin main
```

**Verify:**
- Check GitHub repo to confirm files are there
- Look for `.gitignore` has `pnpm-lock.yaml`
- Look for `vercel.json` exists

### Step 2: Add Environment Variables to Vercel

1. Go to: https://vercel.com/dashboard
2. Select your "online-learning" project
3. Click "Settings" tab
4. Click "Environment Variables" (left sidebar)
5. Add these 4 variables:

| Key | Value | Scope |
|-----|-------|-------|
| `NEXTAUTH_URL` | `https://yourdomain.com` (prod) or `http://localhost:3000` (dev) | Production, Preview |
| `NEXTAUTH_SECRET` | `<your-generated-secret>` | Production, Preview |
| `GOOGLE_CLIENT_ID` | `<your-google-client-id>` | Production, Preview |
| `GOOGLE_CLIENT_SECRET` | `<your-google-client-secret>` | Production, Preview |

6. Click "Save"

**Verify:**
- All 4 variables show in the list
- No red error icons
- Scopes are set correctly

### Step 3: Trigger Build

**Option A: Automatic (Recommended)**
- Just pushed code → Vercel auto-builds
- Go to Deployments tab and wait ~3-5 minutes

**Option B: Manual Redeploy**
1. Go to "Deployments" tab
2. Click "Redeploy" on latest deployment
3. Click "Redeploy" again to confirm

### Step 4: Monitor Build

Watch the deployment progress:
1. "Building" phase (2-3 min) - Next.js compiles
2. "Installing" phase - Dependencies load
3. "Ready" state - Deployment complete

**Check for errors:**
- Look for red "Error" badge
- Read error logs if something fails
- Check "FINAL_STATUS.md" troubleshooting

---

## Post-Deployment Testing

### Home Page Test
- [ ] Visit your Vercel deployment URL
- [ ] Home page loads with gradient background
- [ ] Logo and navigation visible
- [ ] "Browse All Courses" button works
- [ ] Links functional

### Courses Page Test
- [ ] Navigate to `/courses`
- [ ] See 70+ courses listed
- [ ] Search works
- [ ] Can click on a course

### Login Page Test
- [ ] Navigate to `/login`
- [ ] See email/password form
- [ ] See "Continue with Google" button
- [ ] Button is clickable (don't click yet)

### Signup Page Test
- [ ] Navigate to `/signup`
- [ ] Form fields present
- [ ] See "Continue with Google" button

### Google OAuth Test (Optional)
- [ ] Click "Continue with Google"
- [ ] Redirects to Google login
- [ ] Can sign in with your Google account
- [ ] Returns to app after login

---

## Troubleshooting

### Build Fails with Dependency Error
**Solution:**
1. Go to Vercel Settings → Build & Deploy
2. Look for build logs
3. If error mentions "pnpm", check:
   - `.gitignore` includes `pnpm-lock.yaml`
   - `vercel.json` exists with correct config
4. Redeploy

### Build Fails with TypeScript Error
**Solution:**
1. Error should reference a specific file
2. Check that file has proper quote escaping
3. Should be fixed already, but verify:
   - `first-aid-course-data.ts` line 251 has `\\"`
4. If not fixed, edit and redeploy

### Google OAuth Not Working
**Solution:**
1. Verify environment variables added correctly
2. Check NEXTAUTH_URL matches your domain
3. Verify Google credentials are correct
4. Check redirect URI in Google Cloud Console matches

### Page Shows "Course Not Found"
**Solution:**
1. This is normal - test with actual course from catalog
2. Go to `/courses` first, click on a course
3. Course should load with real data

---

## Success Indicators

### ✅ Everything Working If:
- [ ] Home page loads and displays properly
- [ ] Can browse to courses page
- [ ] Can see 70+ courses listed
- [ ] Can click on course and see details
- [ ] No red error messages
- [ ] Mobile view is responsive
- [ ] Google Sign-In button visible

### ⚠️ Issues If:
- [ ] Build shows "Error" badge
- [ ] Page shows blank white screen
- [ ] Environment variables missing
- [ ] Quotes causing syntax errors
- [ ] 404 errors on routes

---

## Quick Command Reference

```bash
# Check git status
git status

# Push latest changes
git push origin main

# Generate NEXTAUTH_SECRET
openssl rand -base64 32

# View local build (if needed)
npm run dev

# Check for TypeScript errors
npm run build
```

---

## Important URLs

| Page | URL |
|------|-----|
| Home | `/` |
| Browse Courses | `/courses` |
| Verify Certificate | `/verify` |
| Login | `/login` |
| Signup | `/signup` |
| Admin Dashboard | `/admin` (with secret code) |

---

## Support References

| Issue | Document |
|-------|----------|
| Deployment failed | `DEPLOYMENT_FIX.md` |
| How system works | `LEARNING_FLOW_TEST.md` |
| OAuth setup | `OAUTH_SETUP.md` |
| Full project status | `FINAL_STATUS.md` |

---

## Estimated Timeline

| Phase | Duration | Status |
|-------|----------|--------|
| Push to GitHub | 1 min | Quick ✅ |
| Add env variables | 2 min | Easy ✅ |
| Build on Vercel | 2-3 min | Automated ✅ |
| Testing | 5 min | Manual |
| **Total** | **~10 minutes** | **Ready** |

---

## Final Verification

Before considering "Go Live" complete:

- [ ] Build shows "Ready" (not "Error")
- [ ] Home page loads successfully
- [ ] Can navigate all pages
- [ ] No console errors (check browser dev tools)
- [ ] Mobile view works
- [ ] Google button visible on login/signup
- [ ] Certificate verification page loads

---

## You're Done! 🎉

Once all checks pass:
- ✅ Edusanna is live
- ✅ Users can access the platform
- ✅ Students can browse 70+ courses
- ✅ System is ready for real usage

**Next:** Share your deployment URL with users!

---

## Emergency Contacts / Resources

If something breaks:
1. Check error logs on Vercel
2. Review `FINAL_STATUS.md` for known issues
3. Read `DEPLOYMENT_FIX.md` for solutions
4. Check `LEARNING_FLOW_TEST.md` for expected behavior
