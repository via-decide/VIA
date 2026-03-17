Branch: simba/implement-a-core-backend-module-called-via-shado
Title: Implement a core backend module called via-shadow-router to enable A/...

## Summary
- Repo orchestration task for via-decide/VIA
- Goal: Safely test new prompts, models, or agent routing logic on real production traffic without risking user experience. This "shadow testing" architecture is precisely how major platforms like Meta validate massive backend changes before a full rollout.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.