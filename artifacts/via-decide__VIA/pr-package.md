Branch: simba/implement-a-core-backend-module-called-via-inten
Title: Implement a core backend module called via-intent-classifier to perfo...

## Summary
- Repo orchestration task for via-decide/VIA
- Goal: Achieve "Instant Response" for common user actions. By classifying intent at the edge of the backend, the VIA engine can handle thousands of standard social interactions (like liking, posting, or searching) without wasting expensive LLM tokens or incurring the latency of a full "thought cycle."

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.