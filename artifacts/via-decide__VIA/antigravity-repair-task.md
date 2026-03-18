Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-resource-auctioneer to manage compute priority and API quotas through an internal, market-driven bidding system. 1. Create a new directory src/core/infrastructure/resource-auctioneer/. 2. Create auctioneer-config.json defining "Base Credit Allocations" (per agent/tier), "Reserve Prices" for different resources (e.g., GPT-4o calls vs. local Llama-3-8B), and "Auction Windows" (e.g., every 500ms). 3. Implement AuctionEngine.js (or .ts). This module must manage the "Bid-to-Execute" lifecycle within the WorkerPool. 4. Build a "Virtual Credit Ledger": Maintain a high-speed, in-memory balance for every agent. Credits are earned through high "Reputation Scores" and spent on compute cycles. 5. Implement "Priority Preemption": If a "High-Urgency" agent outbids an active "Background" agent, the engine must gracefully pause/checkpoint the lower-priority task and reallocate the worker thread. 6. Build the "Bidding Logic": Agents use their ContextPruning and TrendPredictor data to decide how much to "bid" for a specific turn, based on the perceived value of the interaction. 7. Integrate with SystemTelemetry: Provide a real-time "Cost-per-Interaction" metric to the dashboard to visualize how the swarm is self-allocating its budget.

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