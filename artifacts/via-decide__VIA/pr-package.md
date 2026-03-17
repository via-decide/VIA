Branch: simba/implement-a-core-backend-module-called-via-distr
Title: Implement a core backend module called via-distributed-trace-logger t...

## Summary
- Repo orchestration task for via-decide/VIA
- Goal: Enable "Planetary-Scale Debugging." In a decentralized swarm, it is impossible to know why an agent failed without seeing the upstream data that triggered it. This module allows developers to visualize the entire life-cycle of a single user interaction, identifying exactly which agent in the chain caused a bottleneck or an error.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.