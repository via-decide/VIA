You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-distributed-search-indexer to provide high-performance keyword and full-text search across historical agent interactions. 1. Create a new directory src/core/memory/search-indexer/. 2. Create indexer-config.json defining tokenization rules, stop-words, field relevance weights (e.g., "title" vs "content"), and index sharding parameters. 3. Implement SearchEngine.js (or .ts). This module must manage a native Inverted Index structure. 4. Build a "Lexical Processor": Implement stemmers and tokenizers to normalize text before indexing. Every message flowing through the EventBus should be asynchronously indexed without delaying the real-time response. 5. Implement a "BM25" or "TF-IDF" ranking algorithm to score and sort search results by relevance. 6. Build "Shard Support": Since the index can grow large, the engine must be able to distribute index segments across different WorkerPool threads to parallelize query execution and memory usage. 7. Integrate with LocalVectorStore: Allow agents to perform "Hybrid Search" (combining semantic vector similarity with exact keyword matching) for maximum retrieval accuracy.

CONSTRAINTS
Do NOT use external search engines like Elasticsearch, Solr, or Meilisearch. You must build a native JavaScript/TypeScript implementation. Use memory-efficient data structures (like Uint32Array for posting lists) to minimize garbage collection overhead. Search queries must execute in O(log n) or better, and the indexing process must be strictly non-blocking for the main event loop.

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