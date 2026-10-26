/* REIGN PLAYROOM — local-first gaming journal, goal tracker and backlog roulette */
(()=>{
 'use strict';
 const $=s=>document.querySelector(s);
 const KEY='reignArcadeSessionsV1', GOAL_KEY='reignArcadeMonthlyGoalV1';
 const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const read=(key,fallback)=>{try{const v=JSON.parse(localStorage.getItem(key));return v??fallback}catch{return fallback}};
 const write=(key,val)=>{try{localStorage.setItem(key,JSON.stringify(val));return true}catch{alert('تعذر الحفظ في المتصفح. صدّر نسخة احتياطية أو أفرغ بعض المساحة.');return false}};
 const allGames=()=>{try{return games.filter(g=>g&&g.id&&g.title)}catch{return []}};
 let sessions=read(KEY,[]); if(!Array.isArray(sessions))sessions=[];
 let monthlyGoal=Number(read(GOAL_KEY,20))||20, winnerId=null, spinning=false, rotation=0;
 const todayLocal=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`};
 const getGame=id=>allGames().find(g=>String(g.id)===String(id));
 const fmtDate=d=>{if(!d)return '';try{return new Intl.DateTimeFormat(document.documentElement.lang==='en'?'en-US':document.documentElement.lang==='fr'?'fr-FR':'ar-TN',{day:'numeric',month:'short',year:'numeric'}).format(new Date(`${d}T12:00:00`))}catch{return d}};
 const totalHours=list=>list.reduce((n,s)=>n+Number(s.hours||0),0);
 const currentMonth=()=>todayLocal().slice(0,7);
 const getProgress=()=>read('reignProgressV1',{});
 const populateGameSelect=()=>{const opts=allGames().map(g=>`<option value="${safe(g.id)}">${safe(g.title)}</option>`).join('');const select=$('#arcadeGame');if(select)select.innerHTML=opts||'<option value="">لا توجد ألعاب</option>';};
 function renderStats(){
  const all=allGames(), total=totalHours(sessions), weekStart=new Date();weekStart.setHours(0,0,0,0);weekStart.setDate(weekStart.getDate()-((weekStart.getDay()+6)%7));
  const weekHours=totalHours(sessions.filter(s=>new Date(`${s.date}T12:00:00`)>=weekStart));
  const byGame={};sessions.forEach(s=>byGame[s.gameId]=(byGame[s.gameId]||0)+Number(s.hours||0));
  const best=Object.entries(byGame).sort((a,b)=>b[1]-a[1])[0], bestGame=best?getGame(best[0]):null;
  $('#arcadeTotalHours').textContent=Number(total.toFixed(2)).toLocaleString('ar-TN');$('#arcadeSessionCount').textContent=sessions.length.toLocaleString('ar-TN');$('#arcadeWeekHours').textContent=Number(weekHours.toFixed(2)).toLocaleString('ar-TN');$('#arcadeBestGame').textContent=bestGame?bestGame.title:'—';$('#arcadeBestGame').title=bestGame?bestGame.title:'';
  const days=new Set(sessions.map(s=>s.date));let streak=0;const d=new Date();for(;;){const key=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;if(days.has(key)){streak++;d.setDate(d.getDate()-1)}else break}$('#arcadeStreak').textContent=`${streak} ${document.documentElement.lang==='en'?'day streak':document.documentElement.lang==='fr'?'jours':'يوم'}`;
  const monthHours=totalHours(sessions.filter(s=>s.date.startsWith(currentMonth()))), pct=Math.min(100,Math.round(monthHours/monthlyGoal*100));$('#arcadeGoal').value=monthlyGoal;$('#arcadeGoalCaption').textContent=`${Number(monthHours.toFixed(2))} من ${monthlyGoal} ساعة`;$('#arcadeGoalPercent').textContent=`${pct}%`;
  $('#arcadeGoalBar').style.width=`${pct}%`;
  let badge=monthHours>=monthlyGoal?['🏆','بطل الالتزام','حققت هدفك الشهري! أحسنت يا لاعب REIGN.']:total>=10?['🔥','لاعب نشيط','سجّلت 10 ساعات أو أكثر. واصل التقدم.']:sessions.length>=1?['🌱','بداية الرحلة','سجّلت أول جلسة؛ كل إنجاز يبدأ بخطوة.']:['🌱','بداية الرحلة','سجّل أول جلسة لفتح شارتك الأولى.'];$('#arcadeAchievement').innerHTML=`<span>${badge[0]}</span><div><b>${badge[1]}</b><small>${badge[2]}</small></div>`;
 }
 function renderSessions(){const list=$('#arcadeSessionList');if(!sessions.length){list.innerHTML='<p class="empty-note">لم تسجّل جلسات بعد. ابدأ بجلسة اليوم!</p>';return}
  list.innerHTML=[...sessions].sort((a,b)=>b.date.localeCompare(a.date)||b.createdAt-a.createdAt).slice(0,8).map(s=>{const g=getGame(s.gameId);return `<article class="arcade-session"><span class="arcade-session-mood">${safe(s.mood||'🎮')}</span><div class="arcade-session-info"><b>${safe(g?.title||s.gameTitle||'لعبة محذوفة')}</b><small>${safe(fmtDate(s.date))}</small></div><span class="arcade-session-hours">${Number(s.hours)}h</span>${s.note?`<p class="arcade-session-note">${safe(s.note)}</p>`:''}<button class="arcade-session-delete" data-delete-session="${safe(s.id)}" type="button">حذف هذه الجلسة ×</button></article>`}).join('');
 }
 function renderAll(){renderStats();renderSessions()}
 function toast(msg){const el=$('#toast');if(el){el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2400)}else alert(msg)}
 $('#arcadeDate').value=todayLocal();$('#arcadeGame').innerHTML='';populateGameSelect();renderAll();
 $('#arcadeJournalForm').addEventListener('submit',e=>{e.preventDefault();const game=getGame($('#arcadeGame').value),date=$('#arcadeDate').value,hours=Number($('#arcadeHours').value);if(!game||!date||!Number.isFinite(hours)||hours<=0||hours>24){toast('تحقق من اللعبة والتاريخ والمدة (حتى 24 ساعة).');return}
  sessions.push({id:`s${Date.now()}${Math.random().toString(36).slice(2,7)}`,gameId:game.id,gameTitle:game.title,date,hours,mood:$('#arcadeMood').value,note:$('#arcadeNote').value.trim(),createdAt:Date.now()});if(!write(KEY,sessions)){sessions.pop();return}$('#arcadeHours').value='';$('#arcadeNote').value='';renderAll();toast('تم حفظ جلسة اللعب بنجاح ✦');});
 $('#arcadeGoalForm').addEventListener('submit',e=>{e.preventDefault();const val=Number($('#arcadeGoal').value);if(!Number.isFinite(val)||val<1||val>500){toast('اختر هدفًا بين 1 و500 ساعة.');return}monthlyGoal=val;write(GOAL_KEY,monthlyGoal);renderStats();toast('تم حفظ هدفك الشهري!')});
 $('#arcadeSessionList').addEventListener('click',e=>{const b=e.target.closest('[data-delete-session]');if(!b)return;if(!confirm('هل تريد حذف جلسة اللعب هذه نهائيًا؟'))return;sessions=sessions.filter(s=>String(s.id)!==b.dataset.deleteSession);write(KEY,sessions);renderAll();toast('تم حذف الجلسة')});
 $('#arcadeClearSessions').addEventListener('click',()=>{if(!sessions.length){toast('السجل فارغ بالفعل.');return}if(!confirm('سيتم حذف كل جلسات اللعب المسجلة. هل صدّرت نسخة احتياطية أولًا؟'))return;sessions=[];write(KEY,sessions);renderAll();toast('تم مسح سجل الجلسات')});
 function csvExport(){const rows=[['date','game','hours','mood','note'],...sessions.map(s=>[s.date,getGame(s.gameId)?.title||s.gameTitle||'',s.hours,s.mood||'',s.note||''])];const csv='\ufeff'+rows.map(row=>row.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\r\n');download(csv,'reign-gaming-journal.csv','text/csv;charset=utf-8')}
 function download(content,name,type){const blob=new Blob([content],{type}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)}
 $('#arcadeExport').addEventListener('click',csvExport);
 function backup(){download(JSON.stringify({format:'REIGN_PLAYROOM_BACKUP',version:1,exportedAt:new Date().toISOString(),monthlyGoal,sessions},null,2),'reign-playroom-backup.json','application/json')}
 $('#arcadeExportBackup').addEventListener('click',backup);
 $('#arcadeImportBackup').addEventListener('change',async e=>{const file=e.target.files?.[0];if(!file)return;try{const data=JSON.parse(await file.text());if(data.format!=='REIGN_PLAYROOM_BACKUP'||!Array.isArray(data.sessions))throw Error('invalid');if(!confirm(`سيتم استبدال سجل الجلسات الحالي (${sessions.length}) ببيانات النسخة (${data.sessions.length}). هل تريد المتابعة؟`))return;sessions=data.sessions.filter(s=>s&&s.id&&s.date&&Number(s.hours)>0&&Number(s.hours)<=24).slice(-5000);monthlyGoal=Math.min(500,Math.max(1,Number(data.monthlyGoal)||20));write(KEY,sessions);write(GOAL_KEY,monthlyGoal);renderAll();toast('تم استيراد النسخة الاحتياطية بنجاح')}catch{alert('الملف غير صالح أو ليس نسخة REIGN PLAYROOM.')}finally{e.target.value=''}});
 function rouletteCandidates(){let candidates=allGames();if($('#arcadeWantOnly').checked){const p=getProgress();candidates=candidates.filter(g=>p[g.id]==='want')}return candidates}
 function pickWinner(){const candidates=rouletteCandidates();if(!candidates.length){toast($('#arcadeWantOnly').checked?'قائمة «أريد لعبها» فارغة. أضف ألعابًا إليها من REIGN ID أو ألغِ الخيار.':'لم نجد ألعابًا للاختيار.');return}return candidates[Math.floor(Math.random()*candidates.length)]}
 $('#arcadeSpin').addEventListener('click',()=>{if(spinning)return;const chosen=pickWinner();if(!chosen)return;spinning=true;winnerId=chosen.id;$('#arcadeSpin').disabled=true;$('#arcadeOpenWinner').disabled=true;$('#arcadeWheelResult').textContent='العجلة تدور… ما المغامرة القادمة؟';rotation+=1440+Math.floor(Math.random()*720);$('#arcadeWheel').style.transform=`rotate(${rotation}deg)`;setTimeout(()=>{spinning=false;$('#arcadeSpin').disabled=false;$('#arcadeWheelResult').textContent=`اختارت العجلة: ${chosen.title} ✨`;$('#arcadeOpenWinner').disabled=false;$('#arcadeOpenWinner').textContent='افتح '+chosen.title+' ↗';},3200)});
 $('#arcadeOpenWinner').addEventListener('click',()=>{if(!winnerId)return;const g=getGame(winnerId);if(g){if(typeof openGame==='function')openGame(g.id);else location.hash='#games';}});
 // Keep metrics fresh when the user changes the language or progress list in REIGN ID.
 $('#languageSelect')?.addEventListener('change',()=>setTimeout(renderAll,0));
 window.addEventListener('storage',e=>{if(e.key===KEY||e.key==='reignProgressV1'){sessions=read(KEY,[]);renderAll()}});
})();
