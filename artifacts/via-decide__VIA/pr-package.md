Branch: simba/implement-a-core-backend-module-called-via-local
Title: Implement a core backend module called via-local-vector-store to give...

## Summary
- Repo orchestration task for via-decide/VIA
- Goal: Provide agents with instant, lightweight "short-term memory." By keeping recent semantic context entirely in local RAM, agents can perform rapid reasoning and context retrieval without the massive latency of querying an external vector database over the network.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.