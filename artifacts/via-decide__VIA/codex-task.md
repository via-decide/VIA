You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-api-gateway-aggregator to orchestrate complex "Scatter-Gather" patterns across multiple autonomous agents. 1. Create a new directory src/core/network/gateway-aggregator/. 2. Create aggregator-config.json defining scatter-gather timeout limits (e.g., 5000ms), partial-response policies, and correlation ID formatting. 3. Implement Aggregator.js (or .ts). This module will sit between the client-facing HTTP/WebSocket layer and the internal SwarmBalancer. 4. Build a concurrent dispatch mechanism. When a complex user query arrives (e.g., "Analyze my profile and cross-reference with trending news"), the Aggregator must break this into sub-tasks, assign a unique correlationId, and dispatch them simultaneously to different specialized agents (e.g., a "ProfileAgent" and a "NewsAgent"). 5. Wait for the asynchronous responses using the correlation IDs. Once all agents reply (or a strict timeout is reached), combine their JSON outputs into a single, unified, and formatted payload. 6. Return this unified payload to the client so the frontend only has to make a single network request.

CONSTRAINTS
Do NOT use external API gateways like Kong or Apollo GraphQL Federation. You must build a native orchestration layer using Promise.allSettled() or asynchronous event correlation. The aggregator must never hang a client request indefinitely; if a single agent in the swarm times out or crashes, the aggregator must gracefully degrade, returning the successful partial data alongside an error array for the failed sub-tasks.

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