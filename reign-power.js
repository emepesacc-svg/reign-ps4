/* REIGN POWER PACK — ratings & tags, dashboard, yearly goal, franchises, shareable lists,
   upcoming releases, custom trophy lists, command palette (Ctrl+K), light/dark theme.
   Local-first: everything lives in this browser's localStorage. */
(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));
  const safe = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const K = { rate: 'reignRatingsV1', goal: 'reignYearGoalV1', done: 'reignCompletionsV1', lists: 'reignListsV1', up: 'reignUpcomingV1', tro: 'reignCustomTrophiesV1', theme: 'reignThemeV1', prog: 'reignProgressV1', sess: 'reignArcadeSessionsV1' };
  const read = (k, fb) => { try { const v = localStorage.getItem(k); return v === null ? fb : JSON.parse(v); } catch { return fb; } };
  const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch { return false; } };
  const toast = m => { const t = $('#toast'); if (!t) return; t.textContent = m; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2600); };
  const G = () => (typeof games !== 'undefined' && Array.isArray(games)) ? games : [];
  const gid = id => G().find(g => String(g.id) === String(id));
  const open = id => (typeof window.openGame === 'function') ? window.openGame(Number(id)) : null;
  const DAY = 864e5, MON = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  const isDone = s => s === 'completed' || s === 'platinum';
  const gameOptions = () => G().slice().sort((a, b) => a.title.localeCompare(b.title)).map(g => `<option value="${safe(g.id)}">${safe(g.title)}</option>`).join('');
  const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
  const b64 = str => { const b = new TextEncoder().encode(str); let s = ''; b.forEach(x => s += String.fromCharCode(x)); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); };
  const unb64 = t => { const s = atob(t.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((t.length + 3) % 4)); return new TextDecoder().decode(Uint8Array.from(s, c => c.charCodeAt(0))); };

  /* ================= 10. THEME ================= */
  const ICON = { search: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>', sun: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>', moon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>' };
  function applyTheme(t) { document.documentElement.dataset.theme = t === 'light' ? 'light' : 'dark'; const b = $('#themeToggle'); if (b) { b.innerHTML = t === 'light' ? ICON.moon : ICON.sun; b.title = t === 'light' ? 'الوضع الداكن' : 'الوضع الفاتح'; b.setAttribute('aria-label', b.title); } }
  const toggleTheme = () => { const n = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'; write(K.theme, n); applyTheme(n); };

  /* ================= 1. RATINGS & TAGS ================= */
  let ratings = read(K.rate, {}); if (!ratings || typeof ratings !== 'object') ratings = {};
  const saveRatings = () => { write(K.rate, ratings); decorateCards(); renderRatings(); };
  const stars = n => '★'.repeat(n) + '☆'.repeat(5 - n);
  function modalGame() { const t = $('#modalTitle')?.textContent; return G().find(g => g.title === t); }
  function ensureModalBlock() {
    if ($('#modalRating')) return;
    const actions = $('.modal-actions'); if (!actions) return;
    const d = document.createElement('div'); d.className = 'modal-tracker modal-rating'; d.id = 'modalRating';
    d.innerHTML = '<h3>تقييمك ووسومك</h3><div class="star-row" id="starRow">' + [1, 2, 3, 4, 5].map(n => `<button type="button" data-s="${n}" aria-label="${n} نجوم">☆</button>`).join('') + '<button type="button" data-s="0" class="star-clear" aria-label="مسح">×</button></div><input id="ratingTags" type="text" placeholder="وسوم مفصولة بفاصلة (مثل: مريحة، مع صديقي)" maxlength="80"><textarea id="ratingNote" rows="2" maxlength="300" placeholder="ملاحظتك على اللعبة"></textarea><small class="micro-note">يُحفظ تلقائيًا على هذا المتصفح.</small>';
    actions.parentNode.insertBefore(d, actions);
    d.addEventListener('click', e => { const b = e.target.closest('[data-s]'); const g = modalGame(); if (!b || !g) return; const n = Number(b.dataset.s); const r = ratings[g.id] || {}; r.s = n; commit(g, r); paintStars(n); });
    const upd = () => { const g = modalGame(); if (!g) return; const r = ratings[g.id] || {}; r.n = $('#ratingNote').value.trim(); r.t = $('#ratingTags').value.split(/[,،]/).map(x => x.trim()).filter(Boolean).slice(0, 8); commit(g, r); };
    $('#ratingNote').addEventListener('change', upd); $('#ratingTags').addEventListener('change', upd);
  }
  function commit(g, r) { r.u = Date.now(); if (!r.s && !r.n && !(r.t && r.t.length)) delete ratings[g.id]; else ratings[g.id] = r; saveRatings(); }
  function paintStars(n) { $$('#starRow [data-s]').forEach(b => { const v = Number(b.dataset.s); if (v) b.textContent = v <= n ? '★' : '☆'; b.classList.toggle('on', v > 0 && v <= n); }); }
  function fillModal() { ensureModalBlock(); const g = modalGame(); if (!g || !$('#modalRating')) return; const r = ratings[g.id] || {}; paintStars(r.s || 0); $('#ratingNote').value = r.n || ''; $('#ratingTags').value = (r.t || []).join('، '); }
  function decorateCards() {
    $$('.game-card[data-id]').forEach(c => { const r = ratings[c.dataset.id]; let b = c.querySelector('.card-rating'); if (r && r.s) { if (!b) { b = document.createElement('span'); b.className = 'card-rating'; (c.querySelector('.cover-wrap') || c).appendChild(b); } b.textContent = '★' + r.s; } else if (b) b.remove(); });
  }
  function renderRatings() {
    const box = $('#ratingList'); if (!box) return;
    const minS = Number($('#ratingMin').value) || 0, tagSel = $('#ratingTag'), sort = $('#ratingSort').value;
    const allTags = [...new Set(Object.values(ratings).flatMap(r => r.t || []))].sort();
    const keep = tagSel.value; tagSel.innerHTML = '<option value="">كل الوسوم</option>' + allTags.map(t => `<option>${safe(t)}</option>`).join(''); tagSel.value = allTags.includes(keep) ? keep : '';
    let rows = Object.entries(ratings).map(([id, r]) => ({ g: gid(id), r })).filter(x => x.g && (x.r.s || 0) >= minS && (!tagSel.value || (x.r.t || []).includes(tagSel.value)));
    rows.sort(sort === 'recent' ? (a, b) => (b.r.u || 0) - (a.r.u || 0) : sort === 'title' ? (a, b) => a.g.title.localeCompare(b.g.title) : (a, b) => (b.r.s || 0) - (a.r.s || 0) || (b.r.u || 0) - (a.r.u || 0));
    $('#ratingCount').textContent = rows.length.toLocaleString('ar-TN');
    box.innerHTML = rows.length ? rows.map(({ g, r }) => `<li class="rating-row"><button type="button" class="rating-title" data-open="${safe(g.id)}">${safe(g.title)}</button><span class="rating-stars">${r.s ? stars(r.s) : '—'}</span><span class="rating-tags">${(r.t || []).map(t => `<em>${safe(t)}</em>`).join('')}</span>${r.n ? `<small>${safe(r.n)}</small>` : ''}</li>`).join('') : '<li class="empty-note">لم تقيّم أي لعبة بعد. افتح أي لعبة من المكتبة وأعطها نجومًا ووسومًا.</li>';
  }

  /* ================= 4. COMPLETIONS + YEARLY GOAL ================= */
  let done = read(K.done, {}); if (!done || typeof done !== 'object') done = {};
  function hookStatus() {
    const P = window.REIGN_PLUS; if (!P || P.__hooked) return; P.__hooked = true; const orig = P.setStatus;
    P.setStatus = function (id, v) { const res = orig.apply(this, arguments); if (isDone(v)) { if (!done[id]) done[id] = { d: today(), s: v }; else done[id].s = v; } else delete done[id]; write(K.done, done); renderDash(); return res; };
  }
  function renderGoal() {
    const box = $('#goalBox'); if (!box) return; const y = new Date().getFullYear(); const goals = read(K.goal, {}) || {}; const goal = Number(goals[y]) || 0;
    const progress = read(K.prog, {}) || {};
    const finished = Object.entries(done).filter(([id, v]) => String(v.d).startsWith(String(y)) && isDone(progress[id] || v.s)).length;
    const undated = Object.keys(progress).filter(id => isDone(progress[id]) && !done[id]);
    const doy = Math.max(1, Math.round((Date.now() - new Date(y, 0, 1)) / DAY) + 1);
    const proj = Math.round(finished / doy * 365);
    const pct = goal ? Math.min(100, Math.round(finished / goal * 100)) : 0;
    box.innerHTML = `<p class="goal-line"><b>${finished.toLocaleString('ar-TN')}</b> من <b>${goal ? goal.toLocaleString('ar-TN') : '؟'}</b> لعبة أنهيتها في ${y}</p><div class="progress-track"><span style="width:${pct}%"></span></div>` + (goal ? `<p class="micro-note">${finished >= goal ? 'حققت هدفك! 🎉' : `إيقاعك الحالي يعطي نحو ${proj.toLocaleString('ar-TN')} لعبة بنهاية العام` + (proj >= goal ? ' — أنت على المسار الصحيح.' : ` — تحتاج لعبة كل ${Math.max(1, Math.ceil((365 - doy) / Math.max(1, goal - finished)))} يومًا تقريبًا.`)}</p>` : '<p class="micro-note">حدّد هدفك السنوي ليظهر التوقع.</p>');
    const sel = $('#undatedGame'); if (sel) { sel.innerHTML = undated.map(id => gid(id)).filter(Boolean).map(g => `<option value="${safe(g.id)}">${safe(g.title)}</option>`).join('') || '<option value="">لا توجد ألعاب مكتملة بلا تاريخ</option>'; }
    $('#goalInput').value = goal || '';
  }

  /* ================= 2. DASHBOARD CHARTS ================= */
  const PAL = ['#7AA2FF', '#FF8A65', '#5ED6B2', '#C79BFF', '#FFD166', '#6EC8FF', '#FF7B9C', '#9CCB6B', '#B0B8E8', '#F2A65A', '#4FD1C5'];
  function renderDash() {
    renderGoal(); const m = $('#chartMonths'); if (!m) return;
    const ss = read(K.sess, []); const now = new Date(); const buckets = [];
    for (let i = 11; i >= 0; i--) { const d = new Date(now.getFullYear(), now.getMonth() - i, 1); buckets.push({ key: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`, label: MON[d.getMonth()].slice(0, 3), h: 0 }); }
    (Array.isArray(ss) ? ss : []).forEach(s => { const b = buckets.find(x => String(s.date || '').startsWith(x.key)); if (b) b.h += Number(s.hours) || 0; });
    const max = Math.max(1, ...buckets.map(b => b.h));
    m.innerHTML = buckets.map(b => `<div class="bar-col" title="${b.label}: ${Math.round(b.h * 10) / 10} ساعة"><span class="bar-val">${b.h ? Math.round(b.h * 10) / 10 : ''}</span><div class="bar" style="height:${Math.max(2, b.h / max * 100)}%"></div><small>${b.label}</small></div>`).join('');
    const progress = read(K.prog, {}) || {}; const games = G();
    const finished = games.filter(g => isDone(progress[g.id]));
    const byCat = {}; finished.forEach(g => byCat[g.category] = (byCat[g.category] || 0) + 1);
    const cats = Object.entries(byCat).sort((a, b) => b[1] - a[1]); const tot = finished.length;
    const d = $('#chartCats'), lg = $('#chartCatsLegend');
    if (!tot) { d.style.background = 'var(--line)'; d.dataset.n = '0'; lg.innerHTML = '<p class="empty-note">أنهِ بعض الألعاب (غيّر حالتها من نافذة اللعبة) لتظهر هنا.</p>'; }
    else { let acc = 0; d.style.background = 'conic-gradient(' + cats.map(([, n], i) => { const s = acc / tot * 100; acc += n; return `${PAL[i % PAL.length]} ${s}% ${acc / tot * 100}%`; }).join(',') + ')'; d.dataset.n = tot; lg.innerHTML = cats.map(([c, n], i) => `<li><i style="background:${PAL[i % PAL.length]}"></i>${safe(c)} <b>${n}</b></li>`).join(''); }
    const cnt = { done: finished.length, playing: games.filter(g => progress[g.id] === 'playing').length, want: games.filter(g => progress[g.id] === 'want').length };
    cnt.rest = games.length - cnt.done - cnt.playing - cnt.want;
    const parts = [['منجزة', cnt.done, PAL[2]], ['ألعب الآن', cnt.playing, PAL[1]], ['أريد لعبها', cnt.want, PAL[0]], ['غير مصنّفة', cnt.rest, '#3a4373']];
    $('#chartStatus').innerHTML = `<div class="stack">${parts.map(p => `<span style="flex:${Math.max(p[1], 0)};background:${p[2]}" title="${p[0]}"></span>`).join('')}</div><ul class="legend-list">${parts.map(p => `<li><i style="background:${p[2]}"></i>${p[0]} <b>${p[1].toLocaleString('ar-TN')}</b></li>`).join('')}</ul>`;
  }

  /* ================= 5. FRANCHISES ================= */
  const SERIES = [['God of War', /God of War/], ['Resident Evil', /Resident Evil/], ['Assassin’s Creed', /Assassin['’]s Creed/], ['Far Cry', /Far Cry/], ['Souls / Dark Souls', /Dark Souls/], ['Nioh', /^Nioh/], ['Final Fantasy', /Final Fantasy/], ['Kingdom Hearts', /Kingdom Hearts/], ['Yakuza / Judgment', /Yakuza|Like a Dragon|Judgment/], ['Dying Light', /Dying Light/], ['Marvel’s Spider-Man', /Spider-Man/], ['Horizon', /^Horizon/], ['Uncharted', /UNCHARTED|Uncharted/], ['The Last of Us', /Last of Us/], ['Call of Duty', /Call of Duty/], ['Battlefield', /Battlefield/], ['Tom Clancy’s', /Tom Clancy/], ['Watch Dogs', /Watch Dogs/], ['Just Cause', /Just Cause/], ['Mass Effect', /Mass Effect/], ['Fallout', /^Fallout/], ['DOOM', /^DOOM/], ['The Dark Pictures', /Dark Pictures/], ['Dragon’s Dogma', /Dragon['’]s Dogma/], ['Dragon Quest', /Dragon Quest/], ['Dragon Ball', /Dragon Ball/], ['LEGO', /^Lego|^LEGO/i], ['Batman', /Batman/], ['Tomb Raider', /Tomb Raider/], ['Metro', /^Metro/], ['Borderlands', /Borderlands/], ['HITMAN', /HITMAN|Hitman/], ['Wolfenstein', /Wolfenstein/], ['Life is Strange', /Life is Strange/], ['Tales of', /^Tales of/], ['Ni no Kuni', /Ni no Kuni/], ['Persona', /Persona/], ['NieR', /NieR/], ['inFamous', /inFamous/], ['Gravity Rush', /Gravity Rush/], ['Mortal Kombat', /Mortal Kombat/], ['Need for Speed', /Need for Speed/], ['F1', /^F1 /], ['Star Wars', /Star Wars/], ['Sniper Elite', /Sniper Elite/], ['Dishonored', /Dishonored/], ['The Crew', /The Crew/], ['Middle-earth', /Middle-earth/], ['Sonic', /Sonic/], ['Saints Row', /Saints Row/], ['Mafia', /Mafia/], ['Outlast', /Outlast/], ['Little Nightmares', /Little Nightmares/], ['Cyberpunk / Witcher', /Cyberpunk|Witcher/]];
  function renderFranchises() {
    const box = $('#franchiseList'); if (!box) return; const progress = read(K.prog, {}) || {};
    const groups = SERIES.map(([n, re]) => [n, G().filter(g => re.test(g.title)).sort((a, b) => a.year - b.year || a.id - b.id)]).filter(([, l]) => l.length >= 2).sort((a, b) => b[1].length - a[1].length);
    box.innerHTML = groups.map(([n, l]) => { const d = l.filter(g => isDone(progress[g.id])).length; return `<article class="reign-panel franchise"><div class="panel-title-row"><div><span class="kicker">${l.length} عناوين</span><h3>${safe(n)}</h3></div><span class="fr-prog">${d}/${l.length}</span></div><div class="progress-track"><span style="width:${Math.round(d / l.length * 100)}%"></span></div><ol class="fr-list">${l.map(g => `<li><button type="button" data-open="${safe(g.id)}"><b>${safe(g.title)}</b><small>${safe(g.year)}</small></button>${isDone(progress[g.id]) ? '<em class="fr-ok">✓</em>' : progress[g.id] === 'playing' ? '<em class="fr-now">●</em>' : ''}</li>`).join('')}</ol></article>`; }).join('') || '<p class="empty-note">لا توجد سلاسل.</p>';
  }

  /* ================= 6. SHAREABLE LISTS ================= */
  let lists = read(K.lists, []); if (!Array.isArray(lists)) lists = [];
  const saveLists = () => { write(K.lists, lists); renderLists(); };
  function renderLists() {
    const box = $('#listCards'); if (!box) return;
    box.innerHTML = lists.map((l, i) => `<article class="reign-panel list-card" data-i="${i}"><div class="panel-title-row"><div><span class="kicker">${l.ids.length} ألعاب</span><h3>${safe(l.n)}</h3></div></div><ul class="chip-list">${l.ids.map(id => { const g = gid(id); return g ? `<li><button type="button" data-open="${safe(g.id)}">${safe(g.title)}</button><button type="button" class="chip-x" data-rm="${safe(g.id)}" aria-label="إزالة">×</button></li>` : ''; }).join('')}</ul><div class="arcade-form-row"><select class="list-add-sel">${gameOptions()}</select><button type="button" class="btn btn-outline" data-addgame>أضف</button></div><div class="backup-actions"><button type="button" class="btn btn-primary" data-share>نسخ رمز المشاركة</button><button type="button" class="btn btn-outline" data-delist>حذف القائمة</button></div></article>`).join('') || '<p class="empty-note">لا توجد قوائم بعد. أنشئ قائمتك الأولى (مثل «أفضل 10 عندي»).</p>';
  }
  function bindLists() {
    $('#listCreate').addEventListener('click', () => { const n = $('#listName').value.trim().slice(0, 40); if (!n) { toast('اكتب اسم القائمة.'); return; } lists.push({ n, ids: [] }); $('#listName').value = ''; saveLists(); });
    $('#listCards').addEventListener('click', e => {
      const card = e.target.closest('.list-card'); if (!card) return; const l = lists[Number(card.dataset.i)]; if (!l) return;
      if (e.target.closest('[data-addgame]')) { const id = Number(card.querySelector('.list-add-sel').value); if (!l.ids.includes(id)) { l.ids.push(id); saveLists(); } return; }
      const rm = e.target.closest('[data-rm]'); if (rm) { l.ids = l.ids.filter(x => String(x) !== rm.dataset.rm); saveLists(); return; }
      if (e.target.closest('[data-delist]')) { if (confirm('حذف هذه القائمة؟')) { lists.splice(Number(card.dataset.i), 1); saveLists(); } return; }
      if (e.target.closest('[data-share]')) { const code = 'REIGNL1.' + b64(JSON.stringify({ n: l.n, t: l.ids.map(id => gid(id)?.title).filter(Boolean) })); navigator.clipboard?.writeText(code).then(() => toast('تم نسخ رمز المشاركة.'), () => prompt('انسخ الرمز:', code)); if (!navigator.clipboard) prompt('انسخ الرمز:', code); return; }
      const o = e.target.closest('[data-open]'); if (o) open(o.dataset.open);
    });
    $('#listImport').addEventListener('click', () => {
      const raw = $('#listCode').value.trim(); const msg = $('#listMsg');
      try { const [tag, body] = raw.split('.'); if (tag !== 'REIGNL1' || !body) throw 0; const p = JSON.parse(unb64(body)); const norm = t => String(t).toLowerCase(); const ids = []; let miss = 0; (p.t || []).forEach(t => { const g = G().find(x => norm(x.title) === norm(t)); g ? ids.push(g.id) : miss++; }); lists.push({ n: String(p.n || 'قائمة مستوردة').slice(0, 40), ids }); saveLists(); $('#listCode').value = ''; msg.textContent = `تم استيراد ${ids.length} لعبة` + (miss ? ` (${miss} غير موجودة في مكتبتك).` : '.'); }
      catch { msg.textContent = 'رمز غير صالح. تأكد من نسخه كاملًا.'; }
    });
  }

  /* ================= 7. UPCOMING ================= */
  let upcoming = read(K.up, []); if (!Array.isArray(upcoming)) upcoming = [];
  function renderUpcoming() {
    const box = $('#upList'); if (!box) return; const now = new Date(); now.setHours(0, 0, 0, 0);
    const rows = upcoming.map((u, i) => ({ ...u, i, days: Math.round((new Date(u.d + 'T00:00:00') - now) / DAY) })).sort((a, b) => a.days - b.days);
    box.innerHTML = rows.map(u => `<li class="up-row ${u.days < 0 ? 'past' : ''}"><div><b>${safe(u.t)}</b><small>${safe(new Date(u.d + 'T12:00:00').toLocaleDateString('ar-TN', { day: 'numeric', month: 'long', year: 'numeric' }))}</small></div><span class="up-count">${u.days > 0 ? `بعد ${u.days.toLocaleString('ar-TN')} يومًا` : u.days === 0 ? 'يصدر اليوم 🎉' : 'صدرت'}</span><button type="button" class="chip-x" data-uprm="${u.i}" aria-label="حذف">×</button></li>`).join('') || '<li class="empty-note">أضف لعبة وتاريخ إصدارها لتتابع العدّ التنازلي.</li>';
  }
  function bindUpcoming() {
    $('#upForm').addEventListener('submit', e => { e.preventDefault(); const t = $('#upTitle').value.trim().slice(0, 60), d = $('#upDate').value; if (!t || !d) return; upcoming.push({ t, d }); write(K.up, upcoming); $('#upTitle').value = ''; renderUpcoming(); });
    $('#upList').addEventListener('click', e => { const b = e.target.closest('[data-uprm]'); if (!b) return; upcoming.splice(Number(b.dataset.uprm), 1); write(K.up, upcoming); renderUpcoming(); });
  }

  /* ================= 8. CUSTOM TROPHY LISTS ================= */
  let tro = read(K.tro, {}); if (!tro || typeof tro !== 'object') tro = {};
  const saveTro = () => { write(K.tro, tro); renderTro(); };
  function renderTro() {
    const sel = $('#troGame'); if (!sel) return; const id = sel.value; const items = tro[id] || [];
    const d = items.filter(x => x.done).length; const pct = items.length ? Math.round(d / items.length * 100) : 0;
    $('#troBar').style.width = pct + '%'; $('#troStat').textContent = items.length ? `${d.toLocaleString('ar-TN')} من ${items.length.toLocaleString('ar-TN')} (${pct}%)` : 'لا توجد بنود بعد';
    $('#troItems').innerHTML = items.map((x, i) => `<li class="${x.done ? 'done' : ''}"><label><input type="checkbox" data-t="${i}" ${x.done ? 'checked' : ''}> ${safe(x.t)}</label><button type="button" class="chip-x" data-trodel="${i}" aria-label="حذف">×</button></li>`).join('');
    $$('#troGame option').forEach(o => { const n = (tro[o.value] || []).length; const base = o.dataset.n || (o.dataset.n = o.textContent); o.textContent = n ? `${base} ✓${n}` : base; });
  }
  function bindTro() {
    const sel = $('#troGame'); sel.innerHTML = gameOptions(); sel.addEventListener('change', renderTro);
    $('#troForm').addEventListener('submit', e => { e.preventDefault(); const t = $('#troText').value.trim().slice(0, 100); if (!t) return; const id = sel.value; (tro[id] = tro[id] || []).push({ t, done: false }); $('#troText').value = ''; saveTro(); });
    $('#troItems').addEventListener('change', e => { const c = e.target.closest('[data-t]'); if (!c) return; tro[sel.value][Number(c.dataset.t)].done = c.checked; saveTro(); });
    $('#troItems').addEventListener('click', e => { const b = e.target.closest('[data-trodel]'); if (!b) return; tro[sel.value].splice(Number(b.dataset.trodel), 1); if (!tro[sel.value].length) delete tro[sel.value]; saveTro(); });
  }

  /* ================= 3. COMMAND PALETTE ================= */
  let pal, palIn, palList, palItems = [], palIdx = 0;
  function buildPalette() {
    pal = document.createElement('div'); pal.className = 'palette'; pal.hidden = true; pal.innerHTML = '<div class="palette-box" role="dialog" aria-label="بحث سريع"><input id="palIn" type="text" placeholder="ابحث عن لعبة أو قسم أو إجراء…  (Ctrl+K)" autocomplete="off"><ul id="palList"></ul><small>↑↓ للتنقل · Enter للفتح · Esc للإغلاق</small></div>';
    document.body.appendChild(pal); palIn = pal.querySelector('#palIn'); palList = pal.querySelector('#palList');
    palIn.addEventListener('input', () => renderPal(palIn.value));
    pal.addEventListener('click', e => { if (e.target === pal) closePal(); const li = e.target.closest('li[data-k]'); if (li) { palIdx = Number(li.dataset.k); runPal(); } });
    palIn.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') { e.preventDefault(); palIdx = Math.min(palItems.length - 1, palIdx + 1); paintPal(); } else if (e.key === 'ArrowUp') { e.preventDefault(); palIdx = Math.max(0, palIdx - 1); paintPal(); } else if (e.key === 'Enter') { e.preventDefault(); runPal(); } else if (e.key === 'Escape') closePal();
    });
  }
  function actions() {
    const nav = window.REIGN_NAV; const a = [];
    if (nav) Object.keys(nav.tabLabel).forEach(t => a.push({ t: nav.tabLabel[t], h: 'قسم · ' + (nav.HUBS.find(x => x.id === nav.tabHub[t])?.label || ''), f: () => nav.go(t) }));
    a.push({ t: 'سجّل جلسة لعب', h: 'إجراء', f: () => { nav?.go('playroom'); setTimeout(() => $('#arcadeHours')?.focus(), 80); } });
    a.push({ t: 'أضف هدف سنوي', h: 'إجراء', f: () => { nav?.go('dashboard'); setTimeout(() => $('#goalInput')?.focus(), 80); } });
    a.push({ t: 'نسخة احتياطية الآن', h: 'إجراء', f: () => { nav?.go('essentials'); window.REIGN_ESS?.downloadJson?.(); } });
    a.push({ t: 'تبديل الوضع الفاتح/الداكن', h: 'إجراء', f: toggleTheme });
    return a;
  }
  function renderPal(q) {
    q = (q || '').trim().toLowerCase(); const acts = actions(); let gm = [];
    if (q) gm = G().filter(g => g.title.toLowerCase().includes(q) || (g.developer || '').toLowerCase().includes(q) || (g.category || '').includes(q)).slice(0, 8).map(g => ({ t: g.title, h: `لعبة · ${g.category} · ${g.year}`, f: () => { window.REIGN_NAV?.go('games'); open(g.id); } }));
    const am = (q ? acts.filter(a => a.t.toLowerCase().includes(q)) : acts.slice(0, 9)).slice(0, 8);
    palItems = [...gm, ...am]; palIdx = 0;
    palList.innerHTML = palItems.map((x, i) => `<li data-k="${i}"><b>${safe(x.t)}</b><small>${safe(x.h)}</small></li>`).join('') || '<li class="empty-note">لا نتائج.</li>'; paintPal();
  }
  const paintPal = () => $$('#palList li[data-k]').forEach(li => li.classList.toggle('on', Number(li.dataset.k) === palIdx));
  function runPal() { const it = palItems[palIdx]; closePal(); if (it) setTimeout(it.f, 30); }
  function openPal() { if (!pal) buildPalette(); pal.hidden = false; palIn.value = ''; renderPal(''); palIn.focus(); }
  function closePal() { if (pal) pal.hidden = true; }
  window.REIGN_PALETTE = { open: openPal, close: closePal };

  /* ================= wiring ================= */
  function headerButtons() {
    const h = $('.header-actions'); if (!h) return;
    const s = document.createElement('button'); s.className = 'icon-button'; s.id = 'paletteBtn'; s.type = 'button'; s.title = 'بحث سريع (Ctrl+K)'; s.setAttribute('aria-label', 'بحث سريع'); s.innerHTML = ICON.search; s.addEventListener('click', openPal);
    const t = document.createElement('button'); t.className = 'icon-button'; t.id = 'themeToggle'; t.type = 'button'; t.addEventListener('click', toggleTheme);
    h.prepend(t); h.prepend(s);
  }
  function init() {
    headerButtons(); applyTheme(read(K.theme, 'dark')); hookStatus();
    const sub = e => { const o = e.target.closest('[data-open]'); if (o) open(o.dataset.open); };
    ['#ratingList', '#franchiseList'].forEach(s => $(s)?.addEventListener('click', sub));
    ['#ratingMin', '#ratingTag', '#ratingSort'].forEach(s => $(s)?.addEventListener('input', renderRatings));
    $('#goalSave')?.addEventListener('click', () => { const v = Math.max(0, Math.min(500, Number($('#goalInput').value) || 0)); const g = read(K.goal, {}) || {}; g[new Date().getFullYear()] = v; write(K.goal, g); renderGoal(); toast('تم حفظ الهدف.'); });
    $('#undatedSave')?.addEventListener('click', () => { const id = $('#undatedGame').value; if (!id) return; done[id] = { d: $('#undatedDate').value || today(), s: (read(K.prog, {}) || {})[id] || 'completed' }; write(K.done, done); renderDash(); });
    $('#undatedDate') && ($('#undatedDate').value = today());
    bindLists(); bindUpcoming(); bindTro();
    new MutationObserver(() => { if (!$('#modalBackdrop').hidden) fillModal(); }).observe($('#modalBackdrop'), { attributes: true, attributeFilter: ['hidden'] });
    ['#gamesGrid', '#favoritesGrid'].forEach(s => { const g = $(s); if (g) new MutationObserver(decorateCards).observe(g, { childList: true }); });
    decorateCards(); renderRatings(); renderDash(); renderFranchises(); renderLists(); renderUpcoming(); renderTro();
    document.addEventListener('reign:tab', e => { const t = e.detail.tab; if (t === 'dashboard') renderDash(); else if (t === 'franchises') renderFranchises(); else if (t === 'myratings') renderRatings(); else if (t === 'mytrophies') renderTro(); else if (t === 'upcoming') renderUpcoming(); else if (t === 'mylists') renderLists(); });
    document.addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); pal && !pal.hidden ? closePal() : openPal(); } else if (e.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || '')) { e.preventDefault(); openPal(); } else if (e.key === 'Escape') closePal(); });
    const hp = $('.hero-proof b'); if (hp) hp.textContent = G().length + '+';
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
