Branch: simba/implement-a-core-backend-module-called-via-conte
Title: Implement a core backend module called via-context-optimizer to manag...

## Summary
- Repo orchestration task for via-decide/VIA
- Goal: Maximize LLM efficiency and minimize API costs. By ensuring agents only send the most relevant, high-signal data to the model, you prevent "context-stuffing" bugs, reduce latency, and ensure the swarm can handle long-running, multi-day autonomous tasks without hitting model limits.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.