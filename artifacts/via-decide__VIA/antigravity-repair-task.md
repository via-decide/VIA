Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-identity-resolver to bridge the gap between fragmented decentralized identities (ENS, Lens, Farcaster) and create a unified GlobalID. 1. Create a new directory src/core/identity/identity-resolver/. 2. Create identity-config.json defining supported namespaces (e.g., "eth", "lens", "farcaster"), priority weighting for identity "closeness," and cache TTL settings. 3. Implement IdentityResolver.js (or .ts). This module must serve as the "Universal Address Book" for the VIA swarm. 4. Build a "Multi-Chain Lookup" engine: Create lightweight adapters for ENS (via JSON-RPC), Lens (via GraphQL), and Farcaster (via Hub-RPC) to resolve handles to their root EVM or EdDSA addresses. 5. Implement "Identity Aggregation": When a user interacts with the system via a new platform, the resolver should attempt to "soft-link" them to an existing GlobalID using common public keys or verifiable cross-platform signatures. 6. Build an "Identity Cache": Store resolved mappings in a high-performance local cache (using Map or a shared buffer) to eliminate redundant external RPC calls during high-frequency social interactions. 7. Integrate with the PersonalizationEngine: Ensure that user preferences and "Interest Vectors" are correctly associated with the unified GlobalID, even if the user switches platforms.

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