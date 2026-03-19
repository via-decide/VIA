# Orchard

**Category:** games
**Route:** /tools/games/orchard/
**Status:** stable

## What It Does
Provides a manifest-listed launcher for the Orchard experience by redirecting engine-tools users into the copied Orchard app that now lives at the repository root.

## Inputs
- navigation_request: route hint — opens the Orchard surface from the tools directory

## Outputs
- orchard_launch: redirect — sends the browser to the Orchard app entry point

## Files
| File | Purpose |
|------|---------|
| config.json | Tool metadata and routing |
| index.html | Redirect shell |
| tool.js | Minimal Orchard tool stub exported on `window` |
| README.md | This file |

## How to Test
1. Open `tools/games/orchard/index.html` in a browser.
2. Confirm the page immediately redirects to `../../../orchard/index.html`.
3. Expected: the Orchard app loads with the VIA nav pill visible at the top.

## Notes
- This tool intentionally keeps logic out of the redirect page.
- Orchard assets are served from the root-level `orchard/` copy.
