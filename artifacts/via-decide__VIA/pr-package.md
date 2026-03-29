Branch: simba/replace-all-flat-solid-backgrounds-with-layered-
Title: Replace all flat solid backgrounds with layered atmospheric depth bac...

## Summary
- Repo orchestration task for via-decide/VIA
- Goal: The site feels like it exists inside a lit space, not pasted on a black rectangle.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.