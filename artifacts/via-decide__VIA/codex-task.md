You are working in repository via-decide/VIA on branch main.

MISSION
We need to transform the single-player swipe deck into a synchronous, multiplayer experience by implementing a "Realtime Reaction Mesh." When any user interacts with a story, others should see it happen live. Step 1: Create src/core/ux/ReactionEngine.js. Initialize a Supabase Realtime channel named mesh:feed_reactions. Step 2: Update the likeCard(index) function and the zone_Affirmation gestural trigger. When fired, broadcast a lightweight payload to the channel: { user_id: 'id', action: 'like', emoji: '🔥', story_id: 'xyz' }. Step 3: Implement the MeshListener. When a broadcast is received for the *currently active card*, dynamically spawn a DOM element (div.mesh-reaction) at a randomized X-coordinate near the bottom of the screen. Step 4: Write high-performance CSS @keyframes in your stylesheet to animate this element. It should float upwards (translateY(-60vh)), sway slightly horizontally (using Math.sin or CSS keyframe steps), scale up, and fade out over 2.5 seconds. Step 5: Add a "Quick React" mini-bar (hidden by default, appears on tap) above the bottom nav with 👏, 💯, 🚀, ❤️. Tapping these broadcasts the specific emoji to the mesh.

CONSTRAINTS
Preserve existing code; prefer additive changes.

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