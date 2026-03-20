Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a lightweight, cross-platform Developer SDK and CLI tool called via-sdk-core to enable programmatic access to the AI Swarm and Gateway. 1. Create a new directory src/tools/sdk/ for the Node.js/Browser client, and src/tools/cli/ for the terminal interface. 2. Implement ViaClient.ts (The SDK). Expose clean, strongly-typed methods: via.agents.spawn(), via.swarm.execute(prompt), and via.memory.search(query). 3. Create an AsyncStreamHandler.ts within the SDK. It must seamlessly wrap the backend's via-realtime-bus (WebSockets or Server-Sent Events) into standard async iterables (for await (const chunk of stream)), making it trivial for developers to consume streaming LLM tokens in their own React/Vue apps. 4. Implement cli.ts using a library like Commander.js or Yargs. Support commands like via run "analyze this codebase" --agent=Coder --context=./src. 5. Build AuthManager.ts for the CLI. Allow developers to run via login to securely store a long-lived Personal Access Token (PAT) in their local OS keychain or a ~/.via/config.json file. 6. Hook the CLI into the via-agent-tools local execution environment. Allow a flag like --allow-local-fs to permit the cloud-based AI swarm to read/write files directly to the developer's local machine via the CLI tunnel. 7. Expose an automated build step that bundles the SDK into a heavily minified npm package (@via-decide/sdk) and compiles the CLI into standalone binaries for Windows, macOS, and Linux using Vercel's pkg or similar.

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