# LedgerLift Product Selector — Public Version

Interactive product recommendation tool for LedgerLift Studio customers.

**Status:** Ready for Vercel deployment  
**Domain:** selector.ledgerliftstudio.com (or products.ledgerliftstudio.com)  
**Type:** Public Next.js app (no authentication)

---

## Quick Start

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm build
```

Visit `http://localhost:3000` after running `npm run dev`.

---

## Deploy to Vercel

### Option 1: Direct GitHub → Vercel (Recommended)

1. **Create new GitHub repo:**
   - Go to github.com → New repository
   - Name: `ledgerliftstudio-product-selector`
   - Public repo
   - Clone and push this code

2. **Deploy on Vercel:**
   - Go to vercel.com → Import Project
   - Select your new `ledgerliftstudio-product-selector` repo
   - Vercel auto-detects Next.js
   - Click Deploy
   - Takes ~2 minutes

3. **Connect custom domain:**
   - Vercel dashboard → Project Settings → Domains
   - Add custom domain: `selector.ledgerliftstudio.com`
   - Follow Vercel's DNS instructions (usually CNAME to Vercel)
   - Update DNS at your registrar (Zoho)

### Option 2: If deploying to existing Zoho domain

Make sure Zoho DNS includes:
```
CNAME: selector → [Vercel assigned domain]
```

---

## Features

- ✅ 3 × 3 matrix (3 revenue bands × 3 business stages)
- ✅ All product links with UTM tracking
- ✅ Links to diagnostic tool + booking call
- ✅ Mobile responsive
- ✅ Light theme (customer-facing branding)

---

## Product Links

All links point to correct platforms:
- **Foundation Kit** ($27) → Stan Store
- **Monthly Close** ($29) → Stan Store  
- **LedgerDesk Solo** ($197) → Etsy
- **LedgerDesk Access** ($147) → Etsy
- **Reset Service** ($997) → Cal.com booking

---

## Testing

After deployment:

1. Visit selector.ledgerliftstudio.com
2. Click each product button → verify links work
3. Check UTM params in URLs (utm_source=product-selector)
4. Test on mobile

---

## Sync with Internal Version

The internal version (in Marketing HQ hub) can be tested/iterated separately. When you make updates:

1. Update internal version in hub first
2. Test with team
3. When ready, update this public version and re-deploy to Vercel

Both can exist independently.

---

## Questions

For deployment help: Check Vercel docs or contact support.  
For component changes: Edit `app/page.tsx` and push to GitHub → Vercel auto-redeploys.

---

**Created:** June 14, 2026  
**Ready to deploy:** Yes ✅
