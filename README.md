# Pigeon Defenders

Phase 1 of the production migration is now running on Next.js App Router with TypeScript and Tailwind CSS.

## Current State

- New homepage delivered through `src/app`
- Shared component architecture in `components/`
- Structured content/data in `content/`
- SEO helpers in `lib/seo/` and `lib/schema/`
- Existing legacy `.html` service/contact pages preserved in `public/` until later migration phases

## Local Development

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```sh
npm run build
npm run start
```

## Important Directories

- `src/app/` - App Router pages, layouts, and global styles
- `components/` - shared UI, layout, and homepage sections
- `content/` - typed business content and structured homepage data
- `lib/seo/` - metadata utilities
- `lib/schema/` - structured data helpers
- `public/` - images plus preserved legacy static pages
