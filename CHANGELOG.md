# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-06-19

### Added

- **Initial release** of Adaptive Teaching System
- Core teaching protocol with real-time error detection & adaptive scaffolding
- Learner profiling system that infers characteristics from behavior
- Adaptive session management with multi-level difficulty scaling
- Error pattern recognition and just-in-time reframing
- Representation switching for complex concepts
- Comprehensive format guides:
  - `MISSION-FORMAT.md` — structured learning objectives
  - `LESSON-FORMAT.md` — lesson templates with adaptive sections
  - `LEARNING-RECORD-FORMAT.md` — session capture and analytics
  - `LEARNER-PROFILE-FORMAT.md` — learner state modeling
  - `GLOSSARY-FORMAT.md`, `RESOURCES-FORMAT.md` — supporting materials
- Pre-commit hooks (Husky + Prettier) for code quality
- GitHub issue templates for structured bug reports & feature requests
- Cursor IDE integration via `.cursorrules`
- MIT License

### Features

- **No infrastructure needed** — runs entirely on local files in the workspace
- **AI-agnostic** — works with any LLM-powered editor (Cursor, Claude Code)
- **Stateful learning** — remembers learner progress across sessions
- **Real-time adaptation** — adjusts difficulty, pace, and teaching strategy mid-lesson
- **Extensible templates** — customize for any subject or learner profile

---

## Future Roadmap

### Coming Soon

- Web UI for browsing lessons and progress dashboards
- Export to PDF, Anki flashcards, and other formats
- GitHub Pages documentation site
- Automated testing & CI/CD workflows

### Under Consideration

- Multi-user support (per-learner state management)
- Mobile-optimized lesson layouts
- Video embedding in lessons
- Community contribution guidelines & moderation

---

[1.0.0]: https://github.com/firstuser1927-max/teach-me-anything/releases/tag/v1.0.0
