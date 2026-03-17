Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-multi-modal-bridge to enable the swarm to process and generate real-time voice, video, and image streams. 1. Create a new directory src/core/media/multi-modal-bridge/. 2. Create bridge-config.json defining supported stream protocols (WebRTC, RTP, HLS), sample rates for audio (e.g., 16kHz for STT, 48kHz for high-fidelity TTS), and video frame-sampling intervals. 3. Implement BridgeStreamer.js (or .ts). This module must act as a high-speed conduit between raw binary media buffers and the PredictiveEngine. 4. Build a "Visual Frame Extractor": For video streams, the bridge must sample keyframes at a configurable rate and dispatch them to the MediaProcessingAgent for visual analysis without interrupting the live playback. 5. Integrate "Real-Time STT/TTS Hooks": Implement a streaming interface that pipes audio buffers to local or remote transcription models (STT) and returns generated audio (TTS) with minimal "Time-to-First-Byte" latency. 6. Implement "Inter-Agent Multi-Modality": Allow one agent (e.g., a "VisualAgent") to "describe" a video frame to another agent (e.g., a "VoiceAgent") via the EventBus, enabling the swarm to "talk" about what it "sees" in real-time. 7. Add a "Jitter Buffer" and "Sync Manager": Ensure that audio and video metadata remain synchronized when being processed by multiple distributed agents in the WorkerPool.

RULES
1. Audit touched files first and identify regressions.
2. Preserve architecture and naming conventions.
3. Make minimal repairs only; do not expand scope.
4. Re-run checks and provide concise root-cause notes.
5. Return complete contents for changed files only.

SOP: REPAIR PROTOCOL (MANDATORY)
1. Strict Fix Only: Do not use repair mode to expand scope or add features.
2. Regression Check: Audit why previous attempt failed before proposing a fix.
3. Minimal Footprint: Only return contents for the actual repaired files.

REPO CONTEXT
- README snippet:
not found
- AGENTS snippet:
not found
- package.json snippet:
not found