# Market Digest

AI-powered news intelligence web app built with Vite + React.

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages deployment

This repository is configured to deploy automatically to GitHub Pages using GitHub Actions.

### One-time GitHub setup

1. Go to repository Settings -> Pages.
2. Under Build and deployment, set Source to GitHub Actions.
3. Keep branch as main for your normal development flow.

### How deployment works

- Pushes to main trigger [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
- The workflow installs dependencies, builds with the correct base path, uploads the dist artifact, and deploys to Pages.
- The workflow also creates a 404.html copy of index.html so client-side routing works on refresh.

### Site URL

Production URL:

- https://jessicabat.github.io/market-digest/

### Manual redeploy

You can also run the workflow manually from Actions using the workflow_dispatch trigger.

## Notes about base paths

- Local dev uses base /.
- Production build uses /market-digest/.
- This is configured in [vite.config.ts](vite.config.ts).
