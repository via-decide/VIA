You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-adaptive-heartbeat-manager to dynamically modulate agent "wake-up" cycles based on real-time urgency and social activity levels. 1. Create a new directory src/core/infrastructure/heartbeat-manager/. 2. Create heartbeat-config.json defining "Resting Pulse" (e.g., 5 mins), "Active Pulse" (e.g., 30 seconds), and "Urgency Multipliers" based on mention velocity or sentiment spikes. 3. Implement HeartbeatController.js (or .ts). This module must act as the "Metabolism Regulator" for the WorkerPool. 4. Build an "Activity Monitor": Integrate with the SocialSyncManager and SentimentTracker to calculate a "Neighborhood Urgency Score" ($U_s$). 5. Implement "Pulse Modulation": Dynamically adjust the next_check_in timestamp for each agent using a decay function: $$Interval_{next} = Base_{pulse} \cdot e^{-\alpha \cdot U_s}$$ where $\alpha$ is the sensitivity constant. 6. Build a "Priority Override": Allow the PredictiveRouter to force an immediate "Sync Pulse" if a critical user request or high-stakes governance event is detected. 7. Integrate with the BudgetRebalancer: If the system is low on credits, the manager must automatically "Throttle" the heartbeat to preserve tokens, regardless of urgency.

CONSTRAINTS
Do NOT use external cron jobs or system-level timers. The logic must be handled entirely within the Node.js event loop using efficient, non-drifting timers or a priority-queue-based scheduler. The "Pulse" calculation must be $O(1)$ and not involve heavy LLM calls. Ensure that "Heartbeat Jitter" is implemented (+/- 5% random variance) to prevent the swarm from slamming external APIs with perfectly synchronized requests.

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