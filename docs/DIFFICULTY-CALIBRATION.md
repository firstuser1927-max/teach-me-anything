# Difficulty Calibration Engine

```
┌─────────────────────────────────────────────────────────────────────┐
│                  DIFFICULTY CALIBRATION ENGINE                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  INPUTS:                                                            │
│  ───────                                                            │
│  • Last 3 lesson outcomes (pass/struggle/fail)                      │
│  • Error pattern from learning records                              │
│  • Current scaffolding level                                        │
│  • Session capacity trend                                           │
│                                                                     │
│  CALCULATION:                                                       │
│  ────────────                                                       │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                                                             │   │
│  │   Score = (passes × 1) + (struggles × 0) + (fails × -1)   │   │
│  │                                                             │   │
│  │   Last 3 lessons → Score range: -3 to +3                    │   │
│  │                                                             │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  DECISION MATRIX:                                                   │
│  ───────────────                                                    │
│                                                                     │
│  ┌───────────┬──────────────────────────────────────────────────┐  │
│  │  SCORE    │  ACTION                                          │  │
│  ├───────────┼──────────────────────────────────────────────────┤  │
│  │  +3       │  ELEVATE: Increase difficulty significantly     │  │
│  │ (3 passes)│  • Skip next easy milestone                      │  │
│  │           │  • Demote scaffolding level                      │  │
│  │           │  • Consider combining 2 skills into 1 lesson     │  │
│  ├───────────┼──────────────────────────────────────────────────┤  │
│  │  +2       │  ELEVATE: Increase difficulty slightly          │  │
│  │ (2 pass,  │  • Demote scaffolding level                      │  │
│  │  1 strug) │  • Keep same skill scope                         │  │
│  ├───────────┼──────────────────────────────────────────────────┤  │
│  │  +1       │  MAINTAIN: Hold steady                         │  │
│  │ (1 pass,  │  • Same scaffolding, same scope                  │  │
│  │  2 strug) │  • Watch for pattern                            │  │
│  ├───────────┼──────────────────────────────────────────────────┤  │
│  │   0       │  ASSESS: Need more data                        │  │
│  │ (mixed)   │  • Don't change anything yet                    │  │
│  │           │  • Look at error pattern for clues              │  │
│  ├───────────┼──────────────────────────────────────────────────┤  │
│  │  -1       │  SUPPORT: Add support                          │  │
│  │ (1 fail,  │  • Promote scaffolding level                    │  │
│  │  2 strug) │  • Consider representation switch               │  │
│  ├───────────┼──────────────────────────────────────────────────┤  │
│  │  -2       │  REGRESS: Step back                            │  │
│  │ (2 fail,  │  • Promote scaffolding level                    │  │
│  │  1 strug) │  • Split next skill into sub-skills              │  │
│  │           │  • Check for missing prerequisite                │  │
│  ├───────────┼──────────────────────────────────────────────────┤  │
│  │  -3       │  REBUILD: Significant intervention             │  │
│  │ (3 fails) │  • Full scaffolding (Level 3)                   │  │
│  │           │  • Revisit last successful lesson               │  │
│  │           │  • Consider if mission/pacing is wrong          │  │
│  └───────────┴──────────────────────────────────────────────────┘  │
│                                                                     │
│  GUARDRAILS:                                                        │
│  ──────────                                                         │
│  • Never change more than 1 scaffolding level per session           │
│  • Never combine skills if error pattern is conceptual-gap          │
│  • If score is -3 for 2 consecutive sessions, pause curriculum     │
│    and have a "reset" conversation with the user                    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```
