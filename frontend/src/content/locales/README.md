# Localized Content

This folder stores patient-facing knowledge content by locale.

- `zh/` is the reviewed source-of-truth content for disease articles.
- `en/` stores reviewed translations and English resource labels.
- `*/disease-summaries.ts` is the lightweight index for cards, search, and sitemap generation.
- `*/disease-drafts/<slug>.ts` stores full article bodies that are lazy-loaded on detail pages.

Only `zh` and `en` are currently routed by Paraglide. Add a new locale here
only after the matching route patterns, messages, and content records exist.

Keep relationship keys stable across locales: disease slugs, hospital ids,
department ids, charity ids, source URLs, and image paths should not be
translated. Translate only patient-facing text.

Paraglide `frontend/messages/` remains for UI strings such as navigation,
buttons, empty states, and page labels.
