# FRSHAR COSMOS PRIVATE LIMITED

A modern single‑page application built with React, Vite (Rolldown), and Tailwind CSS. This repo contains the marketing/landing experience for security products and services (e.g., Firewall Backup, Data Protection) with responsive layouts, image assets, and utility‑first styling.

## Overview

- **Framework**: React 19 + Vite (rolldown‑vite)
- **Styling**: Tailwind CSS v4, PostCSS, Autoprefixer
- **Linting**: ESLint 9
- **Language**: JavaScript (TypeScript optional, not enabled)

## Prerequisites

- Node.js ≥ 18.17 (LTS recommended)
- npm ≥ 9 (bundled with Node)

Check versions:

```bash
node -v
npm -v
```

## Getting Started

Install dependencies and start the dev server with hot reload.

```bash
npm install
npm run dev
```

By default Vite prints the local URL (typically http://localhost:5173). Press o to open in the browser.

## Scripts

- `npm run dev` — Start the development server with HMR.
- `npm run build` — Production build to `dist/`.
- `npm run preview` — Preview the production build locally.
- `npm run lint` — Lint source files with ESLint.

Scripts are defined in `package.json`.

## Tech Stack

- `react`, `react-dom`
- `vite` (pinned to `rolldown-vite@7.1.14` via overrides)
- `tailwindcss@4`, `@tailwindcss/postcss`, `postcss`, `autoprefixer`
- `eslint` and recommended React plugins

## Project Structure

```
frshar-cosmos-private-limited/
├─ public/
│  ├─ images/            # Static assets served as-is (e.g., hero/banner images)
│  └─ vite.svg
├─ src/
│  ├─ assets/            # App-specific assets (if any)
│  ├─ App.jsx            # Main page layout and sections
│  ├─ App.css            # Component styles (if needed)
│  ├─ index.css          # Tailwind v4 entry (imports)
│  └─ main.jsx           # App bootstrap (ReactDOM.createRoot)
├─ index.html            # Vite HTML entry
├─ package.json
├─ README.md
└─ ... other config files
```

## Styling (Tailwind CSS v4)

Tailwind v4 uses a zero‑config, CSS‑first setup. The CSS entry is `src/index.css` and typically contains:

```css
@import "tailwindcss";
```

Usage:

- Add utility classes directly in JSX, e.g., `className="mx-auto max-w-screen-2xl px-4"`.
- Global styles or component‑scoped additions can live in `src/App.css` or new CSS files imported by components.
- If utilities don’t apply, ensure the file with those classes is part of the Vite/React source (i.e., inside `src/`).

## Environment Variables

Vite exposes only variables prefixed with `VITE_` to the client. Create a `.env` file at the project root if needed:

```env
VITE_API_BASE_URL=https://api.example.com
VITE_ANALYTICS_KEY=your_key
```

Access them in code via `import.meta.env.VITE_API_BASE_URL`.

## Development

1. Install deps: `npm install`
2. Start dev server: `npm run dev`
3. Edit components in `src/` (e.g., `src/App.jsx`). HMR will refresh the browser.

Images referenced like `/images/hero.jpg` should be placed under `public/images/`. Files in `public/` are served at the site root.

## Build & Preview

```bash
npm run build
npm run preview
```

The build outputs to `dist/`. Use `preview` to verify the production bundle locally before deploying.

## Linting

Run ESLint:

```bash
npm run lint
```

Adjust rules in the ESLint config files if present. Consider adding Prettier if you want formatting consistency (not included by default).

## Deployment

The app is a static site after `npm run build`.

- **Vercel / Netlify**: Select the repo, set build command `npm run build`, and output directory `dist/`.
- **Static hosting**: Upload the contents of `dist/` to your hosting/CDN bucket.
- **GitHub Pages**: Publish the `dist/` directory (e.g., via an action that runs `npm ci && npm run build`).

If using environment variables on hosting platforms, create corresponding `VITE_...` variables in the provider’s dashboard.

## Troubleshooting

- **Port already in use**: Set a different port, e.g., `vite --port 5174` via `npm run dev -- --port 5174`.
- **Tailwind classes not applied**: Confirm `@import "tailwindcss";` exists in `src/index.css` and class names appear in files under `src/`.
- **Images not found**: Ensure assets referenced as `/images/...` live in `public/images/`.
- **ESLint errors**: Run `npm run lint` and follow messages. Configure rules if needed.

## Contributing

Open issues and PRs are welcome. For larger changes, please propose an approach first.

## License

Add your preferred license (e.g., MIT) in a `LICENSE` file if required.

