#!/usr/bin/env python3

import subprocess
from pathlib import Path


SPANIOS_ROOT = Path('/Volumes/acasis/coding/spanios-wiki')


def main() -> None:
    result = subprocess.run(
        [
            "node",
            "scripts/hermes_content_queue.mjs",
            "--limit",
            "1",
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
