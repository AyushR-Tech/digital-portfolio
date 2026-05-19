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
