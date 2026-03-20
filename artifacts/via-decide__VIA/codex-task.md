You are working in repository via-decide/VIA on branch main.

MISSION
Implement an automated documentation pipeline called via-docs-engine and draft the Master ARCHITECTURE.md to definitively map the AI swarm's infrastructure. 1. Create a new directory docs/architecture/ and a dedicated apps/docs/ workspace for the documentation site. 2. Draft the master ARCHITECTURE.md. This document must comprehensively map the data flow: Client (SDK/CLI) -> via-realtime-bus -> via-model-gateway -> via-agent-swarm -> via-agent-tools & via-vector-memory. 3. Implement DocGenerator.ts. This script must use an Abstract Syntax Tree (AST) parser (like TypeDoc) to scrape all exported TypeScript interfaces, JSDoc comments, and OpenAPI schemas directly from the src/ directory. 4. Generate a static, searchable HTML developer portal using a framework like Docusaurus or VitePress. This portal will serve as the official guide for developers using the via-sdk-core. 5. Include a strict "Security Boundaries" section in the architecture document that explicitly defines the isolation layers between the LLM output, the local execution sandbox, and the host Node.js environment. 6. Hook the DocGenerator into the CI/CD pipeline. Every commit to main must automatically regenerate the SDK API reference and deploy the updated site to Vercel, Cloudflare Pages, or GitHub Pages. 7. Enforce a lint:docs rule in the pre-commit hooks that fails the build if a developer adds a new tool to the ToolRegistry or a new endpoint without providing the required OpenAPI annotations.

CONSTRAINTS
Do NOT rely on manually updated API wikis, as the AI tooling landscape evolves too rapidly and manual docs will drift out of sync with the codebase. The internal workings of the swarm are highly complex, so the documentation pipeline MUST automatically derive the source of truth directly from the TypeScript types and Zod/JSON schemas.

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