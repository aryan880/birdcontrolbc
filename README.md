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

The primary phone, email, and Vancouver business location are configured in `content/site.ts`. Before deploying, update:

- `businessHours` once confirmed

The site deliberately does not reuse any previous-business contact information, reviews, certifications, years in business, guarantees, or other unsupported claims.

### Quote delivery

The quote form posts to `src/app/api/quote/route.ts`. It validates the request server-side, emails the lead and up to three photo attachments through Resend, and can send a short secondary SMS alert through Twilio.

Copy `.env.example` to `.env.local` for local development, then configure these Vercel environment variables for Production and Preview:

- `RESEND_API_KEY` (required)
- `QUOTE_FROM_EMAIL` (required; use an address on a domain verified in Resend)
- `QUOTE_NOTIFICATION_EMAIL` (required; currently `info@birdcontrolbc.ca`)
- `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_FROM_NUMBER`, and `QUOTE_NOTIFICATION_PHONE` (optional; all four are required to enable SMS alerts)

Never commit `.env.local` or production credentials. The form will display a call/text fallback instead of showing a false success when email delivery is unavailable.

## Deployment

Deploy to Vercel with `birdcontrolbc.ca` configured as the production domain. Add `NEXT_PUBLIC_GA4_ID` and/or `NEXT_PUBLIC_GTM_ID` only when analytics IDs are ready. Submit `https://birdcontrolbc.ca/sitemap.xml` in Google Search Console after DNS and the production deployment are live.

## Legacy migration

Same-host old `.html` paths are redirected in `next.config.ts` through `lib/migration/legacy-redirects.ts`. When moving `pigeondefenders.ca`, mirror that mapping at the old domain level with permanent 301 redirects to the relevant `birdcontrolbc.ca` routes.
