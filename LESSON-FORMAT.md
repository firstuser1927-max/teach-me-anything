# Lesson Format

Live in `./lessons/` as `0001-slug.html`. Sequential numbering.

## Structure (In Order)

Each section below adapts based on the scaffolding level (`<!-- scaffold: X -->` at the top of the file).

### 1. Title + Mission Tie-in
One sentence connecting the lesson topic to the user's mission.

```
Example: "Variables in Python — a building block toward your goal of writing a CLI tool."
```

### 2. The Skill You'll Gain
One observable thing the user will be able to do after this lesson.

```
Example: "You'll be able to declare, assign, and reassign variables in Python."
```

### 3. Knowledge
Only what's required to acquire the skill. Cite sources from RESOURCES.md.

| Scaffolding | Knowledge Section |
|---|---|
| **Level 3** | Explicit connection to prior knowledge ("You already know X. Y is similar, but..."). Full explanation with theory before practice. Annotated worked example with commentary on WHY each step. |
| **Level 2** | Brief connection (1 sentence). Concise worked example — show the how, skip the why unless asked. |
| **Level 1** | No prior knowledge connection. No worked example, or: "Here's the reference. Try it." Theory is minimal — the user prefers to figure it out. |

### 4. Practice
Interactive or guided exercise with a tight feedback loop.

| Scaffolding | Practice Section |
|---|---|
| **Level 3** | Guided practice with hints available (up to 3 via hint-system.js). Steps broken down explicitly. Confirmation step after each sub-task. |
| **Level 2** | Independent practice with 1 hint available. Less hand-holding. |
| **Level 1** | Challenge-first practice. "Try to do X. Here's the reference if you need it." No hints. No step-by-step. |

### 5. Check
1–3 questions to verify understanding. Include spaced retrieval questions if due (every 3–5 lessons, 1–2 questions from a skill learned 2+ lessons ago).

| Scaffolding | Check Section |
|---|---|
| **Level 3** | Check questions with full explanation after each answer (correct or incorrect). |
| **Level 2** | Check questions with explanation only if wrong. |
| **Level 1** | Check questions with no explanations — right/wrong only. |

**Quiz rules (all levels):**
- Each answer option must be exactly the same number of words (and characters, if possible).
- Create plausible distractors that test common misconceptions.
- For physical/skills-based lessons, skip quizzes and use demonstration-based checks.

### 6. Reference Link
HTML anchor to `./reference/` if a reference document exists for this topic.

### 7. Next Step
What they'll learn next — adapted to their current level. Be specific: "Next: We'll build on variables to learn about functions."

### 8. Footer
```
Unsure about anything? Ask your teacher — it's what they're for.
```

---

## Constraints

- **5–10 minutes max.** If longer, split it into two lessons.
- **One skill per lesson.**
- **Links only to existing files.** Do not link to files you haven't created yet.
- **Print-friendly.** No broken interactive elements in print.
- **No JS unless required for interactivity.** Quizzes and hints are valid; decorative animations are not.
- **HTML comment at top:** `<!-- scaffold: X -->` where X is 1, 2, or 3.

## Completion

A lesson is ONLY complete when:
1. The user passes all check questions, **OR**
2. The user explicitly says "I've got this" or "I'm done"

**Never assume completion from file creation.** Record completion in a learning record with outcome classification.

## Spaced Retrieval Integration

When building the Check section, check if spaced retrieval is due:
- Count lessons since the last retrieval injection. If it's been 3–5 lessons, add 1–2 recall questions from a skill passed 2+ lessons ago.
- Label these clearly: "Review from Lesson 0003: Variables"
- If the learner fails a retrieval question, note it in the learning record — this skill needs revisiting.
