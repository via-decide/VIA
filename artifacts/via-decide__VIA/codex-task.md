You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-knowledge-distillation-engine to allow small, local "Student" models to learn from high-quality "Teacher" LLM outputs in real-time. 1. Create a new directory src/core/ml/knowledge-distillation/. 2. Create distillation-config.json defining Teacher-Student pairings, "Knowledge Temperature" settings, and minimum confidence scores for a response to be considered a "Training Candidate." 3. Implement DistillationManager.js (or .ts). This module must act as a background collector that intercepts high-fidelity outputs from "Teacher" agents (e.g., GPT-4o, Claude 3.5). 4. Build a "Pairing Pipeline": When a Teacher agent produces a high-confidence response to a complex user query, the engine must pair the original UserIntent (input) with the AgentResponse (target). 5. Implement "Synthetic Data Augmentation": Use a secondary agent to generate 3-5 variations of the successful prompt to create a robust local fine-tuning dataset. 6. Integrate with the LocalVectorStore: Store these high-quality pairs in a specialized "distillation_cache" so that "Student" agents (e.g., Llama-3-8B or Phi-3) can use them for RAG-based few-shot learning immediately. 7. Add a "Distillation Trigger": When the cache for a specific task (e.g., "Sentiment Analysis") reaches a certain size (e.g., 1000 pairs), the engine should signal the WorkerPool to initiate a local fine-tuning or LoRA-update job.

CONSTRAINTS
Do NOT perform heavy GPU training directly on the main Node.js process. You must offload the actual model weight updates to a dedicated external process or specialized worker thread. The distillation logic must be "Zero-Impact"-collecting training pairs must not add more than 2ms of overhead to the user's request-response cycle. Ensure privacy by scrubbing PII (Personally Identifiable Information) from the training pairs before storage.

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