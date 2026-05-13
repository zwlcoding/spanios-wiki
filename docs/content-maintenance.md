# Content Maintenance Architecture

Spanios.wiki is a public-interest rare disease knowledge project. Content should be easy to audit, translate, and open-source without turning source catalogs into user-facing medical categories.

## Principles

- Use stable slugs and ids for relationships. Translate display text, not relationships.
- Treat official rare disease catalogs as source references and provenance, not disease categories.
- Classify diseases by medical system, diagnostic pathway, or primary management specialty.
- Keep every disease usable before it is fully written: catalog entries can exist as minimal records with source references, then gain symptoms, diagnosis, treatment, hospitals, and charity resources over time.
- Prefer curation files that are easy to review in pull requests over scattered page constants.

## Current Content Layers

- `frontend/src/types/content.ts`
  Defines the public content contract. Disease records now support both legacy encyclopedia fields and the newer patient-journey fields: `quickLook`, `patientJourney`, `medicalSections`, `navigation`, and `reviewStatus`.

- `frontend/src/content/data/taxonomy.ts`
  Defines canonical disease category slugs once, with localized labels and descriptions.

- `frontend/src/content/data/catalogs/first.ts` and `second.ts`
  Store the official China rare disease catalog entries as stable source lists.

- `frontend/src/content/data/catalogs/catalogClassification.ts`
  Assigns catalog entries into medical categories. Explicit slug overrides come first; keyword rules are only a fallback for new catalog entries.

- `frontend/src/content/locales/<locale>/disease-summaries.ts`
  Stores the lightweight disease index used by disease lists, search, sitemap generation, and relationship assembly. Keep only card/search metadata here, not full patient-journey or medical-section text.

- `frontend/src/content/locales/<locale>/disease-loaders.ts`
  Provides the lazy-loading bridge from a disease slug to `disease-drafts/<slug>.ts`. This keeps full article bodies out of the initial client bundle.

- `frontend/src/content/locales/<locale>/disease-drafts/<slug>.ts`
  Stores one detailed disease article per file. These entries override generated catalog placeholders by slug and can attach hospitals, charities, tags, ICD codes, sources, and richer patient-facing content.

- `frontend/src/content/locales/<locale>/hospitals.ts`
  Stores localized hospital display fields and service-level disease relationships. Relationships should stay neutral and evidence-backed at department, clinic, MDT, or service level.

- `frontend/src/content/locales/<locale>/charities.ts`
  Stores localized charity and patient-organization entries when there is direct evidence for disease-resource relationships.

- `frontend/src/content/wikiData.ts`
  Assembles localized categories, lightweight disease summaries, generated catalog placeholders, hospitals, charities, tags, and source references. Disease detail routes call the async disease loader so only the requested full article is assembled with rich body fields.

## Patient Journey Article Shape

Detailed disease pages should answer patient questions before medical textbook questions:

- `oneSentence`: a plain-language summary that appears in cards and search.
- `quickLook`: what the disease is, which department to start with, whether it may be genetic, whether treatment exists, and where patients commonly get delayed.
- `patientJourney`: suspicion clues, common wrong turns, first departments, visit preparation, tests to ask about, and questions for doctors.
- `medicalSections`: source-backed medical explanation for symptoms, diagnosis, treatment, long-term care, family/fertility issues, and urgent signs.
- `navigation`: ids linking to hospital services, medicines, and assistance programs.
- `reviewStatus`: `draft`, `patient-reviewed`, or `medical-reviewed`.

Keep `symptoms`, `diagnosis`, `treatment`, and `prognosis` during migration. The UI prefers `medicalSections` when present and falls back to the legacy fields.

## Multilingual Maintenance

For a new language:

1. Add the locale to `supportedLocales` in `frontend/src/types/content.ts`.
2. Add message files and regenerate Paraglide output if the language should appear in the UI language switcher.
3. Add category translations in `taxonomy.ts` only when they are ready; otherwise the content layer falls back to Chinese.
4. Add localized tag, hospital, charity, setting, and disease article data when available.
5. Keep shared relationships as slugs and ids. Do not duplicate category logic per language.

The official catalog entry names currently include Chinese and English in the shared catalog files. Additional languages should be added as localized overlays rather than new catalog copies.

## Category Rules

The project uses broad patient-navigation categories instead of catalog batches:

- Neurological disorders
- Metabolic and endocrine disorders
- Hematologic disorders
- Genetic and developmental disorders
- Immunologic and rheumatologic disorders
- Cardiovascular disorders
- Respiratory disorders
- Renal and urologic disorders
- Digestive and hepatic disorders
- Dermatologic disorders
- Ophthalmologic disorders
- Skeletal and connective tissue disorders
- Rare tumors
- Multisystem disorders

This follows the same general direction as Orphanet-style classification: rare diseases may involve multiple systems, but a patient-facing index still needs a primary navigation category. If a disease has a better primary specialty after medical review, update only `catalogClassification.ts`.

## Source Policy

Use official or high-quality medical references wherever possible. The initial catalog provenance is:

- First Rare Disease Catalog: National Health Commission and partner agencies, 2018.
- Second Rare Disease Catalog: National Health Commission and partner agencies, 2023.
- Orphanet classification model: medical specialty based, multi-hierarchical rare disease classification.

Every detailed article should eventually include sources for symptoms, diagnosis, treatment, prognosis, hospitals/departments, and charity resources.

## Content Production Workflow

Detailed articles are maintained directly in the locale-specific disease draft files. Use external research or generation tools only outside the repository or in a temporary workspace. Generated patient-facing text should be reviewed before moving beyond `draft`.

Recommended flow:

1. Collect official and high-quality sources.
2. Create or update `frontend/src/content/locales/<locale>/disease-drafts/<slug>.ts`.
3. Mark unsupported or uncertain points explicitly rather than smoothing them over.
4. Add source URLs to `sources`.
5. Add or update the lightweight entry in `frontend/src/content/locales/<locale>/disease-summaries.ts`, keeping only fields needed for cards, search, source provenance, relationships, and review status.
6. Move `reviewStatus` only after patient or medical review.

Do not commit API keys, temporary research artifacts, generated drafts, or unsupported medical claims. Production content should live in the typed content files and carry source references.
