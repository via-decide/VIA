You are working in repository via-decide/VIA on branch main.

MISSION
Implement the core multi-agent routing engine called via-agent-swarm to manage contextual handoffs between specialized LLMs. 1. Create src/core/ai/swarm/. 2. Implement SwarmOrchestrator.ts to act as the primary brain, routing user intents to specialized agents (e.g., Coder, Researcher, Critic). 3. Create ContextManager.ts to manage the sliding context window. It must intelligently truncate, summarize, or inject past conversational turns to stay under the token limit (e.g., 128k tokens). 4. Implement ModelGateway.ts to abstract the API calls to OpenAI, Anthropic, or local LLMs, handling rate limits and automatic retries. 5. Build PromptTemplates.ts to inject dynamic system prompts based on the active agent's persona and available tools.

CONSTRAINTS
The ModelGateway must handle network interruptions gracefully and support streaming responses natively. The orchestrator must never trap agents in an infinite loop of handoffs.

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