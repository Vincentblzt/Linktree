# Deployment Guide - SmartBio

Deploy your link-in-bio profile on Vercel and GitHub Pages.

## Quick Start - Vercel (Recommended)

### Option 1: Automatic Deployment (GitHub Integration)

1. **Push to GitHub** (already done)
   ```bash
   git push origin claude/jolly-faraday-4grf13
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select `Vincentblzt/Linktree`
   - Select branch: `claude/jolly-faraday-4grf13` (or your main branch)
   - Click "Deploy"

3. **Vercel Auto-Configuration**
   - Framework: React
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `build` (auto-detected)
   - Install Command: `npm install`

4. **Environment Variables** (Optional)
   - Add any env vars in Vercel dashboard if needed

5. **Deploy** - Vercel automatically builds and deploys
   - Your site will be live at: `https://linktree.vercel.app`
   - Custom domain: Add in Vercel Settings > Domains

### Option 2: Manual Deployment with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd /home/user/Linktree
   vercel
   ```

4. **Follow Prompts**
   - Set project name (e.g., `smartbio-vincent`)
   - Link to existing project or create new
   - Accept defaults for build settings
   - Vercel deploys automatically

5. **Get Your URL**
   - Deployment URL: `https://smartbio-vincent.vercel.app`
   - Share this link with anyone

## GitHub Pages (Alternative)

### Deployment Steps

1. **Update package.json**
   ```json
   {
     "homepage": "https://vincentblzt.github.io/linktree"
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Update npm scripts** in `package.json`
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to: https://github.com/Vincentblzt/Linktree/settings
   - Navigate to: Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

6. **Access Your Site**
   - URL: `https://vincentblzt.github.io/linktree`

## Production Optimizations

### Build for Production
```bash
npm run build
```

This creates an optimized `build/` folder with:
- Minified CSS and JavaScript
- Image optimization
- Code splitting

### Test Production Build Locally
```bash
npm install -g serve
serve -s build
# Visit http://localhost:3000
```

## Custom Domain Setup (Vercel)

1. In Vercel Dashboard → Project Settings → Domains
2. Add your custom domain (e.g., `vincent-balazut.com`)
3. Update DNS records in your domain registrar:
   - CNAME: `cname.vercel-dns.com`
4. DNS propagation: 24-48 hours
5. SSL certificate auto-issued by Vercel

## Environment Variables

Create `.env.production` for production-only variables:
```env
REACT_APP_API_URL=https://api.example.com
```

Access in code:
```javascript
const apiUrl = process.env.REACT_APP_API_URL;
```

## Monitoring & Analytics

### Vercel Analytics
- Automatically enabled
- View in Vercel Dashboard
- Monitor: Performance, Error Rate, CLS, FCP

### Error Tracking
- Check Vercel Logs tab for build/runtime errors
- View in: https://vercel.com/docs/concepts/observability/error-tracking

## Continuous Deployment

Your setup enables **automatic deployments**:

1. Push code to GitHub
2. Vercel automatically detects changes
3. Build runs automatically
4. Deployment happens on success
5. Old deployments archived

### Branch Deployments
- `main` → Production (`vercel.app`)
- `dev` → Preview (`dev.vercel.app`)
- Feature branches → Preview URLs

## Rollback & Previews

### Preview Deployments
- Every PR gets a preview URL
- Share for feedback before merging
- Auto-deleted after PR closes

### Rollback to Previous Deployment
1. Vercel Dashboard → Deployments
2. Click deployment to rollback
3. Click "Promote to Production"

## Performance Tips

- Images: Use WebP format
- Bundle: Lazy load components
- Caching: Vercel handles cache headers automatically
- CDN: Content served from 30+ global locations

## Troubleshooting

### Build Fails
1. Check Vercel build logs
2. Ensure `npm run build` works locally
3. Verify all dependencies in `package.json`
4. Check for TypeScript errors

### Slow Deployments
- Check bundle size: `npm run build`
- Optimize images
- Lazy load heavy components
- Use Vercel's Performance Insights

### Environment Issues
- Verify env vars in Vercel dashboard
- Check `.env.production` format
- Ensure no secrets in code

## Support Resources

- [Vercel Docs](https://vercel.com/docs)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/)
- [GitHub Pages Docs](https://pages.github.com/)

---

**Your SmartBio is ready for the world! 🚀**
