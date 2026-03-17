Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-cross-agent-semantic-search to allow the swarm to perform deep-history "Google-like" retrieval over the entire collective memory of all agents. 1. Create a new directory src/core/memory/semantic-search/. 2. Create search-config.json defining "Indexing Strategy" (e.g., incremental vs. batch), "Top-K" retrieval limits, and "Similarity Thresholds" (e.g., cosine similarity > 0.82). 3. Implement SearchIndexer.js (or .ts). This module must act as a background worker that consumes every finalized interaction from the TraceLogger. 4. Build a "Vector Embedding Pipeline": Pipe text through a local or remote embedding model (e.g., text-embedding-3-small) and store the resulting high-dimensional vectors. 5. Implement "HNSW (Hierarchical Navigable Small World) Indexing": Use a native Node.js binding or a high-performance local library to manage the vector spatial index for sub-10ms retrieval across millions of records. 6. Build the "Agent Query Interface": Create a search(query, context) function that allows any agent in the swarm to "remember" relevant past events, even if they occurred in a different conversation or with a different agent. 7. Integrate with KnowledgeGraph: Allow the search results to be filtered by "Entity" or "Relation" to provide hybrid RAG (Retrieval-Augmented Generation) capabilities.

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