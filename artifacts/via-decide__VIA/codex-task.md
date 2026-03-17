You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-socket-mesh to handle massive concurrent WebSocket connections and real-time agent data streaming. 1. Create a new directory src/core/network/socket-mesh/. 2. Create mesh-config.json defining heartbeat intervals (ping/pong), max payload sizes, and connection backpressure limits to prevent DDoS or memory exhaustion. 3. Implement ConnectionManager.js (or .ts). This module will manage the lifecycle of thousands of persistent TCP/WebSocket connections. 4. Build a Pub/Sub "Room" or "Channel" system. Allow clients to subscribe to specific agent streams, system telemetry feeds, or interaction graphs. 5. Integrate directly with the PredictiveEngine: Incoming socket messages should bypass standard HTTP overhead and pipe instantly into the predictive router for classification. 6. Implement a "Session Hydration" protocol: If a client or external webhook temporarily drops and reconnects, it must automatically re-authenticate and receive any messages queued in the EdgeStore during the disconnection window.

CONSTRAINTS
Do NOT use heavy, stateful frameworks like Socket.io. You must build this using Node's native net module or a minimalist library like ws. Implement aggressive garbage collection for dropped connections (heartbeat timeouts) to ensure the server does not experience Out-of-Memory (OOM) crashes when holding thousands of idle connections open.

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