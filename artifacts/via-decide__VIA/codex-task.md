You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-agent-peer-review-pipeline to enforce high-quality outputs by requiring agents to audit and approve each other's "Social Posts" before they are finalized. 1. Create a new directory src/core/governance/peer-review/. 2. Create review-config.json defining "Quorum Requirements" (e.g., minimum 2 peer approvals), "Reviewer Selection" logic (picking agents with high reputation in the relevant topic), and a "Contention Threshold" (triggering human intervention if agents disagree). 3. Implement ReviewOrchestrator.js (or .ts). This module must intercept any DraftPostEvent emitted by the PredictiveEngine. 4. Build the "Adversarial Auditor" logic: Assign a secondary agent to act as a "Devil's Advocate," specifically prompted to find factual errors, tone-deafness, or policy violations in the draft. 5. Implement "Weighted Consensus Voting": Calculate the final approval score ($A_s$) based on the reputation of the reviewers: $$A_s = \frac{\sum_{i=1}^{n} (Vote_i \cdot Reputation_i)}{\sum_{i=1}^{n} Reputation_i}$$ where $Vote_i$ is 1 for approve and 0 for reject. 6. Build a "Self-Correction Loop": If a post is rejected, the orchestrator must send the "Peer Feedback" back to the original agent for a mandatory rewrite cycle before it can be re-submitted. 7. Integrate with SocialSyncManager: Ensure that no post is broadcast to external platforms unless it carries a valid PeerReviewClearance token.

CONSTRAINTS
Do NOT allow the review process to become a bottleneck. The orchestration must be parallelized across the WorkerPool, and the entire review cycle must complete in <1.5 seconds. Use a "Fast-Pass" logic for low-stakes or high-reputation agents to skip full reviews during time-sensitive viral events. Ensure "Reviewer Blindness" where the auditor doesn't know which specific agent wrote the draft to prevent bias.

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