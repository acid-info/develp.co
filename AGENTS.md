# AGENTS.md

Context file for AI agents and developers working on the **develp.co** website repository.

## Project Overview

- **What it is:** A static corporate/marketing website for **Develp GmbH**, an Ethereum staking infrastructure company.
- **Domain:** Ethereum client diversity, network decentralisation, minority client adoption (Nimbus), staking protocol support.
- **Ecosystem:** Develp is part of the **Institute of Free Technology (IFT)** / **Logos** collective, closely tied to the **Nimbus** client team (config uses `businessUnit: 'Nimbus'`).
- **Site content:** A landing/About page, a Contact page, and three legal pages (Terms, Privacy Policy, Security). No blog, no versioned docs, no product API docs.
- **Live URLs:** https://develp.co (master) · https://dev.develp.co (develop, staging).

## Tech Stack

| Concern | Choice | Version / Notes |
|---|---|---|
| SSG | Docusaurus | **3.8.1** (v3 line; pinned, not floating) |
| Preset/theme | `@acid-info/logos-docusaurus-preset` | **1.0.3** (exact; hard-pins `@docusaurus/core` 3.8.1, pre-1.0 package — API churn risk) |
| UI | React / React-DOM | **^19.0.8** (theme peer-requires React 19; do not downgrade) |
| Markdown | MDX | **3.x** (`@mdx-js/react` ^3.1.1) |
| Styling | Sass + Tailwind | `sass` ^1.62.1 via injected `docusaurus-plugin-sass`; `tailwindcss` 3.4.17 + `autoprefixer` via a custom PostCSS plugin (see `docusaurus.config.js` `plugins`) |
| Code highlight | prism-react-renderer | ^2.1.0 |
| Language | TypeScript | ~5.2.2 — type-check only (`tsc`, noEmit) |
| Package manager | Yarn (classic) | 1.22 (`yarn.lock` committed; CI runs plain `yarn install`) |
| Node | >=18 (engines) | Dev shell pins Node 20; local Node 25 works |

## Commands

```bash
yarn start          # dev server, http://localhost:3000
yarn build          # production build → build/ (runs static generation + OG images)
yarn serve          # serve the static build locally
yarn typecheck      # tsc (runs automatically in the pre-commit hook)
yarn clear          # wipe .docusaurus/ cache and build/
yarn swizzle        # eject theme components (prefer NOT to use)
yarn docusaurus <cmd>
```

## Project Structure

```text
.
├── docs/                  # ALL site content (each file becomes a published page)
│   ├── index.md           # Landing / "About" → "/"  (sidebar_position: 1)
│   ├── contact-us.md      # → "/contact-us"          (shows in sidebar)
│   ├── security.md        # → "/security"            (hidden from sidebar)
│   ├── terms.md           # → "/terms"               (hidden from sidebar)
│   └── privacy-policy.md  # → "/privacy-policy"      (hidden from sidebar)
├── src/
│   ├── components/IndexPage.tsx      # the landing page React component (rendered by docs/index.md)
│   └── css/
│       ├── custom.scss               # global style overrides + landing-page layout rules
│       └── tailwind.css              # Tailwind entry (@tailwind base/components/utilities)
├── static/
│   └── img/
│       ├── logo.svg                  # navbar/footer logo
│       └── hero-wireframe.png        # landing hero background image
├── docusaurus.config.js    # site config (see "Config Gotchas")
├── tailwind.config.js      # Tailwind theme (Material-3 palette, Space Grotesk, font-label helpers)
├── package.json / yarn.lock
├── tsconfig.json           # extends @docusaurus/tsconfig
├── babel.config.js         # stock Docusaurus Babel preset — leave alone
├── flake.nix               # Nix dev shell (git, openssh, yarn 1.22, nodejs_20, ghp-import)
├── Jenkinsfile             # CI/CD pipeline
├── .husky/                 # pre-commit → `yarn typecheck`
└── .github/                # issue + PR templates
```

> `build/` and `.docusaurus/` are gitignored build artifacts. Never commit them.

## Architecture & Key Mechanics

- **Static site generation only** — no backend, no database. Content → build → static HTML/JS → published to a Git branch.
- **`docs/` is the Docusaurus content dir** (`routeBasePath: '/'`), so every `.md`/`.mdx` file in it becomes a live page. Do NOT drop internal docs/notes into `docs/` unless you intend them to be published.
- **Default sidebar (no `sidebars.js`):** only `index.md` (About) and `contact-us.md` appear. Legal pages hide via frontmatter:
  ```yaml
  displayed_sidebar: null
  sidebar_class_name: hidden
  pagination_prev: null
  pagination_next: null
  ```
- **Landing page mechanism:** `docs/index.md` imports `<IndexPage />` from `src/components/IndexPage.tsx`. The landing page is made full-bleed (no sidebar/TOC, full-width sections) **purely with CSS**: `.container:has(.index-page)`, `.row:has(.index-page)`, and `article:has(.index-page) …` selectors in `src/css/custom.scss`. There is no JS/body-class toggling — keep it that way (`:has()` is fully supported). Navbar anchor links (`/#commitment`, `/#focus`, …) scroll via the `ScrollToHash` component inside `IndexPage.tsx` (required because the theme's default hash scroll does not fire for same-page anchor clicks). Tailwind utilities come from `tailwind.config.js` (`@tailwind base` is loaded but `corePlugins.preflight` is **disabled** so Docusaurus theme styles are not reset).
- **Logos preset merge behavior:** with `businessUnit: 'Nimbus'` + `customSiteConfig: true`, the preset injects Nimbus-themed defaults (shared ecosystem footer links, `<meta>` tags). The **local `docusaurus.config.js` overrides overlapping keys** — but anything you don't define locally falls back to Nimbus defaults. If the `themeConfig.metadata` block is removed, the Nimbus meta (`description: "Nimbus, a Lighter Ethereum Client"`, `keywords: nimbus`) will reappear on the site.
- **Active plugins (auto-injected by the preset):** content-docs, content-pages, sass, theme-mermaid, local search (`logos-docusaurus-search-local`), `@acid-info/docusaurus-og` (build-time OG images into `_og/`), plus sitemap via preset-classic.
- **Mermaid** is disabled (no `markdown.mermaid` config, no diagrams exist); the `theme-mermaid` plugin is still auto-injected by the preset. **KaTeX/math support was removed** during the v3 upgrade.

## Config Gotchas (docusaurus.config.js)

1. **Do NOT remove the `webpack` resolution pin:**
   ```json
   "resolutions": { "webpack": "5.95.0" }
   ```
   It works around a webpackbar 6.0.1 incompatibility with newer webpack (ProgressPlugin validates `this.options`, which webpackbar overwrites with `name`/`color`/`reporters`). If you must bump webpack, also fix/replace webpackbar or the build fails with a ProgressPlugin schema error.
2. **`themeConfig` is typed as `UserThemeConfig`** (`@docusaurus/theme-common`), not the preset's strict `ThemeConfig` (which requires `docs`/`blog`/`prism`/`tableOfContents`). Keep this cast.
3. **`plugins: []` is intentional** — adding `@docusaurus/plugin-sitemap` (or other preset-classic plugins) causes a "plugin used 2 times with ID default" build error.
4. **Keep `themeConfig.metadata`** (Develp description/keywords/image) — it fixes the Nimbus meta bug.
5. The config is CommonJS (`module.exports`). This works fine on v3; only switch to ESM if you add ESM-only remark/rehype plugins.

## Content Conventions

- Pages are plain Markdown (`.md`); no `.mdx` files exist yet.
- **MDX v3 is strict:** in prose, backtick-escape `{`, `<`, and similar; do not use bare `{...}` or `<Tag>` in body text (e.g. `` `{key: value}` ``). Use standard Markdown links, not `<url>` autolinks.
- Keep heading structure semantic (don't skip levels, e.g. don't jump H1 → H4).
- Consistency for hidden/utility pages: use the full hidden-frontmatter block above.
- Footer/navbar are configured in `docusaurus.config.js` (plus preset-injected shared links); content pages are in `docs/`.
- Check external links (Twitter, IFT, HackenProof, mailto) — they are not CI-verified.

## Code Style

- **Do not add comments unless asked.**
- Prettier config in `.prettierrc` (tabWidth 2, no semicolons, single quotes, trailing commas). `.prettierignore` covers `*.md`/`*.mdx`.
- **No lint script** — only `yarn typecheck` (enforced in `.husky/pre-commit`).
- `src/` holds only the landing component and CSS (see Project Structure). Avoid swizzling theme components; prefer preset config options.

## CI/CD & Deployment

- **Jenkins** (`Jenkinsfile`) builds on every push: `yarn install` → `yarn build` (via Nix dev shell) → `ghp-import` the `build/` output.
- **Branch → environment mapping:**
  - `master` → branch `deploy-master` → **develp.co**
  - anything else (e.g. `develop`) → branch `deploy-develop` → **dev.develp.co**
- **Hosting:** Caddy server with a git plugin (Status-im infra), serving the pushed `deploy-*` branches via GitHub webhooks. Not GitHub Pages/Netlify/Vercel.
- Build metadata is exposed at `/build.json` on the live site.
- **Release workflow (see README):** branch from `develop`, open PR against `develop`, verify on staging (dev.develp.co), then `git rebase origin/develop` onto `master` and push.
- Commit the updated `yarn.lock` whenever dependencies change (CI runs plain `yarn install`).

## Dev Environment

- Recommended: `nix develop` (see `flake.nix`) — provides Node 20, Yarn 1.22, ghp-import, ssh.
- Node >=18 required (`engines`); Node 20 (flake) and Node 25 (local) are both fine.

## Common Tasks

- **Add a published page:** create `docs/<name>.md` with frontmatter (`title`, `description`, `sidebar_position`). Add `displayed_sidebar: null` + `sidebar_class_name: hidden` if it should not appear in the sidebar.
- **Change SEO meta:** edit `themeConfig.metadata` in `docusaurus.config.js` (keep the Develp description/keywords).
- **Edit footer/nav:** edit `themeConfig.footer` / `themeConfig.navbar` in `docusaurus.config.js` (the preset appends shared ecosystem links automatically).
- **Custom styling:** use `src/css/custom.scss`. Avoid `display: none !important` hacks on theme internals where possible — they break silently on theme upgrades.
- **After any dependency/config change:** run `yarn install` (if deps), `yarn typecheck`, `yarn build`, then `yarn serve` and smoke-test `/`, `/contact-us`, `/terms`, `/privacy-policy`, `/security`, `/sitemap.xml`.

## Troubleshooting

| Symptom | Fix |
|---|---|
| `ProgressPlugin ... does not match the API schema` | webpack got bumped; restore `"resolutions": { "webpack": "5.95.0" }` |
| `Plugin "docusaurus-plugin-sitemap" is used 2 times with ID "default"` | remove the explicit sitemap plugin from `plugins: []` |
| `tsc` fails on `themeConfig` | keep the `UserThemeConfig` cast in `docusaurus.config.js` |
| Nimbus meta/footer content shows on the live site | re-add `themeConfig.metadata`; local config must override preset defaults |
| MDX compile error on `{` or `<` in content | backtick-escape or HTML-entity-escape the characters (MDX v3 is strict) |
| Stale routes/pages after content moves | run `yarn clear`, then rebuild |
