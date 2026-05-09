#!/usr/bin/env python3

import subprocess
import os
from pathlib import Path


SPANIOS_ROOT = Path('/Volumes/acasis/coding/spanios-wiki')
DEFAULT_BATCH_LIMIT = "3"


def main() -> None:
    result = subprocess.run(
        [
            "node",
            "scripts/hermes_content_queue.mjs",
            "--limit",
            os.environ.get("HERMES_CONTENT_BATCH_LIMIT", DEFAULT_BATCH_LIMIT),
            "--locale",
            "zh",
        ],
        cwd=SPANIOS_ROOT,
        check=True,
        capture_output=True,
        text=True,
    )

    print(result.stdout)


if __name__ == "__main__":
    main()
