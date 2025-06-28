# Deployment Guide for Sankofa Academy Website

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub account
3. Import your `school-website` repository
4. Deploy automatically

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub account
3. Import your `school-website` repository
4. Build command: `npm run build`
5. Publish directory: `out`

### Option 3: GitHub Pages
1. In your repository settings
2. Go to Pages section
3. Source: Deploy from a branch
4. Branch: main
5. Folder: / (root)

## 🔧 Local Build for Testing

```bash
npm run build
npm run start
```

## 🌐 Environment Variables

No environment variables needed - all images are local.

## 📁 Build Output

The build will create an `out` directory with static files that can be served from any web server.

## 🔗 Live URL

Once deployed, your site will be available at:
- Vercel: `https://school-website-xxx.vercel.app`
- Netlify: `https://xxx.netlify.app`
- GitHub Pages: `https://tzifas.github.io/school-website`

## 🛠️ Troubleshooting

### If localhost still shows:
1. Clear browser cache
2. Check if you're running the production build
3. Ensure you're accessing the deployed URL, not localhost:3000

### If MCP Server is red:
1. Ensure the deployment is complete
2. Update MCP server configuration to point to the live URL
3. Check if the deployment platform is accessible 