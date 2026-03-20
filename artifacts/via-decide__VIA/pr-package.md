Branch: simba/implement-a-lightweight-cross-platform-developer
Title: Implement a lightweight, cross-platform Developer SDK and CLI tool ca...

## Summary
- Repo orchestration task for via-decide/VIA
- Goal: Transform VIA from an isolated web application into a ubiquitous developer platform. By providing a clean SDK and a powerful CLI, engineers can embed the multi-agent swarm directly into their CI/CD pipelines (e.g., auto-reviewing PRs) or build their own custom UIs on top of your orchestration engine.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.