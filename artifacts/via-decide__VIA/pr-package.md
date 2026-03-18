Branch: simba/implement-feedcomposer-module-for-normalizing-al
Title: Implement FeedComposer module for normalizing all content into a unif...

## Summary
- Repo orchestration task for via-decide/VIA
- Goal: Enable consistent feed rendering and future agent-generated content compatibility.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.