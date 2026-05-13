# Spanios Wiki Frontend

TanStack Start SSR frontend for Spanios rare disease knowledge and resource navigation.

## Commands

Run from the repository root or this `frontend/` directory:

```bash
pnpm dev
pnpm build
pnpm start
pnpm check
pnpm exec tsc --noEmit
```

The dev server uses `http://localhost:3000`. Production builds are emitted to
`.output/` by TanStack Start/Nitro.

## Content

- `src/content/data/` contains shared catalogs, taxonomy, and relationship assembly.
- `src/content/locales/zh/` contains reviewed Chinese content.
- `src/content/locales/en/` contains reviewed English content.
- `src/content/locales/<locale>/disease-drafts/<slug>.ts` stores one disease article per file.
- `src/content/locales/<locale>/disease-summaries.ts` stores the lightweight index used by lists, search, and sitemap generation.
- `src/content/locales/<locale>/disease-loaders.ts` lazy-loads full disease articles for detail pages.
- `src/types/content.ts` defines the content contracts used by hooks and routes.
