You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-sentiment-tracker to analyze the emotional "vibe" and sentiment of all incoming traffic and agent interactions in real-time. 1. Create a new directory src/core/nlp/sentiment-tracker/. 2. Create sentiment-config.json defining emotion categories (e.g., Joy, Anger, Fear, Sadness, Neutral), sentiment thresholds (-1.0 to 1.0), and a lightweight lexicon of "vibe" keywords. 3. Implement SentimentAnalyzer.js (or .ts). This module will serve as a high-speed emotional parser. 4. Build a Lexicon-based Scoring Engine: Use a native JavaScript implementation of a sentiment analysis algorithm (like a simplified VADER or AFINN) that calculates scores based on word intensity and modifiers (e.g., "very happy" vs "happy"). 5. Integrate with the EventBus: Every message that passes through the PredictiveEngine should be "tapped" by the tracker. The resulting sentiment_score and emotion_tag must be appended to the message metadata before it reaches its destination agent. 6. Aggregate "Global Vibe" metrics: Store a sliding-window average of the sentiment across the entire system. 7. Expose a telemetry hook: Send the "Global Vibe" data to the system-telemetry-dashboard so administrators can visualize the emotional health of the user base/agent swarm.

CONSTRAINTS
Do NOT use external cloud NLP APIs (Google NL, AWS Comprehend) or heavy local libraries like natural if they block the event loop. The analysis must be purely synchronous and execute in <1ms per message. Use a Map for the lexicon to ensure O(1) word lookups. Ensure the tracker is "Agent-Aware"-it should be able to distinguish between the sentiment of a user and the sentiment of an agent response.

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