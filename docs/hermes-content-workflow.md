# Hermes Content Workflow

Hermes is the content producer. Codex is the reviewer and integrator.

## Boundaries

- Hermes writes only to `content-drafts/`.
- Hermes does not modify `frontend/src/content`, routes, styles, or git state.
- Hermes does not commit, push, or open pull requests for content updates.
- Generated images stay in draft folders until reviewed.
- Medical claims need sources. Low-quality pages can be leads, not citations.
- Hospital, department, charity, and assistance-program relationships need
  explicit evidence. Do not invent organizations or disease-resource links.

## Draft Lifecycle

1. Hermes scheduled job runs `pnpm run hermes:queue -- --limit 5 --locale zh`
   to select the next small batch.
2. Hermes creates a dated draft folder for each queued disease.
3. Hermes writes `draft.<locale>.json`, `sources.md`, and `change-summary.md`.
4. If reliable evidence exists, Hermes writes `resource-links.json` for
   hospital/charity relationships.
5. Optional: Hermes uses its MiniMax/MMX skill to generate image candidates.
6. Run `node scripts/validate_content_draft.mjs <draft.json>`.
7. Run `node scripts/validate_resource_draft.mjs <resource-links.json>` when
   resource relationships are present.
8. Ask Codex to review and promote the draft.
9. Codex checks sources, medical safety, wording, relationships, and generated
   images.
10. If approved, Codex runs `node scripts/promote_content_draft.mjs <draft.json>`.
11. Codex merges approved fields into production content when they improve the
   current page.
12. Codex marks the draft as `merged`, `rejected`, or `needs-revision`.
13. Codex runs build checks and commits the reviewed change.

## Review Trigger

Codex has no independent scheduler in this environment. There are two practical
ways to trigger review:

- Manual trigger: ask Codex to review pending drafts weekly or after Hermes
  reports that a draft was created.
- Hermes reminder: create a Hermes cron job that summarizes pending draft folders
  and delivers a short message to you. You then ask Codex to review them.

Keep the final merge human-triggered. This prevents scheduled content from
silently changing patient-facing pages.

## Hermes Cron Prompt Template

Use this as the task instruction for a scheduled Hermes job:

```txt
You are a content research agent for Spanios.wiki.

Goal:
Create or update a patient-friendly rare disease content draft.

Hard rules:
- Write only under content-drafts/.
- Do not edit frontend/src/content, routes, styles, package files, or git state.
- Do not commit.
- Do not include medication doses.
- Do not promise cure, diagnosis, treatment access, fertility, or insurance coverage.
- Every new medical claim must have a source URL.
- Every hospital, department, charity, or assistance-program relationship must
  have a source URL and an evidence summary.
- Do not invent hospitals,公益组织, contacts, services, or disease-resource links.
- Prefer official, guideline, academic, hospital, or recognized rare disease sources.
- Low-quality SEO/marketing pages may be used only as search leads, not as sources.
- Generated images must contain no text, no logos, no diagnostic diagrams, and no misleading clinical detail.

Output:
- content-drafts/<slug>/<yyyy-mm-dd>/draft.<locale>.json
- content-drafts/<slug>/<yyyy-mm-dd>/sources.md
- content-drafts/<slug>/<yyyy-mm-dd>/change-summary.md
- content-drafts/<slug>/<yyyy-mm-dd>/resource-links.json when relationships
  are supported by evidence
- optionally content-drafts/<slug>/<yyyy-mm-dd>/image-prompt.md and
  generated-image.png

Draft JSON must match docs/content-draft.schema.json.
Resource relationship JSON must match docs/resource-draft.schema.json.
Set review.status to "pending-codex-review".
```

Example cron:

```bash
hermes cron create "30 8 * * *" \
  --name "spanios-disease-draft-batch" \
  --workdir /Volumes/acasis/coding/spanios-wiki \
  --script scripts/hermes_content_queue.mjs \
  "Use docs/hermes-content-workflow.md and docs/hermes-disease-draft-prompt.md. Generate patient-friendly drafts and image candidates for the queued diseases. Write only under content-drafts/."
```

## Reviewer Checklist

- Does the draft avoid dose instructions and therapeutic promises?
- Are all added medical claims traceable to sources?
- Are source URLs credible and current enough for the claim?
- Is the language understandable to patients and families?
- Does it preserve uncertainty where evidence is incomplete?
- Does it fit the existing content model?
- Are hospital/charity relationships backed by direct evidence rather than
  inference or promotion?
- Is the generated image appropriate and non-misleading?
- Does `pnpm build` pass after promotion?
