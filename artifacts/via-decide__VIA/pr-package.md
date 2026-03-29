Branch: simba/upgrade-all-typography-across-the-site-to-a-dist
Title: Upgrade all typography across the site to a distinctive, high-contras...

## Summary
- Repo orchestration task for via-decide/VIA
- Goal: Headings hit hard. Labels read like instrument panels. The site has a typographic identity, not just default browser fonts.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.