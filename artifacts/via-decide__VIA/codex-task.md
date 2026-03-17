You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-local-vector-store to give autonomous agents fast, in-memory semantic search capabilities for their immediate context. 1. Create a new directory src/core/memory/local-vector-store/. 2. Create vector-config.json defining embedding dimensions (e.g., 1536 for standard OpenAI embeddings or 384 for lightweight local models), max vectors per agent, and the similarity threshold. 3. Implement VectorStore.js (or .ts). This module will manage localized, short-term semantic memory for active agents. 4. Build a highly optimized Cosine Similarity or Dot Product search function to calculate the distance between a query vector and the stored memory chunks. 5. Integrate this with the PredictiveEngine and agent runtime. When an agent receives a large prompt or needs to recall recent conversation history, it should query this local store to fetch the most relevant context chunks (RAG - Retrieval-Augmented Generation) before hitting the LLM API. 6. Implement a rolling window (FIFO) eviction policy so the store does not exceed memory limits over long-running sessions.

CONSTRAINTS
Do NOT use external vector databases like Pinecone, Weaviate, Milvus, or even local binaries like ChromaDB. You must build a native JavaScript/TypeScript implementation using Float32Array for efficient matrix math and vector storage. The search algorithm must be fast enough to perform a brute-force scan of up to 10,000 vectors in under 50ms without blocking the Node event loop.

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