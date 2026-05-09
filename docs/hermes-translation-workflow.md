# Hermes Translation Workflow

Hermes translates reviewed disease content. Codex reviews and integrates it.

## Principle

Chinese (`zh`) is the source-of-truth language for medical facts, sources,
resource relationships, and images. Other locales are localized translations of
reviewed Chinese records.

Translation drafts must not:

- add new medical facts;
- add, remove, or replace source URLs;
- add hospitals, hospital services, charities, medicines, assistance programs,
  or images;
- change risk level, emergency meaning, or uncertainty;
- make China-specific care navigation look like a universal pathway.

## Queue

Run:

```bash
pnpm run hermes:translate -- --locale en --limit 3
```

or:

```bash
pnpm run hermes:translate -- --locale zh-Hant --limit 3
```

The queue includes reviewed Chinese detailed disease records that do not yet
have a detailed target-locale record or pending translation draft.

## Output

Hermes writes one file per disease:

```text
content-drafts/<slug>/<yyyy-mm-dd>/translation.<locale>.json
```

The JSON must match `docs/translation-draft.schema.json`.

## Translation Rules

- Translate field-by-field from `frontend/src/content/data/diseases.ts`.
- Preserve source URLs exactly.
- Translate source names only when it improves readability.
- Keep plain patient-friendly language in the target language.
- For English, phrase China-specific navigation explicitly, for example:
  `In China, patients often start by asking about...`
- For Traditional Chinese, convert terminology carefully; do not simplify the
  medical meaning.
- If a Chinese sentence is unsafe or unclear, do not invent a fix in the
  translation. Add a `review.riskNotes` item so Codex can fix the source text.

## Review

Run:

```bash
pnpm run review:translation
```

This validates pending translation drafts and writes review artifacts under:

```text
content-drafts/<slug>/review-output/<locale>.translation-article.ts
```

Codex then reviews the artifact and manually merges approved translated fields
into `frontend/src/content/data/diseases.ts`.

## Suggested Hermes Cron

Use a separate cron from the Chinese content cron so translation cannot block or
pollute medical source generation:

```bash
hermes cron create "15 7 * * *" \
  --name "spanios-disease-translation-batch" \
  --workdir /Volumes/acasis/coding/spanios-wiki \
  --script hermes_translation_prompt.py \
  "Use docs/hermes-translation-workflow.md. Translate queued reviewed Chinese disease records to English. Write only under content-drafts/."
```

Keep final merge human-triggered: run `pnpm run review:translation`, then ask
Codex to review and merge approved translation drafts.
