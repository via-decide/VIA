You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-sentiment-heatmap to aggregate and visualize the emotional "weather" of the social platforms the swarm is currently monitoring. 1. Create a new directory src/core/analysis/sentiment-heatmap/. 2. Create heatmap-config.json defining "Emotional Dimensions" (e.g., Joy, Anger, Fear, Sadness, Surprise), spatial resolution for the map, and temporal decay (e.g., sentiment from 2 hours ago is weighted 50% less). 3. Implement HeatmapAggregator.js (or .ts). This module must process the raw sentiment scores emitted by the SentimentTracker for every ingested social post. 4. Build a "Weighted Geo-Social Grid": Map incoming sentiment data onto a 2D or 3D coordinate system where the axes represent "Topic Clusters" (from the TrendPredictor) and "User Influence" (from the IdentityResolver). 5. Implement the "Heat Diffusion" algorithm: To prevent a single viral post from creating an outlier "spike," use a Gaussian blur-style function to diffuse sentiment across neighboring topics in the grid. $$H_{x,y} = \sum_{i,j} S_{i,j} \cdot e^{-\frac{(x-i)^2 + (y-j)^2}{2\sigma^2}}$$ where $S$ is the raw sentiment intensity and $\sigma$ is the spread factor. 6. Build a "Real-Time Snapshot API": Provide a compressed binary or JSON representation of the heatmap that the system-telemetry-dashboard can render as a dynamic, color-coded overlay. 7. Integrate with the PredictiveRouter: If a specific topic cluster enters a "High-Anger" or "Crisis" state, the router should automatically prioritize "De-escalation Agents" or "Fact-Checkers" for those specific coordinates.

CONSTRAINTS
Do NOT use heavy external visualization libraries in the backend. The heatmap must be calculated as a raw numerical matrix (e.g., using Float32Array) to ensure O(1) update time and minimal memory overhead. The entire aggregation loop must handle 5,000+ data points per second with <20ms latency. Ensure data is "Differential Privacy" compliant-aggregate individual sentiment into clusters so no single user's emotional state can be reverse-engineered from the map.

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