<div align="center">

# 🧠 Adaptive Teaching System

**An AI-powered personal tutor that learns how YOU learn.**

[Get Started](#-get-started-in-30-seconds) · [How It Works](#-how-it-works) · [Examples](#-what-can-you-learn) · [Share](#-sharing-the-system)

<img src="https://img.shields.io/badge/Requires-Cursor%20%7C%20Claude%20Code-blue" alt="Requires an AI IDE">
<img src="https://img.shields.io/badge/Type-Open%20Source-green" alt="Open Source">
<img src="https://img.shields.io/badge/License-MIT-yellow" alt="MIT License">

</div>

---

## ❓ What Is This?

Imagine a tutor who:

- **Remembers everything** you've ever learned across sessions
- **Adapts to your pace** — speeds up when you're cruising, slows down when you're stuck
- **Detects confusion in real-time** and reframes explanations on the fly
- **Never asks "what's your learning style?"** — it figures it out from your behavior
- **Builds real retention**, not just the illusion of understanding

That's what this system does. It turns any AI coding assistant (Cursor, Claude Code) into a stateful, adaptive, personalized tutor — using nothing but local files.

**No account needed. No server. No API key. Just you, an AI, and a folder.**

---

## 🚀 Get Started in 30 Seconds

### Step 1: Get the Files

Click the green **"Use this template"** button above → **"Create a new repository"** → Give it any name (e.g., `my-learning`).

Or: download the zip and extract it anywhere.

### Step 2: Open It

Open the folder in [Cursor](https://cursor.sh) (free) or Claude Code.

### Step 3: Start Learning

Open a new chat and type:

```
Teach me [anything you want to learn]
```

That's it. The AI will guide you through everything else.

**Example prompts to try:**
```
Teach me Python
Teach me music theory
Teach me weightlifting programming
Teach me UX design principles
Teach me how stocks work
```

---

## 🎯 What Makes This Different?

| Feature | Typical AI Chat | This System |
|---|---|---|
| **Memory** | Forgets everything after the chat | Remembers every lesson across sessions |
| **Adaptation** | Treats everyone the same | Adapts difficulty, scaffolding, and style to YOU |
| **Confusion detection** | Explains the same way again | Detects confusion and switches approach instantly |
| **Lesson quality** | Text dump in chat | Beautiful, printable HTML lessons saved to files |
| **Progress tracking** | None | Learning records, skill tracking, curriculum arc |
| **Spaced retrieval** | None | Periodically tests old skills to build real retention |

---

## 📖 How It Works (In Plain English)

### The Big Idea

This system uses your computer's file system as a "brain." Every time you learn something, the AI writes it down. Before teaching you anything new, it reads what you already know, figures out what you should learn next, and adjusts how it teaches based on how you've been doing.

### The 4 Layers

```
┌─────────────────────────────────────┐
│  1. PHILOSOPHY                       │  Why we teach this way
│     Knowledge → Skills → Wisdom      │  (evidence-based learning science)
├─────────────────────────────────────┤
│  2. ADAPTIVE LAYER                   │  How it personalizes to you
│     Learner Profile (inferred)       │  7 dimensions tracked from behavior
│     Difficulty Engine                │  Gets harder or easier automatically
│     Signal Detection                 │  Reads confusion, boredom, frustration
│     Scaffolding (3 levels)           │  More help → less help as you grow
├─────────────────────────────────────┤
│  3. OPERATIONAL LAYER                │  How a session runs
│     Session Management               │  Open → Teach → Close
│     ZPD Calculator                   │  Always teaches the right next thing
│     Spaced Retrieval                 │  Tests old skills to build retention
├─────────────────────────────────────┤
│  4. OUTPUT LAYER                     │  What you actually see
│     Beautiful HTML lessons           │  Saved as files you can revisit
│     Learning records                 │  Decision-grade insights
│     References & Glossary            │  Quick-review cheat sheets
└─────────────────────────────────────┘
```

### A Typical Session

```
You type "Teach me Python"
        │
        ▼
  AI reads your workspace (first time? returning student?)
        │
        ▼
  FIRST TIME: AI asks why you want to learn, writes your Mission
        │
        ▼
  AI checks what you already know → calculates what to teach next
        │
        ▼
  AI adapts to YOUR level (fast learner? needs examples? visual?)
        │
        ▼
  AI builds a beautiful lesson → saves it as an HTML file → opens it
        │
        ▼
  You read, practice, answer check questions
        │
        ▼
  AI detects how you're doing (confused? bored? in flow?)
        │
        ▼
  AI adjusts → teaches next lesson OR wraps up with a summary
```

---

## 🎓 What Can You Learn?

**Anything.** The system is topic-agnostic. It works by:

1. Understanding YOUR specific goal (the Mission)
2. Finding high-quality resources about the topic
3. Breaking the journey into small, achievable lessons
4. Adapting to how you respond

**Great for:**

| Topic Type | Examples |
|---|---|
| **Programming** | Python, JavaScript, Rust, SQL, algorithms |
| **Design** | UX principles, typography, color theory |
| **Science** | Physics, biology, chemistry concepts |
| **Fitness** | Weightlifting programming, yoga, running plans |
| **Music** | Music theory, guitar chords, production basics |
| **Business** | Marketing fundamentals, financial literacy, strategy |
| **Languages** | Grammar, writing skills, academic writing |
| **Math** | Calculus, statistics, linear algebra |
| **DIY / Crafts** | Woodworking, cooking techniques, photography |

---

## 📁 What's In This Repository?

### Core System Files (Root)

| File | What It Does |
|---|---|
| `.cursorrules` | The trigger — tells the AI to enter Teacher Mode when you say "Teach" or "Learn" |
| `SKILL.md` | The brain — contains ALL teaching logic (300+ lines of philosophy, adaptation, session management) |
| `SYSTEM-INDEX.md` | The map — explains every file and how they connect |

### Format Templates (How Output Is Structured)

| File | Defines the structure of... |
|---|---|
| `MISSION-FORMAT.md` | Your learning goal (Why, Success criteria, Constraints) |
| `RESOURCES-FORMAT.md` | Curated sources (Books, articles, communities) |
| `LEARNING-RECORD-FORMAT.md` | Records of what you've learned (with adaptive data) |
| `GLOSSARY-FORMAT.md` | Topic terminology (tight definitions, aliases) |
| `LESSON-FORMAT.md` | Lessons (8 sections, scaffolding variants per section) |
| `LEARNER-PROFILE-FORMAT.md` | Your inferred learning profile (7 dimensions) |

### Empty Folders (Populated by the AI as you learn)

| Folder | What Gets Created Here |
|---|---|
| `assets/` | Reusable lesson components (CSS stylesheets, quiz widgets, hint systems) |
| `lessons/` | Your HTML lessons (e.g., `0001-python-variables.html`) |
| `reference/` | Quick-reference cheat sheets and glossaries |
| `learning-records/` | Records of demonstrated understanding |

### Documentation (For the curious)

| File | What It Explains |
|---|---|
| `docs/PROJECT-CONTEXT.md` | Full design story — how this went from a simple prompt to an adaptive engine |
| `docs/ADAPTIVE-FLOW.md` | Visual Mermaid flowchart of the entire adaptive session |
| `docs/SCAFFOLDING-LEVELS.md` | Detailed 3-tier scaffolding with promotion/demotion rules |
| `docs/DIFFICULTY-CALIBRATION.md` | The -3 to +3 scoring engine |
| `docs/REAL-TIME-SIGNAL-DETECTION.md` | How the AI detects confusion, boredom, frustration, flow, fatigue |
| `docs/ERROR-PATTERN-RESPONSE-STRATEGIES.md` | 4 error types and their specific interventions |
| `docs/REPRESENTATION-SWITCHING.md` | When to switch between examples, theory, visuals, code |
| `docs/WHEN-NOT-TO-ADAPT.md` | Guardrails that prevent overadaptation |

---

## 🧩 The Adaptive System (How It Personalizes)

This is what makes the system special. The AI tracks 7 dimensions of your learning behavior and adjusts in real-time:

### What It Tracks (Never Asks)

| Dimension | What It Means | How It Detects It |
|---|---|---|
| **Pace** | How fast you move through material | Time to complete lessons, questions asked |
| **Scaffolding Need** | How much hand-holding you need | Whether you skip explanations or ask for more |
| **Representation** | How you best absorb new info | Whether you prefer examples, theory, visuals, code, or analogies |
| **Error Pattern** | What kind of mistakes you make | Careless? Conceptual gap? Can't transfer? Overgeneralizing? |
| **Frustration Threshold** | How quickly you get frustrated | Response patterns when things get hard |
| **Engagement Depth** | How deep you go | Surface (checkbox) vs. deep (edge cases, "what if?") |
| **Session Capacity** | How many lessons per session | When you start getting sloppy or tired |

### The Difficulty Engine

After every lesson, the AI scores your last 3 outcomes:

```
Score = (passes × 1) + (struggles × 0) + (fails × -1)

+3 = Three passes → MAKE IT HARDER
+2 = Two passes  → INCREASE DIFFICULTY
 0 = Mixed       → KEEP WATCHING
-1 = One fail    → ADD SUPPORT
-3 = Three fails → REBUILD FROM SCRATCH
```

### Scaffolding Levels

As you improve, the AI gradually removes training wheels:

| Level | Support | For |
|---|---|---|
| **Level 3** | Full examples, 3 hints, summaries, explanations | New learners, complex topics |
| **Level 2** | One example, 1 hint, no summary | Some experience |
| **Level 1** | Challenge-first, no hints, no explanations | Experienced learners |

Promote after 3+ successes. Demote after 2x failures.

### Real-Time Signal Detection

During a lesson, the AI watches for:

- **Confusion** → Reframes with a different approach
- **Boredom** → Skips ahead to the challenge
- **Frustration** → Pauses, validates, offers easier path (**never pushes through**)
- **Flow** → Notes mastery, can accelerate
- **Fatigue** → Wraps up session gracefully

---

## 📋 Requirements

| What You Need | Where to Get It |
|---|---|
| **An AI coding assistant** | [Cursor](https://cursor.sh) (recommended, free tier available), Claude Code, or any AI that can read local files |
| **That's it.** | No account, no server, no API key, no database |

### What If I Don't Have Cursor?

You can use this with **any AI** by copying the contents of `SKILL.md` and all `*-FORMAT.md` files into a single prompt. It won't be as powerful (no persistent memory between sessions), but it works for single learning sessions.

See `docs/PROJECT-CONTEXT.md` for the Mega-Prompt approach.

---

## 🤝 Sharing the System

Want to share this with friends, students, or the world?

### Method 1: GitHub Template (Best)
This repo is a **template repository**. Anyone clicks "Use this template" → gets their own private copy with full privacy and version control.

### Method 2: Pre-Built Courses (For Teachers)
Use the system to learn a topic end-to-end. Your folder becomes a complete curriculum. Delete `LEARNER-PROFILE.md` (personal) and share the rest as a ready-made course. The new learner gets your curriculum, adapted to THEIR behavior.

### Method 3: Zip Download
Download as zip, share directly. Recipient opens in any AI IDE.

---

## 🏗️ For the Technically Curious

This system is a 4-layer architecture built on local markdown files:

1. **Philosophy Layer** — Knowledge / Skills / Wisdom, Fluency vs Storage Strength
2. **Adaptive Layer** — Learner Profile inference, Difficulty Engine, Signal Detection, Scaffolding
3. **Operational Layer** — Session Management, ZPD Calculation, Spaced Retrieval, Curriculum Arc
4. **Output Layer** — HTML Lessons, References, Learning Records, Glossary

The entire 6-phase design evolution is documented in `docs/PROJECT-CONTEXT.md`. The complete file map is in `SYSTEM-INDEX.md`.

---

## 🙏 Credits

This project is built on the **`teach` skill** by [Matt Pocock](https://github.com/mattpocock) from his [Skills for Real Engineers](https://github.com/mattpocock/skills) collection. His work provided the foundational philosophy (Knowledge/Skills/Wisdom, Fluency vs Storage Strength), the format conventions, and the file-system stateful approach.

This project adds the **operational engine** (session management, ZPD calculator, spaced retrieval) and the **adaptive layer** (learner profiling, difficulty calibration, real-time signal detection, scaffolding system) that makes it work in practice.

See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for the full breakdown of what came from where, and learning science references that informed the design.

---

## 📄 License

MIT License — use it, modify it, share it, sell it, whatever you want.

---

<div align="center">

**Happy learning.**

*Built with learning science, not buzzwords.*

</div>
