# Adaptive Teaching System — File Index

## Quick Start

1. Place all files in the workspace root (plus subdirectories: `assets/`, `lessons/`, `reference/`, `learning-records/`).
2. When the user says "Teach" or "Learn", the AI reads `.cursorrules` which triggers Teacher Mode.
3. `.cursorrules` directs the AI to read `SKILL.md` — the master prompt containing ALL logic.
4. `SKILL.md` references the format files for output structure and `LEARNER-PROFILE.md` for adaptive state.

---

## File Map by Layer

### Format Layer (output templates)
These files define how to structure every output artifact. Read them before writing anything.

| File | Purpose | Read When |
|---|---|---|
| `MISSION-FORMAT.md` | Mission template: Why, Success looks like, Constraints, Out of scope | Writing or updating MISSION.md |
| `RESOURCES-FORMAT.md` | Resource list rules: Knowledge sources, Wisdom communities, Gaps | Populating RESOURCES.md |
| `LEARNING-RECORD-FORMAT.md` | Record template + adaptive fields: Outcome, Signals, Error pattern, Scaffolding, Representation | Writing any learning record |
| `GLOSSARY-FORMAT.md` | Glossary rules: Tight definitions, aliases, cross-linking | Adding or updating terms |
| `LESSON-FORMAT.md` | Lesson template: 8 sections with scaffolding variants per section | Building any lesson HTML |
| `LEARNER-PROFILE-FORMAT.md` | Profile template: 7 dimensions, calibration signals, Adaptive History | Updating LEARNER-PROFILE.md |

### Adaptive Layer (behavior-driven personalization)
These files document the adaptive engine. Most of the logic is now integrated into SKILL.md, but these remain as detailed reference.

| File | Purpose |
|---|---|
| `SCAFFOLDING-LEVELS.md` | Detailed 3-tier scaffolding structure with promotion/demotion rules |
| `DIFFICULTY-CALIBRATION.md` | -3 to +3 scoring engine with decision matrix (ELEVATE/MAINTAIN/SUPPORT/REGRESS/REBUILD) |
| `REAL-TIME-SIGNAL-DETECTION.md` | 5 signal types (Confusion, Boredom, Frustration, Flow, Fatigue) with trigger phrases and responses |
| `ERROR-PATTERN-RESPONSE-STRATEGIES.md` | 4 error types (Careless, Conceptual Gap, Transfer, Overgeneralization) with intervention strategies |
| `REPRESENTATION-SWITCHING.md` | Lookup table: which representation to try when the current one fails |
| `WHEN-NOT-TO-ADAPT.md` | 6 guardrails preventing overadaptation |

### Operational Layer (session management)
Session lifecycle, onboarding, ZPD calculation, spaced retrieval, momentum rules. All now integrated into SKILL.md.

### Architecture (diagrams and documentation)
Reference documentation for understanding the system design.

| File | Purpose |
|---|---|
| `ADAPTIVE-FLOW.md` | Full Mermaid flowchart: Pre-lesson → In-lesson → Post-lesson adaptation loop |
| `COMPLETE-ADAPTIVE-SESSION.md` | 5-phase session diagram: Open → Adapt & Build → Deliver & Detect → Assess & Record → Close |
| `UPDATED-FILE-SYSTEM.md` | Directory tree showing all files and their roles |
| `PROJECT-CONTEXT.md` | Complete design evolution from Phase 1 to Phase 6 |
| `SUMMARY-WHAT-CHANGED.md` | Before/After comparison table (Phase 1 vs Phase 4) |

---

## Data Flow

```
.cursorrules (trigger)
    → SKILL.md (master logic)
        → LEARNER-PROFILE.md (current state)
        → NOTES.md (observations)
        → learning-records/ (history)
        → MISSION.md (goal)
        → RESOURCES.md (sources)
        → GLOSSARY.md (terminology)
    → *-FORMAT.md files (output templates)
    → lessons/*.html (produced)
    → learning-records/*.md (produced)
    → reference/*.html (produced)
    → LEARNER-PROFILE.md (updated)
    → NOTES.md (updated)
```

---

## Workspace Directory Structure

```
workspace-root/
├── .cursorrules                       # Trigger mechanism
├── SKILL.md                           # Master prompt (ALL logic)
├── MISSION-FORMAT.md                  # Mission template
├── RESOURCES-FORMAT.md                # Resources template
├── LEARNING-RECORD-FORMAT.md         # Learning record template (includes adaptive fields)
├── GLOSSARY-FORMAT.md                # Glossary template
├── LESSON-FORMAT.md                  # Lesson template (includes scaffolding variants)
├── LEARNER-PROFILE-FORMAT.md        # Profile template
│
├── MISSION.md                        # (created during onboarding)
├── RESOURCES.md                      # (created during onboarding)
├── LEARNER-PROFILE.md                # (created after first session)
├── NOTES.md                          # (created during onboarding)
├── GLOSSARY.md                       # (created when terms accumulate)
│
├── assets/                           # Reusable components
│   ├── lesson-base.css
│   ├── quiz-widget.js
│   ├── hint-system.js
│   └── progress-tracker.js
│
├── lessons/                          # Lesson HTML files
│   └── 0001-*.html
│
├── reference/                        # Reference HTML files
│
└── learning-records/                 # Learning record MD files
    └── 0001-*.md
```
