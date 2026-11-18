/* REIGN MORE — advanced filters & saved views, deep links, notebook (IndexedDB), CSV export & print,
   price wishlist, co-op planner, bonus XP/badges, accessibility. Local-first (localStorage / IndexedDB). */
(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));
  const safe = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const K = { views: 'reignViewsV1', wish: 'reignWishlistV1', coop: 'reignCoopV1', a11y: 'reignA11yV1', nbCount: 'reignNotebookCountV1', rate: 'reignRatingsV1', prog: 'reignProgressV1', done: 'reignCompletionsV1', goal: 'reignYearGoalV1', lists: 'reignListsV1', tro: 'reignCustomTrophiesV1' };
  const read = (k, fb) => { try { const v = localStorage.getItem(k); return v === null ? fb : JSON.parse(v); } catch { return fb; } };
  const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch { return false; } };
  const toast = m => { const t = $('#toast'); if (!t) return; t.textContent = m; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2600); };
  const G = () => (typeof games !== 'undefined' && Array.isArray(games)) ? games : [];
  const gid = id => G().find(g => String(g.id) === String(id));
  const openG = id => typeof window.openGame === 'function' && window.openGame(Number(id));
  const isDone = s => s === 'completed' || s === 'platinum';
  const gameOptions = () => G().slice().sort((a, b) => a.title.localeCompare(b.title)).map(g => `<option value="${safe(g.id)}">${safe(g.title)}</option>`).join('');
  const dl = (name, blob) => { const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 1500); };
  const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
  const fmtD = d => { try { return new Date(d + 'T12:00:00').toLocaleDateString('ar-TN', { day: 'numeric', month: 'long', year: 'numeric' }); } catch { return d; } };

  /* ================= 1. ADVANCED FILTERS + SAVED VIEWS ================= */
  const F0 = () => ({ yf: '', yt: '', mh: '', dev: '', st: '', rt: '0', hd: false });
  let F = F0(), P = {}, R = {};
  window.REIGN_FILTER = {
    prepare() { P = read(K.prog, {}) || {}; R = read(K.rate, {}) || {}; },
    test(g) {
      if (F.yf && g.year < Number(F.yf)) return false; if (F.yt && g.year > Number(F.yt)) return false;
      if (F.mh && !(g.times && g.times.main && g.times.main <= Number(F.mh))) return false;
      if (F.dev && g.developer !== F.dev) return false;
      const s = P[g.id] || 'none';
      if (F.st && (F.st === 'none' ? (s !== 'none' && s !== 'notstarted') : s !== F.st)) return false;
      if (F.hd && isDone(s)) return false;
      if (Number(F.rt) && !((R[g.id] && R[g.id].s) >= Number(F.rt))) return false;
      return true;
    }
  };
  const rerender = () => { try { showAll = false; } catch {} typeof renderLibrary === 'function' && renderLibrary(); };
  function readF() { F = { yf: $('#fYF').value, yt: $('#fYT').value, mh: $('#fMH').value, dev: $('#fDev').value, st: $('#fSt').value, rt: $('#fRt').value, hd: $('#fHd').checked }; rerender(); const n = Object.entries(F).filter(([k, v]) => v && v !== '0').length; const s = $('#advFilters summary'); if (s) s.textContent = 'فلاتر متقدمة وعروض محفوظة' + (n ? ` (${n} فعّالة)` : ''); }
  function writeF() { $('#fYF').value = F.yf; $('#fYT').value = F.yt; $('#fMH').value = F.mh; $('#fDev').value = F.dev; $('#fSt').value = F.st; $('#fRt').value = F.rt; $('#fHd').checked = !!F.hd; }
  let views = read(K.views, []); if (!Array.isArray(views)) views = [];
  function renderViews() {
    const ul = $('#viewList'); if (!ul) return;
    ul.innerHTML = views.map((v, i) => `<li><button type="button" data-view="${i}">${safe(v.n)}</button><button type="button" class="chip-x" data-vdel="${i}" aria-label="حذف">×</button></li>`).join('') || '<li class="empty-note">لا عروض محفوظة.</li>';
  }
  function applyView(v) {
    F = Object.assign(F0(), v.f); writeF();
    try { category = v.c || 'الكل'; query = v.q || ''; sort = v.s || 'featured'; } catch {}
    const si = $('#searchInput'); if (si) si.value = (typeof query !== 'undefined' ? query : '');
    const ss = $('#sortSelect'); if (ss) ss.value = (typeof sort !== 'undefined' ? sort : 'featured');
    $$('.filter-pill').forEach(b => b.classList.toggle('active', b.dataset.category === (typeof category !== 'undefined' ? category : 'الكل')));
    rerender(); readF();
  }
  function buildFilters() {
    const sw = $('.sort-wrap'); if (sw && $('#sortSelect') && !$('#sortSelect option[value="myrating"]')) { const o = document.createElement('option'); o.value = 'myrating'; o.textContent = 'تقييمي الأعلى'; $('#sortSelect').appendChild(o); }
    const anchor = $('#activeFilters'); if (!anchor || $('#advFilters')) return;
    const devs = {}; G().forEach(g => { if (g.developer) devs[g.developer] = (devs[g.developer] || 0) + 1; });
    const devList = Object.entries(devs).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, 60);
    const d = document.createElement('details'); d.id = 'advFilters'; d.className = 'adv-filters';
    d.innerHTML = `<summary>فلاتر متقدمة وعروض محفوظة</summary><div class="adv-grid"><label>من سنة<input id="fYF" type="number" min="1990" max="2030" placeholder="2015"></label><label>إلى سنة<input id="fYT" type="number" min="1990" max="2030" placeholder="2024"></label><label>أقصى مدة للقصة (ساعة)<input id="fMH" type="number" min="1" max="300" placeholder="20"></label><label>المطوّر<select id="fDev"><option value="">الكل</option>${devList.map(([n, c]) => `<option value="${safe(n)}">${safe(n)} (${c})</option>`).join('')}</select></label><label>حالتي<select id="fSt"><option value="">الكل</option><option value="none">غير مصنّفة</option><option value="want">أريد لعبها</option><option value="playing">ألعب الآن</option><option value="completed">مكتملة</option><option value="platinum">بلاتينيوم</option></select></label><label>تقييمي (على الأقل)<select id="fRt"><option value="0">الكل</option><option value="3">★★★ فأكثر</option><option value="4">★★★★ فأكثر</option><option value="5">★★★★★</option></select></label><label class="adv-chk"><input id="fHd" type="checkbox"> أخفِ ما أنهيته</label><div class="backup-actions"><button class="btn btn-outline" id="fReset" type="button">مسح الفلاتر المتقدمة</button></div></div><div class="adv-views"><div class="arcade-form-row"><label>احفظ الفلاتر الحالية كعرض<input id="viewName" type="text" maxlength="30" placeholder="مثال: قصيرة لم ألعبها"></label><div class="backup-actions"><button class="btn btn-primary" id="viewSave" type="button">حفظ العرض</button></div></div><ul id="viewList" class="chip-list"></ul></div>`;
    anchor.parentNode.insertBefore(d, anchor.nextSibling);
    $$('#advFilters input,#advFilters select').forEach(e => { if (e.id !== 'viewName') e.addEventListener('input', readF); });
    $('#fReset').addEventListener('click', () => { F = F0(); writeF(); readF(); });
    $('#viewSave').addEventListener('click', () => { const n = $('#viewName').value.trim().slice(0, 30); if (!n) { toast('اكتب اسم العرض.'); return; } readF(); views.push({ n, f: { ...F }, c: typeof category !== 'undefined' ? category : 'الكل', q: typeof query !== 'undefined' ? query : '', s: typeof sort !== 'undefined' ? sort : 'featured' }); write(K.views, views); $('#viewName').value = ''; renderViews(); toast('تم حفظ العرض.'); });
    $('#viewList').addEventListener('click', e => { const a = e.target.closest('[data-view]'), x = e.target.closest('[data-vdel]'); if (a) applyView(views[Number(a.dataset.view)]); else if (x) { views.splice(Number(x.dataset.vdel), 1); write(K.views, views); renderViews(); } });
    renderViews();
  }

  /* ================= 3. DEEP LINKS ================= */
  function openFromHash() { const m = /^#game-(\d+)$/.exec(location.hash); if (m && gid(m[1])) { window.REIGN_NAV?.show?.('games'); setTimeout(() => openG(m[1]), 60); } }
  function bindDeepLinks() {
    const back = $('#modalBackdrop'); if (!back) return;
    new MutationObserver(() => {
      if (!back.hidden) { const g = G().find(x => x.title === $('#modalTitle')?.textContent); if (g) { try { history.replaceState(null, '', '#game-' + g.id); } catch {} addCopyLink(); } }
      else { const t = window.REIGN_NAV?.current?.().tab || 'games'; try { history.replaceState(null, '', '#' + t); } catch {} }
    }).observe(back, { attributes: true, attributeFilter: ['hidden'] });
    window.addEventListener('hashchange', openFromHash);
    openFromHash();
  }
  function addCopyLink() {
    if ($('#copyGameLink')) return; const acts = $('.modal-actions'); if (!acts) return;
    const b = document.createElement('button'); b.type = 'button'; b.id = 'copyGameLink'; b.className = 'btn btn-outline'; b.textContent = 'نسخ رابط اللعبة';
    b.addEventListener('click', () => { const url = location.origin + location.pathname + location.hash; (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject()).then(() => toast('تم نسخ الرابط.'), () => prompt('انسخ الرابط:', url)); });
    acts.appendChild(b);
  }

  /* ================= 4. NOTEBOOK (IndexedDB) ================= */
  const idb = () => new Promise((res, rej) => { if (!window.indexedDB) return rej(new Error('no idb')); const r = indexedDB.open('reignNotebookDB', 1); r.onupgradeneeded = () => r.result.createObjectStore('e', { keyPath: 'id' }); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });
  const dbAll = async () => { const d = await idb(); return new Promise((res, rej) => { const q = d.transaction('e').objectStore('e').getAll(); q.onsuccess = () => res(q.result); q.onerror = () => rej(q.error); }); };
  const dbPut = async e => { const d = await idb(); return new Promise((res, rej) => { const t = d.transaction('e', 'readwrite'); t.objectStore('e').put(e); t.oncomplete = res; t.onerror = () => rej(t.error); }); };
  const dbDel = async id => { const d = await idb(); return new Promise((res, rej) => { const t = d.transaction('e', 'readwrite'); t.objectStore('e').delete(id); t.oncomplete = res; t.onerror = () => rej(t.error); }); };
  const shrink = file => new Promise(res => { const img = new Image(), url = URL.createObjectURL(file); img.onload = () => { const m = 1100, s = Math.min(1, m / Math.max(img.width, img.height)); const c = document.createElement('canvas'); c.width = Math.round(img.width * s); c.height = Math.round(img.height * s); c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); URL.revokeObjectURL(url); res(c.toDataURL('image/jpeg', .75)); }; img.onerror = () => { URL.revokeObjectURL(url); res(null); }; img.src = url; });
  async function renderNotebook() {
    const box = $('#nbList'); if (!box) return; let rows = [];
    try { rows = await dbAll(); } catch { box.innerHTML = '<li class="empty-note">التخزين المحلي للصور غير متاح في هذا المتصفح (وضع التصفح الخاص؟).</li>'; return; }
    const f = $('#nbFilter').value; rows = rows.filter(r => !f || String(r.g) === f).sort((a, b) => b.id - a.id);
    write(K.nbCount, rows.length && !f ? rows.length : read(K.nbCount, 0));
    box.innerHTML = rows.map(r => `<li class="nb-entry" data-id="${r.id}"><div class="nb-head"><b>${safe(gid(r.g)?.title || 'لعبة')}</b><small>${safe(new Date(r.id).toLocaleDateString('ar-TN'))}</small><button type="button" class="chip-x" data-nbdel="${r.id}" aria-label="حذف">×</button></div>${r.t ? `<p>${safe(r.t)}</p>` : ''}<div class="nb-imgs">${(r.imgs || []).map(s => `<img src="${s}" alt="لقطة من ${safe(gid(r.g)?.title || '')}" loading="lazy">`).join('')}</div></li>`).join('') || '<li class="empty-note">لا ملاحظات بعد. اكتب أول ملاحظة أو أضف لقطة شاشة.</li>';
  }
  function bindNotebook() {
    const g = $('#nbGame'); if (!g) return; g.innerHTML = gameOptions(); $('#nbFilter').innerHTML = '<option value="">كل الألعاب</option>' + gameOptions(); $('#nbFilter').addEventListener('change', renderNotebook);
    $('#nbSave').addEventListener('click', async () => {
      const t = $('#nbText').value.trim().slice(0, 1500), files = Array.from($('#nbFiles').files || []).slice(0, 4);
      if (!t && !files.length) { toast('اكتب ملاحظة أو اختر صورة.'); return; }
      const imgs = (await Promise.all(files.map(shrink))).filter(Boolean);
      try { await dbPut({ id: Date.now(), g: Number(g.value), t, imgs }); $('#nbText').value = ''; $('#nbFiles').value = ''; const all = await dbAll(); write(K.nbCount, all.length); await renderNotebook(); toast('تم حفظ الملاحظة.'); } catch { toast('تعذّر الحفظ (قد تكون مساحة التخزين ممتلئة).'); }
    });
    $('#nbList').addEventListener('click', async e => { const d = e.target.closest('[data-nbdel]'); if (d) { if (!confirm('حذف هذه الملاحظة؟')) return; await dbDel(Number(d.dataset.nbdel)); const all = await dbAll(); write(K.nbCount, all.length); renderNotebook(); return; } const im = e.target.closest('.nb-imgs img'); if (im) im.classList.toggle('big'); });
    $('#nbExport').addEventListener('click', async () => { try { dl(`reign-notebook-${today()}.json`, new Blob([JSON.stringify({ format: 'REIGN_NOTEBOOK', version: 1, entries: await dbAll() })], { type: 'application/json' })); } catch { toast('تعذّر التصدير.'); } });
    $('#nbImport').addEventListener('change', async e => { const f = e.target.files?.[0]; if (!f) return; try { const p = JSON.parse(await f.text()); if (p.format !== 'REIGN_NOTEBOOK' || !Array.isArray(p.entries)) throw 0; for (const r of p.entries) if (r && r.id && r.g) await dbPut({ id: r.id, g: r.g, t: String(r.t || '').slice(0, 1500), imgs: (r.imgs || []).filter(s => /^data:image\/jpeg;base64,/.test(s)).slice(0, 4) }); write(K.nbCount, (await dbAll()).length); renderNotebook(); toast('تم استيراد الدفتر.'); } catch { toast('ملف غير صالح.'); } e.target.value = ''; });
    renderNotebook();
  }

  /* ================= 5. EXPORT + PRINT ================= */
  const csv = rows => '\ufeff' + rows.map(r => r.map(c => { c = String(c ?? ''); return /[",\n]/.test(c) ? '"' + c.replace(/"/g, '""') + '"' : c; }).join(',')).join('\r\n');
  const STAT = { playing: 'ألعب الآن', completed: 'مكتملة', platinum: 'بلاتينيوم', want: 'أريد لعبها' };
  function exportLibrary() {
    const p = read(K.prog, {}) || {}, r = read(K.rate, {}) || {}, d = read(K.done, {}) || {};
    const rows = [['id', 'العنوان', 'السنة', 'النوع', 'المطوّر', 'القصة (س)', 'مع الإضافات (س)', '100% (س)', 'حالتي', 'تقييمي', 'وسومي', 'ملاحظتي', 'تاريخ الإنهاء']];
    G().forEach(g => { const x = r[g.id] || {}; rows.push([g.id, g.title, g.year, g.category, g.developer, g.times?.main, g.times?.extra, g.times?.complete, STAT[p[g.id]] || '', x.s || '', (x.t || []).join('؛'), x.n || '', d[g.id]?.d || '']); });
    dl(`reign-library-${today()}.csv`, new Blob([csv(rows)], { type: 'text/csv;charset=utf-8' }));
  }
  function exportRatings() {
    const r = read(K.rate, {}) || {}; const rows = [['العنوان', 'تقييمي', 'وسومي', 'ملاحظتي']];
    Object.entries(r).forEach(([id, x]) => { const g = gid(id); if (g) rows.push([g.title, x.s || '', (x.t || []).join('؛'), x.n || '']); });
    dl(`reign-ratings-${today()}.csv`, new Blob([csv(rows)], { type: 'text/csv;charset=utf-8' }));
  }
  function printList(kind) {
    const p = read(K.prog, {}) || {}, r = read(K.rate, {}) || {}; let title = '', items = [];
    if (kind === 'want') { title = 'ألعاب أريد لعبها'; items = G().filter(g => p[g.id] === 'want').map(g => [g.title, `${g.year} · ${g.category}`]); }
    else if (kind === 'done') { title = 'ألعاب أنهيتها'; items = G().filter(g => isDone(p[g.id])).map(g => [g.title, (r[g.id]?.s ? '★'.repeat(r[g.id].s) : '')]); }
    else if (kind === 'top') { title = 'أفضل ألعابي'; items = Object.entries(r).filter(([, x]) => x.s >= 4).sort((a, b) => b[1].s - a[1].s).map(([id, x]) => [gid(id)?.title, '★'.repeat(x.s) + (x.n ? ' — ' + x.n : '')]).filter(x => x[0]); }
    else { const L = read(K.lists, []) || []; const l = L[Number(kind.slice(2))]; if (!l) return; title = l.n; items = l.ids.map(id => [gid(id)?.title, '']).filter(x => x[0]); }
    if (!items.length) { toast('القائمة فارغة.'); return; }
    let a = $('#printArea'); if (!a) { a = document.createElement('div'); a.id = 'printArea'; document.body.appendChild(a); }
    a.innerHTML = `<h1>REIGN — ${safe(title)}</h1><p>${safe(new Date().toLocaleDateString('ar-TN'))} · ${items.length} لعبة</p><ol>${items.map(([t, s]) => `<li><b>${safe(t)}</b> <span>${safe(s)}</span></li>`).join('')}</ol>`;
    window.print();
  }
  function renderExport() { const sel = $('#printKind'); if (!sel) return; const L = read(K.lists, []) || []; const keep = sel.value; sel.innerHTML = '<option value="want">ألعاب أريد لعبها</option><option value="done">ألعاب أنهيتها</option><option value="top">أفضل ألعابي (4★ فأكثر)</option>' + L.map((l, i) => `<option value="L:${i}">قائمة: ${safe(l.n)}</option>`).join(''); if ([...sel.options].some(o => o.value === keep)) sel.value = keep; }

  /* ================= 6. WISHLIST WITH TARGET PRICES ================= */
  let wish = read(K.wish, []); if (!Array.isArray(wish)) wish = [];
  const saveWish = () => { write(K.wish, wish); renderWish(); };
  function renderWish() {
    const box = $('#wishList'); if (!box) return; const sel = $('#wGameSel'); if (sel && !sel.dataset.f) { sel.innerHTML = '<option value="">— لعبة من المكتبة (اختياري) —</option>' + gameOptions(); sel.dataset.f = 1; }
    const rows = wish.map((w, i) => ({ ...w, i, hit: w.cur > 0 && w.cur <= w.tgt, gap: (w.cur || 0) - (w.tgt || 0) })).sort((a, b) => (b.hit - a.hit) || a.gap - b.gap);
    const hits = rows.filter(w => w.hit).length;
    $('#wishSummary').textContent = rows.length ? `${rows.length.toLocaleString('ar-TN')} ألعاب · ${hits.toLocaleString('ar-TN')} وصلت لسعرك المستهدف` : '';
    box.innerHTML = rows.map(w => `<li class="wish-row ${w.hit ? 'hit' : ''}" data-i="${w.i}"><div class="wish-main"><b>${safe(w.t)}</b>${w.n ? `<small>${safe(w.n)}</small>` : ''}</div><label>السعر الحالي<input type="number" min="0" step="0.01" value="${w.cur || ''}" data-wcur></label><span class="wish-tgt">الهدف: ${Number(w.tgt).toLocaleString('ar-TN')} ${safe(w.c)}</span><span class="wish-state">${w.hit ? 'وصل السعر المستهدف ✓' : (w.cur ? `باقي ${Number(w.gap.toFixed(2)).toLocaleString('ar-TN')} ${safe(w.c)}` : 'أدخل السعر الحالي')}</span><button type="button" class="chip-x" data-wdel aria-label="حذف">×</button></li>`).join('') || '<li class="empty-note">أضف لعبة تنتظر خصمها واكتب السعر الذي تريده.</li>';
  }
  function bindWish() {
    const f = $('#wishForm'); if (!f) return;
    f.addEventListener('submit', e => { e.preventDefault(); const gsel = $('#wGameSel').value; const t = (gsel ? gid(gsel)?.title : '') || $('#wTitle').value.trim(); const tgt = Number($('#wTarget').value); if (!t || !(tgt > 0)) { toast('أدخل اسم اللعبة وسعرًا مستهدفًا.'); return; } wish.push({ t: t.slice(0, 60), gid: gsel || null, cur: Number($('#wCurrent').value) || 0, tgt, c: $('#wCurrency').value, n: $('#wNote').value.trim().slice(0, 80) }); f.reset(); saveWish(); });
    $('#wishList').addEventListener('change', e => { const i = e.target.closest('[data-wcur]'); if (!i) return; wish[Number(i.closest('.wish-row').dataset.i)].cur = Number(i.value) || 0; write(K.wish, wish); setTimeout(renderWish, 0); });
    $('#wishList').addEventListener('click', e => { if (e.target.closest('[data-wdel]')) { wish.splice(Number(e.target.closest('.wish-row').dataset.i), 1); saveWish(); } });
  }

  /* ================= 7. CO-OP PLANNER ================= */
  let coop = read(K.coop, { friends: [], plans: [] }); if (!coop || !Array.isArray(coop.friends) || !Array.isArray(coop.plans)) coop = { friends: [], plans: [] };
  const saveCoop = () => { write(K.coop, coop); renderCoop(); };
  function renderCoop() {
    const fl = $('#coopFriends'); if (!fl) return; const gs = $('#coopGame'); if (gs && !gs.dataset.f) { gs.innerHTML = gameOptions(); gs.dataset.f = 1; }
    fl.innerHTML = coop.friends.map((f, i) => `<li><span>${safe(f)}</span><button type="button" class="chip-x" data-fdel="${i}" aria-label="حذف">×</button></li>`).join('') || '<li class="empty-note">أضف أصدقاءك أولًا.</li>';
    $('#coopPick').innerHTML = coop.friends.map((f, i) => `<label class="coop-chk"><input type="checkbox" value="${i}"> ${safe(f)}</label>`).join('');
    const now = today(); const rows = coop.plans.map((p, i) => ({ ...p, i })).sort((a, b) => (a.d > now ? 0 : 1) - (b.d > now ? 0 : 1) || a.d.localeCompare(b.d) * (a.d >= now ? 1 : -1));
    $('#coopPlans').innerHTML = rows.map(p => `<li class="coop-row ${p.d < now ? 'past' : ''}"><div><b>${safe(gid(p.g)?.title || 'لعبة')}</b><small>${safe(fmtD(p.d))}${p.tm ? ' · ' + safe(p.tm) : ''} · مع ${p.w.map(i => safe(coop.friends[i] || '؟')).join('، ') || 'وحدك'}</small>${p.n ? `<small>${safe(p.n)}</small>` : ''}</div><button type="button" class="chip-x" data-pdel="${p.i}" aria-label="حذف">×</button></li>`).join('') || '<li class="empty-note">لا خطط لعب بعد.</li>';
    const st = coop.friends.map((f, i) => { const ps = coop.plans.filter(p => p.w.includes(i) && p.d <= now); const last = ps.map(p => p.d).sort().pop(); return `<li><b>${safe(f)}</b><small>${ps.length.toLocaleString('ar-TN')} جلسة سابقة${last ? ' · آخرها ' + safe(fmtD(last)) : ''}</small></li>`; }).join('');
    $('#coopStats').innerHTML = st || '';
  }
  function bindCoop() {
    const a = $('#coopAdd'); if (!a) return;
    $('#coopFriendForm').addEventListener('submit', e => { e.preventDefault(); const n = $('#coopFriend').value.trim().slice(0, 24); if (n && !coop.friends.includes(n)) { coop.friends.push(n); saveCoop(); } $('#coopFriend').value = ''; });
    $('#coopFriends').addEventListener('click', e => { const d = e.target.closest('[data-fdel]'); if (!d) return; const i = Number(d.dataset.fdel); coop.friends.splice(i, 1); coop.plans.forEach(p => { p.w = p.w.filter(x => x !== i).map(x => x > i ? x - 1 : x); }); saveCoop(); });
    $('#coopPlanForm').addEventListener('submit', e => { e.preventDefault(); const d = $('#coopDate').value; if (!d) { toast('اختر التاريخ.'); return; } coop.plans.push({ g: Number($('#coopGame').value), d, tm: $('#coopTime').value, w: $$('#coopPick input:checked').map(x => Number(x.value)), n: $('#coopNote').value.trim().slice(0, 80) }); $('#coopNote').value = ''; saveCoop(); });
    $('#coopPlans').addEventListener('click', e => { const d = e.target.closest('[data-pdel]'); if (d) { coop.plans.splice(Number(d.dataset.pdel), 1); saveCoop(); } });
    $('#coopDate').value = today(); renderCoop();
  }

  /* ================= 8. BONUS XP & BADGES ================= */
  function bonus() {
    const r = read(K.rate, {}) || {}, L = read(K.lists, []) || [], T = read(K.tro, {}) || {}, C = read(K.coop, { plans: [] }) || {}, W = read(K.wish, []) || [];
    const done = read(K.done, {}) || {}, goals = read(K.goal, {}) || {}, y = new Date().getFullYear(), prog = read(K.prog, {}) || {};
    const fin = Object.entries(done).filter(([id, v]) => String(v.d).startsWith(String(y)) && isDone(prog[id] || v.s)).length;
    const troItems = Object.values(T).flat(), troDone = troItems.filter(x => x.done).length, troFull = Object.values(T).filter(l => l.length >= 3 && l.every(x => x.done)).length;
    const goalHit = Number(goals[y]) > 0 && fin >= Number(goals[y]);
    const nb = Number(read(K.nbCount, 0)) || 0;
    const parts = [['تقييمات وملاحظات', Object.keys(r).length, 10], ['قوائم أنشأتها', L.length, 15], ['بنود تروفيات منجزة', troDone, 5], ['قوائم تروفيات مكتملة', troFull, 50], ['ملاحظات الدفتر', nb, 5], ['خطط لعب جماعية', (C.plans || []).length, 5], ['ألعاب على قائمة الأمنيات', W.length, 2], ['هدف سنوي محقق', goalHit ? 1 : 0, 200]];
    return { parts: parts.map(([n, c, x]) => ({ n, c, x, xp: c * x })), ratings: Object.keys(r).length, lists: L.length, troFull, goalHit, nb };
  }
  window.REIGN_BONUS = {
    xp: () => bonus().parts.reduce((t, p) => t + p.xp, 0),
    parts: () => bonus().parts,
    badges: () => { const b = bonus(); return [{ id: 'x1', icon: '★', name: 'ناقد', desc: 'قيّم 5 ألعاب', ok: b.ratings >= 5 }, { id: 'x2', icon: '☰', name: 'منظّم', desc: 'أنشئ قائمتين', ok: b.lists >= 2 }, { id: 'x3', icon: '◎', name: 'هدف محقق', desc: 'حقق هدفك السنوي', ok: b.goalHit }, { id: 'x4', icon: '✎', name: 'صائد التروفيات', desc: 'أكمل قائمة تروفيات خاصة (3 بنود فأكثر)', ok: b.troFull >= 1 }, { id: 'x5', icon: '▣', name: 'كاتب اليوميات', desc: 'اكتب 3 ملاحظات في الدفتر', ok: b.nb >= 3 }]; }
  };
  function renderBonus() {
    const grid = $('#dashboard .arcade-grid'); if (!grid) return; let p = $('#bonusPanel');
    if (!p) { p = document.createElement('article'); p.id = 'bonusPanel'; p.className = 'reign-panel'; grid.appendChild(p); }
    const parts = window.REIGN_BONUS.parts(); const tot = parts.reduce((t, x) => t + x.xp, 0);
    p.innerHTML = `<div class="panel-title-row"><div><span class="kicker">BONUS XP</span><h3>مصادر الخبرة الإضافية</h3></div><span class="arcade-icon">✦</span></div><ul class="legend-list">${parts.map(x => `<li>${safe(x.n)} <b>${x.c.toLocaleString('ar-TN')} × ${x.x}</b> = ${x.xp.toLocaleString('ar-TN')}</li>`).join('')}</ul><p class="goal-line"><b>${tot.toLocaleString('ar-TN')}</b> نقطة خبرة تُضاف إلى مستوى ULTRA</p>`;
  }

  /* ================= 10. ACCESSIBILITY ================= */
  let a11y = Object.assign({ z: 1, hc: false, rm: false }, read(K.a11y, {}) || {});
  function applyA11y() { document.documentElement.style.zoom = a11y.z === 1 ? '' : a11y.z; document.documentElement.classList.toggle('hc', !!a11y.hc); document.documentElement.classList.toggle('rm', !!a11y.rm); write(K.a11y, a11y); const l = $('#a11yZ'); if (l) l.textContent = Math.round(a11y.z * 100) + '%'; }
  function buildA11y() {
    const h = $('.header-actions'); if (!h) return;
    const b = document.createElement('button'); b.type = 'button'; b.id = 'a11yBtn'; b.className = 'icon-button'; b.title = 'خيارات الإتاحة'; b.setAttribute('aria-label', 'خيارات الإتاحة'); b.setAttribute('aria-expanded', 'false');
    b.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4.5" r="1.8"/><path d="M5 8.5l7 1.5 7-1.5M12 10v5l-3 6M12 15l3 6"/></svg>';
    const pop = document.createElement('div'); pop.className = 'a11y-pop'; pop.id = 'a11yPop'; pop.hidden = true;
    pop.innerHTML = '<b>خيارات الإتاحة</b><div class="a11y-row"><span>حجم الواجهة</span><div><button type="button" data-z="-1" aria-label="تصغير">A−</button><output id="a11yZ">100%</output><button type="button" data-z="1" aria-label="تكبير">A+</button></div></div><label class="a11y-row"><span>تباين عالٍ</span><input type="checkbox" id="a11yHc"></label><label class="a11y-row"><span>تقليل الحركة</span><input type="checkbox" id="a11yRm"></label><button type="button" id="a11yReset">إعادة الضبط</button>';
    h.prepend(b); document.body.appendChild(pop);
    b.addEventListener('click', () => { pop.hidden = !pop.hidden; b.setAttribute('aria-expanded', String(!pop.hidden)); });
    pop.addEventListener('click', e => { const z = e.target.closest('[data-z]'); if (z) { a11y.z = Math.min(1.4, Math.max(0.85, Math.round((a11y.z + Number(z.dataset.z) * 0.05) * 100) / 100)); applyA11y(); } if (e.target.id === 'a11yReset') { a11y = { z: 1, hc: false, rm: false }; $('#a11yHc').checked = false; $('#a11yRm').checked = false; applyA11y(); } });
    $('#a11yHc').checked = a11y.hc; $('#a11yRm').checked = a11y.rm;
    $('#a11yHc').addEventListener('change', e => { a11y.hc = e.target.checked; applyA11y(); }); $('#a11yRm').addEventListener('change', e => { a11y.rm = e.target.checked; applyA11y(); });
    document.addEventListener('click', e => { if (!pop.hidden && !e.target.closest('#a11yPop,#a11yBtn')) { pop.hidden = true; b.setAttribute('aria-expanded', 'false'); } });
    applyA11y();
    const sk = document.createElement('a'); sk.href = '#'; sk.className = 'skip-link'; sk.textContent = 'تخطَّ إلى المحتوى'; sk.addEventListener('click', e => { e.preventDefault(); const t = $('.hub:not([hidden]) .hub-tabs button.active') || $('.hero a, .quick-search input'); t && t.focus(); }); document.body.prepend(sk);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { if (!pop.hidden) { pop.hidden = true; b.focus(); } const m = $('#modalBackdrop'); if (m && !m.hidden) $('#modalClose')?.click(); }
      const tb = e.target.closest && e.target.closest('.hub-tabs button'); if (!tb || !/^Arrow(Left|Right)$/.test(e.key)) return;
      const btns = Array.from(tb.parentNode.children), i = btns.indexOf(tb), rtl = getComputedStyle(document.documentElement).direction === 'rtl';
      const step = (e.key === 'ArrowRight') === rtl ? -1 : 1; const n = btns[(i + step + btns.length) % btns.length]; n.focus(); n.click(); e.preventDefault();
    });
    $$('.hub-tabs').forEach(t => t.setAttribute('aria-label', 'أقسام المركز'));
  }

  function init() {
    buildFilters(); bindDeepLinks(); bindNotebook(); bindWish(); bindCoop(); buildA11y(); renderWish(); renderExport(); renderBonus();
    $('#expLibrary')?.addEventListener('click', exportLibrary); $('#expRatings')?.addEventListener('click', exportRatings); $('#printBtn')?.addEventListener('click', () => printList($('#printKind').value));
    document.addEventListener('reign:tab', e => { const t = e.detail.tab; if (t === 'dashboard') renderBonus(); else if (t === 'export') renderExport(); else if (t === 'notebook') renderNotebook(); else if (t === 'wishlist') renderWish(); else if (t === 'coop') renderCoop(); else if (t === 'games') { /* filters persist */ } });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
