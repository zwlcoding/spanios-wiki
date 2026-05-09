#!/usr/bin/env python3

import subprocess
import os
from pathlib import Path


SPANIOS_ROOT = Path('/Volumes/acasis/coding/spanios-wiki')
DEFAULT_BATCH_LIMIT = "4"
DEFAULT_TARGET_LOCALE = "en"


def main() -> None:
    result = subprocess.run(
        [
            "node",
            "scripts/hermes_translation_queue.mjs",
            "--limit",
            os.environ.get("HERMES_TRANSLATION_BATCH_LIMIT", DEFAULT_BATCH_LIMIT),
            "--locale",
            os.environ.get("HERMES_TRANSLATION_TARGET_LOCALE", DEFAULT_TARGET_LOCALE),
        ],
        cwd=SPANIOS_ROOT,
        check=True,
        capture_output=True,
        text=True,
    )

    print(result.stdout)


if __name__ == "__main__":
    main()
