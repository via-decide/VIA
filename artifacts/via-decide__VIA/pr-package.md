Branch: simba/build-the-sovereign-telemetry-websocket-wssapivi
Title: Build the Sovereign Telemetry Websocket (wss://api.viadecide.com/ops/...

## Summary
- Repo orchestration task for via-decide/VIA
- Goal: Build the Sovereign Telemetry Websocket (wss://api.viadecide.com/ops/stream). 1. Orchestrate a data aggregator service that collects metrics every 1 second from all 47 micro-services. 2. Aggregate 'Mars' metrics (active pilots, physics latency) and 'Orchade' metrics (consensus events, MBB rate, Casio status). 3. Stream this unified JSON packet over the secure websocket.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.