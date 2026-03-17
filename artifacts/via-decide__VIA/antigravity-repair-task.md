Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-edge-cache-manager to handle distributed, high-speed data retrieval for read-heavy operations. 1. Create a new directory src/core/storage/edge-cache/. 2. Create cache-config.json defining cache tiers, TTL (Time-To-Live) settings, and eviction policies (e.g., LRU - Least Recently Used). 3. Implement EdgeStore.js (or .ts). This class must act as an in-memory Key-Value store designed to sit in front of the primary database. 4. Build a cache invalidation mechanism using a pub/sub model. When a core entity (like a user profile or agent state) is updated in the main DB, the system must broadcast an invalidation event to clear out stale edge data. 5. Integrate EdgeStore.js with the previously built PredictiveEngine. The router should now intercept "read" requests and attempt to serve them directly from the edge cache before falling back to the main database query queue. 6. Add telemetry hooks to log Cache Hit Ratio, Eviction Count, and Memory Usage.

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