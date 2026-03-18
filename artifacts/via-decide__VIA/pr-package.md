Branch: simba/create-tool-output-normalizer-create-srccoretool
Title: Create "Tool Output Normalizer". Create src/core/tools/output-normali...

## Summary
- Repo orchestration task for via-decide/VIA
- Goal: Ensure all tool outputs are feed-compatible and composable.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.