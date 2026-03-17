You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-intent-classifier to perform ultra-fast, local natural language intent detection before routing to the heavy AI swarm. 1. Create a new directory src/core/nlp/intent-classifier/. 2. Create intent-registry.json defining a list of "High-Speed Intents" (e.g., "SEARCH_QUERY", "POST_CONTENT", "DELETE_REQUEST", "FETCH_PROFILE", "AGENT_DIRECT_MESSAGE"). 3. Implement IntentEngine.js (or .ts). This module must act as a lightweight "pre-parser" that sits at the very edge of the PredictiveEngine. 4. Build a hybrid classification logic: - Use a fast Aho-Corasick or Regex-based keyword matcher for common command patterns. - Use the via-local-vector-store to perform a "Nearest Neighbor" search against a small set of "Intent Prototypes" for semantic matching. 5. The engine must assign an intent_tag and a confidence_score to every incoming text payload. 6. Integrate with the PredictiveRouter: If the intent_tag is high-confidence (e.g., > 0.9), the router should bypass the expensive "Reasoning Agent" and immediately dispatch the task to the specific functional tool (e.g., the DatabaseSync or SearchEngine). 7. Log "Intent Drift" to the telemetry stream when a user's message matches no registered intents, allowing developers to see where the system is "confused."

CONSTRAINTS
Do NOT call an external LLM API for this classification; it must happen locally in <10ms. You must not use heavy libraries like TensorFlow.js unless they are absolutely required for the local embedding check. The memory footprint of the intent registry must stay under 5MB to ensure it can be loaded into every WorkerPool thread without overhead.

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