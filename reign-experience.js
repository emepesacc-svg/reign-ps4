/* REIGN EXPERIENCE PACK — face-off comparison.
   Local-first only. No PSN credentials, backend sync or community claims. */
(()=>{
 'use strict';
 const $=s=>document.querySelector(s);
  const safe=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const read=(key,fb)=>{try{const x=JSON.parse(localStorage.getItem(key));return x??fb}catch{return fb}};
 const write=(key,val)=>{try{localStorage.setItem(key,JSON.stringify(val));return true}catch{notify('تعذر الحفظ. قد تكون مساحة التخزين المحلية ممتلئة.');return false}};
 const allGames=()=>Array.isArray(games)?games.filter(g=>g&&g.id&&g.title):[];
 const gameById=id=>allGames().find(g=>String(g.id)===String(id));
 const notify=msg=>{const el=$('#toast');if(el){el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2600)}else alert(msg)};
 const dateToday=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`};
 const fmtDate=d=>{try{return new Intl.DateTimeFormat(document.documentElement.lang==='en'?'en-US':document.documentElement.lang==='fr'?'fr-FR':'ar-TN',{day:'numeric',month:'short',year:'numeric'}).format(new Date(`${d}T12:00:00`))}catch{return d}};
 const makeOptions=()=>allGames().map(g=>`<option value="${safe(g.id)}">${safe(g.title)}</option>`).join('');
 const gameSelects=['#faceoffA','#faceoffB'].map($).filter(Boolean);gameSelects.forEach(el=>el.innerHTML=makeOptions());
 if($('#faceoffB')&&allGames().length>1)$('#faceoffB').selectedIndex=1;
 function renderFaceoff(){const a=gameById($('#faceoffA').value)||allGames()[0],b=gameById($('#faceoffB').value)||allGames()[1];if(!a||!b)return;const facts=[['سنة الإصدار',g=>g.year||'غير متوفر'],['التصنيف',g=>(g.genres||[g.category||'متنوع']).join('، ')],['المطور',g=>g.developer||'غير متوفر'],['وضع اللعب',g=>g.mode||'تحقق من تفاصيل الإصدار'],['القصة الرئيسية',g=>g.times?.main?`${g.times.main} ساعة تقريبًا`:'غير محدد'],['القصة مع الإضافات',g=>g.times?.extra?`${g.times.extra} ساعة تقريبًا`:'غير محدد'],['إكمال 100%',g=>g.times?.complete?`${g.times.complete} ساعة تقريبًا`:'غير محدد']];
  const timeA=Number(a.times?.main)||0,timeB=Number(b.times?.main)||0;const winner=timeA&&timeB?(timeA<timeB?a:b):null;
  $('#faceoffResult').innerHTML=`<div class="faceoff-game"><img src="${safe(a.image||a.header||'')}" alt="" loading="lazy" onerror="this.style.visibility='hidden'"><h3>${safe(a.title)}</h3><small>${safe(a.category||'Game')} · ${safe(a.year||'—')}</small></div><div class="faceoff-table">${facts.map(([label,fn])=>`<div class="faceoff-row"><span>${safe(fn(a))}</span><b>${safe(label)}</b><span>${safe(fn(b))}</span></div>`).join('')}<div class="faceoff-verdict">${winner?`الأقصر قصة حسب التقدير: <b>${safe(winner.title)}</b>`:'لا تتوفر تقديرات كافية لمقارنة مدة القصة.'}</div></div><div class="faceoff-game"><img src="${safe(b.image||b.header||'')}" alt="" loading="lazy" onerror="this.style.visibility='hidden'"><h3>${safe(b.title)}</h3><small>${safe(b.category||'Game')} · ${safe(b.year||'—')}</small><button class="btn btn-outline" type="button" data-faceoff-open="${safe(b.id)}">تفاصيل اللعبة ↗</button></div>`;
 }
 $('#faceoffA').addEventListener('change',renderFaceoff);$('#faceoffB').addEventListener('change',renderFaceoff);$('#faceoffResult').addEventListener('click',e=>{const b=e.target.closest('[data-faceoff-open]');if(b&&window.openGame)window.openGame(Number(b.dataset.faceoffOpen))});
 $('#faceoffResult').addEventListener('click',e=>{const box=e.target.closest('.faceoff-game');if(box&&e.target.tagName==='IMG'){}});renderFaceoff();
 // Existing local-only backup tools do not include the new sections yet; this is explicit in the README.
})();
