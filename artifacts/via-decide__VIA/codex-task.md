You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-cross-agent-semantic-search to allow the swarm to perform deep-history "Google-like" retrieval over the entire collective memory of all agents. 1. Create a new directory src/core/memory/semantic-search/. 2. Create search-config.json defining "Indexing Strategy" (e.g., incremental vs. batch), "Top-K" retrieval limits, and "Similarity Thresholds" (e.g., cosine similarity > 0.82). 3. Implement SearchIndexer.js (or .ts). This module must act as a background worker that consumes every finalized interaction from the TraceLogger. 4. Build a "Vector Embedding Pipeline": Pipe text through a local or remote embedding model (e.g., text-embedding-3-small) and store the resulting high-dimensional vectors. 5. Implement "HNSW (Hierarchical Navigable Small World) Indexing": Use a native Node.js binding or a high-performance local library to manage the vector spatial index for sub-10ms retrieval across millions of records. 6. Build the "Agent Query Interface": Create a search(query, context) function that allows any agent in the swarm to "remember" relevant past events, even if they occurred in a different conversation or with a different agent. 7. Integrate with KnowledgeGraph: Allow the search results to be filtered by "Entity" or "Relation" to provide hybrid RAG (Retrieval-Augmented Generation) capabilities.

CONSTRAINTS
Do NOT use external managed vector databases like Pinecone or Milvus; the index must be stored locally (e.g., using hnswlib-node or a specialized flat-file format) to ensure zero network latency and maximum privacy. The indexing process must be "Low-Priority"-it should not contend with the PredictiveEngine for CPU cycles during high-traffic bursts.

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