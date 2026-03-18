Branch: simba/build-execution-hooks-engine-to-make-every-post-
Title: Build "Execution Hooks Engine" to make every post actionable. Create ...

## Summary
- Repo orchestration task for via-decide/VIA
- Goal: Turn passive content into executable workflows inside the feed.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.