Branch: simba/implement-a-core-backend-module-called-via-self-
Title: Implement a core backend module called via-self-correction-loop to en...

## Summary
- Repo orchestration task for via-decide/VIA
- Goal: Achieve "High-Fidelity Autonomy." By forcing agents to double-check their own work, you significantly reduce hallucinations and logic errors, ensuring that the VIA backend provides professional-grade reliability even when handling complex, multi-step social or technical requests.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.