# How to Find Your Facebook Page ID

## Quick Methods

### Method 1: From Your Facebook Page (Easiest)

1. **Go to your Facebook Business Page**
   - Visit https://www.facebook.com/
   - Navigate to your AUS Facility Management page

2. **Click "About" in the left sidebar**

3. **Scroll down to "More Info" section**
   - You'll see "Page ID" with a long number
   - Example: `123456789012345`
   - Copy this number

### Method 2: From Page URL

1. **Go to your Facebook Business Page**

2. **Look at the URL in your browser**
   - If your URL is: `facebook.com/YourPageName-123456789012345/`
   - The numbers at the end are your Page ID: `123456789012345`

### Method 3: Using Facebook's Tool

1. **Visit:** https://findmyfbid.com/

2. **Enter your Facebook Page URL**
   - Example: `https://www.facebook.com/AUSFacilityManagement`

3. **Click "Find numeric ID"**

4. **Copy the Page ID** that appears

### Method 4: From Page Settings (Most Reliable)

1. **Go to your Facebook Business Page**

2. **Click "Settings" (top right)**

3. **Click "Page Info" in the left sidebar**

4. **Look for "Page ID"** at the bottom
   - It will be a number like: `123456789012345`

---

## What to Do After Finding Your Page ID

### Step 1: Open Configuration File

Open the file: `src/constants/chatConfig.ts`

### Step 2: Replace Page ID

Find this section:

```typescript
// Facebook Messenger
messenger: {
  pageId: 'YOUR_FACEBOOK_PAGE_ID', // ⬅️ REPLACE THIS
  pageName: 'AUS Facility Management',
},
```

Replace `YOUR_FACEBOOK_PAGE_ID` with your actual Page ID:

```typescript
// Facebook Messenger
messenger: {
  pageId: '123456789012345', // ⬅️ Your actual Page ID
  pageName: 'AUS Facility Management',
},
```

### Step 3: Save and Rebuild

```bash
npm run build
```

---

## Verify It's Working

### Test the Messenger Link:

1. **Open your browser**

2. **Go to this URL** (replace with your Page ID):
   ```
   https://m.me/123456789012345
   ```

3. **Should open Facebook Messenger** with your business page

### Test on Your Website:

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Open** http://localhost:7000

3. **Click the floating chat button** (bottom right)

4. **Click "Chat on Messenger"**

5. **Should open Messenger** with your business

---

## Don't Have a Facebook Business Page?

### Create One:

1. **Go to:** https://www.facebook.com/pages/create

2. **Choose "Business or Brand"**

3. **Fill in:**
   - Page Name: `AUS Facility Management`
   - Category: `Facility Maintenance Service`
   - Description: Your business description

4. **Upload:**
   - Profile picture (logo)
   - Cover photo

5. **Publish the page**

6. **Get your Page ID** using one of the methods above

### Enable Messenger:

1. **Go to your Facebook Page**

2. **Click "Settings"**

3. **Click "Messaging" in left sidebar**

4. **Turn on "Allow people to contact my Page privately by showing the Message button"**

5. **Set up instant replies:**
   - "Thanks for your message! We'll respond shortly."

6. **Set up away message** (for after hours)

---

## Example Configuration

### Before (Default):
```typescript
messenger: {
  pageId: 'YOUR_FACEBOOK_PAGE_ID',
  pageName: 'AUS Facility Management',
},
```

### After (With Your Page ID):
```typescript
messenger: {
  pageId: '123456789012345',
  pageName: 'AUS Facility Management',
},
```

---

## Troubleshooting

### "Page not found" when testing:
- ✅ Verify Page ID is correct
- ✅ Ensure Facebook Page is published (not draft)
- ✅ Check Page has Messenger enabled

### Can't find Page ID:
- ✅ Make sure you're the page admin
- ✅ Use findmyfbid.com tool
- ✅ Check Page Settings → Page Info

### Messenger button doesn't work:
- ✅ Clear browser cache
- ✅ Rebuild the project: `npm run build`
- ✅ Check console for errors

---

## Need Help?

If you can't find your Facebook Page ID:
1. Check if you have a Facebook Business Page (not personal profile)
2. Make sure you're logged in as page admin
3. Try all 4 methods above
4. Contact Facebook support if still stuck

---

**Once you have your Page ID, update the configuration and rebuild! 🚀**

