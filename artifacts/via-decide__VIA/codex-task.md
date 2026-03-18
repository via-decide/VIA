You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-resource-auctioneer to manage compute priority and API quotas through an internal, market-driven bidding system. 1. Create a new directory src/core/infrastructure/resource-auctioneer/. 2. Create auctioneer-config.json defining "Base Credit Allocations" (per agent/tier), "Reserve Prices" for different resources (e.g., GPT-4o calls vs. local Llama-3-8B), and "Auction Windows" (e.g., every 500ms). 3. Implement AuctionEngine.js (or .ts). This module must manage the "Bid-to-Execute" lifecycle within the WorkerPool. 4. Build a "Virtual Credit Ledger": Maintain a high-speed, in-memory balance for every agent. Credits are earned through high "Reputation Scores" and spent on compute cycles. 5. Implement "Priority Preemption": If a "High-Urgency" agent outbids an active "Background" agent, the engine must gracefully pause/checkpoint the lower-priority task and reallocate the worker thread. 6. Build the "Bidding Logic": Agents use their ContextPruning and TrendPredictor data to decide how much to "bid" for a specific turn, based on the perceived value of the interaction. 7. Integrate with SystemTelemetry: Provide a real-time "Cost-per-Interaction" metric to the dashboard to visualize how the swarm is self-allocating its budget.

CONSTRAINTS
Do NOT use an external database for the ledger; use a SharedArrayBuffer or a localized Map to keep transaction overhead under 1ms. The auction must be "Vickrey-style" (second-price sealed-bid) to prevent bidding wars and ensure agents bid their true valuation of the compute. "Starvation Prevention" is mandatory: agents with zero credits must still be allocated a "Minimum Viable Heartbeat" (e.g., 2% of total CPU) to prevent permanent bricking.

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