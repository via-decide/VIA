Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-distributed-rate-limiter to protect the AI engine and database from traffic spikes, runaway agent loops, and malicious DDoS attempts. 1. Create a new directory src/core/network/rate-limiter/. 2. Create limiter-config.json defining rate limits based on entity type (e.g., Guest IPs: 50 req/min, Authenticated Users: 200 req/min, Internal Agents: 1000 req/min), penalty box duration, and window sizes. 3. Implement RateGuard.js (or .ts) using a highly optimized Token Bucket or Sliding Window algorithm. 4. Inject RateGuard as the absolute first middleware layer in the PredictiveEngine and SocketMesh. Every incoming request or WebSocket message must be evaluated before any parsing or routing occurs. 5. Build a "Penalty Box" mechanism: If an IP or Agent ID exceeds their threshold by a massive margin (e.g., 5x the limit in 10 seconds), automatically drop their packets at the TCP/socket level and log a security alert to the telemetry stream. 6. Expose an internal API endpoint so the system-telemetry-dashboard can visualize actively blocked IPs and current limit thresholds in real-time.

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