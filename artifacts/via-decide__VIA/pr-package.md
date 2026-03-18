Branch: simba/create-agent-injection-interface-create-srccorea
Title: Create "Agent Injection Interface". Create src/core/agents/injection-...

## Summary
- Repo orchestration task for via-decide/VIA
- Goal: Prepare VIA for autonomous content generation phase.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.