You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-human-handover-manager to facilitate seamless transitions from autonomous agents to human operators when AI confidence is low or direct help is requested. 1. Create a new directory src/core/interaction/handover-manager/. 2. Create handover-config.json defining escalation triggers (e.g., specific keywords, high sentiment frustration scores, or 3+ repeated failures), operator queue settings, and session timeouts. 3. Implement HandoverEngine.js (or .ts). This module must listen to the EventBus for "EscalationEvents" published by agents or the IntentClassifier. 4. Build a "Session Freezer": When a handover is triggered, the engine must pause the active autonomous agent's processing for that GlobalID and snapshot its current context to the EdgeStore. 5. Implement the "Operator Queue": Route the frozen session into a prioritized queue. Use the SocketMesh to broadcast the "Handover Pending" status to any connected administrator or support-tier UI tools. 6. Build a "Shadow Interaction" mode: Allow a human operator to send messages through the SocketMesh that appear as the agent, or completely take over the session. If the operator finishes, the engine must be able to "unfreeze" the agent, passing the human's interaction history back into the agent's context window.

CONSTRAINTS
Do NOT integrate with external CRM tools like Zendesk or Intercom. You must build the native internal routing logic. The handover process must be atomic; ensure that only one human operator can "claim" a session at a time using the DistributedLockManager. The transition must be low-latency to ensure the user doesn't experience a "dead air" period during the switch.

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