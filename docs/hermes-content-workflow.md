# Hermes Content Workflow

Hermes is the content producer. Codex is the reviewer and integrator.

## Boundaries

- Hermes writes only to `content-drafts/`.
- Hermes does not modify `frontend/src/content`, routes, styles, or git state.
- Hermes does not commit, push, or open pull requests for content updates.
- Generated images stay in draft folders until reviewed.
- Medical claims need sources. Low-quality pages can be leads, not citations.
- Cite high-quality sources first: official Chinese policy/guidelines,
  GeneReviews/NCBI Bookshelf, MedlinePlus Genetics, Orphanet/OMIM/GARD,
  professional society guidance, and peer-reviewed reviews. Baidu Baike,
  Tencent Medipedia, SEO pages, forums, and marketing pages are search leads,
  not formal citations.
- Hospital, department, clinic/MDT, charity, and assistance-program
  relationships need explicit evidence. Do not invent organizations or
  disease-resource links. Hospital relationships are integrated as
  `HospitalService` records, not as broad hospital-level recommendations.

## Draft Lifecycle

1. Hermes scheduled job runs `pnpm run hermes:queue -- --limit 5 --locale zh`
   to select the next small batch.
2. Hermes creates a dated draft folder for each queued disease.
3. Hermes writes `draft.<locale>.json`, `sources.md`, and `change-summary.md`.
4. If reliable evidence exists, Hermes writes `resource-links.json` for
   hospital/charity relationships. Hospital entries should identify the
   specific department, clinic, MDT, public directory, or care service that
   connects the hospital to the disease.
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

The reminder script is kept in `scripts/hermes_review_reminder.py`. It only
counts pending draft files and prints the next manual commands. Already
published disease slugs are ignored when old local draft folders still say
`pending-codex-review`. It should be copied to `~/.hermes/scripts/` and
scheduled after the overnight content jobs, for example at 10:00 Asia/Shanghai:

```bash
cp scripts/hermes_review_reminder.py ~/.hermes/scripts/hermes_review_reminder.py

hermes cron create "0 10 * * *" \
  "Use the script output. Send the site owner a concise Chinese WeChat reminder. Do not review, merge, edit files, or run git." \
  --name "spanios-review-reminder" \
  --deliver weixin \
  --workdir /Volumes/acasis/coding/spanios-wiki \
  --script hermes_review_reminder.py
```

If no WeChat message arrives, check `hermes status`: Weixin must be configured
and the Hermes gateway service must be running.

## Translation Workflow

Detailed Chinese disease pages are the source of truth. English, Traditional
Chinese, and future locales should be generated through
`docs/hermes-translation-workflow.md`, not by researching each disease again in
each language.

- Use `pnpm run hermes:translate -- --locale en --limit 3` to queue English
  translation work.
- Use `pnpm run review:translation` to validate translation drafts and create
  Codex review artifacts.
- Translation drafts must not add new medical facts, sources, images, hospitals,
  charities, medicines, assistance programs, or resource relationships.

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
- Hospital relationships must be department/service level when possible:
  include `departmentName`, `relationKind`, `evidenceUrl`, `evidenceSummary`,
  `confidence`, and neutral notes. Do not create a generic hospital-disease
  relationship when the evidence only supports one department or clinic.
- Do not invent hospitals,公益组织, contacts, services, or disease-resource links.
- Prefer official, guideline, academic, hospital, or recognized rare disease sources.
- Low-quality SEO/marketing pages may be used only as search leads, not as sources.
- Generated images must include 2-3 disease-specific, non-diagnostic visual
  anchors. Avoid generic clinic-only illustrations when the disease has clearer
  patient-journey cues.
- Generated images must contain no readable text, no logos, no diagnostic
  diagrams, and no misleading clinical detail. Abstract non-readable paperwork
  or chart-like decoration can be accepted after human review.

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
cp scripts/hermes_cron_prompt.py ~/.hermes/scripts/hermes_cron_prompt.py

hermes cron create "30 0-6 * * *" \
  --name "spanios-disease-draft-batch" \
  --workdir /Volumes/acasis/coding/spanios-wiki \
  --script hermes_cron_prompt.py \
  "Use docs/hermes-content-workflow.md and docs/hermes-disease-draft-prompt.md. Generate patient-friendly drafts and image candidates for the queued diseases. Write only under content-drafts/."
```

Hermes cron scripts are resolved from `~/.hermes/scripts/`, not the project
working directory. Keep the source copy in this repo, then copy it into
`~/.hermes/scripts/` whenever it changes.
The schedule above runs seven times overnight, while the queue script emits one
disease per run. In the morning, inspect the generated draft folders, then run
`pnpm run review` and ask Codex to audit and merge approved content.
Draft folder dates use the local queue timezone, defaulting to
`Asia/Shanghai`, so overnight runs land in the expected local calendar day.

## Reviewer Checklist

- Does the draft avoid dose instructions and therapeutic promises?
- Are all added medical claims traceable to sources?
- Are source URLs credible and current enough for the claim?
- Is the language understandable to patients and families?
- Does it preserve uncertainty where evidence is incomplete?
- Does it fit the existing content model?
- Are hospital/charity relationships backed by direct evidence rather than
  inference or promotion?
- Are hospital relationships modeled as specific service entries with
  department/clinic/MDT evidence, rather than broad hospital endorsements?
- Is the generated image appropriate and non-misleading? Reject readable text,
  logos, diagnostic diagrams, real medical forms, medication packaging, or
  treatment-outcome promises. Abstract paperwork/chart decoration can pass if
  the site owner accepts it.
- Does the generated image have clear disease relevance through non-diagnostic
  visual anchors, rather than only a generic clinic scene?
- Do the draft review notes match the actual final merge decision, including
  whether a generated image was accepted or rejected?
- Does `pnpm build` pass after promotion?
