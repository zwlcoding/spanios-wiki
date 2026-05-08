# Content Drafts

This directory is the handoff area for Hermes-generated content drafts.

Hermes may write here. It must not edit `frontend/src/content` directly.

Expected layout:

```txt
content-drafts/
  <disease-slug>/
    <yyyy-mm-dd>/
      draft.zh.json
      sources.md
      change-summary.md
      resource-links.json
      image-prompt.md
      generated-image.png
```

Drafts become publishable only after review. Promotion scripts may create a
patch against the production content files, but the reviewer decides whether to
apply and commit it.

`resource-links.json` is for hospital, department, charity, and assistance
program relationships. It must use `docs/resource-draft.schema.json` and include
official URLs, evidence URLs, and a short evidence summary. Do not publish a
resource relationship unless the evidence directly supports the disease-resource
connection.
