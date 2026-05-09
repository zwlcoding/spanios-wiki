#!/usr/bin/env python3

import subprocess
from pathlib import Path


SPANIOS_ROOT = Path('/Volumes/acasis/coding/spanios-wiki')


def main() -> None:
    result = subprocess.run(
        [
            "node",
            "scripts/hermes_translation_queue.mjs",
            "--limit",
            "2",
            "--locale",
            "en",
        ],
        cwd=SPANIOS_ROOT,
        check=True,
        capture_output=True,
        text=True,
    )

    print(result.stdout)


if __name__ == "__main__":
    main()
