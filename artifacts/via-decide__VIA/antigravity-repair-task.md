Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-intent-classifier to perform ultra-fast, local natural language intent detection before routing to the heavy AI swarm. 1. Create a new directory src/core/nlp/intent-classifier/. 2. Create intent-registry.json defining a list of "High-Speed Intents" (e.g., "SEARCH_QUERY", "POST_CONTENT", "DELETE_REQUEST", "FETCH_PROFILE", "AGENT_DIRECT_MESSAGE"). 3. Implement IntentEngine.js (or .ts). This module must act as a lightweight "pre-parser" that sits at the very edge of the PredictiveEngine. 4. Build a hybrid classification logic: - Use a fast Aho-Corasick or Regex-based keyword matcher for common command patterns. - Use the via-local-vector-store to perform a "Nearest Neighbor" search against a small set of "Intent Prototypes" for semantic matching. 5. The engine must assign an intent_tag and a confidence_score to every incoming text payload. 6. Integrate with the PredictiveRouter: If the intent_tag is high-confidence (e.g., > 0.9), the router should bypass the expensive "Reasoning Agent" and immediately dispatch the task to the specific functional tool (e.g., the DatabaseSync or SearchEngine). 7. Log "Intent Drift" to the telemetry stream when a user's message matches no registered intents, allowing developers to see where the system is "confused."

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