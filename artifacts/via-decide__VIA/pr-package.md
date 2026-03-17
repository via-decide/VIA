Branch: simba/implement-a-core-backend-module-called-via-depen
Title: Implement a core backend module called via-dependency-auditor to auto...

## Summary
- Repo orchestration task for via-decide/VIA
- Goal: Protect the "Supply Chain" of the swarm. As the ecosystem expands to include community-contributed agents and tools, this auditor prevents "Dependency Confusion" attacks and ensures that no malicious or insecure code is smuggled into the production environment via a legitimate-looking plugin.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.