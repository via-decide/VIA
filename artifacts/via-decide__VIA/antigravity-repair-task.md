Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-api-gateway-aggregator to orchestrate complex "Scatter-Gather" patterns across multiple autonomous agents. 1. Create a new directory src/core/network/gateway-aggregator/. 2. Create aggregator-config.json defining scatter-gather timeout limits (e.g., 5000ms), partial-response policies, and correlation ID formatting. 3. Implement Aggregator.js (or .ts). This module will sit between the client-facing HTTP/WebSocket layer and the internal SwarmBalancer. 4. Build a concurrent dispatch mechanism. When a complex user query arrives (e.g., "Analyze my profile and cross-reference with trending news"), the Aggregator must break this into sub-tasks, assign a unique correlationId, and dispatch them simultaneously to different specialized agents (e.g., a "ProfileAgent" and a "NewsAgent"). 5. Wait for the asynchronous responses using the correlation IDs. Once all agents reply (or a strict timeout is reached), combine their JSON outputs into a single, unified, and formatted payload. 6. Return this unified payload to the client so the frontend only has to make a single network request.

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