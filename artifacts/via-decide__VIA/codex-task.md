You are working in repository via-decide/VIA on branch main.

MISSION
Implement a comprehensive telemetry and billing engine called via-audit-core to track token usage and enforce quotas. 1. Create src/core/telemetry/auditing/. 2. Implement CostTracker.ts to intercept API headers, extract exact prompt_tokens/completion_tokens, and calculate real-world costs. 3. Create UserQuotaManager.ts backed by a Redis token bucket to enforce daily/monthly spending limits and instantly reject requests (HTTP 402) if exceeded. 4. Implement LatencyMonitor.ts to track TTFT and tool execution overhead. 5. Build AuditLogger.ts for enterprise compliance, logging sanitized metadata (Agent ID, Cost, Success) without storing PII/prompt text.

CONSTRAINTS
Telemetry MUST be non-blocking. Push metrics to a background queue to be flushed in batches. Never log raw user prompts in the billing database.

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
# VIA - Bharat's Social Platform VIA is a production-focused social platform for Bharat-centric communities. It combines a real-time social feed, long-form knowledge spaces, and discovery tools in a modern React experience backed by Firebase. ## Features - **Feed**: Browse a fast, social-first st

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