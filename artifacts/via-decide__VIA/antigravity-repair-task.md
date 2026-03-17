Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-sentiment-heatmap to aggregate and visualize the emotional "weather" of the social platforms the swarm is currently monitoring. 1. Create a new directory src/core/analysis/sentiment-heatmap/. 2. Create heatmap-config.json defining "Emotional Dimensions" (e.g., Joy, Anger, Fear, Sadness, Surprise), spatial resolution for the map, and temporal decay (e.g., sentiment from 2 hours ago is weighted 50% less). 3. Implement HeatmapAggregator.js (or .ts). This module must process the raw sentiment scores emitted by the SentimentTracker for every ingested social post. 4. Build a "Weighted Geo-Social Grid": Map incoming sentiment data onto a 2D or 3D coordinate system where the axes represent "Topic Clusters" (from the TrendPredictor) and "User Influence" (from the IdentityResolver). 5. Implement the "Heat Diffusion" algorithm: To prevent a single viral post from creating an outlier "spike," use a Gaussian blur-style function to diffuse sentiment across neighboring topics in the grid. $$H_{x,y} = \sum_{i,j} S_{i,j} \cdot e^{-\frac{(x-i)^2 + (y-j)^2}{2\sigma^2}}$$ where $S$ is the raw sentiment intensity and $\sigma$ is the spread factor. 6. Build a "Real-Time Snapshot API": Provide a compressed binary or JSON representation of the heatmap that the system-telemetry-dashboard can render as a dynamic, color-coded overlay. 7. Integrate with the PredictiveRouter: If a specific topic cluster enters a "High-Anger" or "Crisis" state, the router should automatically prioritize "De-escalation Agents" or "Fact-Checkers" for those specific coordinates.

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