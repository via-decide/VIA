Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-ab-testing-suite to enable empirical experimentation and optimization of agent responses and interaction logic. 1. Create a new directory src/core/experimentation/ab-testing-suite/. 2. Create ab-testing-config.json defining active experiments, traffic allocation percentages (e.g., 90% Control, 10% Variant), and success metric definitions (e.g., Sentiment Score increase, Task Completion time, or User "Like" rate). 3. Implement ExperimentEngine.js (or .ts). This module must act as a logic-branching middleman in the PredictiveEngine. 4. Build a "Deterministic Segmenter": Use a hash of the GlobalID and the ExperimentID to ensure that a specific user consistently sees the same variant across sessions without needing a centralized state database. 5. Implement "Variant Injection": Allow agents to load different system prompts, model parameters, or logic branches based on the assigned experimental bucket. 6. Build an "Automated Winner Promotion" logic: If a variant demonstrates a statistically significant improvement (e.g., p < 0.05) over the control based on the EvolutionMonitor data, the engine should flag it for automatic deployment to 100% of traffic. 7. Integrate with TraceLogger: Tag every interaction with its associated ExperimentID and VariantID for downstream data analysis.

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