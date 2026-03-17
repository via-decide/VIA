Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-human-handover-manager to facilitate seamless transitions from autonomous agents to human operators when AI confidence is low or direct help is requested. 1. Create a new directory src/core/interaction/handover-manager/. 2. Create handover-config.json defining escalation triggers (e.g., specific keywords, high sentiment frustration scores, or 3+ repeated failures), operator queue settings, and session timeouts. 3. Implement HandoverEngine.js (or .ts). This module must listen to the EventBus for "EscalationEvents" published by agents or the IntentClassifier. 4. Build a "Session Freezer": When a handover is triggered, the engine must pause the active autonomous agent's processing for that GlobalID and snapshot its current context to the EdgeStore. 5. Implement the "Operator Queue": Route the frozen session into a prioritized queue. Use the SocketMesh to broadcast the "Handover Pending" status to any connected administrator or support-tier UI tools. 6. Build a "Shadow Interaction" mode: Allow a human operator to send messages through the SocketMesh that appear as the agent, or completely take over the session. If the operator finishes, the engine must be able to "unfreeze" the agent, passing the human's interaction history back into the agent's context window.

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