Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a secure, sandboxed tool execution engine called via-agent-tools allowing LLMs to safely execute code and API calls. 1. Create src/core/ai/tools/. 2. Implement ToolRegistry.ts to maintain dynamic OpenAPI JSON Schemas for function calling. 3. Create SandboxExecutor.ts using WebAssembly (Pyodide) or isolated-vm to execute LLM-generated code with strict memory/CPU quotas and zero network access. 4. Implement ApiIntegrator.ts for standardized HTTP interactions using user-authenticated OAuth tokens. 5. Build HumanInTheLoop.ts (HITL) to pause agent execution and require explicit user UI approval for high-risk actions (e.g., dropping a database table, spending money).

RULES
1. Audit touched files first and identify regressions.
2. Preserve architecture and naming conventions.
3. Make minimal repairs only; do not expand scope.
4. Re-run checks and provide concise root-cause notes.
5. Return complete contents for changed files only.

SOP: REPAIR PROTOCOL (MANDATORY)
1. Strict Fix Only: Do not use repair mode to expand scope or add features.
2. Regression Check: Audit why previous attempt failed before proposing a fix.
3. Minimal Footprint: Only return contents for the actual repaired files.

REPO CONTEXT
- README snippet:
# VIA - Bharat's Social Platform VIA is a production-focused social platform for Bharat-centric communities. It combines a real-time social feed, long-form knowledge spaces, and discovery tools in a modern React experience backed by Firebase. ## Features - **Feed**: Browse a fast, social-first st
- AGENTS snippet:
not found
- package.json snippet:
{ "name": "react-example", "private": true, "version": "0.0.0", "type": "module", "scripts": { "dev": "vite --port=3000 --host=0.0.0.0", "build": "vite build", "preview": "vite preview", "clean": "rm -rf dist", "lint": "tsc --noEmit" }, "dependencies": { "@googl