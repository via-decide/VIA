Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-self-evolution-monitor to track, analyze, and visualize the longitudinal performance and "intelligence growth" of the agent swarm. 1. Create a new directory src/core/diagnostics/evolution-monitor/. 2. Create evolution-config.json defining key performance indicators (KPIs) such as: Success-to-Correction Ratio, Token Efficiency Trend, Latency Variance, and "Hallucination Delta" (based on Consensus Engine overrides). 3. Implement EvolutionManager.js (or .ts). This module must aggregate data from the TraceLogger, Self-Correction-Loop, and SwarmConsensusEngine. 4. Build a "Performance Baseline" engine: Calculate a 7-day rolling average for every Agent ID. When an agent's current performance deviates significantly (positively or negatively) from its baseline, trigger an EvolutionEvent. 5. Implement "Version Impact Tracking": Integrate with the PluginLoader. If an agent's source code or system prompt is updated, the monitor must isolate and measure the specific performance delta caused by that "mutation." 6. Create a "Swarm Health Score": A high-level aggregate metric that represents the overall stability and accuracy of the entire VIA backend. 7. Expose a getEvolutionData() API that returns time-series JSON formatted for easy rendering of performance-over-time graphs in the admin dashboard.

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