# Destiny Uyi Akugbe — Portfolio

**Live:** https://dexha21.github.io/portfolio/

## Overview

A content-driven developer portfolio built with Vite, React, and React Router. All copy
lives in JSON files under `src/data/`, so projects, skills, and about content can be
updated without touching component code.

Projects come in two tiers: **tier 1** projects have a full case-study page
(`overview`, `sections`, `outcomes`, `metrics`), while **tier 2** projects render as
cards plus a simplified detail view.

## Tech Stack

- **Vite** — build tool
- **React** — UI
- **React Router** — client-side routing
- **Plain CSS with custom properties** — design tokens, dark/light themes
- **oxlint** — linting

No UI framework, no Tailwind, no state-management library.

## Architecture — content-driven

Components read from JSON. No content is hardcoded into JSX.

```
src/data/site.json       → global config (nav, hero, contact, meta)
src/data/about.json      → about page content + timeline
src/data/skills.json     → skills categories
src/data/projects.json   → all projects (tier 1 case studies + tier 2 cards)
```

## How to Add a Project

1. Open `src/data/projects.json`
2. Copy an existing block from `tier1` or `tier2`
3. Change the `id` to a unique kebab-case slug
4. Set `tier` to `1` (case study) or `2` (card)
5. Fill the required fields: `id`, `title`, `year`, `subtitle`, `summary`, `stack`, `tier`
6. For tier 1, also fill: `overview`, `sections`, `outcomes`, `metrics`
7. Set `theme` to one of the IDs in `meta.themes`
8. Commit and push — no code changes needed

## How to Edit Existing Content

| Content | File |
| --- | --- |
| Hero, nav, contact, meta | `src/data/site.json` |
| About narrative and timeline | `src/data/about.json` |
| Skills | `src/data/skills.json` |
| Project descriptions | `src/data/projects.json` |

## Local Development

```bash
npm install

npm run dev       # http://localhost:5173/portfolio/
npm run build     # production bundle in dist/
npm run preview   # preview production build
npm run lint      # oxlint
```

## Deployment

```bash
npm run deploy    # builds and pushes dist/ to the gh-pages branch
```

GitHub Pages serves from the `gh-pages` branch. Vite's `base` is `/portfolio/` and
React Router's `basename` is `/portfolio/` to match.

## Folder Structure

```
src/
  data/          ← JSON content
  components/    ← reusable UI
  pages/         ← route components
  hooks/         ← custom hooks
  utils/         ← helpers
  styles/        ← theme.css (tokens) + global.css (all styles)
public/
  404.html       ← SPA fallback for GitHub Pages
  favicon.ico
```

## Adding Images to Projects

All projects currently use a gradient + initials fallback (`ProjectVisual.jsx`). To add
a real image:

1. Upload the image somewhere public (Imgur, GitHub, a CDN)
2. Set the `image` field in the project's entry in `projects.json` to the direct URL
3. The card and case study will render the image instead of the gradient

## Contact

- **Email:** akugbed2@gmail.com
- **GitHub:** https://github.com/dexha21
- **LinkedIn:** https://www.linkedin.com/in/destiny-akugbe-bb7607349/
