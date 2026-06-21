# Blakie Labs

Astro-powered brand site for Blakie Labs, a senior software studio and product lab. The site includes portfolio work, product previews, retainer plans, contact flows, SEO metadata, and the origin story behind the Blakie name.

## Tech Stack

- [Astro](https://astro.build/) for static site generation and page routing
- Astro view transitions for smooth page changes
- Vanilla JavaScript for UI behavior
- Global BEM-style CSS in `src/styles/global.css`
- Static assets served from `public/`

## Pages

- `/` - Home page with studio positioning, product preview, stats, and testimonials
- `/work/` - Client systems and lab products with tabbed views and product modals
- `/about/` - Studio ethos, team, and origin section
- `/why-blakie/` - Story page for the Blakie name with sticker art and a gallery placeholder
- `/plans/` - Retainer plans, process, and FAQ
- `/contact/` - Intake form with validation and success state

## Project Structure

```text
.
|-- public/
|   |-- favicon.ico
|   |-- og-image.png
|   |-- robots.txt
|   |-- sitemap.xml
|   `-- stikers/
|-- src/
|   |-- components/
|   |   |-- Layout.astro
|   |   |-- Nav.astro
|   |   |-- Footer.astro
|   |   |-- Newsletter.astro
|   |   |-- ProductModal.astro
|   |   `-- SiteScripts.astro
|   |-- data/
|   |   `-- site.js
|   |-- pages/
|   `-- styles/
|       `-- global.css
|-- astro.config.mjs
|-- package.json
`-- package-lock.json
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Content Editing

Most reusable site content lives in `src/data/site.js`, including:

- Agency points
- Product cards and modal details
- Client case studies
- Pricing plans
- FAQs
- Testimonials
- Team entries

Page-specific copy lives in the matching file under `src/pages/`.

## SEO

The shared SEO setup is handled in `src/components/Layout.astro`.

Current production SEO assets include:

- Canonical URLs
- Meta descriptions
- Open Graph tags
- Twitter card tags
- JSON-LD structured data
- `public/og-image.png`
- `public/favicon.ico`
- `public/robots.txt`
- `public/sitemap.xml`

The site URL is configured in `astro.config.mjs`:

```js
site: "https://blakielabs.com"
```

Update this value if the production domain changes.

## Forms

The contact and newsletter forms currently validate on the frontend and show local success states. Before using them for real leads, connect them to a backend or form service such as:

- Vercel Functions
- Formspree
- Resend
- Airtable
- HubSpot

## Deploying To Vercel

Vercel can deploy this Astro site directly from a Git repository.

Recommended settings:

- Framework preset: Astro
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

Deployment flow:

1. Push this project to GitHub, GitLab, or Bitbucket.
2. Import the repository in Vercel.
3. Confirm the Astro defaults.
4. Add the production domain, `blakielabs.com`.
5. Deploy.

## Useful Commands

```bash
npm run dev      # Start local development
npm run build    # Build the production site
npm run preview  # Preview the production build locally
```
