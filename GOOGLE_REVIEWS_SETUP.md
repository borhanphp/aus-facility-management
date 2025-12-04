# Google Reviews Integration Setup Guide

## Overview
This guide will help you integrate real Google My Business reviews into your website.

---

## Step 1: Get Your Google Place ID

### Method 1: Using Google Place ID Finder
1. Go to https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
2. Search for "AUS Facility Management Sydney"
3. Click on your business
4. Copy the **Place ID** (starts with `ChIJ...`)

### Method 2: Using Google Maps
1. Open Google Maps: https://www.google.com/maps
2. Search for your business
3. The URL will contain a code like `1s0x...` - this is your Place ID

---

## Step 2: Get Google Places API Key

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/

2. **Create a New Project** (or select existing)
   - Click "Select a project" → "New Project"
   - Name it: "AUS Facility Website"
   - Click "Create"

3. **Enable Places API**
   - Go to: https://console.cloud.google.com/marketplace/product/google/places-backend.googleapis.com
   - Click "Enable"

4. **Create API Key**
   - Go to: https://console.cloud.google.com/apis/credentials
   - Click "Create Credentials" → "API Key"
   - Copy your API key

5. **Restrict API Key** (Important for security!)
   - Click on your API key
   - Under "Application restrictions":
     - Select "HTTP referrers"
     - Add your domain: `https://www.ausfacility.com.au/*`
     - Add localhost for testing: `http://localhost:3000/*`
   - Under "API restrictions":
     - Select "Restrict key"
     - Check only "Places API"
   - Click "Save"

---

## Step 3: Configure Environment Variables

1. **Create `.env.local` file** in your project root:

```bash
# Copy from .env.local.example
cp .env.local.example .env.local
```

2. **Edit `.env.local`** and add your credentials:

```env
# Your Google Places API Key
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=AIzaSy... (your actual API key)

# Your Google My Business Place ID
NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJ... (your actual Place ID)
```

3. **NEVER commit `.env.local`** to git (it's already in `.gitignore`)

---

## Step 4: Update Service Pages

### Option A: Use Google Reviews Component (Recommended)

Replace `ServiceTestimonials` with `GoogleReviews`:

```typescript
// In src/pages/services/[service].tsx

// Remove this import:
// import { ServiceTestimonials } from '../../components/ServiceTestimonials';
// import { SERVICE_TESTIMONIALS } from '../../constants/serviceTestimonials';

// Add this import:
import { GoogleReviews } from '../../components/GoogleReviews';

// Then in the component, replace:
// {testimonials.length > 0 && <ServiceTestimonials testimonials={testimonials} serviceName={service.name} />}

// With:
<GoogleReviews 
  serviceName={service.name}
  fallbackReviews={testimonials}
/>
```

### Option B: Server-Side Rendering (Better Performance)

Fetch reviews at build time using `getStaticProps`:

```typescript
// In src/pages/services/[service].tsx
import { getCachedGoogleReviews } from '../../lib/googlePlaces';

export async function getStaticProps() {
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
  const reviews = await getCachedGoogleReviews(placeId);
  
  return {
    props: {
      googleReviews: reviews,
    },
    revalidate: 86400, // Revalidate once per day
  };
}
```

---

## Step 5: Add Google Logo (Optional but Recommended)

Download the Google logo and add it to `/public/images/google-logo.png`

Or use the official Google review badge image.

---

## Step 6: Test the Integration

1. **Start development server**:
```bash
npm run dev
```

2. **Visit a service page**:
```
http://localhost:3000/services/cleaning-services
```

3. **Check browser console** for:
   - API calls
   - Any errors
   - Review data

4. **Verify reviews display**:
   - Should show real Google reviews
   - Star ratings should match Google
   - Review count should be accurate

---

## Step 7: Deploy

1. **Add environment variables to Vercel/Netlify**:
   - Go to your hosting dashboard
   - Add `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY`
   - Add `NEXT_PUBLIC_GOOGLE_PLACE_ID`

2. **Deploy**:
```bash
npm run build
# Then deploy to your hosting
```

---

## API Pricing

### Free Tier
- **28,000 requests/month FREE**
- After that: $0.017 per request

### Cost Estimate for Your Site
- If you get 1,000 visitors/day
- Each loads 1 service page = 1 API call
- 30,000/month = **$34/month** after free tier

### Optimization Tips to Reduce Costs
1. **Cache reviews**: Fetch once per day, not per page load
2. **Use ISR**: Incremental Static Regeneration with `revalidate`
3. **Server-side only**: Don't call API from client-side
4. **Fallback to static**: If API fails, show your hardcoded testimonials

---

## Troubleshooting

### Error: "API key not valid"
- Check your API key is correct in `.env.local`
- Verify it's enabled for Places API
- Check domain restrictions allow localhost

### Error: "INVALID_REQUEST"
- Check your Place ID is correct
- Ensure it starts with `ChIJ...`

### No reviews showing
- Verify your Google Business Profile has reviews
- Check browser console for errors
- Ensure you have at least 1 public review on Google

### Reviews not updating
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run build`
- Check ISR revalidation time

---

## Alternative: Manual Export (No API Costs)

If you want to avoid API costs:

1. Manually copy reviews from Google My Business dashboard
2. Update `src/constants/serviceTestimonials.ts` monthly
3. Use the existing `ServiceTestimonials` component
4. Pro: Free, full control
5. Con: Manual work, not real-time

---

## Next Steps

1. ✅ Get Place ID
2. ✅ Get API key
3. ✅ Configure `.env.local`
4. ✅ Test locally
5. ✅ Deploy to production
6. 📈 Monitor API usage
7. 🌟 Encourage customers to leave Google reviews!

---

## Support

If you need help:
- Google Places API Docs: https://developers.google.com/maps/documentation/places/web-service/overview
- Support: https://issuetracker.google.com/issues?q=componentid:188826

