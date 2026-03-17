You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-global-identity-manager to handle unified user authentication and cross-platform profile mapping. 1. Create a new directory src/core/auth/identity-manager/. 2. Create auth-config.json defining supported authentication methods (JWT, OAuth2, API Keys), token expiration times, and secure hashing salts. 3. Implement IdentityStore.js (or .ts). This module must manage a mapping table that links various platform-specific IDs (e.g., a WhatsApp phone number, a Telegram ID, or a Web UUID) to a single, unified "VIA Global ID." 4. Build a secure session manager that issues and validates JSON Web Tokens (JWT). This must be integrated as a high-priority middleware in the SocketMesh and PredictiveEngine to ensure every agent interaction is tied to a verified identity. 5. Implement "Agent-Level Permissions": Define a schema where specific agents or tools can only access certain user data "scopes" (e.g., the "NewsAgent" can see interests but not private messages). 6. Add a "Profile Hydrator" function that fetches and caches the unified user profile into the EdgeStore upon the first request of a session to minimize database lookups.

CONSTRAINTS
Do NOT use heavy external authentication providers like Auth0 or Firebase. You must implement the logic using Node.js's native crypto module for hashing and a minimalist JWT implementation. The identity lookup and validation must be O(1) or O(log n) to ensure it doesn't add more than 5ms of latency to the request pipeline.

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