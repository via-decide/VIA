# AGENTS — via-decide/VIA

Rules for ALL coding agents (Codex, Claude, automated PRs) working in this repository.

---

## 1. Preservation Policy

1. Never delete tool folders under `tools/`.
2. Never remove working code — upgrades are additive only.
3. Never replace a functioning file with a placeholder or stub.
4. Never rewrite a file you can patch. Surgical edits only.
5. Routing in `router.js` and `_redirects` must never break existing routes.
6. `tools-manifest.json` — only ADD entries, never remove existing ones.
7. `shared/social-core.js` public API signatures must not change.

---

## 2. Read-Before-Write Protocol

Before editing ANY file:
1. Read it (or the relevant section if > 300 lines).
2. Understand every function and global it sets.
3. If unsure what a line does → do not change it.

For `index.html` (2100+ lines): use line ranges, never read/output the full file.

---

## 3. Files That Must Never Be Modified

| File | Reason |
|------|--------|
| `_redirects` | Cloudflare Pages routing — one bad line breaks the whole site |
| `tools-manifest.json` | Auto-generated catalog — add only, never delete |
| `shared/shared.css` | Base CSS for all engine tools |
| `skillhex/js/app.js` | DO NOT MODIFY — ES module game entry point |
| `skillhex/missions.json` | Hand-authored mission data |

---

## 4. Protected Functions (Never Modify Bodies)

These work correctly. Add NEW code AFTER them, never inside:

- `buildDiscover()`, `getSocialFeedCards()`, `refreshSocialSurfaces()`, `publishComposerPost()`
- `switchLayer()`, `switchNav()`, `openSheet()`, `ddBuildFooter()`
- `commitSwipe()`, `finishSession()`, `buildCardElement()`, `hydrateState()`, `syncState()`
- `handleDecision()`, `advanceMission()`, `calculateScore()`, `renderCycle()`, `initApp()`

---

## 5. Coding Standards

**Stack for `index.html` and `tools/`:**
- Vanilla JS, HTML, CSS only — no React, no bundler, no npm
- IIFE pattern for all shared scripts: `(function(global){...})(window);`
- All paths relative: `./path` or `../path` — never `/absolute/path`
- Guard every `window.*` access: `if (typeof window.X === 'undefined') return;`

**Stack for `src/`:**
- React 19 + TypeScript + Vite + Tailwind CSS 4
- Follow existing component patterns in `src/components/`
- Run `npm run lint` before committing

---

## 6. Commit Checklist

Before every commit, verify:

```
□ node --check <any modified .js file>    → zero syntax errors
□ grep -n "const <newVar>" <file>         → appears exactly once in scope
□ python3 -c "import json; json.load(open('tools-manifest.json'))"  → valid JSON
□ No duplicate const/let in same scope
□ IIFE wrappers intact in shared/*.js
□ Script load order respected (CDN → shared → inline, always last)
□ README.md updated for any tool whose behavior changed
□ No !important on transform or opacity in game card elements
```

---

## 7. Branch & PR Policy

- All work on: `claude/setup-via-repositories-3TYyg` (or designated feature branch)
- PR titles: `feat:`, `fix:`, `chore:`, `docs:` prefix
- PR body must include: summary, files changed, test checklist, rollback notes
- Never push directly to `main`

---

## 8. Tool Pipeline (use for complex features)

When implementing a multi-step feature, use the built-in pipeline:

```
tools/task-splitter/     → break epic into dependency-ordered tasks
tools/context-packager/  → pack repo context for each task
tools/spec-builder/      → generate technical spec
tools/code-generator/    → produce execution prompt
tools/code-reviewer/     → validate output, emit repair instructions
tools/output-evaluator/  → score delivery quality
```

Artifacts go in: `artifacts/via-decide__VIA/`

Templates:
- `artifacts/via-decide__VIA/codex-task.md` — task definition format
- `artifacts/via-decide__VIA/claude-repair-task.md` — post-impl repair mode
- `artifacts/via-decide__VIA/pr-package.md` — PR description format

---

## 9. Risk Levels

| Risk | Examples | Action |
|------|----------|--------|
| LOW | New tool folder, CSS inside `<style>`, new SocialCore method, README | Proceed directly |
| MEDIUM | `index.html` JS edits, new sheet type, new window.* export | Write plan first |
| HIGH | SocialCore signatures, `router.js`, `_redirects`, script load order | Write plan, confirm with user |

---

## 10. Repo Structure

```
index.html          ← SPA entry (2100+ lines, most critical file)
router.js           ← client-side routing (hash + subpage)
shared/             ← shared utilities (tool-bus, tool-registry, social-core, etc.)
tools/              ← 68+ standalone tool folders (pipeline + business + games + engine)
skillhex/           ← SkillHex game (ES module, standalone)
game/               ← Game- (built React/Vite app)
StudyOS/            ← StudyOS learning OS
artifacts/          ← codex-task, repair-task, pr-package templates
.codex/             ← agent instructions (full VIA-specific rules)
src/                ← React app source (Vite build → used by Cloudflare Pages)
```
