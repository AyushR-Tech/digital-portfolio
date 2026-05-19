# Ayush Rewatkar Portfolio

Premium animated portfolio website built with React, Vite, Tailwind CSS, Framer Motion, and Axios.

## Setup

1. Install dependencies: `npm install`
2. Create an environment file: `copy .env.example .env`
3. Update `VITE_GITHUB_USERNAME` in `.env`
4. Start the dev server: `npm run dev`

## Build

`npm run build`

## Deployment

### GitHub Pages

This repo now includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds the site and publishes the `dist` output to GitHub Pages.

1. Create a GitHub repository for this project.
2. Add the repository as a remote in this folder:
   - `git remote add origin https://github.com/<your-username>/<your-repo>.git`
3. Push the `main` branch:
   - `git branch -M main`
   - `git push -u origin main`
4. The workflow will run automatically and deploy the site to GitHub Pages.

> If you are using a repository site URL like `https://<your-username>.github.io/<your-repo>/`, set `base` in `vite.config.js` to `"/<your-repo>/"`.

### Vercel

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Project config file: `vercel.json`
- Add `VITE_GITHUB_USERNAME` and optional `VITE_GITHUB_TOKEN` in Vercel Environment Variables

To deploy on Vercel:
1. Go to https://vercel.com/new
2. Import `https://github.com/AyushR-Tech/digital-portfolio`
3. Set Environment Variables if needed
4. Deploy the project

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Add the same environment variables in Site settings

The repository includes `netlify.toml` so Netlify can detect the correct build settings automatically.

## Notes

- The GitHub dashboard uses GitHub REST API via Axios.
- `VITE_GITHUB_TOKEN` is optional but recommended for higher rate limits.
