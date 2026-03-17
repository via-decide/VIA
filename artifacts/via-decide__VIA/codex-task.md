You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-fault-tolerance-system to ensure the AI swarm remains resilient and self-healing in the face of thread crashes or logic errors. 1. Create a new directory src/core/infrastructure/fault-tolerance/. 2. Create fault-tolerance-config.json defining retry limits (e.g., 3 attempts), exponential backoff settings (base 200ms, max 5s), and "Health Check" intervals. 3. Implement HealthMonitor.js (or .ts). This module must maintain a "Heartbeat Map" of all active worker threads in the WorkerPool. 4. Build a "Circuit Breaker" pattern: If an Agent ID fails to process its queue or returns 500-series errors more than X times in a sliding window, the monitor must "Trip" the circuit, temporarily routing requests to a lightweight fallback agent or returning a "System Busy" status. 5. Implement "Stateful Recovery": When a worker thread crashes, the monitor must automatically respawn it and use the EdgeStore to re-hydrate the agent's last known "Memory Snapshot" before it resumes processing the EventBus queue. 6. Add a "Poison Pill" detector: Identify and discard specific input payloads that cause consistent crashes across multiple agents to prevent recursive system failure. 7. Integrate with SystemTelemetry: Log all "Death & Rebirth" cycles to provide developers with a clear picture of swarm stability.

CONSTRAINTS
Do NOT use external process managers like PM2 or Systemd for internal agent orchestration. You must implement the supervision logic natively using Node.js worker_threads events (error, exit). The recovery process must be "Seamless"-the SocketMesh should not drop the user's connection during an agent reboot; it should simply buffer the response until the agent is healthy.

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