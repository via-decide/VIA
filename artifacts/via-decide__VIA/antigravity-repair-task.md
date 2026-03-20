Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a comprehensive telemetry and billing engine called via-audit-core to track token usage and enforce quotas. 1. Create src/core/telemetry/auditing/. 2. Implement CostTracker.ts to intercept API headers, extract exact prompt_tokens/completion_tokens, and calculate real-world costs. 3. Create UserQuotaManager.ts backed by a Redis token bucket to enforce daily/monthly spending limits and instantly reject requests (HTTP 402) if exceeded. 4. Implement LatencyMonitor.ts to track TTFT and tool execution overhead. 5. Build AuditLogger.ts for enterprise compliance, logging sanitized metadata (Agent ID, Cost, Success) without storing PII/prompt text.

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