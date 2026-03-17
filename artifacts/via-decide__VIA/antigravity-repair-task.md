Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-socket-mesh to handle massive concurrent WebSocket connections and real-time agent data streaming. 1. Create a new directory src/core/network/socket-mesh/. 2. Create mesh-config.json defining heartbeat intervals (ping/pong), max payload sizes, and connection backpressure limits to prevent DDoS or memory exhaustion. 3. Implement ConnectionManager.js (or .ts). This module will manage the lifecycle of thousands of persistent TCP/WebSocket connections. 4. Build a Pub/Sub "Room" or "Channel" system. Allow clients to subscribe to specific agent streams, system telemetry feeds, or interaction graphs. 5. Integrate directly with the PredictiveEngine: Incoming socket messages should bypass standard HTTP overhead and pipe instantly into the predictive router for classification. 6. Implement a "Session Hydration" protocol: If a client or external webhook temporarily drops and reconnects, it must automatically re-authenticate and receive any messages queued in the EdgeStore during the disconnection window.

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