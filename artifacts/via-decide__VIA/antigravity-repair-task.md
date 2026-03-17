Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-cross-agent-knowledge-graph to enable real-time fact-sharing and relational linking across the entire agent swarm. 1. Create a new directory src/core/memory/knowledge-graph/. 2. Create graph-config.json defining "Entity Types" (User, Project, Concept, Emotion), "Relation Types" (OWNS, LIKES, CREATED, RELATED_TO), and "Confidence Decay" parameters for unverified facts. 3. Implement GraphManager.js (or .ts). This module must manage a high-performance, in-memory Directed Acyclic Graph (DAG) or Adjacency List representing the swarm's collective "worldview." 4. Build the "Fact Ingestion Pipeline": When an agent extracts a fact from a conversation (e.g., "User @dev0x has a deadline on Friday"), it must emit a KnowledgeTriple (Subject-Predicate-Object) to the EventBus. 5. Implement "Conflict Resolution": If two agents report contradictory facts (e.g., Agent A says "Project is Live," Agent B says "Project is Paused"), the Graph Manager must use the ReputationScorer and timestamp metadata to determine the "Canonical Truth." 6. Build "Inference Triggers": When a new node is added, the engine should automatically check for 2nd-degree connections (e.g., If A knows B, and B knows C, suggest A might be interested in C) and notify relevant agents. 7. Integrate with SearchEngine: Allow the via-distributed-search-indexer to query the graph for relational context during full-text searches.

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