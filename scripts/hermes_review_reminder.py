#!/usr/bin/env python3

import json
import re
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo


SPANIOS_ROOT = Path("/Volumes/acasis/coding/spanios-wiki")
TIMEZONE = ZoneInfo("Asia/Shanghai")
DRAFTS_ROOT = SPANIOS_ROOT / "content-drafts"


def main() -> None:
    now = datetime.now(TIMEZONE)
    today = now.date().isoformat()
    published_slugs = collect_published_disease_slugs()
    content_drafts = collect_content_drafts(published_slugs)
    translation_drafts = collect_translation_drafts()

    pending_content = [
        item
        for item in content_drafts
        if item["status"] == "pending-codex-review" and not item["already_published"]
    ]
    stale_published_content = [
        item
        for item in content_drafts
        if item["status"] == "pending-codex-review" and item["already_published"]
    ]
    today_content = [item for item in content_drafts if item["date"] == today]
    pending_translations = [
        item for item in translation_drafts if item["status"] == "pending-codex-review"
    ]

    lines = [
        "# Spanios Review Reminder",
        "",
        f"Generated at: {now.isoformat()}",
        f"Project: {SPANIOS_ROOT}",
        "",
        "Send a concise Chinese WeChat reminder to the site owner.",
        "Do not review or merge content in this reminder job.",
        "",
        "Facts:",
        f"- Today's Chinese content draft files: {len(today_content)}",
        f"- Pending Chinese content drafts: {len(pending_content)}",
        f"- Ignored already-published pending-status drafts: {len(stale_published_content)}",
        f"- Pending translation drafts: {len(pending_translations)}",
        "",
    ]

    if pending_content:
        lines.extend(
            [
                "Pending Chinese content drafts:",
                *format_items(pending_content),
                "",
                "Recommended action:",
                "1. In the project root, run `pnpm run review`.",
                "2. Ask Codex: `审核并合并 pending content drafts`.",
                "",
            ]
        )
    else:
        lines.extend(
            [
                "Pending Chinese content drafts:",
                "- None.",
                "",
            ]
        )

    if pending_translations:
        lines.extend(
            [
                "Pending translation drafts:",
                *format_items(pending_translations),
                "",
                "Translation action:",
                "- Review Chinese content first. Then run `pnpm run review:translation` only when translated drafts should be reviewed.",
                "",
            ]
        )

    if not pending_content and not pending_translations:
        lines.extend(
            [
                "Reminder wording:",
                "今天暂时没有发现新的待审草稿。可以稍后查看 Hermes 日志确认夜间任务是否正常执行。",
                "",
            ]
        )
    else:
        lines.extend(
            [
                "Reminder wording:",
                "今天有待审内容。请先运行 `pnpm run review`，再让我执行“审核并合并 pending content drafts”。",
                "",
            ]
        )

    print("\n".join(lines))


def collect_content_drafts(published_slugs: set[str]) -> list[dict]:
    results = []
    for path in sorted(DRAFTS_ROOT.glob("*/20*/draft.*.json")):
        data = read_json(path)
        if not data:
            continue
        locale = data.get("locale") or path.name.removeprefix("draft.").removesuffix(".json")
        if locale != "zh":
            continue
        slug = data.get("slug") or path.parent.parent.name
        results.append(
            {
                "slug": slug,
                "locale": locale,
                "date": path.parent.name,
                "status": data.get("review", {}).get("status", "unknown"),
                "already_published": slug in published_slugs,
                "path": path.relative_to(SPANIOS_ROOT).as_posix(),
            }
        )
    return results


def collect_translation_drafts() -> list[dict]:
    results = []
    for path in sorted(DRAFTS_ROOT.glob("*/20*/translation.*.json")):
        data = read_json(path)
        if not data:
            continue
        locale = data.get("locale") or path.name.removeprefix("translation.").removesuffix(".json")
        results.append(
            {
                "slug": data.get("slug") or path.parent.parent.name,
                "locale": locale,
                "date": path.parent.name,
                "status": data.get("review", {}).get("status", "unknown"),
                "path": path.relative_to(SPANIOS_ROOT).as_posix(),
            }
        )
    return results


def format_items(items: list[dict], limit: int = 12) -> list[str]:
    visible = items[:limit]
    lines = [
        f"- {item['slug']} ({item['locale']}, {item['date']}): {item['path']}"
        for item in visible
    ]
    remaining = len(items) - len(visible)
    if remaining > 0:
        lines.append(f"- ...and {remaining} more.")
    return lines


def collect_published_disease_slugs() -> set[str]:
    path = SPANIOS_ROOT / "frontend/src/content/locales/zh/diseases.ts"
    try:
        source = path.read_text(encoding="utf-8")
    except OSError:
        return set()

    markers = [match.start() for match in re.finditer(r"\.\.\.entity\(", source)]
    slugs: set[str] = set()
    for index, start in enumerate(markers):
        end = markers[index + 1] if index + 1 < len(markers) else len(source)
        block = source[start:end]
        if "quickLook:" not in block:
            continue
        match = re.search(r"slug:\s*['\"]([^'\"]+)['\"]", block)
        if match:
            slugs.add(match.group(1))
    return slugs


def read_json(path: Path) -> dict:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return {}


if __name__ == "__main__":
    main()
