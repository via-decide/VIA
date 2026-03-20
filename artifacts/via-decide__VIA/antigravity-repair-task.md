Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement an intelligent long-term memory and Retrieval-Augmented Generation (RAG) system called via-vector-memory. 1. Create src/core/ai/memory/. 2. Implement DocumentProcessor.ts to chunk large incoming PDFs, codebases, or plain text into semantically meaningful segments. 3. Create EmbeddingGenerator.ts to convert text chunks into high-dimensional vector arrays. 4. Implement VectorDatabase.ts using a fast similarity search engine (like pgvector or Pinecone) to store and retrieve contextual embeddings. 5. Build a SemanticSearch.ts module to intercept user queries, search the vector DB for context, and prepend the retrieved data to the LLM's system prompt.

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