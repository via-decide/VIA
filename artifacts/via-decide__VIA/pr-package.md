Branch: simba/implement-a-core-backend-module-called-via-edge-
Title: Implement a core backend module called via-edge-cache-manager to hand...

## Summary
- Repo orchestration task for via-decide/VIA
- Goal: Dramatically reduce database load and latency for read-heavy social/agent graphs by serving frequently accessed data directly from memory. This mimics the edge-caching architecture used by major social platforms to serve news feeds instantly.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.