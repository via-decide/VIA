Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-context-optimizer to manage and compress LLM context windows before they hit external APIs. 1. Create a new directory src/core/compute/context-optimizer/. 2. Create optimizer-config.json defining token limits (e.g., 4096, 128k), compression strategies (e.g., "summarize", "truncate", "rank-relevance"), and target model profiles. 3. Implement ContextManager.js (or .ts). This module must act as a pre-processor for any agent sending a request to an LLM (OpenAI, Anthropic, or local Llama). 4. Build a "Token Counter" using a lightweight, native BPE (Byte Pair Encoding) logic to estimate current payload size without making a network call. 5. Implement a "Smart Pruning" algorithm: If a context window is near the limit, the optimizer should automatically: - Remove oldest system logs first. - Use a "Recursive Summary" agent (via the Swarm Bus) to compress previous conversation turns into a high-density paragraph. - Rank "Local Vector Store" injections by relevance score and drop the bottom 20%. 6. Add a "Cost Guard" hook that logs estimated token usage per Agent ID to the telemetry stream for budget tracking.

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
not found
- AGENTS snippet:
not found
- package.json snippet:
not found