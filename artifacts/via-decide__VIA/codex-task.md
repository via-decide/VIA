You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-distributed-lock-manager (DLM) to prevent race conditions and ensure atomic operations across the decentralized AI swarm. 1. Create a new directory src/core/concurrency/lock-manager/. 2. Create lock-config.json defining default lock TTL (Time-to-Live), maximum retry attempts, and wait-time jitter to prevent "thundering herd" problems. 3. Implement LockManager.js (or .ts). This module must provide high-level acquire(resourceId), release(resourceId), and extend(resourceId) methods. 4. Build the locking engine: In a single-node environment, use a highly optimized Map with expiration timers. For multi-thread safety, utilize Atomics and SharedArrayBuffer to manage lock states across the WorkerPool without the overhead of message passing. 5. Integrate with AsyncDbSync and IdentityStore: Ensure that if two agents try to update the same user's "Memory State" simultaneously, one must wait for the lock while the other completes the write, preserving data consistency. 6. Implement a "Deadlock Detector": Periodically scan active locks for "Orphaned Locks" (locks held by crashed worker threads) and force-release them based on the TTL.

CONSTRAINTS
Do NOT use external coordination services like Redis (Redlock) or Zookeeper. You must implement a native locking primitive. The acquire operation must be non-blocking (returning a Promise) to ensure the Node event loop is never stalled. Use crypto.randomUUID() for unique lock ownership tokens to prevent one agent from accidentally releasing a lock held by another.

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