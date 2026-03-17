Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-context-pruning-engine to intelligently manage agent memory by trimming low-signal data while preserving the "semantic thread" of long-running conversations. 1. Create a new directory src/core/memory/context-pruner/. 2. Create pruning-config.json defining "Hard Token Limits" for different model tiers, "Salience Thresholds," and a list of "Immortal Tags" (e.g., #UserIdentity, #CoreGoal) that must never be pruned. 3. Implement PruningManager.js (or .ts). This module must intercept the context window payload before it is dispatched to the PredictiveEngine. 4. Build a "Salience Scorer": Instead of a simple FIFO (First-In-First-Out) truncation, use a lightweight scoring algorithm to rank conversation turns. $$Score = (Relevance \cdot \omega_1) + (Recency \cdot \omega_2) + (Density \cdot \omega_3)$$ where "Density" identifies turns with high factual or instructional content. 5. Implement "Recursive Summarization": For segments identified as "Low-Salience but Historical," trigger a background task to condense multiple turns into a single "Memory Anchor" string (e.g., "User previously discussed project X but moved on to Y"). 6. Integrate with LocalVectorStore: Ensure that any "Pruned" content is not deleted but is instead indexed into the long-term vector memory so it can be retrieved via RAG if the conversation loops back to those topics. 7. Add a "Token Budget Watchdog": Monitor the real-time token count and dynamically adjust the pruning aggressiveness if the model's context limit is approached (e.g., within 15% of the limit).

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