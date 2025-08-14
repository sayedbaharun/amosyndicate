# 🚀 AMO Deployment Guide

## 📋 Prerequisites
- GitHub repository: ✅ https://github.com/sayedbaharun/AMO_OFFICIAL
- Node.js 18+: Required for build
- npm or yarn: Package manager

---

## 🌟 Option 1: Vercel Deployment (Recommended)

### Why Vercel?
- ✅ Built by Next.js creators
- ✅ Automatic deployments on push
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Zero configuration needed

### Steps:
1. **Go to Vercel**
   - Visit https://vercel.com
   - Sign up/Login with GitHub

2. **Import Project**
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose `sayedbaharun/AMO_OFFICIAL`

3. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (leave as is)
   - Build Command: `npm run build`
   - Output Directory: `.next` (auto)

4. **Environment Variables** (if needed)
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site will be live at: `https://amo-official.vercel.app`

6. **Custom Domain** (optional)
   - Go to Settings → Domains
   - Add your domain: `arabmoneyofficial.com`
   - Update DNS records as instructed

---

## 🐙 Option 2: GitHub Pages Deployment

### Steps:
1. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Source: Deploy from a branch
   - Branch: `gh-pages` (will be created automatically)

2. **Update Next.js Config**
   Edit `next.config.js`:
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/AMO_OFFICIAL',
     assetPrefix: '/AMO_OFFICIAL',
     // ... rest of config
   };
   ```

3. **Push Changes**
   ```bash
   git add next.config.js
   git commit -m "Enable static export for GitHub Pages"
   git push origin main
   ```

4. **GitHub Actions will:**
   - Automatically build the project
   - Deploy to GitHub Pages
   - Site will be at: `https://sayedbaharun.github.io/AMO_OFFICIAL`

---

## 🌐 Option 3: Netlify Deployment

### Steps:
1. **Visit Netlify**
   - Go to https://netlify.com
   - Sign up/Login with GitHub

2. **New Site from Git**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select `AMO_OFFICIAL` repository

3. **Build Settings**
   - Build command: `npm run build && npm run export`
   - Publish directory: `out`

4. **Deploy**
   - Click "Deploy site"
   - Your site: `https://amazing-name-123.netlify.app`

5. **Custom Domain**
   - Domain Settings → Add custom domain
   - Follow DNS configuration

---

## 🛠️ Option 4: Manual Deployment (Any VPS)

### For Ubuntu/Debian Server:

```bash
# 1. Clone repository
git clone https://github.com/sayedbaharun/AMO_OFFICIAL.git
cd AMO_OFFICIAL

# 2. Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. Install dependencies
npm install

# 4. Build production
npm run build

# 5. Install PM2
sudo npm install -g pm2

# 6. Start application
pm2 start npm --name "amo" -- start
pm2 save
pm2 startup

# 7. Setup Nginx (optional)
sudo apt install nginx
sudo nano /etc/nginx/sites-available/amo

# Add configuration:
server {
    listen 80;
    server_name arabmoneyofficial.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Enable site
sudo ln -s /etc/nginx/sites-available/amo /etc/nginx/sites-enabled
sudo nginx -t
sudo systemctl restart nginx
```

---

## 🔍 Deployment Checklist

### Pre-Deployment:
- [ ] Test locally: `npm run dev`
- [ ] Build test: `npm run build`
- [ ] Check for errors
- [ ] Update environment variables
- [ ] Commit all changes

### Post-Deployment:
- [ ] Check live site
- [ ] Test all pages
- [ ] Verify LiveChat works
- [ ] Test WaitingList modal
- [ ] Check ROI Calculator
- [ ] Mobile responsiveness
- [ ] Form submissions
- [ ] SSL certificate active

---

## 🌍 Environment Variables

Create `.env.production` for production:

```env
NEXT_PUBLIC_SITE_URL=https://arabmoneyofficial.com
# Add other production variables
```

---

## 📊 Monitoring

### Recommended Tools:
1. **Vercel Analytics** (built-in)
2. **Google Analytics**
3. **Sentry** for error tracking
4. **Hotjar** for user behavior

---

## 🚨 Troubleshooting

### Build Fails:
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading:
- Check `next.config.js` image configuration
- Verify external image domains are whitelisted

### 404 on Routes:
- For static export, ensure all routes are pre-rendered
- Check `output: 'export'` in next.config.js

---

## 🎯 Recommended: Vercel

For AMO, we recommend **Vercel** because:
1. Zero configuration
2. Automatic HTTPS
3. Global CDN
4. Instant rollbacks
5. Preview deployments
6. Dubai region available (`dub1`)

**Deploy now:** https://vercel.com/new

---

## 📞 Need Help?

- GitHub Issues: https://github.com/sayedbaharun/AMO_OFFICIAL/issues
- Email: hello@arabmoneyofficial.com
- Documentation: This file

---

**Last Updated:** August 14, 2025
