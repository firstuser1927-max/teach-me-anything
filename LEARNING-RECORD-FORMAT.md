# Learning Record Format

Learning records live in `./learning-records/` and use sequential numbering: `0001-slug.md`, `0002-slug.md`, etc. Create the directory lazily — only when the first record is written.

They are the teaching equivalent of ADRs: they capture non-obvious lessons, key insights, and stated prior knowledge that will steer future sessions. They are used to calculate the zone of proximal development and feed the Difficulty Calibration Engine.

## Template

```md
# {Short title of what was learned or established}

{1-3 sentences: what was learned (or what prior knowledge was established), and why it matters for future sessions.}

- Outcome: pass | struggle | fail
- Signals: {any real-time signals observed: confusion, boredom, frustration, flow, fatigue}
- Error pattern: careless | conceptual-gap | conceptual-transfer | overgeneralization | none
- Adaptation triggered: {what changed: scaffolding level, representation, difficulty, prerequisite inserted}
- Scaffolding level: {1, 2, or 3}
- Representation used: concept-first | example-first | visual-first | code-first | analogy-first
```

That is the core format. A learning record can be as short as a single paragraph with metadata fields. The value is recording _that_ this is now known and _why_ it changes what to teach next.

## When to Include Adaptive Fields

Include the adaptive metadata fields (Outcome, Signals, Error pattern, Adaptation, Scaffolding, Representation) whenever a record captures an adaptive event — i.e., when the lesson involved:
- A check question outcome (pass/struggle/fail)
- A real-time signal was detected during the lesson
- An adaptation was triggered (scaffolding change, representation switch, difficulty adjustment)
- An error pattern was identified

For simpler records (e.g., prior knowledge disclosure, mission change, misconception correction), the adaptive fields can be omitted.

## Optional Sections

Only include these when they add genuine value. Most records won't need them.

- **Status** frontmatter (`active | superseded by LR-NNNN`) — useful when an earlier understanding turns out to be wrong and is replaced.
- **Evidence** — how the user demonstrated the understanding (a question answered, an exercise completed, prior experience cited). Useful when the claim might be revisited.
- **Implications** — what this unlocks or rules out for future sessions. Worth recording when non-obvious.

## Numbering

Scan `./learning-records/` for the highest existing number and increment by one.

## When to Write a Learning Record

Write one when any of these is true:

1. **The user demonstrated genuine understanding of something non-trivial** — not just exposure, but evidence they can use the concept correctly. This sets a new floor for what to teach next.
2. **The user disclosed prior knowledge** — "I already know X." Record it so future sessions don't re-teach it. Also record the _depth_ claimed.
3. **A misconception was corrected** — the user previously believed something wrong and now sees why. These are high-value: they predict future stumbling blocks for related topics.
4. **The mission shifted in response to learning** — the user discovered they cared about something different than they thought. Cross-link to MISSION.md and update it.
5. **A lesson was completed** (passed checks or user confirmed) — record the skill gained, the outcome, and any adaptive data.

### What does _not_ qualify

- Material that was merely covered. Coverage is not learning. Wait for evidence.
- Anything already captured tersely in GLOSSARY.md as a term definition. Don't duplicate.
- Session-by-session activity logs. Learning records are not a journal — they are decision-grade insights.

## Supersession

When a later record contradicts an earlier one (the user's understanding deepened or corrected), mark the old record `Status: superseded by LR-NNNN` rather than deleting it. The history of how understanding evolved is itself useful signal.

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
