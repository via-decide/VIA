Branch: simba/implement-a-core-backend-module-called-via-distr
Title: Implement a core backend module called via-distributed-rate-limiter t...

## Summary
- Repo orchestration task for via-decide/VIA
- Goal: Ensure the absolute survivability of the ViaDecide backend. By ruthlessly dropping bad traffic or runaway internal agent requests before they consume CPU cycles or hit the database, the system remains stable and responsive for legitimate users under any load.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.