/* REIGN HUBS — groups every section into 3 hubs with inner tabs (one section visible at a time). */
(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const HUBS = [
    { id: 'library', label: 'المكتبة', icon: '▦', tabs: [['games', 'الألعاب'], ['discover', 'اكتشف'], ['collections', 'مجموعات'], ['favorites', 'المفضلة'], ['franchises', 'السلاسل'], ['faceoff', 'Face-Off'], ['upcoming', 'قادم قريبًا']] },
    { id: 'player', label: 'لاعبي', icon: '♙', tabs: [['reignId', 'ملفي'], ['dashboard', 'لوحتي'], ['ultra', 'ULTRA'], ['playroom', 'PLAYROOM'], ['essentials', 'الإنجاز'], ['myratings', 'تقييماتي'], ['mylists', 'قوائمي']] },
    { id: 'guides', label: 'الأدلة', icon: '✦', tabs: [['trophies', 'التروفيات'], ['mytrophies', 'قوائم تروفيات'], ['reignPlayerTools', 'أدوات اللاعب'], ['worldGuides', 'مركز المساعدة'], ['guides', 'دليل المبتدئ'], ['playtime', 'حاسبة الوقت'], ['faq', 'أسئلة شائعة']] }
  ];
  const main = $('main'); if (!main) return;
  const tabHub = {}, tabLabel = {}, last = {};
  const home = document.createElement('div'); home.id = 'homeBlock';
  ['.hero', '.quick-search'].forEach(s => { const e = $(s); if (e) home.appendChild(e); });
  main.prepend(home);
  const wraps = {};
  HUBS.forEach(h => {
    const w = document.createElement('div'); w.className = 'hub'; w.id = 'hub-' + h.id; w.hidden = true;
    const bar = document.createElement('div'); bar.className = 'hub-tabs'; bar.setAttribute('role', 'tablist');
    const body = document.createElement('div'); body.className = 'hub-body';
    h.tabs.forEach(([id, label]) => {
      tabHub[id] = h.id; tabLabel[id] = label;
      const b = document.createElement('button'); b.type = 'button'; b.dataset.tab = id; b.textContent = label; b.setAttribute('role', 'tab'); bar.appendChild(b);
      const s = document.getElementById(id); if (s) { s.dataset.hubtab = id; s.hidden = true; body.appendChild(s); }
    });
    w.append(bar, body); wraps[h.id] = w; last[h.id] = h.tabs[0][0];
  });
  const cta = $('.closing-cta'); HUBS.forEach(h => main.insertBefore(wraps[h.id], cta || null));
  if (cta) home.appendChild(cta);

  let cur = { hub: 'library', tab: 'games' };
  function show(tab, opts = {}) {
    const hub = tabHub[tab]; if (!hub) return false;
    HUBS.forEach(h => { wraps[h.id].hidden = h.id !== hub; });
    wraps[hub].querySelectorAll('[data-hubtab]').forEach(s => { s.hidden = s.id !== tab; });
    wraps[hub].querySelectorAll('.hub-tabs button').forEach(b => { const on = b.dataset.tab === tab; b.classList.toggle('active', on); b.setAttribute('aria-selected', on); if (on && opts.scrollTab !== false) b.scrollIntoViewIfNeededSafe?.(); });
    home.hidden = !(hub === 'library' && tab === 'games');
    last[hub] = tab; cur = { hub, tab };
    document.querySelectorAll('[data-hubnav]').forEach(a => a.classList.toggle('active', a.dataset.hubnav === hub));
    document.documentElement.dataset.hub = hub;
    document.dispatchEvent(new CustomEvent('reign:tab', { detail: { tab, hub } }));
    return true;
  }
  function go(id, opts = {}) {
    if (!id) return;
    id = String(id).replace(/^#/, '');
    if (id === 'home') id = 'games';
    if (id.startsWith('hub-')) id = last[id.slice(4)] || id;
    let tab = id;
    if (!tabHub[tab]) { const el = document.getElementById(id); const sec = el && el.closest('[data-hubtab]'); if (!sec) return; tab = sec.dataset.hubtab; }
    show(tab);
    if (opts.history !== false) { try { history.replaceState(null, '', '#' + tab); } catch {} }
    if (opts.scroll !== false) {
      const target = tab === 'games' ? 0 : (wraps[tabHub[tab]].getBoundingClientRect().top + scrollY - 84);
      window.scrollTo({ top: Math.max(0, tab === 'games' && scrollY < 20 ? 0 : (tab === 'games' ? 0 : target)), behavior: 'auto' });
    }
  }
  // click handling
  document.addEventListener('click', e => {
    const tb = e.target.closest('.hub-tabs button'); if (tb) { go(tb.dataset.tab); return; }
    const a = e.target.closest('a[href^="#"]'); if (!a) return;
    const id = a.getAttribute('href').slice(1); if (!id) return;
    if (id === 'home' || id.startsWith('hub-') || tabHub[id] || (document.getElementById(id) && document.getElementById(id).closest('[data-hubtab]'))) { e.preventDefault(); go(id); document.querySelector('.site-header')?.classList.remove('nav-open'); }
  });
  window.addEventListener('hashchange', () => go(location.hash, { history: false }));
  // programmatic scrollIntoView on hidden sections: reveal first
  const orig = Element.prototype.scrollIntoView;
  Element.prototype.scrollIntoView = function (o) {
    const sec = this.closest && this.closest('[data-hubtab]');
    if (sec && sec.hidden) { show(sec.dataset.hubtab); try { history.replaceState(null, '', '#' + sec.dataset.hubtab); } catch {} }
    return orig.call(this, o);
  };
  // header nav + dock
  const nav = $('#mainNav');
  if (nav) nav.innerHTML = HUBS.map(h => `<a href="#hub-${h.id}" data-hubnav="${h.id}">${h.label}</a>`).join('');
  const dock = $('#mobileDock');
  if (dock) dock.innerHTML = HUBS.map(h => `<a href="#hub-${h.id}" data-hubnav="${h.id}" aria-label="${h.label}"><span class="dock-icon">${h.icon}</span><span class="dock-label">${h.label}</span></a>`).join('') + '<a href="#" id="dockSearch" aria-label="بحث"><span class="dock-icon">⌕</span><span class="dock-label">بحث</span></a>';
  dock?.addEventListener('click', e => { if (e.target.closest('#dockSearch')) { e.preventDefault(); window.REIGN_PALETTE?.open(); } });

  window.REIGN_NAV = { go, show, HUBS, tabLabel, tabHub, current: () => cur };
  const start = (location.hash || '').slice(1);
  if (start && (tabHub[start] || document.getElementById(start))) go(start, { history: false, scroll: false }); else show('games');
})();
