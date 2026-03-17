Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement a core backend module called via-media-processing-agent to handle high-performance asset optimization and metadata extraction for social media content. 1. Create a new directory src/core/media/processing-agent/. 2. Create media-config.json defining supported formats (JPEG, PNG, WebP, MP4), maximum upload sizes, and target resolution variants (e.g., thumbnail, mobile-hd, desktop-4k). 3. Implement MediaProcessor.js (or .ts). This module must act as a background service triggered by the EventBus whenever a new media payload is uploaded or linked by an agent. 4. Build an optimization pipeline: Use a high-performance, non-blocking library (like sharp for Node.js) to generate multi-size variants and extract "BlurHash" strings for instant frontend loading placeholders. 5. Implement "Visual Context Tagging": Extract basic metadata (dimensions, orientation, color palette) and prepare the binary data for potential "Computer Vision" agents downstream. 6. Integrate with the WorkerPool. All heavy resizing or transcoding operations MUST be offloaded to worker threads to ensure the main event loop remains responsive for real-time socket communication. 7. Add a "Media Deduplication" check: Generate a hash (e.g., SHA-256) of the raw buffer to ensure the same image isn't processed and stored multiple times across different agent sessions.

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