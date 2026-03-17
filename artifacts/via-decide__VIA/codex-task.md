You are working in repository via-decide/VIA on branch main.

MISSION
Implement a core backend module called via-multi-modal-bridge to enable the swarm to process and generate real-time voice, video, and image streams. 1. Create a new directory src/core/media/multi-modal-bridge/. 2. Create bridge-config.json defining supported stream protocols (WebRTC, RTP, HLS), sample rates for audio (e.g., 16kHz for STT, 48kHz for high-fidelity TTS), and video frame-sampling intervals. 3. Implement BridgeStreamer.js (or .ts). This module must act as a high-speed conduit between raw binary media buffers and the PredictiveEngine. 4. Build a "Visual Frame Extractor": For video streams, the bridge must sample keyframes at a configurable rate and dispatch them to the MediaProcessingAgent for visual analysis without interrupting the live playback. 5. Integrate "Real-Time STT/TTS Hooks": Implement a streaming interface that pipes audio buffers to local or remote transcription models (STT) and returns generated audio (TTS) with minimal "Time-to-First-Byte" latency. 6. Implement "Inter-Agent Multi-Modality": Allow one agent (e.g., a "VisualAgent") to "describe" a video frame to another agent (e.g., a "VoiceAgent") via the EventBus, enabling the swarm to "talk" about what it "sees" in real-time. 7. Add a "Jitter Buffer" and "Sync Manager": Ensure that audio and video metadata remain synchronized when being processed by multiple distributed agents in the WorkerPool.

CONSTRAINTS
Do NOT use heavy, monolithic media servers like FFmpeg as a blocking child process for every stream. Utilize native Node.js Streams and Buffer manipulation or lightweight WASM-based codecs for processing. The bridge must handle at least 50 concurrent low-latency audio streams per CPU core. All media transit within the engine must be encrypted using (m)TLS.

PROCESS (MANDATORY)
1. Read README.md and AGENTS.md before editing.
2. Audit architecture before coding. Summarize current behavior.
3. Preserve unrelated working code. Prefer additive modular changes.
4. Implement the smallest safe change set for the stated goal.
5. Run validation commands and fix discovered issues.
6. Self-review for regressions, missing env wiring, and docs drift.
7. Return complete final file contents for every modified or created file.

REPO AUDIT CONTEXT
- Description: 
- Primary language: HTML
- README snippet:
not found

- AGENTS snippet:
not found


SOP: PRE-MODIFICATION PROTOCOL (MANDATORY)
1. Adherence to Instructions: No deviations without explicit user approval.
2. Mandatory Clarification: Immediately ask if instructions are ambiguous or incomplete.
3. Proposal First: Always propose optimizations or fixes before implementing them.
4. Scope Discipline: Do not add unrequested features or modify unrelated code.
5. Vulnerability Check: Immediately flag and explain security risks.

OUTPUT REQUIREMENTS
- Include: implementation summary, checks run, risks, rollback notes.
- Generate branch + PR package.
- Keep prompts deterministic and preservation-first.