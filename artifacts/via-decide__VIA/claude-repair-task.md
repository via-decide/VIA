Repair mode for repository via-decide/VIA.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
> Implement a core backend middleware module called via-predictive-router (inspired by Meta's Moltbot) to handle high-scale, AI-driven traffic routing. 1. Create a new directory src/core/network/predictive-router/. 2. Create router-config.json defining routing schemas, priority queues, and target execution nodes (e.g., "edge_cache", "core_db", "integrity_agent"). 3. Implement PredictiveEngine.js (or .ts). This class must act as a central middleware interceptor for all incoming system requests, agent messages, and data payloads. 4. The engine must classify payloads in real-time (e.g., separating lightweight data queries from heavy AI tasks or media uploads) and dynamically route them to the appropriate processing queues to prevent database bottlenecks. 5. Integrate this router into the main event loop or server entry point (src/index.js or src/server.js), ensuring all incoming traffic passes through PredictiveEngine.route(). 6. Create an internal telemetry tracker that logs latency metrics, routing decisions, and dropped packets to a shared memory space or log file. 7. Expose a WebSocket or API endpoint (e.g., /api/v1/system/traffic) so that external dashboard UI tools (like the engine-tools) can connect and visualize real-time flow and load balancing.

RULES
1. Audit touched files first and identify regressions.
2. Preserve architecture and naming conventions.
3. Make minimal repairs only; do not expand scope.
4. Re-run checks and provide concise root-cause notes.
5. Return complete contents for changed files only.

REPO CONTEXT
- README snippet:
# VIA - Bharat's Social Platform

VIA is a production-focused social platform for Bharat-centric communities. It combines a real-time social feed, long-form knowledge spaces, and discovery tools in a modern React experience backed by Firebase.

## Features

- **Feed**: Browse a fast, social-first stream of posts, reactions, and conversations.
- **Deep Dives**: Explore longer-form stories, explainers, and curated insights.
- **Discover**: Find people, communities, and conversations across the platform.
- **Authentication**: Sign in with Google or phone-based authentication using Firebase Auth.
- **Realtime data**: Keep profiles, posts, and community activity synced with Firestore.

## Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS 4
- **Animation**: Motion
- **Icons**: Lucide React
- **Backend**: Firebase Auth + Firestore
- **AI integration**: Google Gemini API

#
- AGENTS snippet:
not found
- package.json snippet:
{
  "name": "react-example",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --port=3000 --host=0.0.0.0",
    "build": "vite build",
    "preview": "vite preview",
    "clean": "rm -rf dist",
    "lint": "tsc --noEmit"
  },
  "dependencies": {
    "@google/genai": "^1.29.0",
    "@tailwindcss/vite": "^4.1.14",
    "@vitejs/plugin-react": "^5.0.4",
    "dotenv": "^17.2.3",
    "express": "^4.21.2",
    "firebase": "^12.10.0",
    "lucide-react": "^0.546.0",
    "motion": "^12.23.24",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "vite": "^6.2.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^22.14.0",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "autoprefixer": "^10.4.21",
    "tailwindcss": "^4.1.14",
    "tsx": "^4.21.0",
    "typescript": "~5.8.2",
    "vite": "^6.2.0"
- pyproject snippet:
not found