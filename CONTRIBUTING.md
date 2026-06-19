# Contributing to the Adaptive Teaching System

Thank you for your interest in improving this project! This system is designed to help anyone learn anything, and contributions from educators, developers, and learners make it better for everyone.

---

## How to Contribute

### 1. Report a Bug
Open an [issue](../../issues/new?template=bug_report.md) with:
- What you were trying to learn
- What the AI did wrong
- What you expected it to do
- Any relevant files (MISSION.md, LEARNER-PROFILE.md, etc.)

### 2. Suggest an Improvement
Open an [issue](../../issues/new?template=feature_request.md) describing:
- The problem you're trying to solve
- Your proposed solution
- Any examples from other learning systems

### 3. Submit a Pull Request
1. Fork this repository
2. Create a feature branch (`git checkout -b feature/my-improvement`)
3. Make your changes
4. Test by using the system to learn something
5. Commit with a clear message (`git commit -m "Add: description of change"`)
6. Push to your fork (`git push origin feature/my-improvement`)
7. Open a Pull Request

---

## Areas That Need Help

### High Priority
- **Starter assets** — A beautiful `lesson-base.css` and `quiz-widget.js` that make lessons look great out of the box
- **Example workspaces** — Completed learning sessions (e.g., "Python for Beginners") that demonstrate what the output looks like
- **Translations** — Translate SKILL.md and format files into other languages

### Medium Priority
- **Web UI** — A simple local server that reads the workspace and serves lessons in a browser
- **Progress dashboard** — A visual summary of learning progress across sessions
- **Export tools** — Convert lessons to PDF, Anki flashcards, or other formats

### Low Priority
- **Multi-user support** — JSON-based state per user (for shared environments)
- **Mobile support** — Lessons optimized for mobile viewing
- **Video integration** — Support for embedding video content in lessons

---

## Design Principles (What NOT to Change)

These are the core design decisions that make the system work. Please don't change these without discussion:

1. **Local files, not a database** — File-system statefulness is intentional for privacy, portability, and AI IDE compatibility
2. **Behavior-inferred profile, not self-reported** — The learner profile must remain inferred from observable behavior, never asked
3. **Quiz options must be equal length** — This prevents format-based guessing
4. **One skill per lesson** — Lessons must remain short and focused
5. **Never assume completion from file creation** — A lesson is only complete when the learner passes checks

---

## Code of Conduct

- Be respectful to all learners and contributors
- The system should work for everyone regardless of technical skill
- Prefer clear, simple language over jargon
- Prioritize accessibility and inclusivity
