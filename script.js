const games = [
 {id:1,title:"God of War",year:"2018",category:"مغامرات",englishCategory:"ADVENTURE",size:"معلومات غير محددة",system:"PS4",desc:"رحلة ملحمية تجمع كريتوس وابنه أتريوس في عالم مستوحى من الأساطير الإسكندنافية. هذه البطاقة تعريفية ويمكنك تحديث بيانات الإصدار والتوافق لاحقًا.",image:"https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=85",tone:"gold"},
 {id:2,title:"Grand Theft Auto V",year:"2014",category:"عالم مفتوح",englishCategory:"OPEN WORLD",size:"معلومات غير محددة",system:"PS4",desc:"تجربة عالم مفتوح في مدينة لوس سانتوس، مع قصص وشخصيات متعددة وأنشطة متنوعة. تحقّق من النسخة والتحديث قبل اعتماد أي معلومات توافق.",image:"https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=85",tone:"red"},
 {id:3,title:"EA SPORTS FC",year:"رياضة",category:"رياضة",englishCategory:"SPORTS",size:"حسب الإصدار",system:"PS4",desc:"سلسلة كرة قدم تضم أوضاع لعب فردية وجماعية. يختلف الاسم والمحتوى والاتصال الشبكي بحسب الإصدار.",image:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=85",tone:"green"},
 {id:4,title:"Mortal Kombat 11",year:"2019",category:"قتال",englishCategory:"FIGHTING",size:"معلومات غير محددة",system:"PS4",desc:"لعبة قتال تعتمد على المواجهات الفردية ومجموعة متنوعة من المقاتلين والحركات الخاصة.",image:"https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=900&q=85",tone:"red"},
 {id:5,title:"The Witcher 3",year:"2015",category:"مغامرات",englishCategory:"RPG / ADVENTURE",size:"حسب الإصدار",system:"PS4",desc:"مغامرة تقمّص أدوار في عالم خيالي واسع، مع مهام وشخصيات وقرارات تؤثر في الرحلة.",image:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85",tone:"gold"},
 {id:6,title:"Red Dead Redemption 2",year:"2018",category:"عالم مفتوح",englishCategory:"OPEN WORLD",size:"معلومات غير محددة",system:"PS4",desc:"قصة في الغرب الأمريكي مع عالم مفتوح واسع وتفاصيل كثيرة في البيئة والشخصيات.",image:"https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=85",tone:"green"},
 {id:7,title:"Gran Turismo Sport",year:"2017",category:"رياضة",englishCategory:"RACING",size:"حسب الإصدار",system:"PS4",desc:"تجربة سباقات تركّز على السيارات والحلبات والقيادة. راجع حالة الخدمات والميزات المتصلة قبل الاستخدام.",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85",tone:"gold"},
 {id:8,title:"Uncharted 4",year:"2016",category:"مغامرات",englishCategory:"ACTION / ADVENTURE",size:"معلومات غير محددة",system:"PS4",desc:"مغامرة سينمائية تتبع ناثان دريك في رحلة مليئة بالألغاز والاستكشاف والمطاردات.",image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=85",tone:"blue"}
];
const grid=document.getElementById("gamesGrid"),search=document.getElementById("searchInput"),filters=document.getElementById("filters"),empty=document.getElementById("emptyState"),count=document.getElementById("gameCount");
let activeCategory="الكل",query="";
function escapeHtml(value){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function renderGames(){
 const shown=games.filter(g=>(activeCategory==="الكل"||g.category===activeCategory)&&`${g.title} ${g.category} ${g.year}`.toLowerCase().includes(query.toLowerCase()));
 grid.innerHTML=shown.map(g=>`<article class="game-card" tabindex="0" role="button" aria-label="تفاصيل ${escapeHtml(g.title)}" data-id="${g.id}">
  <div class="game-cover"><img src="${g.image}" alt="صورة تمثيلية لأجواء ${escapeHtml(g.title)}" loading="lazy" onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(135deg,#29251e,#111114)'"><span class="game-tag">${escapeHtml(g.category)}</span></div>
  <div class="game-info"><div class="game-category">${escapeHtml(g.englishCategory)}</div><h3>${escapeHtml(g.title)}</h3><p>${escapeHtml(g.desc.slice(0,78))}…</p><div class="game-meta"><span>${escapeHtml(g.year)}</span><span>التفاصيل ←</span></div></div></article>`).join("");
 empty.hidden=shown.length>0;count.textContent=String(shown.length).padStart(2,"0");
}
function openGame(id){
 const g=games.find(x=>x.id===Number(id));if(!g)return;
 document.getElementById("modalTitle").textContent=g.title;
 document.getElementById("modalCategory").textContent=g.englishCategory;
 document.getElementById("modalDescription").textContent=g.desc;
 document.getElementById("modalImage").style.backgroundImage=`linear-gradient(0deg,#11111433,#11111422),url("${g.image}")`;
 document.getElementById("modalDetails").innerHTML=[["التصنيف",g.category],["سنة الإصدار",g.year],["المنصة",g.system],["الحجم",g.size],["التوافق","تحقّق من الإصدار المحدد"]].map(([a,b])=>`<div class="detail-row"><span>${escapeHtml(a)}</span><span>${escapeHtml(b)}</span></div>`).join("");
 document.getElementById("modalBackdrop").hidden=false;document.body.style.overflow="hidden";document.getElementById("modalClose").focus();
}
function closeModal(){document.getElementById("modalBackdrop").hidden=true;document.body.style.overflow="";}
grid.addEventListener("click",e=>{const card=e.target.closest(".game-card");if(card)openGame(card.dataset.id)});
grid.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.classList.contains("game-card")){e.preventDefault();openGame(e.target.dataset.id)}});
search.addEventListener("input",()=>{query=search.value.trim();renderGames()});
filters.addEventListener("click",e=>{const btn=e.target.closest(".filter");if(!btn)return;activeCategory=btn.dataset.category;filters.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b===btn));renderGames()});
document.getElementById("modalClose").addEventListener("click",closeModal);
document.getElementById("modalBackdrop").addEventListener("click",e=>{if(e.target.id==="modalBackdrop")closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("menuButton").addEventListener("click",()=>document.querySelector(".topbar").classList.toggle("mobile-open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".topbar").classList.remove("mobile-open")));
const guideText={
 firmware:["اعرف إصدار النظام","من الشاشة الرئيسية افتح الإعدادات ثم معلومات النظام، وسجّل رقم إصدار برنامج النظام. لا تعتمد على فيديو قديم قبل التأكد من تاريخ نشره وتوافقه مع إصدار جهازك."],
 compatibility:["التوافق أولًا","قد تختلف ملفات اللعبة والتحديثات حسب المنطقة ورقم الإصدار. احتفظ بنسخة من بياناتك، وتأكد من مصدر المعلومات، ولا تثبّت حزمًا لا تعرف مصدرها."],
 safety:["السلامة والنسخ الاحتياطي","نزّل الملفات من مصادر موثوقة فقط، وافحص الملفات حيثما أمكن، ولا تعطِ حسابك أو بياناتك لأي موقع غير موثوق. التعديلات غير الرسمية قد تؤثر في الضمان أو الاتصال بالخدمات."]
};
document.querySelectorAll("[data-guide]").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();const [title,body]=guideText[a.dataset.guide];document.getElementById("modalCategory").textContent="REIGN GUIDE";document.getElementById("modalTitle").textContent=title;document.getElementById("modalDescription").textContent=body;document.getElementById("modalImage").style.backgroundImage="linear-gradient(135deg,#272116,#101012)";document.getElementById("modalDetails").innerHTML='<div class="detail-row"><span>نصيحة</span><span>تحقّق قبل التطبيق</span></div>';document.getElementById("modalBackdrop").hidden=false;document.body.style.overflow="hidden"}));
renderGames();
