/**
 * MakeQuiz - Active Learning & Assessment Engine
 * Core Application Logic, State Management & Audio Synthesizer
 */

(function () {
  'use strict';

  // =========================================================================
  // State Initialization
  // =========================================================================
  const chapters = window.QUIZ_DATA || [];
  let currentChapterId = 1;
  let activePartFilter = 'all'; // 'all', '1', '2', '3'
  let activeSpecialFilter = null; // null, 'starred', 'incorrect'
  let soundEnabled = localStorage.getItem('makequiz_sound') !== 'false';
  let isDarkMode = localStorage.getItem('makequiz_theme') !== 'light';

  // Persistence keys
  const STORAGE_ANSWERS_KEY = 'makequiz_user_answers';
  const STORAGE_STARRED_KEY = 'makequiz_starred_questions';

  let userAnswers = {};
  let starredQuestions = new Set();

  try {
    const savedAns = localStorage.getItem(STORAGE_ANSWERS_KEY);
    if (savedAns) userAnswers = JSON.parse(savedAns);
    const savedStars = localStorage.getItem(STORAGE_STARRED_KEY);
    if (savedStars) starredQuestions = new Set(JSON.parse(savedStars));
  } catch (e) {
    console.error('Failed to load storage state:', e);
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_ANSWERS_KEY, JSON.stringify(userAnswers));
      localStorage.setItem(STORAGE_STARRED_KEY, JSON.stringify([...starredQuestions]));
    } catch (e) {
      console.error('Failed to save state:', e);
    }
  }

  // =========================================================================
  // Web Audio Synthesizer (Zero External Audio Assets Required)
  // =========================================================================
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playTone(type) {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      if (type === 'correct') {
        // Melodic ascending chord: C5 (523Hz) -> E5 (659Hz) -> G5 (784Hz)
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1);
        osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.2);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.2, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

        osc.start(now);
        osc.stop(now + 0.46);
      } else if (type === 'incorrect') {
        // Gentle low descending thud: F3 (174Hz) -> D3 (146Hz)
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(146.83, now + 0.15);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.15, now + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

        osc.start(now);
        osc.stop(now + 0.36);
      }
    } catch (e) {
      // Audio might be blocked until user interacts with the page
    }
  }

  // =========================================================================
  // DOM Elements
  // =========================================================================
  const chapterListEl = document.getElementById('chapterList');
  const questionsContainerEl = document.getElementById('questionsContainer');
  const activeChapterBadgeEl = document.getElementById('activeChapterBadge');
  const activeChapterTitleEl = document.getElementById('activeChapterTitle');
  const chapterCorrectCountEl = document.getElementById('chapterCorrectCount');
  const chapterIncorrectCountEl = document.getElementById('chapterIncorrectCount');
  const chapterProgressRatioEl = document.getElementById('chapterProgressRatio');
  const overallProgressTextEl = document.getElementById('overallProgressText');
  const overallPercentTextEl = document.getElementById('overallPercentText');
  const chapterSearchInput = document.getElementById('chapterSearchInput');
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const soundIconEl = document.getElementById('soundIcon');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIconEl = document.getElementById('themeIcon');
  const sidebarEl = document.getElementById('sidebar');
  const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
  const resetCurrentChapterBtn = document.getElementById('resetCurrentChapterBtn');
  const resetAllBtn = document.getElementById('resetAllBtn');
  const filterStarredBtn = document.getElementById('filterStarredBtn');
  const filterIncorrectBtn = document.getElementById('filterIncorrectBtn');
  const starredCountEl = document.getElementById('starredCount');
  const countAllEl = document.getElementById('countAll');
  const partFilterButtons = document.querySelectorAll('[data-part]');

  // Set initial theme
  document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  themeIconEl.textContent = isDarkMode ? '🌙' : '☀️';
  soundIconEl.textContent = soundEnabled ? '🔊' : '🔇';

  // =========================================================================
  // Markdown & Text Safe Formatter
  // =========================================================================
  function escapeHtml(text) {
    if (!text) return '';
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatMarkdown(text) {
    if (!text) return '';
    let out = text;

    // Code blocks ```java ... ```
    out = out.replace(/```([a-zA-Z0-9]*)\n([\s\S]*?)```/g, function (_, lang, code) {
      return `<pre><code class="lang-${lang}">${escapeHtml(code.trim())}</code></pre>`;
    });

    // Inline code `code`
    out = out.replace(/`([^`]+)`/g, function (_, code) {
      return `<code>${escapeHtml(code)}</code>`;
    });

    // Bold **text**
    out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

    // Italic *text*
    out = out.replace(/\*([^*]+)\*/g, '<em>$1</em>');

    // Line breaks
    out = out.replace(/\n\n/g, '<p style="margin-bottom:8px;"></p>');
    out = out.replace(/\n/g, '<br/>');

    return out;
  }

  // Normalize string for fuzzy answer matching
  function normalizeAnswerText(str) {
    if (!str) return '';
    return str
      .toLowerCase()
      .trim()
      .replace(/['"`]/g, '')
      .replace(/[.,;:]/g, '')
      .replace(/\s+/g, ' ');
  }

  // =========================================================================
  // Chapter & Stats Computations
  // =========================================================================
  function getChapterStats(chId) {
    const ch = chapters.find((c) => c.id === chId);
    if (!ch) return { total: 0, answered: 0, correct: 0, incorrect: 0, percent: 0 };

    let total = ch.questions.length;
    let answered = 0;
    let correct = 0;
    let incorrect = 0;

    ch.questions.forEach((q) => {
      const qKey = `ch_${chId}_q_${q.num}`;
      const state = userAnswers[qKey];
      if (state && state.answered) {
        answered++;
        if (state.isCorrect) correct++;
        else incorrect++;
      }
    });

    const percent = total > 0 ? Math.round((answered / total) * 100) : 0;
    return { total, answered, correct, incorrect, percent };
  }

  function getOverallStats() {
    let totalQuestions = 0;
    let totalAnswered = 0;
    let totalCorrect = 0;

    chapters.forEach((ch) => {
      const s = getChapterStats(ch.id);
      totalQuestions += s.total;
      totalAnswered += s.answered;
      totalCorrect += s.correct;
    });

    const percent = totalQuestions > 0 ? Math.round((totalAnswered / totalQuestions) * 100) : 0;
    return { totalQuestions, totalAnswered, totalCorrect, percent };
  }

  function updateSidebarAndHeaders() {
    // 1. Overall stats
    const ov = getOverallStats();
    overallProgressTextEl.textContent = `${ov.totalAnswered}/${ov.totalQuestions}`;
    overallPercentTextEl.textContent = `${ov.percent}%`;

    // 2. Current Chapter stats
    const curStats = getChapterStats(currentChapterId);
    chapterCorrectCountEl.textContent = curStats.correct;
    chapterIncorrectCountEl.textContent = curStats.incorrect;
    chapterProgressRatioEl.textContent = `${curStats.answered}/${curStats.total}`;

    // 3. Starred count
    starredCountEl.textContent = starredQuestions.size;

    // 4. Update sidebar list items
    renderSidebarChapters();
  }

  // =========================================================================
  // Render Sidebar Chapters
  // =========================================================================
  function renderSidebarChapters() {
    const query = chapterSearchInput.value.toLowerCase().trim();
    chapterListEl.innerHTML = '';

    chapters.forEach((ch) => {
      const stats = getChapterStats(ch.id);
      const matchesSearch =
        ch.title.toLowerCase().includes(query) ||
        `chương ${ch.id}`.includes(query) ||
        ch.filename.toLowerCase().includes(query);

      if (!matchesSearch) return;

      const item = document.createElement('div');
      item.className = `chapter-item ${ch.id === currentChapterId ? 'active' : ''}`;
      item.onclick = () => selectChapter(ch.id);

      // Clean title text: e.g. "CHƯƠNG 1 - SPRING TRONG THẾ GIỚI THỰC"
      let cleanTitle = ch.title.replace(/^🎯\s*BỘ ĐỀ LUYỆN TẬP TOÀN DIỆN:\s*/i, '');

      item.innerHTML = `
        <div class="chapter-item-top">
          <span class="chapter-number">Chương ${ch.id}</span>
          <span class="chapter-score-pill">${stats.answered}/${stats.total}</span>
        </div>
        <div class="chapter-title">${escapeHtml(cleanTitle)}</div>
        <div class="chapter-progress-bar-bg">
          <div class="chapter-progress-bar-fill" style="width: ${stats.percent}%"></div>
        </div>
      `;
      chapterListEl.appendChild(item);
    });
  }

  function selectChapter(chId) {
    currentChapterId = chId;
    activeSpecialFilter = null;
    filterStarredBtn.classList.remove('active');
    filterIncorrectBtn.classList.remove('active');

    const ch = chapters.find((c) => c.id === chId);
    if (ch) {
      activeChapterBadgeEl.textContent = `Chương ${ch.id}`;
      let cleanTitle = ch.title
        .replace(/^🎯\s*BỘ ĐỀ LUYỆN TẬP TOÀN DIỆN:\s*/i, '')
        .replace(/^CHƯƠNG\s+\d+\s*-\s*/i, '');
      activeChapterTitleEl.textContent = cleanTitle;
      countAllEl.textContent = ch.questions.length;
    }

    renderSidebarChapters();
    renderQuestions();
    updateSidebarAndHeaders();

    // Close mobile sidebar if open
    sidebarEl.classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // =========================================================================
  // Question Rendering Engine
  // =========================================================================
  function renderQuestions() {
    const ch = chapters.find((c) => c.id === currentChapterId);
    if (!ch) {
      questionsContainerEl.innerHTML = '<p>Không tìm thấy dữ liệu chương.</p>';
      return;
    }

    questionsContainerEl.innerHTML = '';

    // Filter questions based on active filters
    let filteredQuestions = ch.questions.filter((q) => {
      // Part Filter
      if (activePartFilter !== 'all' && q.part.toString() !== activePartFilter) {
        return false;
      }
      const qKey = `ch_${ch.id}_q_${q.num}`;
      const state = userAnswers[qKey];

      // Special Filter
      if (activeSpecialFilter === 'starred') {
        return starredQuestions.has(qKey);
      }
      if (activeSpecialFilter === 'incorrect') {
        return state && state.answered && !state.isCorrect;
      }

      return true;
    });

    if (filteredQuestions.length === 0) {
      questionsContainerEl.innerHTML = `
        <div style="text-align: center; padding: 48px 20px; color: var(--text-secondary);">
          <div style="font-size: 2.5rem; margin-bottom: 12px;">🔍</div>
          <h3>Không có câu hỏi nào khớp với bộ lọc hiện tại</h3>
          <p style="margin-top: 8px; font-size: 0.9rem;">Hãy thử chuyển sang chế độ "Tất cả" hoặc chọn chương khác.</p>
        </div>
      `;
      return;
    }

    // Render questions
    filteredQuestions.forEach((q) => {
      const qKey = `ch_${ch.id}_q_${q.num}`;
      const qCard = createQuestionCard(q, qKey, ch.id);
      questionsContainerEl.appendChild(qCard);
    });
  }

  // Create single Question Card Element
  function createQuestionCard(q, qKey, chId) {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = `qCard_${qKey}`;

    const state = userAnswers[qKey] || { answered: false };
    if (state.answered) {
      card.classList.add(state.isCorrect ? 'answered-correct' : 'answered-incorrect');
    }

    // Level Badge Class
    let levelClass = 'level-nhan-biet';
    const lvl = (q.level || '').toLowerCase();
    if (lvl.includes('thông hiểu')) levelClass = 'level-thong-hieu';
    else if (lvl.includes('vận dụng')) levelClass = 'level-van-dung';

    // Header HTML
    const isStarred = starredQuestions.has(qKey);
    const headerHtml = `
      <div class="card-header">
        <div class="card-meta">
          <span class="question-index-badge">Câu ${q.num}</span>
          <span class="level-badge ${levelClass}">${escapeHtml(q.level)}</span>
          <span class="part-badge">${escapeHtml(q.partName)}</span>
        </div>
        <div class="card-actions-top">
          <button class="star-btn ${isStarred ? 'active' : ''}" data-star-key="${qKey}" title="Đánh dấu lưu lại câu hỏi này">
            ${isStarred ? '★' : '☆'}
          </button>
        </div>
      </div>
    `;

    let bodyHtml = '';
    if (q.part === 1) {
      bodyHtml = renderMcqBody(q, qKey, state);
    } else if (q.part === 2) {
      bodyHtml = renderTrueFalseBody(q, qKey, state);
    } else if (q.part === 3) {
      bodyHtml = renderShortAnswerBody(q, qKey, state);
    }

    card.innerHTML = headerHtml + bodyHtml;

    // Attach Interactive Event Handlers
    attachCardEvents(card, q, qKey, chId);

    return card;
  }

  // =========================================================================
  // Part I: MCQ Rendering & Answering
  // =========================================================================
  function renderMcqBody(q, qKey, state) {
    const isAnswered = state.answered;
    const userChoice = state.userChoice;
    const isCorrect = state.isCorrect;

    let optionsHtml = '<div class="options-list">';
    q.options.forEach((opt) => {
      let optClass = 'option-item';
      if (isAnswered) {
        optClass += ' disabled';
        if (opt.key === userChoice) {
          optClass += isCorrect ? ' selected-correct' : ' selected-wrong';
        } else if (opt.key === q.correctAnswer) {
          optClass += ' revealed-correct';
        }
      }

      optionsHtml += `
        <div class="${optClass}" data-opt-key="${opt.key}">
          <div class="option-key">${opt.key}</div>
          <div class="option-text">${formatMarkdown(opt.text)}</div>
        </div>
      `;
    });
    optionsHtml += '</div>';

    // Explanation Box (Unfolds immediately if answered)
    let explanationHtml = '';
    if (isAnswered) {
      explanationHtml = `
        <div class="explanation-card ${isCorrect ? 'is-correct' : 'is-incorrect'}">
          <div class="feedback-status-banner ${isCorrect ? 'status-correct' : 'status-incorrect'}">
            <span>${isCorrect ? '🎉 CHÍNH XÁC!' : `❌ CHƯA CHÍNH XÁC (Đáp án đúng: ${q.correctAnswer})`}</span>
          </div>
          ${
            q.citation
              ? `<div class="citation-box"><strong>📖 Căn cứ tài liệu:</strong> ${formatMarkdown(q.citation)}</div>`
              : ''
          }
          ${
            q.trap
              ? `<div class="trap-box"><strong>💡 Phân tích bẫy tư duy:</strong> ${formatMarkdown(q.trap)}</div>`
              : ''
          }
          <div class="explanation-section">
            <div class="explanation-label">📝 Hướng dẫn giải chi tiết:</div>
            <div>${formatMarkdown(q.explanation)}</div>
          </div>
        </div>
      `;
    }

    return `
      <div class="question-stem">${formatMarkdown(q.stem)}</div>
      ${optionsHtml}
      ${explanationHtml}
    `;
  }

  function handleMcqOptionClick(q, qKey, chId, selectedKey) {
    const isCorrect = selectedKey === q.correctAnswer;
    userAnswers[qKey] = {
      answered: true,
      userChoice: selectedKey,
      isCorrect: isCorrect
    };
    saveState();
    playTone(isCorrect ? 'correct' : 'incorrect');
    updateSidebarAndHeaders();

    // Re-render this specific question card smoothly
    const card = document.getElementById(`qCard_${qKey}`);
    if (card) {
      const newCard = createQuestionCard(q, qKey, chId);
      card.replaceWith(newCard);
    }
  }

  // =========================================================================
  // Part II: True / False Rendering & Answering
  // =========================================================================
  function renderTrueFalseBody(q, qKey, state) {
    const itemsState = state.items || {};

    let listHtml = '<div class="tf-statements-list">';
    q.items.forEach((item) => {
      const itemState = itemsState[item.key] || { answered: false };
      const isSubAnswered = itemState.answered;

      let trueBtnClass = 'tf-btn';
      let falseBtnClass = 'tf-btn';

      if (isSubAnswered) {
        if (itemState.userChoice === true) {
          trueBtnClass += itemState.isCorrect ? ' selected-true' : ' wrong-choice';
        } else {
          falseBtnClass += itemState.isCorrect ? ' selected-false' : ' wrong-choice';
        }
      }

      listHtml += `
        <div class="tf-item-row" data-tf-sub="${item.key}">
          <div class="tf-item-main">
            <div class="tf-statement-content">
              <span class="tf-key-badge">${item.key.toUpperCase()}</span>
              <div class="tf-statement-text">${formatMarkdown(item.text)}</div>
            </div>
            <div class="tf-actions">
              <button class="${trueBtnClass}" data-tf-choice="true" ${isSubAnswered ? 'disabled' : ''}>
                ✓ ĐÚNG
              </button>
              <button class="${falseBtnClass}" data-tf-choice="false" ${isSubAnswered ? 'disabled' : ''}>
                ✗ SAI
              </button>
            </div>
          </div>
          ${
            isSubAnswered
              ? `
              <div class="tf-feedback-inline ${itemState.isCorrect ? 'correct' : 'incorrect'}">
                <strong>${itemState.isCorrect ? '✓ Đúng' : '✗ Chưa chính xác'}:</strong>
                Mệnh đề này là <strong>${item.correctAnswer ? 'ĐÚNG' : 'SAI'}</strong>.
                ${item.explanation ? `(${formatMarkdown(item.explanation)})` : ''}
              </div>
            `
              : ''
          }
        </div>
      `;
    });
    listHtml += '</div>';

    return `
      <div class="tf-context-box">
        <strong>Ngữ cảnh câu hỏi:</strong> ${formatMarkdown(q.context)}
      </div>
      ${listHtml}
    `;
  }

  function handleTrueFalseSubClick(q, qKey, chId, subKey, userChoiceBool) {
    const targetItem = q.items.find((it) => it.key === subKey);
    if (!targetItem) return;

    const isSubCorrect = userChoiceBool === targetItem.correctAnswer;

    if (!userAnswers[qKey]) {
      userAnswers[qKey] = { answered: false, items: {} };
    }
    if (!userAnswers[qKey].items) {
      userAnswers[qKey].items = {};
    }

    userAnswers[qKey].items[subKey] = {
      answered: true,
      userChoice: userChoiceBool,
      isCorrect: isSubCorrect
    };

    // Check if all 4 sub-items are answered
    let allAnswered = true;
    let allCorrect = true;
    q.items.forEach((it) => {
      const st = userAnswers[qKey].items[it.key];
      if (!st || !st.answered) {
        allAnswered = false;
      } else if (!st.isCorrect) {
        allCorrect = false;
      }
    });

    if (allAnswered) {
      userAnswers[qKey].answered = true;
      userAnswers[qKey].isCorrect = allCorrect;
    }

    saveState();
    playTone(isSubCorrect ? 'correct' : 'incorrect');
    updateSidebarAndHeaders();

    // Re-render card
    const card = document.getElementById(`qCard_${qKey}`);
    if (card) {
      const newCard = createQuestionCard(q, qKey, chId);
      card.replaceWith(newCard);
    }
  }

  // =========================================================================
  // Part III: Short Answer Rendering & Answering
  // =========================================================================
  function renderShortAnswerBody(q, qKey, state) {
    const isAnswered = state.answered;
    const userText = state.userText || '';
    const isCorrect = state.isCorrect;

    const inputGroupHtml = `
      <div class="sa-input-group">
        <input 
          type="text" 
          class="sa-text-input" 
          id="saInput_${qKey}" 
          placeholder="Nhập câu trả lời của bạn rồi nhấn Enter hoặc Kiểm tra..."
          value="${escapeHtml(userText)}"
          ${isAnswered ? 'disabled' : ''}
        />
        <button class="sa-submit-btn" id="saSubmitBtn_${qKey}" ${isAnswered ? 'disabled' : ''}>
          <span>Kiểm tra</span>
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </button>
      </div>
    `;

    let explanationHtml = '';
    if (isAnswered) {
      explanationHtml = `
        <div class="explanation-card ${isCorrect ? 'is-correct' : 'is-incorrect'}">
          <div class="feedback-status-banner ${isCorrect ? 'status-correct' : 'status-incorrect'}">
            <span>${isCorrect ? '🎉 CHÍNH XÁC!' : '❌ CHƯA CHÍNH XÁC'}</span>
          </div>
          <div style="margin-bottom: 10px;">
            <strong>Đáp án chuẩn xác:</strong>
            <span style="font-family: var(--font-mono); background: rgba(99, 102, 241, 0.15); color: #A5B4FC; padding: 3px 8px; border-radius: 4px; font-weight: 600;">
              ${escapeHtml(q.canonicalAnswer || (q.acceptedAnswers && q.acceptedAnswers[0]) || '')}
            </span>
          </div>
          ${
            q.acceptedAnswers && q.acceptedAnswers.length > 1
              ? `
            <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 8px;">
              <em>Các đáp án được chấp nhận:</em> ${q.acceptedAnswers.map((a) => `<code>${escapeHtml(a)}</code>`).join(', ')}
            </div>
          `
              : ''
          }
          <div class="explanation-section">
            <div class="explanation-label">📝 Căn cứ & Lời giải:</div>
            <div>${formatMarkdown(q.explanation)}</div>
          </div>
        </div>
      `;
    }

    return `
      <div class="question-stem">${formatMarkdown(q.stem)}</div>
      ${
        q.guideline
          ? `<div class="sa-guideline-badge">📌 ${escapeHtml(q.guideline)}</div>`
          : ''
      }
      ${inputGroupHtml}
      ${explanationHtml}
    `;
  }

  function handleShortAnswerSubmit(q, qKey, chId, textVal) {
    if (!textVal || !textVal.trim()) {
      showToast('Vui lòng nhập câu trả lời trước khi kiểm tra!');
      return;
    }

    const normInput = normalizeAnswerText(textVal);

    // Check against accepted answers
    let isCorrect = false;
    if (q.acceptedAnswers && q.acceptedAnswers.length > 0) {
      isCorrect = q.acceptedAnswers.some((ans) => {
        const normAns = normalizeAnswerText(ans);
        return normAns === normInput || normInput.includes(normAns) || normAns.includes(normInput);
      });
    } else if (q.canonicalAnswer) {
      const normCanon = normalizeAnswerText(q.canonicalAnswer);
      isCorrect = normCanon === normInput || normInput.includes(normCanon);
    }

    userAnswers[qKey] = {
      answered: true,
      userText: textVal.trim(),
      isCorrect: isCorrect
    };

    saveState();
    playTone(isCorrect ? 'correct' : 'incorrect');
    updateSidebarAndHeaders();

    // Re-render card
    const card = document.getElementById(`qCard_${qKey}`);
    if (card) {
      const newCard = createQuestionCard(q, qKey, chId);
      card.replaceWith(newCard);
    }
  }

  // =========================================================================
  // Attach DOM Events to Card
  // =========================================================================
  function attachCardEvents(card, q, qKey, chId) {
    // Star toggle
    const starBtn = card.querySelector(`[data-star-key="${qKey}"]`);
    if (starBtn) {
      starBtn.onclick = (e) => {
        e.stopPropagation();
        if (starredQuestions.has(qKey)) {
          starredQuestions.delete(qKey);
          starBtn.classList.remove('active');
          starBtn.textContent = '☆';
          showToast('Đã xóa khỏi danh sách đánh dấu');
        } else {
          starredQuestions.add(qKey);
          starBtn.classList.add('active');
          starBtn.textContent = '★';
          showToast('Đã lưu vào danh sách đánh dấu ⭐');
        }
        saveState();
        updateSidebarAndHeaders();
      };
    }

    // Part I MCQ Option Clicks
    if (q.part === 1) {
      const optItems = card.querySelectorAll('.option-item:not(.disabled)');
      optItems.forEach((optEl) => {
        optEl.onclick = () => {
          const optKey = optEl.getAttribute('data-opt-key');
          handleMcqOptionClick(q, qKey, chId, optKey);
        };
      });
    }

    // Part II True/False Clicks
    if (q.part === 2) {
      const subRows = card.querySelectorAll('.tf-item-row');
      subRows.forEach((row) => {
        const subKey = row.getAttribute('data-tf-sub');
        const trueBtn = row.querySelector('[data-tf-choice="true"]:not(:disabled)');
        const falseBtn = row.querySelector('[data-tf-choice="false"]:not(:disabled)');

        if (trueBtn) {
          trueBtn.onclick = () => handleTrueFalseSubClick(q, qKey, chId, subKey, true);
        }
        if (falseBtn) {
          falseBtn.onclick = () => handleTrueFalseSubClick(q, qKey, chId, subKey, false);
        }
      });
    }

    // Part III Short Answer Submission
    if (q.part === 3) {
      const inputEl = card.querySelector(`#saInput_${qKey}`);
      const submitBtn = card.querySelector(`#saSubmitBtn_${qKey}`);

      if (submitBtn && inputEl && !submitBtn.disabled) {
        submitBtn.onclick = () => handleShortAnswerSubmit(q, qKey, chId, inputEl.value);
        inputEl.onkeydown = (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleShortAnswerSubmit(q, qKey, chId, inputEl.value);
          }
        };
      }
    }
  }

  // =========================================================================
  // Toast Notification Helper
  // =========================================================================
  let toastTimer = null;
  function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    container.innerHTML = `<div class="toast">${escapeHtml(message)}</div>`;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      container.innerHTML = '';
    }, 2500);
  }

  // =========================================================================
  // Global Event Listeners & Controls
  // =========================================================================

  // Chapter Search
  chapterSearchInput.addEventListener('input', () => {
    renderSidebarChapters();
  });

  // Sound Toggle
  soundToggleBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    localStorage.setItem('makequiz_sound', soundEnabled ? 'true' : 'false');
    soundIconEl.textContent = soundEnabled ? '🔊' : '🔇';
    showToast(soundEnabled ? 'Đã bật âm thanh hiệu ứng 🔊' : 'Đã tắt âm thanh hiệu ứng 🔇');
  });

  // Theme Toggle
  themeToggleBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('makequiz_theme', isDarkMode ? 'dark' : 'light');
    themeIconEl.textContent = isDarkMode ? '🌙' : '☀️';
  });

  // Sidebar Mobile Toggle
  sidebarToggleBtn.addEventListener('click', () => {
    sidebarEl.classList.toggle('open');
  });

  // Part Filter Buttons
  partFilterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      partFilterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activePartFilter = btn.getAttribute('data-part');
      renderQuestions();
    });
  });

  // Starred Filter Toggle
  filterStarredBtn.addEventListener('click', () => {
    if (activeSpecialFilter === 'starred') {
      activeSpecialFilter = null;
      filterStarredBtn.classList.remove('active');
    } else {
      activeSpecialFilter = 'starred';
      filterStarredBtn.classList.add('active');
      filterIncorrectBtn.classList.remove('active');
    }
    renderQuestions();
  });

  // Flashcard Persistence Key
  const STORAGE_FLASHCARDS_KEY = 'makequiz_flashcard_ratings';
  let flashcardRatings = {};
  try {
    const savedRatings = localStorage.getItem(STORAGE_FLASHCARDS_KEY);
    if (savedRatings) flashcardRatings = JSON.parse(savedRatings);
  } catch (e) {
    console.error('Failed to load flashcard ratings:', e);
  }

  function saveFlashcardRatings() {
    try {
      localStorage.setItem(STORAGE_FLASHCARDS_KEY, JSON.stringify(flashcardRatings));
    } catch (e) {
      console.error('Failed to save flashcard ratings:', e);
    }
  }

  // View Mode Elements
  let currentViewMode = 'practice'; // 'practice' | 'flashcard'
  const tabPracticeMode = document.getElementById('tabPracticeMode');
  const tabFlashcardMode = document.getElementById('tabFlashcardMode');
  const practiceToolbar = document.getElementById('practiceToolbar');
  const flashcardContainer = document.getElementById('flashcardContainer');

  // Flashcard Deck State
  let flashcardDeck = [];
  let flashcardIndex = 0;
  let isCardFlipped = false;

  function setViewMode(mode) {
    currentViewMode = mode;
    if (mode === 'practice') {
      tabPracticeMode.classList.add('active');
      tabFlashcardMode.classList.remove('active');
      practiceToolbar.style.display = 'flex';
      questionsContainerEl.style.display = 'block';
      flashcardContainer.style.display = 'none';
      renderQuestions();
    } else {
      tabPracticeMode.classList.remove('active');
      tabFlashcardMode.classList.add('active');
      practiceToolbar.style.display = 'none';
      questionsContainerEl.style.display = 'none';
      flashcardContainer.style.display = 'flex';
      initFlashcardDeck();
    }
  }

  if (tabPracticeMode && tabFlashcardMode) {
    tabPracticeMode.addEventListener('click', () => setViewMode('practice'));
    tabFlashcardMode.addEventListener('click', () => setViewMode('flashcard'));
  }

  // =========================================================================
  // Flashcard Engine Logic
  // =========================================================================
  function initFlashcardDeck(shuffle = false) {
    const ch = chapters.find((c) => c.id === currentChapterId);
    if (!ch) return;

    flashcardDeck = [...ch.questions];
    if (shuffle) {
      for (let i = flashcardDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcardDeck[i], flashcardDeck[j]] = [flashcardDeck[j], flashcardDeck[i]];
      }
      showToast('🔀 Đã trộn ngẫu nhiên các thẻ ghi nhớ!');
    }
    flashcardIndex = 0;
    isCardFlipped = false;
    renderFlashcardView();
  }

  function renderFlashcardView() {
    if (!flashcardDeck || flashcardDeck.length === 0) {
      flashcardContainer.innerHTML = `
        <div style="text-align: center; padding: 48px 20px; color: var(--text-secondary);">
          <div style="font-size: 2.5rem; margin-bottom: 12px;">🎴</div>
          <h3>Không có thẻ nào trong chương này</h3>
        </div>
      `;
      return;
    }

    const q = flashcardDeck[flashcardIndex];
    const qKey = `ch_${currentChapterId}_q_${q.num}`;
    const rating = flashcardRatings[qKey] || 'unrated';
    const isStarred = starredQuestions.has(qKey);

    // Front Content Generation
    let frontBodyHtml = '';
    if (q.part === 1) {
      // MCQ Front: prompt + options
      let optList = q.options.map((o) => `
        <div style="padding: 8px 12px; background: var(--bg-secondary); border-radius: 6px; margin-bottom: 6px; font-size: 0.92rem; display: flex; gap: 8px;">
          <strong style="color: var(--accent-primary);">${o.key}.</strong>
          <span>${formatMarkdown(o.text)}</span>
        </div>
      `).join('');
      frontBodyHtml = `
        <div class="fc-prompt-text">${formatMarkdown(q.stem)}</div>
        <div style="margin-top: 16px;">${optList}</div>
      `;
    } else if (q.part === 2) {
      // True/False Front: context + 4 statements
      let stmtList = q.items.map((it) => `
        <div style="padding: 8px 12px; background: var(--bg-secondary); border-radius: 6px; margin-bottom: 6px; font-size: 0.92rem;">
          <strong style="color: var(--accent-secondary);">${it.key.toUpperCase()})</strong> ${formatMarkdown(it.text)}
        </div>
      `).join('');
      frontBodyHtml = `
        <div style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 10px;"><strong>Ngữ cảnh:</strong> ${formatMarkdown(q.context)}</div>
        <div>${stmtList}</div>
      `;
    } else if (q.part === 3) {
      // Short Answer Front
      frontBodyHtml = `
        <div class="fc-prompt-text">${formatMarkdown(q.stem)}</div>
        ${q.guideline ? `<div class="sa-guideline-badge" style="margin-top: 14px;">📌 ${escapeHtml(q.guideline)}</div>` : ''}
      `;
    }

    // Back Content Generation
    let backBodyHtml = '';
    if (q.part === 1) {
      const correctOpt = q.options.find((o) => o.key === q.correctAnswer);
      backBodyHtml = `
        <div class="fc-answer-badge">
          <span>✓ Đáp án đúng:</span> <strong>${q.correctAnswer}</strong>
        </div>
        ${correctOpt ? `<div style="font-size: 1.05rem; font-weight: 600; margin-bottom: 16px; color: var(--text-primary);">${formatMarkdown(correctOpt.text)}</div>` : ''}
        ${q.citation ? `<div class="citation-box"><strong>📖 Căn cứ tài liệu:</strong> ${formatMarkdown(q.citation)}</div>` : ''}
        ${q.trap ? `<div class="trap-box"><strong>💡 Phân tích bẫy tư duy:</strong> ${formatMarkdown(q.trap)}</div>` : ''}
        <div style="font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary); margin-top: 10px;">
          ${formatMarkdown(q.explanation)}
        </div>
      `;
    } else if (q.part === 2) {
      let backStmtList = q.items.map((it) => `
        <div style="padding: 8px 12px; background: var(--bg-secondary); border-radius: 6px; margin-bottom: 8px; font-size: 0.9rem;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
            <strong style="color: var(--accent-secondary);">${it.key.toUpperCase()})</strong>
            <span style="font-weight: 800; color: ${it.correctAnswer ? 'var(--correct)' : 'var(--incorrect)'};">${it.correctAnswer ? '✓ ĐÚNG' : '✗ SAI'}</span>
          </div>
          <div style="color: var(--text-secondary); font-size: 0.85rem;">${it.explanation ? formatMarkdown(it.explanation) : ''}</div>
        </div>
      `).join('');
      backBodyHtml = `<div>${backStmtList}</div>`;
    } else if (q.part === 3) {
      backBodyHtml = `
        <div class="fc-answer-badge">
          <span>✓ Đáp án:</span> <strong>${escapeHtml(q.canonicalAnswer || (q.acceptedAnswers && q.acceptedAnswers[0]) || '')}</strong>
        </div>
        ${q.acceptedAnswers && q.acceptedAnswers.length > 1 ? `
          <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 12px;">
            <em>Các biến thể được chấp nhận:</em> ${q.acceptedAnswers.map((a) => `<code>${escapeHtml(a)}</code>`).join(', ')}
          </div>
        ` : ''}
        <div class="citation-box" style="margin-top: 12px;">
          <strong>📝 Căn cứ & Lời giải:</strong> ${formatMarkdown(q.explanation)}
        </div>
      `;
    }

    // Cognitive Level Class
    let levelClass = 'level-nhan-biet';
    const lvl = (q.level || '').toLowerCase();
    if (lvl.includes('thông hiểu')) levelClass = 'level-thong-hieu';
    else if (lvl.includes('vận dụng')) levelClass = 'level-van-dung';

    flashcardContainer.innerHTML = `
      <div class="flashcard-status-bar">
        <div class="fc-meta-info">
          <span class="fc-counter-badge">Thẻ ${flashcardIndex + 1} / ${flashcardDeck.length}</span>
          <span class="level-badge ${levelClass}">${escapeHtml(q.level)}</span>
          <span class="part-badge">${escapeHtml(q.partName)}</span>
        </div>
        <div class="fc-deck-controls">
          <button class="header-btn" id="fcShuffleBtn" title="Trộn ngẫu nhiên thẻ">
            <span>🔀</span> Trộn thẻ
          </button>
          <button class="header-btn ${isStarred ? 'active' : ''}" id="fcStarBtn" title="Đánh dấu thẻ này">
            <span>${isStarred ? '★' : '☆'}</span>
          </button>
        </div>
      </div>

      <!-- 3D Perspective Flip Box -->
      <div class="flashcard-perspective" id="fcCardWrapper">
        <div class="flashcard-inner ${isCardFlipped ? 'is-flipped' : ''}" id="fcInnerCard">
          <!-- Front Face -->
          <div class="flashcard-face flashcard-front">
            <div class="fc-card-top">
              <span class="question-index-badge">Câu ${q.num}</span>
              <span style="font-size: 0.8rem; color: var(--text-muted);">Mặt trước (Câu hỏi)</span>
            </div>
            <div class="fc-card-body">
              ${frontBodyHtml}
            </div>
            <div class="fc-card-footer-hint">
              <span>💡 Bấm vào thẻ hoặc nhấn <strong>Phím Cách (Space)</strong> để lật xem đáp án & căn cứ</span>
            </div>
          </div>

          <!-- Back Face -->
          <div class="flashcard-face flashcard-back">
            <div class="fc-card-top">
              <span class="question-index-badge" style="background: rgba(16, 185, 129, 0.2); color: var(--correct);">Câu ${q.num} - Đáp án</span>
              <span style="font-size: 0.8rem; color: var(--text-muted);">Mặt sau (Giải thích chi tiết)</span>
            </div>
            <div class="fc-card-body">
              ${backBodyHtml}
            </div>
            <div class="fc-card-footer-hint">
              <span>🔄 Bấm vào thẻ để lật lại mặt trước | Đánh giá mức độ nhớ bên dưới</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls & Rating Panel -->
      <div class="flashcard-controls-panel">
        <div class="fc-rating-buttons">
          <button class="fc-rate-btn rate-hard" id="fcRateHard" title="Nhấn phím 1">
            <span>🔴</span> Chưa nhớ (1)
          </button>
          <button class="fc-rate-btn rate-good" id="fcRateGood" title="Nhấn phím 2">
            <span>🟡</span> Tạm nhớ (2)
          </button>
          <button class="fc-rate-btn rate-easy" id="fcRateEasy" title="Nhấn phím 3">
            <span>🟢</span> Đã thuộc (3)
          </button>
        </div>

        <div class="fc-nav-row">
          <button class="fc-nav-btn" id="fcPrevBtn" ${flashcardIndex === 0 ? 'disabled' : ''}>
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Thẻ trước
          </button>
          <button class="fc-flip-btn-big" id="fcFlipBtn">
            <span>🔄 Lật thẻ (Space)</span>
          </button>
          <button class="fc-nav-btn" id="fcNextBtn" ${flashcardIndex === flashcardDeck.length - 1 ? 'disabled' : ''}>
            Thẻ tiếp
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    // Attach Flashcard Events
    attachFlashcardEvents(q, qKey);
  }

  function toggleCardFlip() {
    isCardFlipped = !isCardFlipped;
    const cardEl = document.getElementById('fcInnerCard');
    if (cardEl) {
      if (isCardFlipped) cardEl.classList.add('is-flipped');
      else cardEl.classList.remove('is-flipped');
    }
  }

  function nextFlashcard() {
    if (flashcardIndex < flashcardDeck.length - 1) {
      flashcardIndex++;
      isCardFlipped = false;
      renderFlashcardView();
    }
  }

  function prevFlashcard() {
    if (flashcardIndex > 0) {
      flashcardIndex--;
      isCardFlipped = false;
      renderFlashcardView();
    }
  }

  function rateFlashcard(qKey, rating) {
    flashcardRatings[qKey] = rating;
    saveFlashcardRatings();

    if (rating === 'easy') {
      playTone('correct');
      showToast('Đã đánh dấu: Thành thạo 🟢');
    } else if (rating === 'good') {
      showToast('Đã đánh dấu: Tạm nhớ 🟡');
    } else {
      playTone('incorrect');
      showToast('Đã đánh dấu: Cần ôn lại 🔴');
    }

    // Auto advance after rating if not last card
    if (flashcardIndex < flashcardDeck.length - 1) {
      setTimeout(() => {
        nextFlashcard();
      }, 250);
    }
  }

  function attachFlashcardEvents(q, qKey) {
    const cardWrapper = document.getElementById('fcCardWrapper');
    const flipBtn = document.getElementById('fcFlipBtn');
    const prevBtn = document.getElementById('fcPrevBtn');
    const nextBtn = document.getElementById('fcNextBtn');
    const shuffleBtn = document.getElementById('fcShuffleBtn');
    const starBtn = document.getElementById('fcStarBtn');
    const rateHardBtn = document.getElementById('fcRateHard');
    const rateGoodBtn = document.getElementById('fcRateGood');
    const rateEasyBtn = document.getElementById('fcRateEasy');

    if (cardWrapper) cardWrapper.onclick = toggleCardFlip;
    if (flipBtn) flipBtn.onclick = (e) => { e.stopPropagation(); toggleCardFlip(); };
    if (prevBtn) prevBtn.onclick = (e) => { e.stopPropagation(); prevFlashcard(); };
    if (nextBtn) nextBtn.onclick = (e) => { e.stopPropagation(); nextFlashcard(); };
    if (shuffleBtn) shuffleBtn.onclick = (e) => { e.stopPropagation(); initFlashcardDeck(true); };

    if (starBtn) {
      starBtn.onclick = (e) => {
        e.stopPropagation();
        if (starredQuestions.has(qKey)) {
          starredQuestions.delete(qKey);
          starBtn.classList.remove('active');
          starBtn.querySelector('span').textContent = '☆';
          showToast('Đã xóa khỏi danh sách đánh dấu');
        } else {
          starredQuestions.add(qKey);
          starBtn.classList.add('active');
          starBtn.querySelector('span').textContent = '★';
          showToast('Đã lưu vào danh sách đánh dấu ⭐');
        }
        saveState();
        updateSidebarAndHeaders();
      };
    }

    if (rateHardBtn) rateHardBtn.onclick = (e) => { e.stopPropagation(); rateFlashcard(qKey, 'hard'); };
    if (rateGoodBtn) rateGoodBtn.onclick = (e) => { e.stopPropagation(); rateFlashcard(qKey, 'good'); };
    if (rateEasyBtn) rateEasyBtn.onclick = (e) => { e.stopPropagation(); rateFlashcard(qKey, 'easy'); };
  }

  // Keyboard navigation for Flashcard Mode
  window.addEventListener('keydown', (e) => {
    if (currentViewMode !== 'flashcard') return;
    // If user is focused on an input, don't hijack keys
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();
      toggleCardFlip();
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      nextFlashcard();
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      prevFlashcard();
    } else if (e.key === '1') {
      e.preventDefault();
      const q = flashcardDeck[flashcardIndex];
      if (q) rateFlashcard(`ch_${currentChapterId}_q_${q.num}`, 'hard');
    } else if (e.key === '2') {
      e.preventDefault();
      const q = flashcardDeck[flashcardIndex];
      if (q) rateFlashcard(`ch_${currentChapterId}_q_${q.num}`, 'good');
    } else if (e.key === '3') {
      e.preventDefault();
      const q = flashcardDeck[flashcardIndex];
      if (q) rateFlashcard(`ch_${currentChapterId}_q_${q.num}`, 'easy');
    }
  });

  // When chapter changes, update flashcard deck if in flashcard mode
  const originalSelectChapter = selectChapter;
  selectChapter = function(chId) {
    originalSelectChapter(chId);
    if (currentViewMode === 'flashcard') {
      initFlashcardDeck();
    }
  };

  // Incorrect Filter Toggle
  filterIncorrectBtn.addEventListener('click', () => {
    if (activeSpecialFilter === 'incorrect') {
      activeSpecialFilter = null;
      filterIncorrectBtn.classList.remove('active');
    } else {
      activeSpecialFilter = 'incorrect';
      filterIncorrectBtn.classList.add('active');
      filterStarredBtn.classList.remove('active');
    }
    renderQuestions();
  });

  // Reset Current Chapter Progress
  resetCurrentChapterBtn.addEventListener('click', () => {
    if (confirm('Bạn có chắc chắn muốn xóa tiến độ làm bài của chương hiện tại không?')) {
      const ch = chapters.find((c) => c.id === currentChapterId);
      if (ch) {
        ch.questions.forEach((q) => {
          delete userAnswers[`ch_${ch.id}_q_${q.num}`];
        });
        saveState();
        updateSidebarAndHeaders();
        renderQuestions();
        showToast('Đã làm mới tiến độ chương này!');
      }
    }
  });

  // Reset All Chapters Progress
  resetAllBtn.addEventListener('click', () => {
    if (confirm('⚠️ BẠN CÓ CHẮC CHẮN MUỐN XÓA TOÀN BỘ TIẾN ĐỘ 15 CHƯƠNG KHÔNG?')) {
      userAnswers = {};
      starredQuestions.clear();
      flashcardRatings = {};
      saveState();
      saveFlashcardRatings();
      updateSidebarAndHeaders();
      renderQuestions();
      if (currentViewMode === 'flashcard') initFlashcardDeck();
      showToast('Đã đặt lại toàn bộ tiến độ học tập!');
    }
  });

  // =========================================================================
  // Initialize Application
  // =========================================================================
  if (chapters.length > 0) {
    selectChapter(1);
  } else {
    questionsContainerEl.innerHTML = `
      <div style="text-align:center; padding: 40px; color: var(--incorrect);">
        <h3>Lỗi nạp dữ liệu câu hỏi!</h3>
        <p>Vui lòng kiểm tra lại tệp quiz_data.js.</p>
      </div>
    `;
  }
})();
