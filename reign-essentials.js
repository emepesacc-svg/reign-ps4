/* REIGN ESSENTIALS — backlog planner, year in review, device transfer code, backup reminder.
   Local-first: reads existing REIGN localStorage keys only. No server, no PSN access. */
(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const safe = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const META = { last: 'reignLastBackupV1', snooze: 'reignBackupSnoozeV1', first: 'reignFirstUseV1' };
  const META_KEYS = Object.values(META);
  const DAY = 86400000;
  const read = (k, fb) => { try { const v = localStorage.getItem(k); return v === null ? fb : JSON.parse(v); } catch { return fb; } };
  const put = (k, v) => { try { localStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v)); return true; } catch { return false; } };
  const toast = msg => { const t = $('#toast'); if (!t) return; t.textContent = msg; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2800); };
  const allGames = () => (typeof games !== 'undefined' && Array.isArray(games)) ? games : [];
  const fmtDate = d => d.toLocaleDateString('ar-TN', { day: 'numeric', month: 'long', year: 'numeric' });
  const dataKeys = () => Object.keys(localStorage).filter(k => k.startsWith('reign') && !META_KEYS.includes(k));
  const hasData = () => dataKeys().some(k => { const v = localStorage.getItem(k); return v && !['[]', '{}', 'null', '""'].includes(v) && k !== 'reignLanguageV1'; });

  if (!localStorage.getItem(META.first)) put(META.first, String(Date.now()));

  /* ---------- Backup / transfer ---------- */
  const snapshot = () => ({ format: 'REIGN_TRANSFER', version: 1, createdAt: new Date().toISOString(),
    data: Object.fromEntries(dataKeys().map(k => [k, localStorage.getItem(k)])) });
  const b64 = bytes => { let s = ''; bytes.forEach(b => s += String.fromCharCode(b)); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); };
  const unb64 = str => { const s = atob(str.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((str.length + 3) % 4)); return Uint8Array.from(s, c => c.charCodeAt(0)); };
  const pipe = async (bytes, stream) => new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(stream)).arrayBuffer());
  async function encode(obj) {
    const raw = new TextEncoder().encode(JSON.stringify(obj));
    if (typeof CompressionStream === 'function') return 'REIGN1.' + b64(await pipe(raw, new CompressionStream('gzip')));
    return 'REIGN0.' + b64(raw);
  }
  async function decode(code) {
    const [tag, body] = code.trim().split('.');
    if (!body) throw new Error('bad');
    let bytes = unb64(body.trim());
    if (tag === 'REIGN1') bytes = await pipe(bytes, new DecompressionStream('gzip'));
    else if (tag !== 'REIGN0') throw new Error('bad');
    return JSON.parse(new TextDecoder().decode(bytes));
  }
  const markBackup = () => { put(META.last, String(Date.now())); renderReminder(); };
  const msg = t => { const m = $('#transferMsg'); if (m) m.textContent = t; };

  function downloadJson() {
    const blob = new Blob([JSON.stringify(snapshot(), null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = `reign-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    markBackup(); toast('تم تنزيل النسخة الاحتياطية.');
  }

  function bindTransfer() {
    const box = $('#transferCode'); if (!box) return;
    $('#transferMake').addEventListener('click', async () => {
      try {
        const code = await encode(snapshot());
        box.value = code; $('#transferCopy').hidden = false; markBackup();
        msg(`تم إنشاء الرمز (${code.length.toLocaleString('ar-TN')} حرفًا). انسخه والصقه على جهازك الآخر.`);
      } catch { msg('تعذّر إنشاء الرمز في هذا المتصفح. استخدم تنزيل نسخة JSON.'); }
    });
    $('#transferCopy').addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(box.value); toast('تم نسخ الرمز.'); }
      catch { box.select(); document.execCommand?.('copy'); toast('حدّد الرمز وانسخه يدويًا إن لم يُنسخ.'); }
    });
    $('#transferFile').addEventListener('click', downloadJson);
    $('#transferImport').addEventListener('click', async () => {
      const code = box.value.trim(); if (!code) { msg('الصق رمز النقل أولًا.'); return; }
      try {
        const p = await decode(code);
        if (p.format !== 'REIGN_TRANSFER' || !p.data || typeof p.data !== 'object') throw new Error('bad');
        const entries = Object.entries(p.data).filter(([k, v]) => k.startsWith('reign') && !META_KEYS.includes(k) && typeof v === 'string');
        if (!entries.length) throw new Error('empty');
        if (!confirm(`سيتم استبدال ${entries.length} عنصرًا من بيانات هذا المتصفح بالبيانات المستوردة. صدّر نسخة احتياطية أولًا إن لزم. هل تريد المتابعة؟`)) return;
        entries.forEach(([k, v]) => put(k, v));
        msg('تم الاستيراد. سيُعاد تحميل الصفحة…'); setTimeout(() => location.reload(), 900);
      } catch { msg('الرمز غير صالح أو تالف. تأكد من نسخه كاملًا.'); }
    });
  }

  window.REIGN_ESS = { downloadJson };

  /* ---------- Backup reminder ---------- */
  function renderReminder() {
    const el = $('#backupReminder'); if (!el) return;
    const now = Date.now(), last = Number(localStorage.getItem(META.last)) || 0, first = Number(localStorage.getItem(META.first)) || now;
    const snooze = Number(localStorage.getItem(META.snooze)) || 0;
    const due = hasData() && now > snooze && (last ? now - last > 14 * DAY : now - first > 3 * DAY);
    el.hidden = !due;
    if (due) $('#backupReminderText').textContent = last
      ? `مرّت ${Math.floor((now - last) / DAY)} يومًا على آخر نسخة احتياطية. بياناتك محفوظة في هذا المتصفح فقط وقد تضيع إذا مُسحت بياناته.`
      : 'لم تحفظ أي نسخة احتياطية بعد. بياناتك محفوظة في هذا المتصفح فقط وقد تضيع إذا مُسحت بياناته.';
  }
  function bindReminder() {
    const el = $('#backupReminder'); if (!el) return;
    const main = document.querySelector('main'); if (main) main.prepend(el);
    $('#remindBackupNow').addEventListener('click', downloadJson);
    $('#remindSnooze').addEventListener('click', () => { put(META.snooze, String(Date.now() + 3 * DAY)); renderReminder(); });
    document.addEventListener('click', e => { if (e.target.closest?.('#exportBackup')) setTimeout(markBackup, 50); });
    renderReminder();
  }

  /* ---------- Backlog planner ---------- */
  const TARGET_LABEL = { main: 'القصة', extra: 'القصة + الإضافات', complete: '100%' };
  const hoursOf = (g, target) => { const t = g.times || {}; return Number(t[target]) || Number(t.main) || 0; };
  function renderPlanner() {
    const out = $('#plannerResult'); if (!out) return;
    const perWeek = Math.max(1, Math.min(100, Number($('#plannerHours').value) || 10));
    const target = $('#plannerTarget').value, order = $('#plannerOrder').value, useFav = $('#plannerFav').checked;
    const progress = read('reignProgressV1', {}) || {};
    const favs = new Set((read('reignFavorites', []) || []).map(Number));
    let list = allGames().filter(g => { const s = progress[g.id]; return s === 'playing' || s === 'want' || (useFav && favs.has(Number(g.id)) && s !== 'completed' && s !== 'platinum'); })
      .map(g => ({ g, h: hoursOf(g, target), playing: progress[g.id] === 'playing' })).filter(x => x.h > 0);
    if (!list.length) { out.innerHTML = '<p class="empty-note">لا توجد ألعاب في قائمتك بعد. اختر حالة «ألعب الآن» أو «أريد لعبها» من نافذة أي لعبة، أو فعّل خيار المفضلة.</p>'; return; }
    const cmp = { short: (a, b) => a.h - b.h, long: (a, b) => b.h - a.h, status: (a, b) => (b.playing - a.playing) || (a.h - b.h) }[order];
    list.sort(cmp);
    let cum = 0; const start = new Date();
    const rows = list.map((x, i) => {
      cum += x.h; const d = new Date(start.getTime() + (cum / perWeek) * 7 * DAY);
      return `<li class="planner-row"><span class="planner-n">${i + 1}</span><div><b>${safe(x.g.title)}</b><small>${x.h.toLocaleString('ar-TN')} ساعة · تنتهي نحو ${fmtDate(d)}</small></div>${x.playing ? '<em class="planner-tag">جارية</em>' : `<button class="btn btn-outline planner-start" data-id="${safe(x.g.id)}" type="button">ابدأ</button>`}</li>`;
    }).join('');
    const end = new Date(start.getTime() + (cum / perWeek) * 7 * DAY);
    out.innerHTML = `<p class="planner-summary"><b>${list.length.toLocaleString('ar-TN')}</b> ألعاب · <b>${cum.toLocaleString('ar-TN')}</b> ساعة (${TARGET_LABEL[target]}) · تنتهي نحو <b>${fmtDate(end)}</b></p><ol class="planner-list">${rows}</ol><p class="micro-note">أوقات اللعب تقديرية، وحساب الألعاب الجارية يبدأ من الصفر لأن الموقع لا يعرف تقدمك فيها.</p>`;
  }
  function bindPlanner() {
    ['#plannerHours', '#plannerTarget', '#plannerOrder', '#plannerFav'].forEach(s => $(s)?.addEventListener('input', renderPlanner));
    $('#plannerResult')?.addEventListener('click', e => {
      const b = e.target.closest('.planner-start'); if (!b) return;
      const id = b.dataset.id;
      if (window.REIGN_PLUS?.setStatus) window.REIGN_PLUS.setStatus(isNaN(id) ? id : Number(id), 'playing');
      else { const p = read('reignProgressV1', {}) || {}; p[id] = 'playing'; put('reignProgressV1', p); }
      renderPlanner();
    });
  }

  /* ---------- Year in review ---------- */
  const MONTHS = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  let review = null;
  function computeReview(year) {
    const all = read('reignArcadeSessionsV1', []); const ss = (Array.isArray(all) ? all : []).filter(s => s && String(s.date || '').startsWith(String(year)));
    if (!ss.length) return null;
    const hours = ss.reduce((t, s) => t + (Number(s.hours) || 0), 0);
    const byGame = {}, byMonth = Array(12).fill(0), byMood = {};
    ss.forEach(s => { const n = s.gameTitle || s.gameId; byGame[n] = (byGame[n] || 0) + (Number(s.hours) || 0); byMonth[Number(String(s.date).slice(5, 7)) - 1] += Number(s.hours) || 0; if (s.mood) byMood[s.mood] = (byMood[s.mood] || 0) + 1; });
    const top = Object.entries(byGame).sort((a, b) => b[1] - a[1]).slice(0, 3);
    const days = [...new Set(ss.map(s => s.date))].sort(); let best = 0, run = 0, prev = null;
    days.forEach(d => { const t = new Date(d + 'T12:00:00').getTime(); run = prev !== null && Math.round((t - prev) / DAY) === 1 ? run + 1 : 1; best = Math.max(best, run); prev = t; });
    const mi = byMonth.indexOf(Math.max(...byMonth)); const mood = Object.entries(byMood).sort((a, b) => b[1] - a[1])[0];
    return { year, hours: Math.round(hours * 10) / 10, sessions: ss.length, days: days.length, best, top, month: MONTHS[mi], mood: mood ? mood[0] : '🎮', games: Object.keys(byGame).length };
  }
  function renderReview() {
    const sel = $('#wrappedYear'), box = $('#wrappedStats'); if (!sel || !box) return;
    const sessions = read('reignArcadeSessionsV1', []); const years = [...new Set((Array.isArray(sessions) ? sessions : []).map(s => String(s.date || '').slice(0, 4)).filter(Boolean))];
    const cur = String(new Date().getFullYear()); if (!years.includes(cur)) years.push(cur); years.sort().reverse();
    const keep = sel.value && years.includes(sel.value) ? sel.value : years[0];
    sel.innerHTML = years.map(y => `<option value="${y}">${y}</option>`).join(''); sel.value = keep;
    review = computeReview(keep);
    $('#wrappedDownload').disabled = !review;
    if (!review) { box.innerHTML = '<p class="empty-note">لا توجد جلسات مسجّلة في هذه السنة. سجّل جلساتك في PLAYROOM لتظهر هنا.</p>'; return; }
    const cell = (l, v) => `<div class="wrapped-cell"><small>${l}</small><b>${safe(v)}</b></div>`;
    box.innerHTML = cell('ساعات اللعب', review.hours.toLocaleString('ar-TN')) + cell('الجلسات', review.sessions.toLocaleString('ar-TN')) + cell('أيام نشطة', review.days.toLocaleString('ar-TN')) + cell('أطول سلسلة أيام', review.best.toLocaleString('ar-TN')) + cell('أنشط شهر', review.month) + cell('المزاج الغالب', review.mood)
      + `<div class="wrapped-top"><small>أكثر ألعابك لعبًا</small><ol>${review.top.map(([n, h]) => `<li>${safe(n)} <em>${(Math.round(h * 10) / 10).toLocaleString('ar-TN')} س</em></li>`).join('')}</ol></div>`;
  }
  function drawCard() {
    if (!review) return;
    const c = document.createElement('canvas'); c.width = 1080; c.height = 1350; const x = c.getContext('2d');
    const g = x.createLinearGradient(0, 0, 1080, 1350); g.addColorStop(0, '#0A0E1F'); g.addColorStop(1, '#1B2556'); x.fillStyle = g; x.fillRect(0, 0, 1080, 1350);
    x.strokeStyle = 'rgba(122,162,255,.45)'; x.lineWidth = 3; x.strokeRect(40, 40, 1000, 1270);
    x.direction = 'rtl'; x.textAlign = 'center';
    const F = (w, s) => `${w} ${s}px Cairo, Rajdhani, sans-serif`;
    x.fillStyle = '#7AA2FF'; x.font = F(700, 34); x.fillText('REIGN · ملخص العام', 540, 130);
    x.fillStyle = '#EEF1FF'; x.font = F(800, 150); x.fillText(String(review.year), 540, 300);
    x.fillStyle = '#FF8A65'; x.font = F(800, 120); x.fillText(review.hours.toLocaleString('ar-TN') + ' ساعة', 540, 450);
    x.fillStyle = '#A5AEDB'; x.font = F(600, 36); x.fillText(`${review.sessions.toLocaleString('ar-TN')} جلسة · ${review.days.toLocaleString('ar-TN')} يومًا نشطًا · أطول سلسلة ${review.best.toLocaleString('ar-TN')}`, 540, 520);
    x.fillStyle = '#7AA2FF'; x.font = F(700, 38); x.fillText('أكثر ألعابك لعبًا', 540, 650);
    x.fillStyle = '#EEF1FF'; x.font = F(700, 52);
    review.top.forEach(([n, h], i) => { const t = n.length > 26 ? n.slice(0, 25) + '…' : n; x.fillText(`${i + 1}. ${t}`, 540, 740 + i * 95); x.fillStyle = '#A5AEDB'; x.font = F(600, 30); x.fillText(`${(Math.round(h * 10) / 10).toLocaleString('ar-TN')} ساعة`, 540, 780 + i * 95); x.fillStyle = '#EEF1FF'; x.font = F(700, 52); });
    x.fillStyle = '#A5AEDB'; x.font = F(600, 38); x.fillText(`أنشط شهر: ${review.month}   ·   المزاج الغالب: ${review.mood}`, 540, 1100);
    x.fillStyle = '#7AA2FF'; x.font = F(700, 34); x.fillText('REIGN — مشروع مستقل لعشاق الألعاب', 540, 1250);
    c.toBlob(b => { if (!b) return; const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = `reign-${review.year}.png`; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); }, 'image/png');
  }
  function bindReview() { $('#wrappedYear')?.addEventListener('change', renderReview); $('#wrappedDownload')?.addEventListener('click', drawCard); }

  /* ---------- init ---------- */
  function refresh() { renderPlanner(); renderReview(); }
  function init() {
    bindTransfer(); bindReminder(); bindPlanner(); bindReview(); refresh();
    const sec = $('#essentials');
    if (sec && 'IntersectionObserver' in window) new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) refresh(); }, { threshold: 0.05 }).observe(sec);
    window.addEventListener('storage', () => { refresh(); renderReminder(); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
