Branch: simba/implement-a-core-backend-module-called-via-plugi
Title: Implement a core backend module called via-plugin-loader to allow the...

## Summary
- Repo orchestration task for via-decide/VIA
- Goal: Achieve "Zero-Downtime Evolution." By allowing the system to learn new tricks (new agents, new tools, new routing rules) while it is still running, you enable a modular ecosystem where the backend can grow and adapt to new social media APIs or AI models instantly, mimicking the way modern cloud platforms deploy micro-updates.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.