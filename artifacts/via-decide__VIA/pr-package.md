Branch: simba/implement-a-core-backend-module-called-via-agent
Title: Implement a core backend module called via-agent-state-recovery to en...

## Summary
- Repo orchestration task for via-decide/VIA
- Goal: Guarantee high availability and memory persistence for the AI swarm. By treating agent state as a continuous, resumable checkpoint, the backend can safely undergo rolling deployments, handle unexpected node failures, or aggressively kill hung threads without losing user context or interrupting active workflows.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.