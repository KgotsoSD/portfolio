# Kgotso Maduna: portfolio

React + TypeScript (strict) + Tailwind CSS v4, built with Vite. Routes: `/` (single-page portfolio) and `/projects/:slug` (project case studies).

## Run it

```bash
npm install
npm run dev        # local dev server
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

## Where things live

- `src/data/content.ts`: **all the text**, projects, experience and skills. Edit here first.
- `src/components/`: header, hero, sections, project demo.
- `src/pages/`: home page, project page, 404.
- `public/Kgotso-Maduna-CV.pdf`: the CV download. **A stand-in generated from your saved background. Replace it with your real CV** (same file name).
- `public/og-image.png`: social sharing image (1200x630).
- `netlify.toml`: build settings, SPA redirect so `/projects/...` works on refresh, security headers.

## Deploy to Netlify

Your existing site (`sparkling-dango-fdba70.netlify.app`) can keep its URL.

1. Push this folder to a Git repository (GitHub).
2. In Netlify, open the existing site, then **Site configuration → Build & deploy → Link repository** and choose the repo. Build settings come from `netlify.toml` (`npm run build`, publish `dist`).
3. Deploy. Check `/`, a project page, and a refresh on a project page.

Or, without Git: run `npm run build`, then drag the `dist` folder onto the site's **Deploys** page.

If you move to a custom domain, replace `https://sparkling-dango-fdba70.netlify.app` in `index.html`, `public/robots.txt`, `public/sitemap.xml` and `site.url` in `content.ts`.

## Please confirm before publishing

These came from your notes and CV, and I could not check them against the originals:

- Integrove "Intern" (2022 – 2023) and Hosi Technologies "Intern" (2016 – 2018): roles are described only as internships, because that is all I know.
- Task Center: the contributions reflect what you told me (ingest logic, Digest Configuration, System Monitor). Check the wording on "retained raw archive" and "reconciled against its source".
- Elovyn: I have not seen the code or the site's internals. Check that "built the storefront in React", the Shopify custom theme, and the Cloudflare database and deployment are described correctly, and add what the store sells if you want it mentioned.
- Skills: Node.js, PostgreSQL, SAP UI5 and Tailwind CSS come from your brief. Remove any you would not be comfortable discussing in an interview.
- Inventory Manager: described only from the repository's folder structure and name.

## Add screenshots

Put images in `public/projects/` and add them to a project in `content.ts`:

```ts
images: [{ src: "/projects/elovyn-home.png", alt: "Elovyn home page on a phone" }],
```

They then appear on that project's page.
