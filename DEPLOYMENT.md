# Deployment Guide - Elite University Website

## 🚀 Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**
   - Visit: https://vercel.com
   - Sign in with your GitHub account

2. **Import Your Repository**
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `satyammallik1414-png/collgee`
   - Click "Import"

3. **Configure Project**
   - **Framework Preset:** Vite
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Environment Variables** (Optional)
   - Add if you have a backend API:
   ```
   VITE_API_URL=your-backend-api-url
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for deployment
   - Your site will be live at: `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from Frontend Directory**
   ```bash
   cd frontend
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **elite-university** (or your choice)
   - Directory? **./frontend**
   - Override settings? **N**

5. **Production Deployment**
   ```bash
   vercel --prod
   ```

## 🔧 Backend Deployment (Optional)

### Deploy Backend to Render/Railway/Heroku

**For Render:**
1. Go to https://render.com
2. Create new "Web Service"
3. Connect your GitHub repo
4. Configure:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment Variables:** Add your MongoDB URI and JWT_SECRET

**For Railway:**
1. Go to https://railway.app
2. Click "New Project" → "Deploy from GitHub repo"
3. Select `backend` folder
4. Add environment variables
5. Deploy

## 📝 Post-Deployment

1. **Update API URL**
   - If you deployed backend, update `frontend/.env`:
   ```
   VITE_API_URL=https://your-backend-url.com/api
   ```

2. **Redeploy Frontend**
   - Push changes to GitHub
   - Vercel will auto-deploy

3. **Custom Domain** (Optional)
   - Go to Vercel Dashboard → Your Project → Settings → Domains
   - Add your custom domain

## ✅ Verification

After deployment, verify:
- [ ] Website loads correctly
- [ ] All pages are accessible
- [ ] Navigation works
- [ ] Forms submit (if backend is connected)
- [ ] Responsive design works on mobile

## 🌐 Your Live URLs

- **Frontend (Vercel):** Will be provided after deployment
- **Backend (if deployed):** Your backend hosting URL
- **GitHub Repo:** https://github.com/satyammallik1414-png/collgee

## 🆘 Troubleshooting

**Build Fails:**
- Check Node.js version (use Node 18+)
- Verify all dependencies are in package.json
- Check build logs in Vercel dashboard

**404 Errors:**
- Ensure `vercel.json` is in frontend folder
- Check routing configuration

**API Not Working:**
- Update VITE_API_URL in environment variables
- Check CORS settings in backend

## 📞 Support

For issues, check:
- Vercel Documentation: https://vercel.com/docs
- Your deployment logs in Vercel dashboard
