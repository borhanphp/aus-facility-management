# 🔧 Fix API Key Restrictions

## ❌ Current Error

```
API keys with referer restrictions cannot be used with this API.
```

## 🎯 The Problem

Your Google API key is configured with **HTTP referrer restrictions** (like `https://www.ausfacility.com.au/*`).

**This works for:** Browser/client-side calls only
**Doesn't work for:** Server-side API calls (our Next.js API route)

Since we're now calling Google from the server (to avoid CORS), we need to change the restrictions!

---

## ✅ Solution: Remove Referer Restrictions

### **Quick Fix (5 minutes):**

**Step 1: Go to Google Cloud Console**
- Visit: https://console.cloud.google.com/apis/credentials

**Step 2: Find Your API Key**
- Look for the API key you're using
- Click on it to edit

**Step 3: Change Application Restrictions**

**Option A: No Restrictions (Easiest - For Development)**
- Select "None" under Application restrictions
- ✅ Click "Save"

**Option B: IP Restrictions (Better for Production)**
- Select "IP addresses (web servers, cron jobs, etc.)"
- You don't need to add any IPs for localhost
- For production, add your server's IP later
- ✅ Click "Save"

**Step 4: Keep API Restrictions**
- Under "API restrictions"
- Keep "Restrict key" selected
- Make sure "Places API" is checked ✅
- This is important for security!
- Click "Save"

---

## 🔒 Recommended Setup for Production

### **Create TWO API Keys:**

#### **Key 1: Client-Side Key** (for future use)
```
Name: AUS Facility - Client Key
Application restrictions: HTTP referrers
  - https://www.ausfacility.com.au/*
  - http://localhost:*
API restrictions: Maps JavaScript API, Geocoding API
```

#### **Key 2: Server-Side Key** (what you need now)
```
Name: AUS Facility - Server Key
Application restrictions: None (or IP addresses)
API restrictions: Places API
```

**Use Key 2 in your `.env.local`**

---

## 🧪 After Changing Restrictions

### **1. Wait a minute**
Changes can take 1-5 minutes to propagate

### **2. Refresh your browser**
- Visit: http://localhost:7000/services/cleaning-services
- Hard refresh: Ctrl+Shift+R

### **3. Check console**
Should see:
```
✅ Successfully loaded X Google reviews
```

No more errors!

---

## 🚀 Quick Steps Summary

1. ✅ Go to https://console.cloud.google.com/apis/credentials
2. ✅ Click your API key
3. ✅ Application restrictions → **"None"**
4. ✅ API restrictions → Keep "Places API" only
5. ✅ Click "Save"
6. ⏰ Wait 1-2 minutes
7. 🔄 Refresh browser (Ctrl+Shift+R)
8. ✅ Check console for success message

---

## 💡 Alternative: Use Different Keys

If you want to keep HTTP referrer restrictions for other purposes:

**Create a NEW API key:**
1. Go to https://console.cloud.google.com/apis/credentials
2. Click "Create Credentials" → "API Key"
3. Set restrictions:
   - Application: **None** (or IP addresses)
   - API: **Places API only**
4. Copy the new key
5. Update `.env.local`:
```env
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your_new_unrestricted_key
```

---

## 🔍 How to Verify

### **Test the API Route Directly:**

Visit: http://localhost:7000/api/google-reviews

**✅ Should see:**
```json
{
  "success": true,
  "data": {
    "name": "AUS Facility Management",
    "rating": 4.8,
    "user_ratings_total": 127,
    "reviews": [...]
  }
}
```

**❌ If you see:**
```json
{
  "error": "API keys with referer restrictions...",
  "status": "REQUEST_DENIED"
}
```
Then restrictions still active - wait a bit longer or check settings again.

---

## 🛡️ Security Note

**Removing restrictions is SAFE when:**
- ✅ You only enable "Places API" (not all APIs)
- ✅ The key is used server-side only
- ✅ You monitor API usage in Google Cloud Console

**For production, you can add:**
- IP restrictions (your server's IP)
- Usage quotas/limits
- Budget alerts

---

## 📊 Current vs New Setup

### **Before (Not Working):**
```
API Key Restrictions:
  Application: HTTP referrers ❌
    - https://www.ausfacility.com.au/*
  API: Places API ✅
  
Result: Works in browser, fails on server
```

### **After (Working):**
```
API Key Restrictions:
  Application: None ✅ (or IP addresses)
  API: Places API ✅
  
Result: Works everywhere!
```

---

## 🎉 Once Fixed

You'll see real Google reviews like this:

```
⭐⭐⭐⭐⭐ 4.8 out of 5 based on 127 reviews

"Absolutely outstanding service! The team did an incredible 
end of lease clean on my apartment..."
- Sarah Mitchell, Bondi, Sydney

[Write a Google Review] 🔵
```

---

## ⏱️ Timing

- **Change restrictions:** 2 minutes
- **Google propagation:** 1-5 minutes
- **Test and verify:** 1 minute

**Total: ~5-10 minutes** to get reviews working! 🚀

---

## 📞 Still Not Working?

### **Check these:**

1. ✅ Restrictions changed and saved?
2. ⏰ Waited 2-5 minutes?
3. 🔄 Hard refreshed browser (Ctrl+Shift+R)?
4. 🔍 Tested API route directly?

### **If still failing:**

Check API route response:
```bash
# In browser, visit:
http://localhost:7000/api/google-reviews

# Should show JSON with reviews
# If shows error, read the error message
```

---

**Go fix it now! Should take ~5 minutes total.** ⚡

Then refresh your browser and see the magic! ✨

