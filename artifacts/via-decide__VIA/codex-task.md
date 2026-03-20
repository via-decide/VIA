You are working in repository via-decide/VIA on branch main.

MISSION
Implement a scalable, distributed memory pipeline called via-vector-memory to provide AI agents with long-term recall, semantic search, and document ingestion capabilities. 1. Create a new directory src/core/ai/memory/. 2. Implement VectorStore.ts. This acts as an abstraction layer to interface with a scalable vector database (e.g., Qdrant, Milvus, Pinecone, or a local pgvector instance). It must handle namespace isolation to ensure Agent A's memory never leaks into Agent B's context. 3. Create DocumentChunker.ts. When a user uploads a large file (PDF, code repo, or long chat history), this utility must split the text into overlapping, semantically meaningful chunks (e.g., 512 tokens with a 50-token overlap) to preserve context. 4. Implement an Embedder.ts service that routes chunked text to an embedding model (like text-embedding-3-small or a local HuggingFace equivalent) and stores the resulting high-dimensional float arrays in the VectorStore alongside their original text metadata. 5. Build a ContextRetriever.ts using Hybrid Search (combining Dense Vector similarity with Sparse Keyword/BM25 search). When a user asks a question, this module embeds the query, retrieves the top-K most relevant chunks, and applies a re-ranking algorithm (like Cohere Re-rank or cross-encoders) to ensure maximum relevance. 6. Integrate this memory module into the via-model-gateway. Before the gateway forwards a prompt to an LLM, it must asynchronously fetch relevant historical context and dynamically inject it into the system prompt. 7. Expose a REST API (/api/v1/agents/{id}/memory) allowing frontend dashboards to visualize an agent's knowledge base, manually upload training documents, and surgically delete specific memories for GDPR/privacy compliance.

CONSTRAINTS
Strictly forbid injecting raw, un-chunked documents directly into the LLM context window, as this will result in massive API costs and prompt-truncation errors. You MUST enforce strict tenant isolation (Row-Level Security or separate Vector Namespaces) so a user cannot prompt-inject their way into reading another user's private vector data.

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
# VIA - Bharat's Social Platform VIA is a production-focused social platform for Bharat-centric communities. It combines a real-time social feed, long-form knowledge spaces, and discovery tools in a modern React experience backed by Firebase. ## Features - **Feed**: Browse a fast, social-first st

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