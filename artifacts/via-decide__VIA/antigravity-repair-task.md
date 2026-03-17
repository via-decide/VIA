Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-knowledge-distillation-engine to allow small, local "Student" models to learn from high-quality "Teacher" LLM outputs in real-time. 1. Create a new directory src/core/ml/knowledge-distillation/. 2. Create distillation-config.json defining Teacher-Student pairings, "Knowledge Temperature" settings, and minimum confidence scores for a response to be considered a "Training Candidate." 3. Implement DistillationManager.js (or .ts). This module must act as a background collector that intercepts high-fidelity outputs from "Teacher" agents (e.g., GPT-4o, Claude 3.5). 4. Build a "Pairing Pipeline": When a Teacher agent produces a high-confidence response to a complex user query, the engine must pair the original UserIntent (input) with the AgentResponse (target). 5. Implement "Synthetic Data Augmentation": Use a secondary agent to generate 3-5 variations of the successful prompt to create a robust local fine-tuning dataset. 6. Integrate with the LocalVectorStore: Store these high-quality pairs in a specialized "distillation_cache" so that "Student" agents (e.g., Llama-3-8B or Phi-3) can use them for RAG-based few-shot learning immediately. 7. Add a "Distillation Trigger": When the cache for a specific task (e.g., "Sentiment Analysis") reaches a certain size (e.g., 1000 pairs), the engine should signal the WorkerPool to initiate a local fine-tuning or LoRA-update job.

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