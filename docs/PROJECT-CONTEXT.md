# Project Context: Adaptive AI Teaching System

## Executive Summary
This document contains the complete context, design evolution, and final architecture of an advanced, stateful, adaptive AI teaching system. We started with a static, philosophy-driven prompt structure and iteratively engineered it into a dynamic, behavior-driven adaptive learning engine. The final output is a local file-system-based workspace designed to be used with AI coding assistants (like Cursor or Claude Code) to act as a personalized tutor.

---

## Phase 1: The Starting Point (The Original System)
**The Input:** The user provided an initial set of markdown files defining an AI skill called `teach`.
*   **Core Philosophy:** Strong focus on Knowledge, Skills, and Wisdom. Distinguished between Fluency (illusory) and Storage Strength (long-term retention via spaced retrieval).
*   **State Management:** Used local files (`MISSION.md`, `RESOURCES.md`, `learning-records/`, `GLOSSARY.md`, `lessons/`, `assets/`) to maintain state across sessions.
*   **The Problem:** The system had excellent *philosophy* and *format* layers, but a severely lacking *operational* layer. It knew *what* a lesson was, but not *how* to manage a session, *when* to create a lesson, or *how* to determine if a lesson was done.

## Phase 2: Closing the Operational Gap (10 Key Improvements)
We identified that without operational rules, the AI would behave inconsistently. We added the following structures:
1.  **LESSON-FORMAT.md:** The primary output (lessons) had no template. We created a strict 8-section HTML template (Title, Skill, Knowledge, Practice, Check, Ref, Next, Footer).
2.  **First Session Protocol:** A strict 6-step sequence for empty workspaces (Ask why -> Write Mission -> Check prior knowledge -> Find resources -> Plan arc -> Teach first lesson).
3.  **Session Management:** Explicit rules for opening sessions (scan records, check last lesson status) and closing sessions (summarize, state next steps, note fatigue).
4.  **Enhanced Quiz Design:** Expanded the rule "make options the same length" into a full guide on plausible distractors, formative feedback, and skipping quizzes for physical/skills-based lessons.
5.  **Curriculum Arc Planning:** Instructions to sketch a 3-7 milestone arc in `NOTES.md` so the AI thinks beyond just the next lesson.
6.  **Spaced Retrieval Mechanism:** A hardcoded rule: every 3-5 lessons, inject 1-2 questions from a skill learned 2+ lessons ago to build storage strength.
7.  **Lesson Completion Criteria:** Defined that a lesson is *only* complete upon passing a check or explicit user confirmation. Never assume completion from file creation.
8.  **Assets Conventions:** Rules for component creation (naming, configuring vs hardcoding, documenting usage).
9.  **Momentum/Motivation:** Added rules to manage the emotional dimension of learning (end on a win, never shame, abandon broken lessons).
10. **Minor Format Fixes:** Added dating to resources, mandated completion records, and cross-linking in the glossary.

## Phase 3: Architecture & Flow Visualization
To ensure the operational logic was airtight, we mapped the entire system using text-based and Mermaid diagrams. Key architectural components designed:
*   **The Master Flow Diagram:** Connected the Workspace Scanner -> Onboarding/Returning paths -> ZPD Calculation -> Lesson Creation -> Close Session.
*   **The ZPD Calculator Model:** Defined inputs (Learning Records as the floor, Mission milestones as the ceiling, Arc gaps as the pool) to calculate the exact next skill.
*   **The Session State Machine:** Formal states (EmptyWorkspace, Onboarding, CheckAbsence, Reengagement, LessonActive, PostLesson, CloseSession).
*   **The Three Loops:** Identified the Session Loop (minutes), Curriculum Loop (weeks), and Retention Loop (ongoing spacing).
*   **The Lesson Creation Pipeline:** A step-by-step funnel from Inputs -> Identify Skill -> Check Assets -> Build HTML -> Validate.

## Phase 4: The Adaptive Learning Layer (The Major Pivot)
**The Trigger:** The user pointed out a critical flaw: "Everyone does not have the same learning aptitude." The previous system treated all learners identically once the ZPD was calculated.
**The Core Insight:** Never ask a user "what is your learning style?" (self-reporting is unreliable). Infer their aptitude from real-time behavior.

### New Components Added:
1.  **LEARNER-PROFILE.md:** A new file tracking 7 inferred dimensions: Pace, Scaffolding Need, Representation Preference, Error Pattern, Frustration Threshold, Engagement Depth, and Session Capacity.
2.  **3-Tier Scaffolding System:**
    *   *Level 3 (High):* Full worked examples, 3 hints, summaries.
    *   *Level 2 (Medium):* Concise examples, 1 hint, no summary.
    *   *Level 1 (Low):* Challenge-first, reference-only, no hints.
3.  **Difficulty Calibration Engine:** A scoring system (-3 to +3) based on the last 3 lesson outcomes (pass/struggle/fail). It triggers actions like ELEVATE, MAINTAIN, SUPPORT, or REBUILD.
4.  **Real-Time Signal Detection:** Rules for detecting Confusion, Boredom, Frustration, Flow, and Fatigue during a chat, with immediate scripted responses for each.
5.  **Error Pattern Response Strategies:** Specific interventions for Careless errors (slow down prompts), Conceptual Gaps (insert prerequisite), Conceptual Transfer (varied context practice), and Overgeneralization (teach boundary conditions).
6.  **Representation Switching Matrix:** A lookup table for when to switch from Concept-first to Example-first to Visual-first based on user struggle.
7.  **Guardrails:** Strict rules on when *not* to adapt (e.g., don't adapt on a single data point, don't let fast learners skip spaced retrieval).

## Phase 5: Practical Implementation & Distribution
We moved from theory to usability. How does a human actually run this?
*   **The Trigger Mechanism:** Created a `.cursorrules` file that watches for the words "Teach" or "Learn" to boot up the `SKILL.md` persona.
*   **The Builder's Workflow:** Instructions to create the folder structure and populate it with the markdown files.
*   **The Learner's Workflow:** Step-by-step guide for Day 1 (Onboarding) vs Day 2+ (Returning session).
*   **Distribution Models:** Designed 3 ways to share it:
    1.  *GitHub Template* (Best: others clone the empty system to learn their own topics).
    2.  *Mega-Prompt* (For non-technical users: flatten the files into one giant ChatGPT prompt, losing file-state but keeping the logic).
    3.  *Pre-Built Course* (Author completes the lessons themselves, then shares the populated folder for others to iterate on).

## Phase 6: Final Deliverable
Wrapped the entire finalized architecture into a Python script that generates the exact folder structure and `.zip` file, ensuring no file naming or directory tree errors exist in the final product.

---

## The Final Architecture Summary

The system is now a 4-Layer architecture:
1.  **Philosophy Layer:** Knowledge/Skills/Wisdom, Fluency vs Storage.
2.  **Adaptive Layer (NEW):** Learner Profile inference, Difficulty Engine, Signal Detection, Scaffolding Selector.
3.  **Operational Layer:** Onboarding, Session Mgmt, ZPD Calc, Spaced Retrieval, Curriculum Arc.
4.  **Output Layer:** Lessons (HTML), References (HTML), Records (MD), Glossary (MD), Assets (CSS/JS).
*All layers sit atop a Format Layer (the strict `-FORMAT.md` rules) and a File System Workspace.*

---

## Final File Manifest
If recreating this system, it requires exactly these files in the root:
*   `.cursorrules` (The trigger mechanism)
*   `SKILL.md` (The master prompt containing all logic)
*   `MISSION-FORMAT.md`
*   `RESOURCES-FORMAT.md`
*   `LEARNING-RECORD-FORMAT.md`
*   `GLOSSARY-FORMAT.md`
*   `LESSON-FORMAT.md`
*   `LEARNER-PROFILE-FORMAT.md`
*   `assets/` (Empty directory, awaiting `lesson-base.css`, `quiz-widget.js`)
*   `lessons/` (Empty directory, awaiting `0001-*.html`)
*   `reference/` (Empty directory)
*   `learning-records/` (Empty directory)

---

## Instructions for the Next AI
If the user asks you to extend, modify, or recreate this system:
1.  **Read this context first.** Understand that the operational and adaptive layers are the most critical parts. Do not revert to a simple "generate a lesson" chatbot.
2.  **Respect the file system.** The statefulness *is* the feature. Never propose a database or an API replacement without understanding that local markdown files are intentional for privacy, portability, and AI IDE compatibility.
3.  **Maintain strict formatting.** The `LEARNER-PROFILE.md` must remain inferred, not asked. The quiz options must remain perfectly equal in length.
4.  **Common extension requests you might receive:**
    *   *Adding Video/Image assets:* Update `ASSETS` rules and `LESSON-FORMAT` to handle binary files or external URLs.
    *   *Multi-user support:* This breaks the local file paradigm. Would require shifting to a SQLite DB or JSON state file per user ID.
    *   *Web UI:* The HTML lessons are currently static. A web UI would require parsing the workspace state and serving it via a local server (e.g., Python Flask/Next.js).
