# Bird Control BC

Bird Control BC is a Next.js marketing site for bird-control services in Vancouver and the Lower Mainland. It uses App Router, TypeScript, Tailwind CSS, data-driven service/location/project templates, and Vercel-ready SEO metadata.

## Run locally

```sh
npm install
npm run dev
```

Open `http://localhost:3000`. Validate production output with:

```sh
npm run lint
npm run build
npm run start
```

## Architecture

- `src/app/(marketing)` contains public routes and route metadata.
- `content/site.ts` is the only place for brand configuration and contact details.
- `content/services.ts`, `content/cities.ts`, and `content/projects.ts` drive the static detail pages.
- `components/templates` renders the shared service, location, and project page layouts.
- `lib/seo` and `lib/schema` provide canonical metadata and structured data.
- `lib/migration/legacy-redirects.ts` documents legacy Pigeon Defenders URL mapping for 301 migration.
- `public/images` contains inherited project photos; captions describe them as existing reference images until a new Bird Control BC photography library is available.

## Launch configuration

Before deploying, update the following in `content/site.ts`:

- `phoneDisplay`, `phoneHref`, `telHref`, and `smsHref`
- `email` and `mailtoHref`
- `businessHours` once confirmed

The site deliberately does not reuse any previous-business contact information, reviews, certifications, years in business, guarantees, or other unsupported claims.

## Deployment

Deploy to Vercel with `birdcontrolbc.ca` configured as the production domain. Add `NEXT_PUBLIC_GA4_ID` and/or `NEXT_PUBLIC_GTM_ID` only when analytics IDs are ready. Submit `https://birdcontrolbc.ca/sitemap.xml` in Google Search Console after DNS and the production deployment are live.

## Legacy migration

Same-host old `.html` paths are redirected in `next.config.ts` through `lib/migration/legacy-redirects.ts`. When moving `pigeondefenders.ca`, mirror that mapping at the old domain level with permanent 301 redirects to the relevant `birdcontrolbc.ca` routes.
