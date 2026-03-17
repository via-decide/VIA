You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-viral-trend-predictor to proactively identify and position agents within emerging social conversations before they reach peak velocity. 1. Create a new directory src/core/analysis/trend-predictor/. 2. Create trend-config.json defining "Viral Thresholds" (e.g., 200% increase in keyword frequency over 10 mins), "Sentiment Volatility" triggers, and a list of "High-Signal Sources" (e.g., top-tier influencers or news feeds). 3. Implement PredictorEngine.js (or .ts). This module must consume the normalized SocialEvent stream from the SocialSyncManager. 4. Build a "Velocity & Acceleration" Calculator: Use a derivative-based approach to measure the rate of change for specific topics or hashtags. $$Velocity (V) = \frac{\Delta Mentions}{\Delta Time}$$ $$Acceleration (A) = \frac{\Delta V}{\Delta Time}$$ 5. Implement "Topic Clustering": Use a lightweight, string-distance-based clustering algorithm (e.g., Levenshtein or Jaccard Similarity) to group related mentions into a single "Trend Candidate" without needing a full vector embedding for every tweet. 6. Build an "Engagement Strategy" Generator: When a trend is confirmed, the engine should notify the PredictiveRouter to spawn or re-task an agent with a specific "Trend-Context" prompt to maximize "First-Mover" visibility. 7. Integrate with BudgetRebalancer: Ensure that the swarm only "bets" its compute resources on trends with a high probability of sustained engagement to avoid wasting tokens on "Flash-in-the-pan" noise.

CONSTRAINTS
Do NOT use heavy, synchronous NLP libraries. The trend detection must be purely mathematical and statistical to ensure it can process 10,000+ social events per second in <50ms. Use a sliding-window bitset or a Bloom Filter to track "seen" keywords efficiently. The predictor must be "Noise-Resistant"-ignore bot-driven spam by cross-referencing user reputation via the IdentityResolver.

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