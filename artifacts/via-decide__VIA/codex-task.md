You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-plugin-loader to allow the engine to hot-swap agent capabilities and toolsets without restarting the Node process. 1. Create a new directory src/core/runtime/plugin-loader/. 2. Create plugin-manifest.json defining the directory structure for external plugins, permitted NPM dependencies, and security sandbox levels. 3. Implement PluginManager.js (or .ts). This module must be capable of scanning a plugins/ folder and dynamically importing JavaScript modules using import() or require(). 4. Build a "Lifecycle Hook" system: Each plugin must export a standard interface including onLoad(), onEnable(), onDisable(), and getMetadata(). 5. Integrate with the EventBus and SwarmBalancer. When a plugin is loaded, it must automatically register its specialized agents or tools with the PredictiveEngine so they can immediately begin receiving routed traffic. 6. Implement a "Hot-Reload" watcher using fs.watch. If a developer or an automated CI/CD pipeline updates a plugin file, the PluginManager should gracefully disable the old version, clear the module cache, and load the new version in real-time.

CONSTRAINTS
Do NOT use eval() or new Function() for loading code, as they pose extreme security risks. You must use native ESM dynamic imports or the vm module to execute plugin code in a restricted context. The loader must implement a "Safe-Fail" mechanism: if a plugin has a syntax error or crashes during onLoad(), it must be quarantined without taking down the main VIA engine.

PROCESS (MANDATORY)
1. Read README.md and AGENTS.md before editing.
2. Audit architecture before coding. Summarize current behavior.
3. Preserve unrelated working code. Prefer additive modular changes.
4. Implement the smallest safe change set for the stated goal.
5. Run validation commands and fix discovered issues.
6. Self-review for regressions, missing env wiring, and docs drift.
7. Return complete final file contents for every modified or created file.

REPO AUDIT CONTEXT
- Description: 
- Primary language: HTML
- README snippet:
not found

- AGENTS snippet:
not found


SOP: PRE-MODIFICATION PROTOCOL (MANDATORY)
1. Adherence to Instructions: No deviations without explicit user approval.
2. Mandatory Clarification: Immediately ask if instructions are ambiguous or incomplete.
3. Proposal First: Always propose optimizations or fixes before implementing them.
4. Scope Discipline: Do not add unrequested features or modify unrelated code.
5. Vulnerability Check: Immediately flag and explain security risks.

OUTPUT REQUIREMENTS
- Include: implementation summary, checks run, risks, rollback notes.
- Generate branch + PR package.
- Keep prompts deterministic and preservation-first.