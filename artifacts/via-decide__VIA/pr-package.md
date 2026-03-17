Branch: simba/implement-a-core-backend-module-called-via-conte
Title: Implement a core backend module called via-context-pruning-engine to ...

## Summary
- Repo orchestration task for via-decide/VIA
- Goal: Achieve "Infinite Conversation Coherence." By intelligently deciding what to keep in active memory and what to archive, the VIA engine prevents agents from "forgetting" their core mission or the user's name during long interactions, while simultaneously avoiding the performance degradation and cost spikes associated with bloated context windows.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.