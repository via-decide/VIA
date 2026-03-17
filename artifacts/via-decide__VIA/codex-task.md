You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-distributed-trace-logger to provide full observability for complex, multi-agent request chains. 1. Create a new directory src/core/diagnostics/trace-logger/. 2. Create trace-config.json defining sampling rates (e.g., trace 10% of standard traffic, 100% of errors), retention periods, and metadata tags. 3. Implement TraceProvider.js (or .ts). This module must generate a unique traceId for every incoming root request (from SocketMesh or API). 4. Build a "Context Propagator": As a request moves through the PredictiveEngine, gets assigned to a WorkerPool thread, or publishes an event to the SwarmBus, the traceId and a new spanId must be passed along in the message headers. 5. Create an asynchronous "Span Logger" that records the start time, end time, status, and agent ID for every step in the chain. 6. Integrate with AsyncDbSync: Instead of writing logs one-by-one, batch these trace spans and flush them to a specialized "telemetry_traces" table/collection. 7. Expose a retrieval API: getTraceTimeline(traceId) which reconstructs the entire journey of a request across all micro-agents into a structured JSON tree.

CONSTRAINTS
Do NOT use external tracing libraries like OpenTelemetry or Jaeger if they require heavy sidecar processes. You must implement a native, lightweight tracing header pattern. The tracing overhead must be negligible (<1ms per span) and must use AsyncLocalStorage (in Node.js) to track context across asynchronous boundaries without manual "prop-drilling" of IDs through every function.

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