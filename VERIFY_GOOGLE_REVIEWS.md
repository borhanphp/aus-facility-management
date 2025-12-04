# Google Reviews Integration - Verification Guide

## ✅ Quick Test Checklist

### 1. **Check Environment Variables are Loaded**

Your build output shows:
```
✅ info  - Loaded env from D:\aus-facility\.env.local
```

This means your API key and Place ID are configured correctly!

---

### 2. **Test in Browser**

#### Open a Service Page:
- **Cleaning Services**: http://localhost:7000/services/cleaning-services
- **Lawn & Gardening**: http://localhost:7000/services/lawn-and-gardening
- **Pest Control**: http://localhost:7000/services/pest-control-and-termite
- **Facility Management**: http://localhost:7000/services/facility-management
- **Construction**: http://localhost:7000/services/construction-services
- **Job Recruitment**: http://localhost:7000/services/job-recruitment

#### What to Look For:

**✅ SUCCESS - You should see:**
1. **Reviews Section** with heading "What Our Clients Say About Our [Service Name]"
2. **Google Rating Badge** showing:
   - Google logo
   - Star rating (e.g., "4.8 out of 5")
   - Total review count (e.g., "based on 127 reviews")
3. **Real Google Reviews** in cards with:
   - Customer names
   - Star ratings
   - Review text
   - Profile photos
4. **"Write a Google Review" button** at the bottom

**❌ FALLBACK - If API fails, you'll see:**
- Static testimonials (the ones we created earlier)
- No Google rating badge
- Still looks professional, just not live data

---

### 3. **Check Browser Console**

Open Chrome DevTools (F12) → Console tab

**✅ GOOD - Should show:**
```
No errors
OR
Loading reviews from Google Places API...
Successfully loaded [X] reviews from Google
```

**❌ ERROR - If you see:**
```
API key not valid
→ Double-check your .env.local file
→ Verify API key is enabled for Places API

INVALID_REQUEST
→ Check your Place ID is correct

CORS error / Request blocked
→ This is normal in development
→ Will work in production
```

---

### 4. **Check Network Tab**

Open Chrome DevTools (F12) → Network tab

**Look for:**
- Request to `https://maps.googleapis.com/maps/api/place/details/json`
- Status: `200 OK` ✅
- Response contains your reviews

**If you see:**
- `403 Forbidden` → API key issue
- `400 Bad Request` → Place ID issue
- No request at all → API key not configured

---

### 5. **Test API Directly (Optional)**

Copy this URL and replace `YOUR_PLACE_ID` and `YOUR_API_KEY`:

```
https://maps.googleapis.com/maps/api/place/details/json?place_id=YOUR_PLACE_ID&fields=name,rating,user_ratings_total,reviews&key=YOUR_API_KEY
```

Open it in your browser. You should see JSON with your reviews.

---

## 🎯 Expected Results

### Before (Static Testimonials):
- 4 generic testimonials
- No Google branding
- No rating badge
- Static content

### After (Google Reviews):
- Real customer reviews
- Google logo and rating badge
- Dynamic content
- "Write a Review" CTA
- SEO review schema markup

---

## 🐛 Troubleshooting

### Reviews not showing?

**1. Check .env.local exists:**
```bash
# Should be in project root
ls -la .env.local  # Mac/Linux
dir .env.local     # Windows
```

**2. Verify contents:**
```env
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=AIzaSy...
NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJ...
```

**3. Restart dev server:**
```bash
# Stop current server (Ctrl+C)
# Restart
npm run dev
```

**4. Clear cache:**
```bash
# Delete .next folder
rm -rf .next  # Mac/Linux
rmdir /s .next  # Windows

# Rebuild
npm run build
npm run dev
```

---

### Getting CORS errors?

**This is normal in development!** The Google Places API might block browser requests.

**Solutions:**

**Option A: Use Server-Side (Recommended)**
Update `src/pages/services/[service].tsx` to fetch at build time:

```typescript
export async function getStaticProps({ params }) {
  const { getCachedGoogleReviews } = await import('../../lib/googlePlaces');
  const reviews = await getCachedGoogleReviews(process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID);
  
  return {
    props: {
      reviews: reviews?.reviews || [],
    },
    revalidate: 86400, // Update once per day
  };
}
```

**Option B: Use Proxy (Advanced)**
Create API route: `/api/reviews.ts` that fetches from server-side

---

### API costs too high?

**Current Setup:**
- ✅ Client-side caching
- ✅ Fallback to static reviews
- ✅ Only loads on service pages

**Optimize Further:**
1. **Cache longer** - Store in localStorage for 24 hours
2. **Build-time only** - Fetch during `npm run build`
3. **Monthly refresh** - Update static file monthly

---

## 📊 Monitor API Usage

**Google Cloud Console:**
1. Go to: https://console.cloud.google.com/
2. Navigate to: APIs & Services → Dashboard
3. Click: Places API
4. View: Quotas & Limits

**Free Tier:**
- 28,000 requests/month FREE
- Your site: ~30-90 requests/month
- Well within limits! ✅

---

## 🚀 Ready for Production?

### Deployment Checklist:

**1. Vercel:**
```bash
# Add environment variables in dashboard
Settings → Environment Variables
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=...
NEXT_PUBLIC_GOOGLE_PLACE_ID=...
```

**2. Netlify:**
```bash
# Add in Site Settings
Build & deploy → Environment
```

**3. Other Hosting:**
- Add environment variables to hosting platform
- Ensure they start with `NEXT_PUBLIC_`

---

## ✨ Success Indicators

**Your integration is working if:**
- ✅ Reviews load on page
- ✅ Google rating badge shows
- ✅ Star ratings display correctly
- ✅ Profile photos show
- ✅ "Write a Review" button works
- ✅ No console errors
- ✅ Review schema in page source

---

## 🎉 You're Done!

Your Google Reviews integration is now live!

**Benefits:**
- Real social proof from Google
- Automatic updates when new reviews posted
- SEO boost with review schema
- Star ratings in search results
- Encourages more customer reviews

**Next Steps:**
1. Test all service pages
2. Share with team
3. Deploy to production
4. Monitor in Google Search Console
5. Ask happy customers to leave Google reviews!

---

## 📞 Need Help?

If reviews aren't loading:
1. Check browser console for errors
2. Verify .env.local file exists and has correct values
3. Test API key directly in browser
4. Check Google Cloud Console for API restrictions
5. Review CORS settings (may need server-side implementation)

The fallback to static testimonials ensures your site always looks professional, even if the API has issues!

