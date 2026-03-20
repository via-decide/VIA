Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a scalable, distributed memory pipeline called via-vector-memory to provide AI agents with long-term recall, semantic search, and document ingestion capabilities. 1. Create a new directory src/core/ai/memory/. 2. Implement VectorStore.ts. This acts as an abstraction layer to interface with a scalable vector database (e.g., Qdrant, Milvus, Pinecone, or a local pgvector instance). It must handle namespace isolation to ensure Agent A's memory never leaks into Agent B's context. 3. Create DocumentChunker.ts. When a user uploads a large file (PDF, code repo, or long chat history), this utility must split the text into overlapping, semantically meaningful chunks (e.g., 512 tokens with a 50-token overlap) to preserve context. 4. Implement an Embedder.ts service that routes chunked text to an embedding model (like text-embedding-3-small or a local HuggingFace equivalent) and stores the resulting high-dimensional float arrays in the VectorStore alongside their original text metadata. 5. Build a ContextRetriever.ts using Hybrid Search (combining Dense Vector similarity with Sparse Keyword/BM25 search). When a user asks a question, this module embeds the query, retrieves the top-K most relevant chunks, and applies a re-ranking algorithm (like Cohere Re-rank or cross-encoders) to ensure maximum relevance. 6. Integrate this memory module into the via-model-gateway. Before the gateway forwards a prompt to an LLM, it must asynchronously fetch relevant historical context and dynamically inject it into the system prompt. 7. Expose a REST API (/api/v1/agents/{id}/memory) allowing frontend dashboards to visualize an agent's knowledge base, manually upload training documents, and surgically delete specific memories for GDPR/privacy compliance.

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
# VIA - Bharat's Social Platform VIA is a production-focused social platform for Bharat-centric communities. It combines a real-time social feed, long-form knowledge spaces, and discovery tools in a modern React experience backed by Firebase. ## Features - **Feed**: Browse a fast, social-first st
- AGENTS snippet:
not found
- package.json snippet:
{ "name": "react-example", "private": true, "version": "0.0.0", "type": "module", "scripts": { "dev": "vite --port=3000 --host=0.0.0.0", "build": "vite build", "preview": "vite preview", "clean": "rm -rf dist", "lint": "tsc --noEmit" }, "dependencies": { "@googl