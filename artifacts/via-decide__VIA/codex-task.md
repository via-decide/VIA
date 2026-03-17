You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-context-optimizer to manage and compress LLM context windows before they hit external APIs. 1. Create a new directory src/core/compute/context-optimizer/. 2. Create optimizer-config.json defining token limits (e.g., 4096, 128k), compression strategies (e.g., "summarize", "truncate", "rank-relevance"), and target model profiles. 3. Implement ContextManager.js (or .ts). This module must act as a pre-processor for any agent sending a request to an LLM (OpenAI, Anthropic, or local Llama). 4. Build a "Token Counter" using a lightweight, native BPE (Byte Pair Encoding) logic to estimate current payload size without making a network call. 5. Implement a "Smart Pruning" algorithm: If a context window is near the limit, the optimizer should automatically: - Remove oldest system logs first. - Use a "Recursive Summary" agent (via the Swarm Bus) to compress previous conversation turns into a high-density paragraph. - Rank "Local Vector Store" injections by relevance score and drop the bottom 20%. 6. Add a "Cost Guard" hook that logs estimated token usage per Agent ID to the telemetry stream for budget tracking.

CONSTRAINTS
Do NOT use heavy external libraries like tiktoken if they require large WASM binaries that slow down worker thread initialization. You must implement or use a minimalist, pure JS token estimation logic. The compression logic must be asynchronous and should never "hallucinate" or drop critical system instructions (the "System Prompt") during pruning.

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