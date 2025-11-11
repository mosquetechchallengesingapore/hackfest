# Cloudflare Pages Deployment Guide

## The Problem

Cloudflare Pages is trying to run `npx wrangler deploy` which is for Cloudflare Workers, not Pages. This happens when:
1. The project is incorrectly detected as a Workers project
2. The build command is misconfigured in Cloudflare Pages dashboard

## Solution: Configure Cloudflare Pages Dashboard

### Step 1: Go to Cloudflare Pages Dashboard
1. Log into Cloudflare Dashboard
2. Navigate to **Pages** (not Workers)
3. Select your project or create a new one

### Step 2: Configure Build Settings

In your Cloudflare Pages project settings:

**Build Configuration:**
- **Framework preset**: Select `Next.js` (if available) or `None`
- **Build command**: `npm run build`
- **Build output directory**: Leave **EMPTY** or set to `.next`
- **Root directory**: Leave **EMPTY**

**IMPORTANT**: Make sure you're NOT using:
- ❌ `npx wrangler deploy` (this is for Workers)
- ❌ Any wrangler commands

### Step 3: Set Environment Variables

Go to **Settings** → **Environment Variables** and add:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Step 4: Deploy

1. Connect your Git repository
2. Cloudflare Pages will automatically detect Next.js
3. The build should run `npm run build` automatically

## Alternative: If Next.js 16 isn't fully supported

If you encounter issues with Next.js 16 on Cloudflare Pages, you have two options:

### Option 1: Use Static Export (Limitations)
This disables API routes and server-side rendering:

1. Update `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  output: 'export',
};
```

2. Move API routes to Supabase Edge Functions or external API

### Option 2: Use Vercel (Recommended for Next.js)
Vercel has the best Next.js support:
- Automatic detection
- Zero configuration needed
- Full Next.js 16 support

## Current Configuration

The project is configured with:
- `output: 'standalone'` in `next.config.ts`
- Standard Next.js build process
- No special Cloudflare adapters needed

## Troubleshooting

**Error: "Missing entry-point to Worker script"**
- ✅ Solution: Make sure you're deploying to **Pages**, not **Workers**
- ✅ Check build command is `npm run build`, not `wrangler deploy`

**Error: Build fails**
- Check Node.js version (should be 18.x or 20.x)
- Verify environment variables are set
- Check build logs for specific errors

**API routes not working**
- Cloudflare Pages may need special configuration for API routes
- Consider using Supabase Edge Functions for API endpoints
