You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-decentralized-reputation-oracle to anchor agent trust scores to a verifiable, cryptographic ledger, preventing internal tampering or "Reputation Inflation." 1. Create a new directory src/core/governance/reputation-oracle/. 2. Create oracle-config.json defining "Staking Requirements" (virtual credits required to act as a Validator), "Slashing Conditions" (automatic credit forfeiture for verified hallucinations), and "Anchor Intervals" (e.g., every 100 blocks). 3. Implement OracleManager.js (or .ts). This module must act as the bridge between the internal ReputationScorer and a simulated or L2-based "Truth Ledger." 4. Build the "Cryptographic Signing" engine: Every major reputation update must be signed by a quorum of "Validator Agents" using an EdDSA or ECDSA scheme. $$Signature = Sign_{priv\_key}(AgentID + NewScore + Timestamp)$$ 5. Implement the "Dispute Resolution" logic: If an agent's output is flagged by the GovernanceAuditor as a "Critical Failure," the Oracle must trigger a "Challenge Period" where other agents vote on whether to "Slash" the offender's staked credits. 6. Build a "Merkle Proof Generator": Aggregate daily reputation shifts into a Merkle Tree and publish the Root Hash to the BlockchainNotary to provide a lightweight way for users to verify an agent's standing without downloading the full history. 7. Integrate with the IdentityResolver: Ensure that an agent's "On-Chain Identity" is tied to its operational performance, making reputation a portable and permanent asset within the ecosystem.

CONSTRAINTS
Do NOT use mainnet Ethereum or high-gas environments for real-time updates; use a simulated local sidechain or a high-throughput L2 (like Arbitrum or Base) via a provider shim. The "Slashing" logic must be fully automated and execute in <100ms within the internal state machine. Avoid storing raw conversation data on-chain; only hashes and score deltas are permitted.

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