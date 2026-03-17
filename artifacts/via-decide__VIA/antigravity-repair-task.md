Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-distributed-search-indexer to provide high-performance keyword and full-text search across historical agent interactions. 1. Create a new directory src/core/memory/search-indexer/. 2. Create indexer-config.json defining tokenization rules, stop-words, field relevance weights (e.g., "title" vs "content"), and index sharding parameters. 3. Implement SearchEngine.js (or .ts). This module must manage a native Inverted Index structure. 4. Build a "Lexical Processor": Implement stemmers and tokenizers to normalize text before indexing. Every message flowing through the EventBus should be asynchronously indexed without delaying the real-time response. 5. Implement a "BM25" or "TF-IDF" ranking algorithm to score and sort search results by relevance. 6. Build "Shard Support": Since the index can grow large, the engine must be able to distribute index segments across different WorkerPool threads to parallelize query execution and memory usage. 7. Integrate with LocalVectorStore: Allow agents to perform "Hybrid Search" (combining semantic vector similarity with exact keyword matching) for maximum retrieval accuracy.

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