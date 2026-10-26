/* REIGN ULTRA Player Edition: local-first tools; user-authored records are not official game data. */
(() => {
  'use strict';
  const STORE='reign-player-edition-v1';
  const state={stages:[],places:[],platinum:[],secrets:[],bosses:[],setups:[],codex:[],challenges:[],sessions:[],editions:[],endings:[]};
  const $=id=>document.getElementById(id);
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const read=()=>{try{const d=JSON.parse(localStorage.getItem(STORE)||'{}');Object.keys(state).forEach(k=>state[k]=Array.isArray(d[k])?d[k]:[])}catch(e){}}
  const persist=()=>{try{localStorage.setItem(STORE,JSON.stringify(state))}catch(e){alert('تعذّر الحفظ في المتصفح. صدّر بياناتك أو حرّر مساحة التخزين.')}};
  const getGame=id=>$(id)?.value||'لعبة غير محددة';
  const addGameOptions=()=>{
    const source=Array.isArray(window.games)?window.games:(typeof games!=='undefined'?games:[]);
    const options=source.map(g=>({title:g.title||g.name||'لعبة',category:g.category||'متنوع',times:g.times||{},ps4:g.ps4}));
    document.querySelectorAll('#playerEdition select').forEach(sel=>{
      if(sel.id==='mapType'||sel.id==='platinumGoal'||sel.id==='setupStyle'||sel.id==='codexType'||sel.id==='challengeType'||sel.id==='sessionGoal'||sel.id==='finderGenre'||sel.id==='finderTime'||sel.id==='finderGoal')return;
      if(sel.id==='buildGame')return;
      const old=sel.value;sel.innerHTML=options.map(g=>`<option value="${esc(g.title)}">${esc(g.title)}</option>`).join('');if(old&&[...sel.options].some(o=>o.value===old))sel.value=old;
    });
    const genres=[...new Set(options.map(g=>g.category).filter(Boolean))].sort();const genre=$('finderGenre');if(genre)genre.innerHTML='<option value="all">كل التصنيفات</option>'+genres.map(g=>`<option value="${esc(g)}">${esc(g)}</option>`).join('');
    renderFinder();
  };
  const renderList=(target,items,kind,fields,checkable=false)=>{
    const el=$(target);if(!el)return;
    const rows=items.filter(x=>x.game===getGame(fields.gameSelect));
    if(!rows.length){el.innerHTML='<p class="empty-note">لا توجد عناصر بعد. أضف أول عنصر من النموذج أعلاه.</p>';return}
    el.innerHTML=rows.map(x=>`<div class="edition-item ${x.done?'done':''}">${checkable?`<input type="checkbox" data-check="${kind}" data-id="${esc(x.id)}" ${x.done?'checked':''} aria-label="تحديد كمكتمل">`:'<span aria-hidden="true">◇</span>'}<div><h4>${esc(x.title)}</h4><p>${esc(x.body||'')}</p><small>${esc(x.meta||x.game)}</small></div><button type="button" data-delete="${kind}" data-id="${esc(x.id)}">حذف</button></div>`).join('');
  };
  const id=()=>`${Date.now().toString(36)}${Math.random().toString(36).slice(2,7)}`;
  const record=(key,game,title,body,meta='')=>{if(!title.trim())return false;state[key].unshift({id:id(),game,title:title.trim(),body:(body||'').trim(),meta,done:false,created:new Date().toISOString()});persist();return true};
  const currentRender=()=>{
    renderList('stageList',state.stages,'stages',{gameSelect:'editionGame'},true);
    renderList('mapPlaceList',state.places,'places',{gameSelect:'mapGame'});
    renderPins();renderPlatinum();renderList('secretList',state.secrets,'secrets',{gameSelect:'secretGame'},true);
    renderList('bossList',state.bosses,'bosses',{gameSelect:'bossGame'});
    renderList('setupList',state.setups,'setups',{gameSelect:'setupGame'});
    renderList('codexList',state.codex.filter(x=>!x.spoiler||document.body.classList.contains('show-spoilers')),'codex',{gameSelect:'codexGame'});
    renderList('endingList',state.endings.filter(x=>!x.spoiler||document.body.classList.contains('show-spoilers')),'endings',{gameSelect:'endingGame'});
    renderList('challengeListPlus',state.challenges,'challenges',{gameSelect:'challengeGame'},true);
    renderList('sessionList',state.sessions,'sessions',{gameSelect:'sessionGame'},true);
    renderList('editionCompareList',state.editions,'editions',{gameSelect:'editionCompareGame'});
  };
  const renderPins=()=>{const el=$('mapPins');if(!el)return;const rows=state.places.filter(x=>x.game===getGame('mapGame'));el.innerHTML=rows.slice(0,30).map(x=>`<span class="map-pin">⌖ ${esc(x.title)}</span>`).join('')||'<span class="map-pin">لا توجد نقاط بعد</span>'};
  const renderPlatinum=()=>{const rows=state.platinum.filter(x=>x.game===getGame('platinumGame'));const done=rows.filter(x=>x.done).length;const p=rows.length?Math.round(done/rows.length*100):0;const prog=$('platinumProgress');if(prog)prog.innerHTML=`${done} / ${rows.length} هدف مكتمل (${p}%)<div class="edition-progress-track"><span style="width:${p}%"></span></div>`;renderList('platinumList',state.platinum,'platinum',{gameSelect:'platinumGame'},true)};
  const renderFinder=()=>{const el=$('finderResults');if(!el)return;const source=Array.isArray(window.games)?window.games:(typeof games!=='undefined'?games:[]);const q=($('finderSearch')?.value||'').toLocaleLowerCase();const genre=$('finderGenre')?.value||'all';const max=$('finderTime')?.value||'all';const goal=$('finderGoal')?.value||'all';let rows=source.filter(g=>{const title=g.title||g.name||'';const cat=g.category||'متنوع';const hours=Number(g.times?.main||g.mainHours||0);return title.toLocaleLowerCase().includes(q)&&(genre==='all'||cat===genre)&&(max==='all'||(hours>0&&hours<=Number(max)))&&(goal!=='complete'||Number(g.times?.complete||0)>0)&&(goal!=='short'||(hours>0&&hours<=20))&&(goal!=='long'||hours>=30)});el.innerHTML=rows.slice(0,36).map(g=>`<div class="finder-game"><b>${esc(g.title||g.name)}</b><small>${esc(g.category||'متنوع')} · ${g.times?.main?`${esc(g.times.main)} ساعة تقريبًا للقصة`:'وقت القصة غير محدد'}</small><small>${g.ps4===true?'مصنفة ضمن مكتبة PS4 في REIGN':'تحقق من توفر نسخة PS4 لهذا العنوان'}</small><button type="button" data-plan-game="${esc(g.title||g.name)}">استخدمها في خطة المراحل</button></div>`).join('')||'<p class="empty-note">لا توجد نتائج مطابقة. جرّب تغيير الفلاتر.</p>'};
  const connect=(btn,fn)=>$(btn)?.addEventListener('click',fn);
  const input=(id)=>($(id)?.value||'').trim();
  const clearFields=(ids)=>ids.forEach(k=>{if($(k))$(k).value=''});
  function init(){read();addGameOptions();
    document.querySelectorAll('[data-edition-tab]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-edition-tab]').forEach(x=>x.classList.toggle('active',x===b));document.querySelectorAll('[data-edition-pane]').forEach(p=>p.classList.toggle('active',p.dataset.editionPane===b.dataset.editionTab));}));
    connect('addStage',()=>{if(record('stages',getGame('editionGame'),input('stageName'),input('stageNote'),'دليل المراحل')){clearFields(['stageName','stageNote']);currentRender()}});
    connect('addMapPlace',()=>{if(record('places',getGame('mapGame'),input('mapPlace'),input('mapNote'),getGame('mapType'))){clearFields(['mapPlace','mapNote']);currentRender()}});
    connect('addPlatinumTask',()=>{if(record('platinum',getGame('platinumGame'),input('platinumTask'),getGame('platinumGoal'),getGame('platinumGoal'))){clearFields(['platinumTask']);currentRender()}});
    connect('addSecret',()=>{if(record('secrets',getGame('secretGame'),input('secretName'),input('secretHint'),input('secretRegion'))){clearFields(['secretName','secretHint','secretRegion']);currentRender()}});
    connect('addBossNote',()=>{const title=input('bossName'),body=`نقاط الضعف / الأنماط: ${input('bossWeakness')}\nالاستراتيجية: ${input('bossStrategy')}`;if(record('bosses',getGame('bossGame'),title,body,'مذكرة شخصية')){clearFields(['bossName','bossWeakness','bossStrategy']);currentRender()}});
    connect('saveSetup',()=>{if(record('setups',getGame('setupGame'),getGame('setupStyle'),input('setupNotes'),'بطاقة إعدادات')){clearFields(['setupNotes']);currentRender()}});
    connect('addCodex',()=>{const title=input('codexName');if(record('codex',getGame('codexGame'),title,input('codexNote'),getGame('codexType'))){state.codex[0].spoiler=!!$('codexSpoiler')?.checked;clearFields(['codexName','codexNote']);currentRender()}});
    connect('addEnding',()=>{const title=input('endingChoice');if(record('endings',getGame('endingGame'),title,input('endingResult'),'قرار / نهاية')){state.endings[0].spoiler=!!$('endingSpoiler')?.checked;clearFields(['endingChoice','endingResult']);currentRender()}});
    connect('toggleSpoilers',()=>{document.body.classList.toggle('show-spoilers');currentRender();const b=$('toggleSpoilers');if(b)b.textContent=document.body.classList.contains('show-spoilers')?'إخفاء العناصر التي تحتوي على حرق':'إظهار العناصر التي تحتوي على حرق'});
    connect('addChallenge',()=>{const title=input('challengeGoal');if(record('challenges',getGame('challengeGame'),title,`${getGame('challengeType')}\n${input('challengeNote')}`,'تحدٍ شخصي')){clearFields(['challengeGoal','challengeNote']);currentRender()}});
    connect('saveSessionPlan',()=>{const title=`${getGame('sessionGoal')} — ${$('sessionMinutes')?.value||45} دقيقة`;if(record('sessions',getGame('sessionGame'),title,input('sessionPlanNote'),'خطة جلسة')){clearFields(['sessionPlanNote']);currentRender()}});
    connect('compareEditions',()=>{const title=`${input('editionA')||'النسخة الأولى'} مقابل ${input('editionB')||'النسخة الثانية'}`;const body=`${input('editionA')}: ${input('editionAContent')}\n\n${input('editionB')}: ${input('editionBContent')}`;if(record('editions',getGame('editionCompareGame'),title,body,'مقارنة يملؤها اللاعب')){clearFields(['editionA','editionB','editionAContent','editionBContent']);currentRender()}});
    ['editionGame','mapGame','platinumGame','secretGame','bossGame','setupGame','codexGame','endingGame','challengeGame','sessionGame','editionCompareGame','mapType'].forEach(k=>$(k)?.addEventListener('change',currentRender));
    ['finderSearch','finderGenre','finderTime','finderGoal'].forEach(k=>$(k)?.addEventListener(k==='finderSearch'?'input':'change',renderFinder));
    document.addEventListener('change',e=>{const cb=e.target.closest('[data-check]');if(!cb)return;const arr=state[cb.dataset.check];const item=arr.find(x=>x.id===cb.dataset.id);if(item){item.done=cb.checked;persist();currentRender()}});
    document.addEventListener('click',e=>{const del=e.target.closest('[data-delete]');if(del){const key=del.dataset.delete;state[key]=state[key].filter(x=>x.id!==del.dataset.id);persist();currentRender();return}const pg=e.target.closest('[data-plan-game]');if(pg){const sel=$('editionGame');if(sel){sel.value=pg.dataset.planGame;document.querySelector('[data-edition-tab="planner"]')?.click();$('stageName')?.focus()}}});
    connect('exportPlayerEdition',()=>{const blob=new Blob([JSON.stringify({format:'REIGN_PLAYER_EDITION',version:1,exportedAt:new Date().toISOString(),...state},null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='reign-player-edition-backup.json';a.click();URL.revokeObjectURL(a.href)});
    $('importPlayerEdition')?.addEventListener('change',async e=>{const file=e.target.files?.[0];if(!file)return;try{const data=JSON.parse(await file.text());Object.keys(state).forEach(k=>state[k]=Array.isArray(data[k])?data[k]:[]);persist();currentRender();alert('تم استيراد بيانات Player Edition.')}catch(err){alert('تعذر قراءة الملف. اختر نسخة JSON صادرة من REIGN.')}e.target.value=''});
    connect('clearPlayerEdition',()=>{if(confirm('هل تريد مسح جميع بيانات Player Edition المحفوظة في هذا المتصفح؟ لا يمكن التراجع عن هذا الإجراء إلا باستيراد نسخة احتياطية.')){Object.keys(state).forEach(k=>state[k]=[]);persist();currentRender()}});
    currentRender();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
