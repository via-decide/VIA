Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-swarm-pubsub-bus to enable decentralized, asynchronous communication across the AI agent swarm. 1. Create a new directory src/core/network/swarm-bus/. 2. Create bus-config.json defining event topics (e.g., "intent_parsed", "data_fetched", "moderation_flagged"), maximum message queue sizes, and TTL (Time-To-Live) for unread events. 3. Implement EventBus.js (or .ts). This module acts as the central nervous system for all autonomous agents running in the backend. 4. Build robust publish(topic, payload) and subscribe(topic, callback) methods. An agent (e.g., a "Web Scraper") should be able to publish a payload without knowing which agent (e.g., a "Summarizer") will consume it. 5. Integrate the EventBus closely with the WorkerPool. Since agents run in isolated worker_threads, the bus must use Node's MessageChannel or postMessage API to securely and efficiently route event payloads across thread boundaries. 6. Implement a "Dead Letter Topic" for events that are published but have no active subscribers or fail to process, logging them to the telemetry stream for debugging.

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