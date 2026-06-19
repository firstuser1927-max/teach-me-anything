/* ============================================================
   quiz-widget.js — Adaptive Teaching System
   Interactive quiz component with hint system.
   Scaffolding-aware: reads <!-- scaffold: X --> to set hint count.
   Link in lesson: <script src="../assets/quiz-widget.js"></script>
   ============================================================ */

(function () {
  'use strict';

  // --- Read scaffolding level from HTML comment ---
  function getScaffoldingLevel() {
    var comments = document.documentElement.outerHTML.match(/<!--\s*scaffold:\s*(\d)\s*-->/);
    return comments ? parseInt(comments[1], 10) : 2; // default to Level 2
  }

  var scaffoldLevel = getScaffoldingLevel();
  var maxHints = scaffoldLevel === 3 ? 3 : scaffoldLevel === 2 ? 1 : 0;

  // --- Quiz System ---
  function initQuizzes() {
    var questions = document.querySelectorAll('.quiz-question');
    questions.forEach(function (q) {
      var options = q.querySelectorAll('.quiz-option');
      var feedback = q.querySelector('.quiz-feedback');

      options.forEach(function (opt) {
        opt.addEventListener('click', function () {
          // Disable all options
          options.forEach(function (o) {
            o.setAttribute('data-disabled', 'true');
          });

          var isCorrect = opt.getAttribute('data-correct') === 'true';

          // Visual feedback on option
          if (isCorrect) {
            opt.classList.add('correct');
          } else {
            opt.classList.add('incorrect');
            // Also highlight the correct answer
            options.forEach(function (o) {
              if (o.getAttribute('data-correct') === 'true') {
                o.classList.add('correct');
              }
            });
          }

          // Show explanation (Level 3: always; Level 2: only if wrong; Level 1: never)
          if (feedback) {
            if (scaffoldLevel === 3 || (scaffoldLevel === 2 && !isCorrect)) {
              feedback.classList.add('show');
              feedback.classList.add(isCorrect ? 'correct' : 'incorrect');
            }
          }
        });
      });
    });
  }

  // --- Hint System ---
  function initHints() {
    if (maxHints === 0) return;

    var containers = document.querySelectorAll('.hint-container');
    containers.forEach(function (container) {
      var hints = container.querySelectorAll('.hint-text');
      var btn = container.querySelector('.hint-btn');
      if (!btn || hints.length === 0) return;

      var used = 0;
      var hintText = '';

      btn.addEventListener('click', function () {
        if (btn.getAttribute('data-used') === 'true') return;
        if (used >= maxHints) return;

        var hint = hints[used];
        if (hint) {
          hint.classList.add('show');
          used++;
          if (used >= maxHints) {
            btn.setAttribute('data-used', 'true');
            btn.textContent = 'All hints used';
          } else {
            btn.textContent = 'Hint ' + (used + 1) + ' of ' + maxHints;
          }
        }
      });

      // Initialize button text
      btn.textContent = maxHints === 1 ? 'Show Hint' : 'Hint 1 of ' + maxHints;
    });
  }

  // --- Init on DOM ready ---
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initQuizzes();
      initHints();
    });
  } else {
    initQuizzes();
    initHints();
  }
})();
