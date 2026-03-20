Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement the core multi-agent routing engine called via-agent-swarm to manage contextual handoffs between specialized LLMs. 1. Create src/core/ai/swarm/. 2. Implement SwarmOrchestrator.ts to act as the primary brain, routing user intents to specialized agents (e.g., Coder, Researcher, Critic). 3. Create ContextManager.ts to manage the sliding context window. It must intelligently truncate, summarize, or inject past conversational turns to stay under the token limit (e.g., 128k tokens). 4. Implement ModelGateway.ts to abstract the API calls to OpenAI, Anthropic, or local LLMs, handling rate limits and automatic retries. 5. Build PromptTemplates.ts to inject dynamic system prompts based on the active agent's persona and available tools.

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