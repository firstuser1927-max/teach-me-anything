# Learning Record Format — Adaptive Fields Extension

## Adaptive Fields (add when relevant)

When a learning record captures an adaptive event, include:

- **Outcome**: `pass` | `struggle` | `fail` — classification for difficulty engine
- **Signals detected**: List any real-time signals observed (confusion, boredom, frustration, flow, fatigue)
- **Error pattern**: If errors were made, classify: `careless` | `conceptual-gap` | `conceptual-transfer` | `overgeneralization`
- **Adaptation triggered**: What changed because of this lesson (scaffolding level, representation, difficulty, prerequisite inserted)
- **Scaffolding level**: Which level was used for this lesson (1, 2, or 3)
- **Representation used**: Which representation was used (concept-first, example-first, etc.)

## Example

```md
# Iteration in Python

Passed check questions after initial confusion with `while` vs `for`. Error pattern: conceptual-transfer — understood the syntax but couldn't identify when to use which.

- Outcome: struggle
- Signals: confusion ("when would I use while instead?"), then flow ("oh, I see")
- Error pattern: conceptual-transfer
- Adaptation triggered: added comparison table to lesson, representation switched from code-first to example-first
- Scaffolding level: 2
- Representation used: example-first (after switch from code-first)
```
