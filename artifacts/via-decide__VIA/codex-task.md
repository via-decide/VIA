You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-budget-rebalancer to dynamically manage and shift virtual LLM credits across the agent swarm based on real-time performance and ROI. 1. Create a new directory src/core/finance/budget-rebalancer/. 2. Create budget-config.json defining daily token quotas, cost-per-thousand-tokens for different model tiers, and "Priority Weights" for critical system agents. 3. Implement Rebalancer.js (or .ts). This module acts as the "CFO" of the AI swarm, monitoring the operational cost of every autonomous action. 4. Build the "ROI Tracking" logic: Integrate with the TraceLogger and SentimentTracker to calculate an Efficiency Score for each agent (e.g., [Successful Tasks + Positive Sentiment] / [Token Cost]). 5. Implement the "Dynamic Shift" mechanism: If the "NewsAgent" is burning through its daily budget with low engagement while the "ResearchAgent" is providing high-value hits, the Rebalancer should automatically re-allocate 15% of the NewsAgent's remaining quota to the ResearchAgent in real-time. 6. Add a "Emergency Brake": If the total system spend hits 90% of the daily limit, the Rebalancer must signal the PredictiveRouter to switch all non-critical agents to "Low-Cost" local models or cached responses only.

CONSTRAINTS
Do NOT integrate with real-world payment gateways (Stripe, PayPal) for this internal logic. You must build a native, virtual credit-accounting system. All rebalancing calculations must happen asynchronously every 60 seconds to avoid overhead on the primary request-response cycle. The system must maintain a strict "Audit Log" of all budget shifts to prevent "Phantom Credit" bugs.

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