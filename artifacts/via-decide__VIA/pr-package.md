Branch: simba/implement-a-core-backend-module-called-via-media
Title: Implement a core backend module called via-media-processing-agent to ...

## Summary
- Repo orchestration task for via-decide/VIA
- Goal: Enable "Content-Rich" autonomous workflows. By automating the heavy lifting of image and video optimization locally, the VIA backend can serve media-heavy social feeds or process visual agent data with minimal latency and zero dependency on expensive third-party processing services.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.