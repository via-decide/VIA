You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-social-sync-manager to manage multi-platform content distribution and real-time data ingestion across X (Twitter), Threads, and Farcaster. 1. Create a new directory src/core/integration/social-sync/. 2. Create sync-config.json defining platform-specific constraints: Character limits (e.g., 280 for X vs 10k for Farcaster), media requirements, rate-limiting tiers, and OAuth/Signer refresh intervals. 3. Implement SyncManager.js (or .ts). This module must act as the primary "Gateway" between the internal AI swarm and the external social web. 4. Build an "Omni-Format" Pipeline: When an agent publishes a post to the EventBus, the Sync Manager must automatically transform the content into the correct schema for each target platform (e.g., converting Markdown to Farcaster-specific mentions or X-style threads). 5. Implement "Unified Stream Ingestion": Aggregate mentions, replies, and keywords from all platforms into a single, normalized SocialEvent stream that the PredictiveRouter can dispatch back to the agents. 6. Build "Rate-Limit Intelligence": Use a token-bucket algorithm to ensure that the swarm never exceeds platform APIs. If one platform (like X) hits a limit, the manager must queue the posts and allow the other platforms (like Farcaster) to continue syncing. 7. Integrate with BlockchainNotary: For platforms like Farcaster or Lens, ensure that the cryptographic signatures of the agents are correctly attached to the metadata before broadcast.

CONSTRAINTS
Do NOT use heavy, monolithic third-party social SDKs if a simple REST or GraphQL call is possible. You must manage raw HTTP requests to ensure maximum performance and minimal memory overhead. The sync process must be strictly asynchronous; a slow response from a social API must never block the internal EventBus. Sensitive API keys and private "Signer" keys must be retrieved from the IdentityStore and never logged or stored in plain text.

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