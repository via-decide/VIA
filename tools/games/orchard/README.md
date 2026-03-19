# Orchard: Growth Milestone Engine

**Category:** Games · Simulation
**Status:** Beta
**External URL:** https://orchard.viadecide.com
**Repo:** via-decide/Game-

## What It Does
A multi-layered ecosystem simulation where players manage resources,
research genetic traits, and grow a thriving digital orchard.
Real-time Firebase backend with P2P credit transfers.

## Gameplay
- Plant and grow specimens across 3 unlockable orchards (9 plots each)
- Research genetics to evolve plants through 5 stages
- Breed hybrids by cross-pollinating mature plants
- Manage weather effects (clear, rain, storm, heatwave, fog)
- Upgrade 5 tools: watering can, soil tester, pest control, stress monitor, data extractor
- Transfer credits to other players via Firestore

## Tech Stack
React 19, TypeScript, Vite, Tailwind v4, Firebase v12,
Three.js (plant visualizer), Framer Motion, Gemini AI

## Files
| File | Purpose |
|------|---------|
| config.json | Tool metadata and routing |
| index.html | Redirect page (launches external app) |
| README.md | This file |
| tool.js | External launcher stub |

## Integration Roadmap
- Phase 1 ✅ Standalone deploy at orchard.viadecide.com
- Phase 2 ✅ VIA nav bar + registered in manifest
- Phase 3 🔜 Economy bridge (harvest XP → VIA XP)
- Phase 4 🔜 Harvest events auto-post to VIA social feed

## How to Test
1. Visit https://orchard.viadecide.com
2. Sign in with Google
3. Plant a seed (costs 50 credits)
4. Research → Water → advance to harvest
