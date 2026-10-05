# Shreya Nair — portfolio

A professional black-and-pink portfolio built with **React + Vite** and **Framer Motion**.
The front page is a grid of tiles (About, Highlights, Resume, Beyond work, Insights, Contact).
Click a tile and it expands to fill most of the page while the others shrink into a rail
(a bottom bar on mobile). `Esc`, the ✕ button, or the browser Back button returns to the grid.

**Live site:** <https://ishu0505.github.io/shreya_nair_portfolio/>  
**Admin:** <https://ishu0505.github.io/shreya_nair_portfolio/#/admin>

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Documentation

- [docs/CODE_MAP.md](docs/CODE_MAP.md): **what is where**, folder by folder (start here)
- [docs/ADMIN.md](docs/ADMIN.md): how to use the admin page and create the token
- [docs/DEMOS.md](docs/DEMOS.md): adding live demos / external project links

## Admin

Open `/#/admin` on the live site to edit everything (content, icons, resume PDF, images)
without touching code. Changes are saved to this repo and the site republishes automatically.

### Common edits

- **Update the resume / job info:** `src/content/resume.json` (and replace `public/assets/resume/Shreya-Nair-Resume.pdf`).
- **Profile photo:** replace the placeholder `public/assets/images/avatar-placeholder.svg` (or upload a photo in the admin → About & contact).
- **Add a highlight:** add an object to `src/content/projects.json`.
- **Interests and achievements:** `src/content/hobbies.json`.
- **Add a new tile:** create `src/sections/XSection.jsx`, list it in `src/sections/index.js`, and give it a grid area in `src/styles/bento.css`.
- **Colours:** `src/styles/tokens.css`.

### Placeholders to fill in
Some content is placeholder text that you should replace from the admin: the profile photo, the
"Capstone project" card, the "Insights" article, and the highlight card links (they currently point to LinkedIn).
GitHub / Medium / contact-form links are optional: leave them empty and they are hidden.

### Tests
`npm run test:e2e` drives the admin against a pretend GitHub (needs `npm i -D playwright` once, and the site
served with `npm run build && npx vite preview --port 4173`).

### Content check
`npm run build` first runs `npm run validate` (`scripts/validate-content.mjs`). It checks every file in
`src/content/` (required fields, colours, icon names, that referenced images/PDFs exist in `public/`) and
stops with a plain-English list of problems, so a typo can never replace the live site.

## Look & feel

Black surfaces, one hot-pink accent and soft-pink highlights. Playfair Display for headings, Inter for text,
thin hairline borders, subtle pink glow on hover.

- **Icons** live in `src/components/doodles/icons.jsx`: clean line icons (charts, bank, shield, scale, cap...).
  Use one anywhere with `<Doodle name="chart" />`.
- **Accent icons** per tile are in `src/content/stickers.json` (icon, size, rotation, position).
- **Fonts:** Inter and Playfair Display (SIL Open Font License), bundled via `@fontsource`.

## Deploy (GitHub Pages)

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
The site is served at `https://ishu0505.github.io/shreya_nair_portfolio/` (no custom domain for now; the build
uses relative paths, so it works under that sub-path and would work unchanged on a custom domain later).

## Contact

Shreya.nair.2026@mwm.smu.edu.sg

## License

MIT
