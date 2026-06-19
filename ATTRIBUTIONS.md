# Attributions

This project is built on top of excellent work by others. We believe in giving credit where it's due.

---

## Matt Pocock — Original `teach` Skill

The philosophy, format conventions, and core design patterns of this system originate from the **`teach` skill** created by [Matt Pocock](https://github.com/mattpocock) as part of his [Skills for Real Engineers](https://github.com/mattpocock/skills) collection.

**Source:** [github.com/mattpocock/skills/tree/main/skills/productivity/teach](https://github.com/mattpocock/skills/tree/main/skills/productivity/teach)

### What Was Used From the Original

The following concepts and structures were directly inspired by (or adapted from) Matt Pocock's `teach` skill:

| Component | Description |
|---|---|
| **Teaching Workspace** | Using a local directory as stateful teaching environment with files (MISSION.md, RESOURCES.md, lessons/, learning-records/, assets/) |
| **Philosophy** | Knowledge / Skills / Wisdom triad; Fluency vs Storage Strength distinction |
| **Mission-driven teaching** | Every lesson ties back to a user-defined mission/goal |
| **Resource-first knowledge** | "Never trust your parametric knowledge" — gather from trusted sources first |
| **Format conventions** | `*-FORMAT.md` files as templates for structured output |
| **Mission format** | Why / Success looks like / Constraints / Out of scope |
| **Resource format** | High-trust only, annotated entries, grouped by Knowledge/Wisdom |
| **Learning record format** | Sequential numbered files capturing demonstrated understanding |
| **Glossary format** | Opinionated terminology with aliases to avoid |
| **Lesson delivery** | Self-contained HTML lessons, beautiful typography, Tufte-inspired |
| **Asset reuse** | Shared components across lessons, CSS-first approach |
| **ZPD concept** | Teaching in the Zone of Proximal Development |
| **Quiz design** | Equal-length answer options to prevent format-based guessing |
| **Wisdom via community** | Delegating real-world practice to communities |

### What Was Added

The original `teach` skill was a brilliant philosophy and format layer with a gap in operational logic. This project adds:

| Layer | What Was Added |
|---|---|
| **Operational Layer** | Session management (open/close protocols), First Session Protocol (6-step onboarding), Re-engagement after absence, ZPD Calculator (floor/ceiling/pool model), Lesson Completion Criteria, Spaced Retrieval mechanism, Curriculum Arc planning, Momentum/Motivation rules |
| **Adaptive Layer** | Learner Profile (7 inferred dimensions), 3-Tier Scaffolding system, Difficulty Calibration Engine (-3 to +3 scoring), Real-Time Signal Detection (5 signal types), Error Pattern Response Strategies (4 error types), Representation Switching Matrix, Adaptive guardrails |
| **Output Enhancements** | Expanded LESSON-FORMAT with scaffolding variants per section, Adaptive fields in learning records, Hint system (scaffold-aware), Pre-built lesson-base.css and quiz-widget.js |
| **Distribution** | `.cursorrules` trigger mechanism, GitHub Template approach, Quick-Start guide, CONTRIBUTING guide, Issue templates |

### Relationship

Think of it this way:

- **Matt Pocock's `teach` skill** = The philosophy and the format rules. An excellent foundation.
- **This project** = The operational engine, the adaptive layer, and the distribution system that makes it work in practice.

Neither is complete without the other.

---

## Learning Science References

The adaptive layer draws on established research in learning science:

| Concept | Source |
|---|---|
| Zone of Proximal Development | Lev Vygotsky, *Mind in Society* (1978) |
| Desirable Difficulty | Robert Bjork, *Memory and Metamemory Considerations* (1994) |
| Fluency vs Storage Strength | Robert Bjork, *Making Things Hard on Yourself, But in a Good Way* (2011) |
| Retrieval Practice | Jeffrey Karpicke & Henry Roediger, *Test-Enhanced Learning* (2008) |
| Spaced Repetition | P. Cepeda et al., *Distributed Practice* (2006) |
| Interleaving | Doug Rohrer et al., *Interleaved Practice* (2015) |
| Scaffolding | Jerome Bruner, *The Culture of Education* (1996) |
| Formative Assessment | Dylan Wiliam, *Formative Assessment* (2011) |

These are not directly cited in the code but informed the design decisions.

---

## How to Credit

If you use or modify this system, please credit both:

```
Based on the `teach` skill by Matt Pocock (https://github.com/mattpocock/skills)
Extended with adaptive learning engine by [Your Name] (https://github.com/yourname/repo)
```

If you redistribute, include this ATTRIBUTIONS.md file or a link back to both sources.
