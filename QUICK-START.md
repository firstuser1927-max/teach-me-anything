# Quick Start Guide

**3 steps. 30 seconds. No technical knowledge required.**

---

## What You Need

- A computer (Windows, Mac, or Linux)
- [Cursor](https://cursor.sh) — a free AI-powered code editor (similar to VS Code but with AI built in)

That's it. No account, no server, no payment.

---

## Step 1: Get Your Copy

### Option A: GitHub (Recommended)

1. Go to the GitHub page for this repository
2. Click the green button that says **"Use this template"**
3. Click **"Create a new repository"**
4. Give it a name (e.g., `my-learning`) and click **"Create repository"**
5. On the new repo page, click **"Code"** → **"Open with Cursor"**

### Option B: Direct Download

1. Click the green **"Code"** button
2. Click **"Download ZIP"**
3. Extract the zip file anywhere on your computer
4. Open Cursor → **File** → **Open Folder** → select the extracted folder

---

## Step 2: Open a Chat

1. In Cursor, click the **"Chat"** icon in the sidebar (or press `Cmd+L` / `Ctrl+L`)
2. A chat panel opens on the right side of the screen

---

## Step 3: Start Learning

Type this in the chat:

```
Teach me [your topic]
```

Replace `[your topic]` with anything you want to learn. For example:

```
Teach me Python
Teach me photography basics
Teach me how to invest in stocks
Teach me yoga for beginners
Teach me music theory
```

**The AI will take over from here.** It will:
- Ask you why you want to learn this (to personalize the lessons)
- Figure out what you already know
- Create your first lesson
- Open it as a beautiful HTML page

---

## What Happens Next?

### Your First Session (5-10 minutes)

The AI will ask you a few questions, then teach you your first lesson. You'll see:

- A **MISSION.md** file created — this is your learning goal
- A **RESOURCES.md** file — curated sources for your topic
- Your first **lesson HTML file** — opened in your browser or editor
- A **NOTES.md** file — where the AI tracks your progress

### Returning Sessions

When you come back later, just type:

```
Teach me [same topic]
```

The AI will:
- Remember everything from last time
- Pick up exactly where you left off
- Adjust based on how you did before

---

## Common Questions

### "I don't know anything about coding. Can I use this?"

Yes. You never need to touch any code. The AI does all the file management. You just read lessons and answer questions in the chat.

### "Does this work with ChatGPT?"

Partially. You can copy the contents of `SKILL.md` and paste it into ChatGPT, but you'll lose the memory between sessions (since ChatGPT can't read your local files). For the full experience, use Cursor.

### "Is my data private?"

Yes. Everything stays on your computer. No data is sent anywhere except to the AI you're using (Cursor or Claude Code). Your learning records, lessons, and profile are just local files.

### "Can I learn multiple topics?"

Create a separate folder for each topic. Each folder is its own learning workspace.

### "What if the AI teaches something wrong?"

The system is designed to prioritize high-quality, trusted resources over the AI's parametric knowledge. The AI cites sources from `RESOURCES.md`. If something seems wrong, tell the AI — it will update and correct the record.

---

## Troubleshooting

| Problem | Solution |
|---|---|
| "The AI doesn't enter Teacher Mode" | Make sure you have the `.cursorrules` file in the root of your folder. Try restarting Cursor. |
| "The AI doesn't remember my last session" | Make sure you're opening the same folder where your previous files were created. |
| "Lessons don't look right" | The AI creates HTML lessons. Open them in a browser for the best experience. |
| "I want to start over" | Delete all files except the `*-FORMAT.md`, `SKILL.md`, `.cursorrules`, and `SYSTEM-INDEX.md`. Keep the empty folders. |
| "The AI seems confused" | Check that `LEARNER-PROFILE.md` exists and looks reasonable. If it's wrong, you can edit it manually. |

---

## Need Help?

- Open an [issue](../../issues) on GitHub
- Read the [full README](./README.md) for detailed documentation
- Check `docs/PROJECT-CONTEXT.md` for the complete design philosophy
