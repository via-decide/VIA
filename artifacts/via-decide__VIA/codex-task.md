You are working in repository via-decide/VIA on branch main.

MISSION
Implement a multi-agent collaboration framework called via-agent-swarm to orchestrate specialized AI personas working together on complex workflows. 1. Create a new directory src/core/ai/swarm/. 2. Implement SwarmCoordinator.ts. This acts as the manager. When a complex user request arrives (e.g., "Research this topic, write a report, and generate code examples"), the coordinator must decompose the prompt into discrete sub-tasks and assign them to specialized agents. 3. Create an AgentPersona.ts factory. Define distinct system prompts and capabilities for roles like "Researcher" (has search access), "Coder" (has execute access), and "Critic" (evaluates outputs for flaws). 4. Implement a SharedWorkspace.ts (a scratchpad). As agents complete their sub-tasks, they must write their intermediate results to this shared memory space so subsequent agents in the pipeline can read and build upon the context. 5. Build a DebateEngine.ts. For high-stakes decisions, allow the Coordinator to pit two agents against each other (e.g., a "Generator" and a "Reviewer"). The Reviewer critiques the Generator's output, and the Generator refines it. This loop continues until a consensus score is reached or a maximum iteration limit is hit. 6. Hook the SwarmCoordinator into the via-vector-memory and via-model-gateway. Each agent in the swarm must pull its own relevant context from the vector database and stream its generation through the rate-limited gateway. 7. Expose an interactive trace API (/api/v1/swarm/trace/{taskId}) that streams the internal monologue, agent hand-offs, and workspace diffs to the frontend, allowing the user to watch the AI team work in real-time.

CONSTRAINTS
Strictly forbid infinite generation loops. You MUST implement a hard max_turns limit (e.g., 5 iterations) within the DebateEngine. If agents cannot reach consensus, the coordinator must gracefully halt and return the best partial result to the user. All agent-to-agent communication must be structured (enforcing strict JSON schemas via the LLM's function calling API) to prevent parsing errors.

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
# VIA - Bharat's Social Platform VIA is a production-focused social platform for Bharat-centric communities. It combines a real-time social feed, long-form knowledge spaces, and discovery tools in a modern React experience backed by Firebase. ## Features - **Feed**: Browse a fast, social-first st

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