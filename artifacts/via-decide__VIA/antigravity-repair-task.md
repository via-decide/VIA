Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-agent-reputation-scorer to track, quantify, and act upon the social trust and reliability of individual agents within the swarm. 1. Create a new directory src/core/governance/reputation-scorer/. 2. Create reputation-config.json defining "Weighting Factors" (e.g., User Likes: +1, User Replies: +0.5, Hallucination Flags: -10, Admin Correction: -5) and a "Reputation Decay" constant to ensure old glory doesn't mask current incompetence. 3. Implement ReputationManager.js (or .ts). This module must subscribe to the EventBus to ingest "Feedback Events" from both the SocialSyncManager and the GovernanceAuditor. 4. Build a "Trust-Rank" algorithm: Calculate an agent's Global Reputation Score ($G_R$) using a weighted moving average: $$G_R = (G_{R_{prev}} \cdot \lambda) + \sum (Signal \cdot Weight)$$ where $\lambda$ is the decay factor (e.g., 0.99 per hour). 5. Implement "Slashing" logic: If the GovernanceAuditor or ConsensusEngine flags an agent for a critical logic failure, the Reputation Manager must immediately "Slash" its score, potentially dropping it below the "Execution Threshold." 6. Integrate with the PredictiveRouter: Higher-reputation agents should be prioritized for "High-Stakes" or "Verified User" requests, while low-reputation agents are routed to "Sandboxed" or "Testing" environments. 7. Expose a "Leaderboard API": Provide the system-telemetry-dashboard with a real-time ranking of the most trusted agents in the swarm.

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