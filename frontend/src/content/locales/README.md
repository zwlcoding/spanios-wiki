# Localized Content

This folder stores patient-facing knowledge content by locale.

- `zh/` is the reviewed source-of-truth content for disease articles.
- `en/` stores reviewed translations and English resource labels.
- `zh-Hant/` is reserved for Traditional Chinese content.

Keep relationship keys stable across locales: disease slugs, hospital ids,
department ids, charity ids, source URLs, and image paths should not be
translated. Translate only patient-facing text.

Paraglide `frontend/messages/` remains for UI strings such as navigation,
buttons, empty states, and page labels.
