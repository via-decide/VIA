Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-swarm-security-sandbox to isolate and restrict the execution of untrusted or third-party agent code within the engine. 1. Create a new directory src/core/security/swarm-sandbox/. 2. Create sandbox-config.json defining "Hard Limits" for execution: max memory (e.g., 128MB), max CPU time (e.g., 500ms per turn), and a whitelist of permitted Node.js modules (e.g., path, crypto, but NOT fs or child_process). 3. Implement SandboxEngine.js (or .ts). This module must utilize Node's vm (Virtual Machine) module or worker_threads with a restricted global context. 4. Build a "Capability-Based Access" layer: Agents running in the sandbox cannot directly access the EventBus or DatabaseSync. They must use a restricted "Bridge" object that validates every outgoing request against the agent's assigned permissions. 5. Implement "Entropy Sealing": Ensure that sandboxed agents cannot access sensitive environment variables, system headers, or the global process object. 6. Add a "Watchdog Timer": If a sandboxed agent enters an infinite loop or exceeds its CPU quota, the SandboxEngine must immediately terminate the worker thread and log a "Security Violation" to the TraceLogger. 7. Integrate with the PluginLoader: Every plugin marked as "External" or "Untrusted" must be automatically wrapped in this sandbox before execution.

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