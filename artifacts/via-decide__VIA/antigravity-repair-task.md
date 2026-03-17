Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-adaptive-heartbeat-manager to dynamically modulate agent "wake-up" cycles based on real-time urgency and social activity levels. 1. Create a new directory src/core/infrastructure/heartbeat-manager/. 2. Create heartbeat-config.json defining "Resting Pulse" (e.g., 5 mins), "Active Pulse" (e.g., 30 seconds), and "Urgency Multipliers" based on mention velocity or sentiment spikes. 3. Implement HeartbeatController.js (or .ts). This module must act as the "Metabolism Regulator" for the WorkerPool. 4. Build an "Activity Monitor": Integrate with the SocialSyncManager and SentimentTracker to calculate a "Neighborhood Urgency Score" ($U_s$). 5. Implement "Pulse Modulation": Dynamically adjust the next_check_in timestamp for each agent using a decay function: $$Interval_{next} = Base_{pulse} \cdot e^{-\alpha \cdot U_s}$$ where $\alpha$ is the sensitivity constant. 6. Build a "Priority Override": Allow the PredictiveRouter to force an immediate "Sync Pulse" if a critical user request or high-stakes governance event is detected. 7. Integrate with the BudgetRebalancer: If the system is low on credits, the manager must automatically "Throttle" the heartbeat to preserve tokens, regardless of urgency.

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