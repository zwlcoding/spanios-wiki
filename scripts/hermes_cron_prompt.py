#!/usr/bin/env python3

import subprocess
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def main() -> None:
    result = subprocess.run(
        [
            "node",
            "scripts/hermes_content_queue.mjs",
            "--limit",
            "5",
            "--locale",
            "zh",
        ],
        cwd=ROOT,
        check=True,
        capture_output=True,
        text=True,
    )

    print(result.stdout)


if __name__ == "__main__":
    main()
