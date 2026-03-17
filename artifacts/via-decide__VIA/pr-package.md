Branch: simba/implement-a-core-backend-module-called-via-api-g
Title: Implement a core backend module called via-api-gateway-aggregator to ...

## Summary
- Repo orchestration task for via-decide/VIA
- Goal: Simplify client-side engineering by handling complex multi-agent orchestration entirely in the backend. This pattern drastically reduces network overhead (fewer round-trips) and ensures the user gets the fastest possible response, even if one part of the AI swarm is experiencing latency.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.