Branch: simba/migrate-the-most-critical-tools-into-the-new-she
Title: Migrate the most critical tools into the new shell system. 1. Move co...

## Summary
- Repo orchestration task for via-decide/VIA
- Goal: Prove the monorepo architecture with high-impact core tools.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.