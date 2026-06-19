# Updated File System with Adaptive Layer

```
workspace-root/
│
├── MISSION.md                        # Unchanged
│
├── RESOURCES.md                      # Unchanged
│
├── NOTES.md                          # Expanded role
│   ├── User preferences              # Unchanged
│   ├── Session notes                 # Now includes signal observations
│   └── ## Arc (rough)                # Unchanged
│
├── LEARNER-PROFILE.md                # NEW — Inferred learning characteristics
│   ├── Pace                          # fast | medium | slow
│   ├── Scaffolding Need              # high | medium | low
│   ├── Representation Preference     # concept-first | example-first | etc.
│   ├── Error Pattern                 # careless | conceptual-gap | transfer | overgen
│   ├── Frustration Threshold         # low | medium | high
│   ├── Engagement Depth              # surface | targeted | deep
│   ├── Session Capacity              # 1 | 2-3 | 4+ lessons
│   └── Adaptive History              # Table of past adaptations
│
├── GLOSSARY.md                       # Unchanged
│
├── assets/                           # Expanded
│   ├── lesson-base.css               # Unchanged
│   ├── quiz-widget.js                # Expanded: hint system
│   │                                 #   - Level 3: 3 hints available
│   │                                 #   - Level 2: 1 hint available
│   │                                 #   - Level 1: no hints
│   ├── hint-system.js                # NEW — Manages hint availability
│   ├── progress-tracker.js          # NEW — Tracks lesson performance
│   └── ...
│
├── lessons/                          # Same structure, adaptive content
│   ├── 0001-*.html                   # May include scaffolding level marker
│   │                                 #   in HTML comment: <!-- scaffold:3 -->
│   └── ...
│
├── reference/                        # Unchanged
│
└── learning-records/                 # Expanded role
    ├── 0001-*.md                     # Now also captures:
    │                                 #   - Error patterns observed
    │                                 #   - Signals detected
    │                                 #   - Adaptation triggered
    └── ...
```
