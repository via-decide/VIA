Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-sentiment-tracker to analyze the emotional "vibe" and sentiment of all incoming traffic and agent interactions in real-time. 1. Create a new directory src/core/nlp/sentiment-tracker/. 2. Create sentiment-config.json defining emotion categories (e.g., Joy, Anger, Fear, Sadness, Neutral), sentiment thresholds (-1.0 to 1.0), and a lightweight lexicon of "vibe" keywords. 3. Implement SentimentAnalyzer.js (or .ts). This module will serve as a high-speed emotional parser. 4. Build a Lexicon-based Scoring Engine: Use a native JavaScript implementation of a sentiment analysis algorithm (like a simplified VADER or AFINN) that calculates scores based on word intensity and modifiers (e.g., "very happy" vs "happy"). 5. Integrate with the EventBus: Every message that passes through the PredictiveEngine should be "tapped" by the tracker. The resulting sentiment_score and emotion_tag must be appended to the message metadata before it reaches its destination agent. 6. Aggregate "Global Vibe" metrics: Store a sliding-window average of the sentiment across the entire system. 7. Expose a telemetry hook: Send the "Global Vibe" data to the system-telemetry-dashboard so administrators can visualize the emotional health of the user base/agent swarm.

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