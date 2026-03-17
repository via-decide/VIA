Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-predictive-latency-optimizer to proactively manage system resources and worker thread scaling based on real-time traffic forecasting. 1. Create a new directory src/core/infrastructure/latency-optimizer/. 2. Create latency-config.json defining "Scale-Up" and "Scale-Down" thresholds, minimum/maximum worker counts, and observation window sizes (e.g., 5-minute segments). 3. Implement LatencyPredictor.js (or .ts). This module must consume arrival-rate data from the SocketMesh and API-Gateway. 4. Build a "Traffic Forecaster": Use a simple Linear Regression or Weighted Moving Average algorithm to predict the next 60 seconds of request volume. $$P_{t+1} = \alpha \cdot R_t + (1 - \alpha) \cdot P_t$$ where $P$ is the predicted load, $R$ is the actual rate, and $\alpha$ is the smoothing factor. 5. Implement "Proactive Scaling": If the predicted load exceeds the current capacity of the WorkerPool, the optimizer must signal the engine to spin up new worker threads *before* the traffic spike hits. 6. Build a "Cool-Down" logic: To prevent "Thrashing" (rapidly starting and stopping threads), the optimizer must enforce a minimum uptime for every worker before it can be decommissioned during a traffic lull. 7. Integrate with the BudgetRebalancer: If the system is in "Low-Cost" mode, the optimizer should prioritize higher latency over expensive thread overhead.

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