/* REIGN WORLD GUIDE HUB — curated external resources + local stage checklist for every library title */
(()=>{'use strict';
 const $=s=>document.querySelector(s); const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const gamesList=()=>Array.isArray(window.games)?window.games:(typeof games!=='undefined'?games:[]);
 const isOpenWorld=g=>/عالم مفتوح/i.test(`${g.category||''} ${(g.genres||[]).join(' ')}`)||/Grand Theft Auto|Red Dead Redemption|The Witcher 3|Assassin.?s Creed|Horizon Zero Dawn|Horizon Forbidden West|Cyberpunk 2077|Days Gone|Ghost of Tsushima|Far Cry|Watch Dogs|Just Cause|Dying Light|Fallout 4|Skyrim|Mad Max|Middle-earth|No Man.?s Sky|The Forest|Sleeping Dogs|Mafia III|Marvel.?s Spider-Man|Spider-Man|Elden Ring|Kingdom Come|Dragon.?s Dogma/i.test(g.title||'');
 const directMaps={
 'Grand Theft Auto V':{url:'https://gta-5-map.com/',label:'خريطة GTA V التفاعلية'},
 'Red Dead Redemption 2':{url:'https://rdr2map.com/',label:'خريطة RDR2 التفاعلية'},
 'The Witcher 3: Wild Hunt':{url:'https://mapgenie.io/witcher3',label:'خريطة The Witcher 3'},
 'Elden Ring':{url:'https://mapgenie.io/elden-ring',label:'خريطة Elden Ring'},
 'Hogwarts Legacy':{url:'https://mapgenie.io/hogwarts-legacy',label:'خريطة Hogwarts Legacy'},
 'Horizon Zero Dawn':{url:'https://mapgenie.io/horizon-zero-dawn',label:'خريطة Horizon Zero Dawn'},
 'Horizon Forbidden West':{url:'https://mapgenie.io/horizon-forbidden-west',label:'خريطة Horizon Forbidden West'},
 'Ghost of Tsushima':{url:'https://mapgenie.io/ghost-of-tsushima',label:'خريطة Ghost of Tsushima'},
 'Days Gone':{url:'https://mapgenie.io/days-gone',label:'خريطة Days Gone'},
 'Assassin’s Creed Odyssey':{url:'https://mapgenie.io/assassins-creed-odyssey',label:'خريطة Assassin’s Creed Odyssey'},
 'Assassin’s Creed Origins':{url:'https://mapgenie.io/assassins-creed-origins',label:'خريطة Assassin’s Creed Origins'},
 'Assassin’s Creed Valhalla':{url:'https://mapgenie.io/assassins-creed-valhalla',label:'خريطة Assassin’s Creed Valhalla'},
 'Cyberpunk 2077':{url:'https://mapgenie.io/cyberpunk-2077',label:'خريطة Cyberpunk 2077'},
 'Fallout 4':{url:'https://mapgenie.io/fallout-4',label:'خريطة Fallout 4'},
 'The Elder Scrolls V: Skyrim Special Edition':{url:'https://mapgenie.io/skyrim',label:'خريطة Skyrim'},
 'Far Cry 5':{url:'https://mapgenie.io/far-cry-5',label:'خريطة Far Cry 5'},
 'No Man’s Sky':{url:'https://mapgenie.io/no-mans-sky',label:'موارد وخرائط No Man’s Sky'},
 'The Forest':{url:'https://mapgenie.io/the-forest',label:'خريطة The Forest'}
 };
 const queryUrl=q=>'https://www.google.com/search?q='+encodeURIComponent(q);
 const link=(url,label,icon='↗')=>`<a class="world-guide-link" href="${url}" target="_blank" rel="noopener noreferrer">${icon} ${safe(label)}</a>`;
 const select=$('#worldGuideGame');if(!select)return;
 const all=gamesList().filter(g=>g&&g.id&&g.title);select.innerHTML=all.map(g=>`<option value="${safe(g.id)}">${safe(g.title)}</option>`).join('');
 const keyFor=id=>'reignStageGuideV1_'+id;
 const stepsFor=g=>{
   const open=isOpenWorld(g), rpg=/RPG|لعب أدوار/i.test(`${g.category} ${(g.genres||[]).join(' ')}`), action=/أكشن|Action/i.test(g.category||''), racing=/سباقات|Racing/i.test(g.category||'');
   const base=[
    ['قبل البداية','راجع خيارات الصعوبة والتحكم والترجمة، وافهم أنظمة الحفظ. إذا كنت تستهدف 100%، افتح دليلًا خارجيًا قبل التقدم حتى لا تفوت محتوى محدود الوقت.'],
    ['الفصل أو المنطقة الأولى','تعلم الحركة والقتال أو آليات اللعب الأساسية. جرّب الأدوات المتاحة ولا تستهلك الموارد النادرة قبل فهم استخدامها.'],
    [open?'الاستكشاف والمهام الجانبية':'تطوير المهارات والمعدات',open?'افتح نقاط السفر السريع، وفعّل نقاط الاهتمام، ونفّذ المهام الجانبية القريبة قبل مغادرة المنطقة. استخدم الخريطة التفاعلية للبحث عن المقتنيات عند الحاجة.':rpg?'وازن بين المهارات والمعدات، وتحدث مع الشخصيات، وأنجز المهام الجانبية التي تمنح خبرة أو أدوات مفيدة.':racing?'طوّر المركبة تدريجيًا وتدرّب على الفرملة والخطوط المثالية قبل السباقات الأصعب.':'طوّر المهارات والأدوات الأساسية، وجرّب أكثر من أسلوب لمواجهة الأعداء أو حل الألغاز.'],
    ['منتصف اللعبة','راجع سجل المهام والأهداف التي لم تُنهَ. حدّث المعدات واحتفظ بموارد علاج أو ذخيرة للمواجهات الصعبة.'],
    ['قبل المهمة النهائية','أنهِ الأنشطة التي ترغب فيها، واحفظ تقدمك في خانة منفصلة إن أمكن. تحقق من دليل اللعبة لمعرفة ما إذا كان هناك محتوى قابل للفوات.'],
    ['ما بعد النهاية و100%','راجع المقتنيات والمهام المتبقية والتحديات. قارن قائمة الإنجازات بدليل متخصص، ولا تفترض أن كل لعبة تتيح العودة لكل المناطق أو المهمات.']
   ];
   if(open)base.splice(2,0,['خريطة العالم والمناطق','افتح أطلس اللعبة من الأسفل، واستخدم البحث حسب نوع العنصر: مهام، أسرار، ترقيات، كنوز أو نقاط سفر سريع. لا تحاول جمع كل شيء قبل أن تتوفر لك أدوات الوصول المناسبة.']);
   if(g.title==='Red Dead Redemption 2')base[2][1]='افتح المخيم وطور الأدوات تدريجيًا، وراقب شرف الشخصية والأنشطة التي تهمك. تذكّر أن بعض المهام والأحداث مرتبطة بالفصل أو التوقيت؛ راجع دليلًا خاليًا من الحرق قبل إنهاء الفصل.';
   if(g.title==='The Witcher 3: Wild Hunt')base[2][1]='استعد للوحوش باستخدام سجل الوحوش والزيوت والإشارات المناسبة، ووازن بين عقود الوحوش والمهام الجانبية. قد تؤثر بعض القرارات في نتائج المهمات؛ راجع دليلًا خاليًا من الحرق عند التردد.';
   if(/Elden Ring/.test(g.title))base[1][1]='استكشف المسارات الجانبية واجمع شظايا الخرائط ومواد التطوير. إذا واجهت زعيمًا صعبًا، جرّب منطقة أخرى أو استدعاءات متاحة بدل تكرار المحاولة دون تغيير الاستراتيجية.';
   if(/Cyberpunk 2077/.test(g.title))base[3][1]='وازن بين مهام القصة والعقود والمهام الشخصية. خيارات الحوار وبعض القرارات قد تغير المسارات والنهايات؛ احتفظ بحفظ يدوي قبل القرارات المهمة.';
   return base;
 };
 function renderGuide(){const g=all.find(x=>String(x.id)===select.value)||all[0];if(!g)return;
  const card=$('#worldGuideGameCard');card.innerHTML=`<span class="world-guide-icon">${isOpenWorld(g)?'🗺️':'🧭'}</span><div><b>${safe(g.title)}</b><p>${safe(g.desc||'دليل التقدم والمساعدة')}<br>${isOpenWorld(g)?'عالم مفتوح — الخرائط متاحة أدناه أو عبر بحث موجّه.':'دليل مراحل وروابط مساعدة متخصصة.'}</p></div>`;
  const search=encodeURIComponent(g.title);const links=[];
  links.push(link(queryUrl(`${g.title} walkthrough chapter guide spoiler free`),'دليل القصة والمراحل','📖'));
  links.push(link(queryUrl(`${g.title} beginner tips best upgrades`),'نصائح للمبتدئين','✦'));
  links.push(link(queryUrl(`${g.title} missable trophies collectibles guide PS4`),'التروفيات والمقتنيات','♛'));
  links.push(link(queryUrl(`${g.title} boss guide puzzle solution`),'حل الزعماء والألغاز','⚔'));
  if(isOpenWorld(g)){const m=directMaps[g.title];links.push(link(m?m.url:queryUrl(`${g.title} interactive map locations collectibles`),m?'افتح الخريطة التفاعلية':'ابحث عن خريطة تفاعلية','🗺️'));links.push(link(queryUrl(`${g.title} mapgenie interactive map`),'خرائط MapGenie','⌖'));}
  links.push(link(queryUrl(`${g.title} walkthrough Arabic شرح جميع المراحل`),'شرح عربي للمراحل','▶'));
  $('#worldGuideLinks').innerHTML=links.join('');
  $('#stageGuideIntro').textContent=`خطة عامة لـ ${g.title} تساعدك على ترتيب التقدم دون كشف أحداث القصة. التفاصيل الخاصة بالمهمات والزعماء تتغير حسب اللعبة والتحديث، لذا استخدم الروابط المتخصصة عند الحاجة.`;
  let saved={};try{saved=JSON.parse(localStorage.getItem(keyFor(g.id))||'{}')||{}}catch{}
  const steps=stepsFor(g);$('#stageGuideList').innerHTML=steps.map((step,i)=>`<label class="stage-guide-item ${saved[i]?'done':''}"><input type="checkbox" data-stage="${i}" ${saved[i]?'checked':''}><span><b>${i+1}. ${safe(step[0])}</b><p>${safe(step[1])}</p></span></label>`).join('');
  $('#stageGuideList').querySelectorAll('input[data-stage]').forEach(el=>el.addEventListener('change',()=>{const state={};$('#stageGuideList').querySelectorAll('input[data-stage]').forEach(x=>state[x.dataset.stage]=x.checked);try{localStorage.setItem(keyFor(g.id),JSON.stringify(state))}catch{};updateProgress()}));updateProgress();
 }
 function updateProgress(){const boxes=[...$('#stageGuideList').querySelectorAll('input[data-stage]')],done=boxes.filter(x=>x.checked).length,pct=boxes.length?Math.round(done/boxes.length*100):0;$('#stageGuideProgressText').textContent=`${done} من ${boxes.length} مراحل`;$('#stageGuideProgressPct').textContent=pct+'%';$('#stageGuideProgressBar').style.width=pct+'%';boxes.forEach(x=>x.closest('.stage-guide-item').classList.toggle('done',x.checked));}
 $('#resetStageGuide').addEventListener('click',()=>{const g=all.find(x=>String(x.id)===select.value);if(!g)return;try{localStorage.removeItem(keyFor(g.id))}catch{}renderGuide()});select.addEventListener('change',renderGuide);renderGuide();
 const mapGrid=$('#worldMapGrid'),mapFilter=$('#mapFilter');
 function renderMaps(){const mode=mapFilter.value;const items=all.filter(isOpenWorld).sort((a,b)=>a.title.localeCompare(b.title));const filtered=items.filter(g=>mode==='all'||(mode==='direct'?!!directMaps[g.title]:!directMaps[g.title]));if(!filtered.length){mapGrid.innerHTML='<div class="world-map-empty">لا توجد عناوين ضمن هذا الفلتر.</div>';return;}
  mapGrid.innerHTML=filtered.map(g=>{const m=directMaps[g.title],url=m?m.url:queryUrl(`${g.title} interactive map locations collectibles`),label=m?'افتح الخريطة التفاعلية':'ابحث عن خريطة لهذه اللعبة';return `<article class="world-map-card"><div class="world-map-card-top"><span class="world-map-card-icon">🗺️</span><div><h4>${safe(g.title)}</h4><small>${safe(g.year||'')} · عالم مفتوح</small></div></div><span class="world-map-badge ${m?'':'search'}">${m?'رابط خريطة مباشر':'بحث موجّه عن الخريطة'}</span><p>${m?'افتح خريطة خارجية للبحث عن المواقع والعناصر القابلة للجمع.':'يفتح بحثًا باسم اللعبة للعثور على خرائط تفاعلية متاحة، لأن بعض العناوين لا تملك خريطة موحدة معروفة.'}</p><a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a></article>`}).join('');}
 mapFilter.addEventListener('change',renderMaps);renderMaps();
})();
