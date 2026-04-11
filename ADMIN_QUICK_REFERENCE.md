# 🚀 EDUSANNA Admin Quick Reference Card

## 🔐 Login Credentials
```
Email:    edusannaonlinelearning@gmail.com
Password: ES#1
2FA Code: 000000  (change in production)
```

## 📍 Important URLs
| Task | URL |
|------|-----|
| Admin Login | `/admin/login` |
| Payments Dashboard | `/admin/payments` |
| Test Certificates | `/admin/sample-certificate` |
| User Dashboard | `/dashboard` |
| Home Page | `/` |

## 🎯 Daily Workflow

### ☀️ Morning (10 min)
1. Login: edusannaonlinelearning@gmail.com / ES#1
2. Enter 2FA: 000000
3. Go to `/admin/payments`
4. Review overnight payments
5. Check PayPal transactions are real
6. Mark legitimate ones "Noted" ✓

### 🌤️ Midday (15 min)
1. Visit `/admin/sample-certificate` to verify system works
2. Check which payments are marked "Noted"
3. Verify PDFs generated correctly
4. Send to any waiting students
5. Mark those as "Certificate Sent" ✓

### 🌙 Evening (5 min)
1. Final check for any pending items
2. Review error logs if any
3. Prepare for next day

## 💰 Payment Statuses

| Status | What It Means | Your Action |
|--------|----------------|-----------|
| 🔴 Pending | User paid, initial state | Review & mark Noted |
| 🟡 Noted | You verified the payment | Wait for PDF, then send |
| 🟢 Sent | PDF sent to student | Done - archive |

## 🎓 Certificate Testing

### Quick Test (2 min)
1. Go to `/admin/sample-certificate`
2. Keep default data
3. Click "Preview" 
4. Should see certificate appear
5. Click "Download PDF"
6. Verify PDF opens correctly

### What to Check
- ✅ Student name appears
- ✅ Course name appears  
- ✅ Certificate ID unique
- ✅ Date correct
- ✅ Layout professional
- ✅ PDF downloads without errors
- ✅ Text is readable

## 🔍 When Things Go Wrong

### User Can't Login
```
1. Ask for email they used to sign up
2. Check if email exists in Supabase
3. If missing → Help them create account
4. If exists → Send password reset link
```

### Certificate Not Received
```
1. Check admin dashboard for payment
2. Is it marked "Sent"?
3. If not → Generate and send
4. If yes → Check user's spam folder
5. If still missing → Re-send manually
```

### Certificate Generation Fails
```
1. Test with `/admin/sample-certificate`
2. If sample works → Problem with user data
3. Try entering user data manually
4. If still fails → Check server logs
5. Contact tech support
```

### Payment Missing from Dashboard
```
1. Check PayPal transaction history
2. Verify payment went through
3. If yes → Manually create record
4. If no → Refund user
```

## ⚡ Quick Actions

### Generate Test Certificate
```
URL: /admin/sample-certificate
Time: 2 minutes
Purpose: Verify system works
```

### Access Payment Dashboard
```
URL: /admin/payments  
Frequency: Daily
Review: All new payments
```

### Verify Certificate Quality
```
Tool: Sample generator
Check: Text, layout, logo
Action: Approve or redesign
```

## 📧 Email Contacts
- **Admin Email:** edusannaonlinelearning@gmail.com
- **Tech Support:** [Your tech contact]
- **User Support:** [Your user support]

## 🚨 Emergency Contacts
- **Server Down:** Check Vercel status page
- **Database Issues:** Check Supabase console
- **Payment Issues:** Check PayPal dashboard

## 💡 Pro Tips

1. **Batch Processing:** Review all payments at once each morning
2. **Quality Check:** Use sample generator weekly to verify system
3. **Backup:** Keep screenshots of certificate IDs
4. **Communication:** Always include Certificate ID in emails
5. **Record:** Write down who received certificates today

## 📊 Success Metrics

Track daily:
- [ ] Payments received
- [ ] Payments reviewed
- [ ] Certificates sent
- [ ] Average processing time
- [ ] Any errors or issues

## 🔑 Remember

✅ Always verify PayPal transactions
✅ Check user information is complete
✅ Keep Certificate IDs for records
✅ Test system weekly with sample generator
✅ Log out when done
✅ Use 2FA every login
✅ Never share credentials
✅ Keep passwords secret

## 📱 Mobile Admin Access

You can do most admin tasks on mobile:
- ✅ View payment dashboard
- ✅ Mark payments reviewed
- ✅ Send emails to users
- ✗ Generate PDFs (better on desktop)
- ✗ Review certificates (better on desktop)

---

**Print this card and keep at desk!**

**Version:** 1.0
**Last Updated:** April 12, 2026
