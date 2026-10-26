/* REIGN Six Features: locally rendered panels; no outbound anchors or new tabs. */
(() => {
 'use strict';
 const $=s=>document.querySelector(s), select=$('#sixGameSelect'), content=$('#sixFeatureContent');
 if(!select||!content)return;
 const featureNames={worlds:'REIGN Worlds',story:'Story Archive',bestiary:'Bestiary',secrets:'Secrets',timeline:'Timeline',gallery:'Art Gallery'};
 const mapImgs={
  'Grand Theft Auto V':'https://forum-cfx-re.akamaized.net/optimized/5X/3/f/4/5/3f4524097613e07c24da8f0a4b462e67d34859ad_2_1000x1000.jpeg',
  'Red Dead Redemption 2':'https://4.bp.blogspot.com/-Tb9XNSHdvlw/XWT5TLpGk-I/AAAAAAAACmI/GxACMPMbyU4c-_erUjc4cNA-_wRj6CUPQCKgBGAs/s7200/red-dead-redemption-2-map.jpg',
  'Assassin’s Creed Odyssey':'https://img.consolepulse.com/uploads/franchises/assassins-creed/versions/odyssey/gameplay/ac-odyssey-100-percent-world-map-cleanup-state.webp',
  'Assassin’s Creed Origins':'https://i.pinimg.com/originals/70/d3/2b/70d32b0d93a2df975eb18328ea5fa54f.jpg',
  'Ghost of Tsushima Director’s Cut':'https://images.pushsquare.com/fa434df42c085/ghost-of-tsushima-map-size.original.jpg',
  'Watch Dogs 2':'https://cdn.mos.cms.futurecdn.net/GAvA9T2SGrxPNWdQVcBnUk.png',
  'Marvel’s Spider-Man':'https://cdn.mos.cms.futurecdn.net/GZrWwRQ3w2cb2ojyp4Xwb8.jpg',
  'Cyberpunk 2077':'https://i.imgur.com/jn8Frrc.jpg',
  'The Witcher 3: Wild Hunt':'https://livedoor.blogimg.jp/games084/imgs/4/e/4e1b5b77.jpg',
  'Horizon Zero Dawn':'https://www.thumbculture.co.uk/wp-content/uploads/2017/03/map-1024x577.jpg',
  'Horizon Zero Dawn Complete Edition':'https://www.thumbculture.co.uk/wp-content/uploads/2017/03/map-1024x577.jpg',
  'Days Gone':'https://cdn.mos.cms.futurecdn.net/gZzyVXeR725BUErDtQjcXK.png',
  'Fallout 4':'https://staticdelivery.nexusmods.com/images/1151/2656542-1614870577.jpg',
  'The Elder Scrolls V: Skyrim Special Edition':'https://blog-imgs-61-origin.fc2.com/s/k/y/skyrim360/Tamriel_WorldMap.jpg',
  'Far Cry 5':'https://www.psu.com/wp/wp-content/uploads/2018/03/far-cry-5-map-faiths-region.jpg',
 };
 const data={
  'Grand Theft Auto V':{
   story:{intro:'تتداخل مسارات Michael وFranklin وTrevor في قصة جريمة تدور حول الولاء والطموح والعواقب.',items:['Michael De Santa — حياة جديدة ومحاولة الابتعاد عن الماضي','Franklin Clinton — الطموح وصعود عالم الجريمة','Trevor Philips — الفوضى والروابط القديمة','تتقاطع المسارات في عمليات سرقة كبرى وقرارات حاسمة'],spoiler:'قد تحتوي تفاصيل المهمات والنهايات على حرق للأحداث.'},
   bestiary:{intro:'دليل الحياة البرية في San Andreas.',items:['الجبال والبراري: حيوانات برية في المناطق الطبيعية','السواحل والمياه: كائنات بحرية ومناطق صيد','الريف والصحراء: تنوّع الحياة بين Blaine County والمناطق الجافة'],spoiler:'المعلومات عامة عن الأنظمة البيئية داخل اللعبة.'},
   secrets:{intro:'قائمة تتبّع للاستكشاف، وليست قائمة شاملة بكل أسرار اللعبة.',items:['الأحداث العشوائية واللقاءات الجانبية','القفزات الخطرة والتحديات المخفية','المقتنيات والأنشطة الجانبية','معالم غريبة وإشارات Easter Eggs'],spoiler:'ضع علامة على ما أنجزته؛ الحفظ محلي في هذا المتصفح.'},
   timeline:{intro:'ترتيب عام لمسار اللعب دون كشف تفاصيل النهاية.',items:['المقدمة والتعرّف على الشخصيات','توسّع العلاقات وفتح أنشطة جديدة','التخطيط لعمليات السرقة','تنفيذ العمليات والتعامل مع العواقب','المرحلة الختامية والقرارات النهائية'],spoiler:'هذا ترتيب إرشادي، وقد تختلف بعض المهمات حسب التقدم.'}},
  'Red Dead Redemption 2':{
   story:{intro:'رحلة عصابة Van der Linde في عالم يتغير، من منظور Arthur Morgan.',items:['المقدمة في الثلوج وبداية الهروب','الاستقرار المؤقت وبناء المخيم','توسّع المهمات والاحتكاك بالقانون والعصابات','تصاعد الخلافات والضغوط داخل العصابة','الفصول المتأخرة وما بعدها'],spoiler:'يمكنك إخفاء هذا القسم إذا أردت تجنب حرق القصة.'},
   bestiary:{intro:'تتبّع الحياة البرية والصيد عبر البيئات المختلفة.',items:['حيوانات الغابات والجبال','حيوانات السهول والبراري','كائنات المستنقعات والأنهار','الحيوانات الأسطورية — تحتاج إلى أدلة مواقع خاصة'],spoiler:'لا تعتمد على ظهور الحيوان في كل منطقة أو وقت.'},
   secrets:{intro:'أفكار استكشاف ومقتنيات لتوسيع رحلتك.',items:['خرائط الكنوز ومواقعها','عظام الديناصورات ورسومات الصخور','بطاقات السجائر والمقتنيات','أحداث الغرباء والأماكن المهجورة','الحيوانات الأسطورية والأسماك الأسطورية'],spoiler:'بعض المقتنيات تتطلب أدوات أو تقدّمًا في القصة.'},
   timeline:{intro:'هيكل الفصول يساعدك على تذكّر موقعك في القصة.',items:['الفصل 1 — Colter','الفصل 2 — Horseshoe Overlook','الفصل 3 — Clemens Point','الفصل 4 — Saint Denis','الفصول المتأخرة والخاتمة'],spoiler:'أسماء الفصول ظاهرة وقد تكشف تقدمك في القصة.'}},
  'The Witcher 3: Wild Hunt':{
   story:{intro:'رحلة Geralt في البحث عن Ciri وسط صراعات الممالك والتهديدات الخارقة.',items:['البداية في White Orchard','التحقيقات في Velen','المدينة والمهام المرتبطة بها في Novigrad','رحلة Skellige','المسار الرئيسي والنتائج التي تتأثر بالاختيارات'],spoiler:'قرارات الحوار والمهام الجانبية قد تؤثر في النتائج.'},
   bestiary:{intro:'استعد قبل مواجهة الوحوش: المعرفة والزيوت والإشارات مهمة.',items:['الوحوش الطيفية — راجع طبيعة الظهور ونقاط الضعف','الوحوش الملعونة والمتبدلة','الوحوش الغابية والمفترسات','الكيانات السحرية والعقود الخاصة'],spoiler:'اختر مدخل الوحش داخل اللعبة لمراجعة تفاصيله قبل القتال.'},
   secrets:{intro:'أنشطة ومناطق اختيارية تزيد من عمق الاستكشاف.',items:['علامات ؟ ومواقع الاستكشاف','عقود الوحوش والمهام الجانبية','مخططات العتاد والمدارس','كنوز مخفية ومخابئ مهجورة'],spoiler:'بعض المهام قد تصبح غير متاحة بعد نقاط معينة من القصة.'},
   timeline:{intro:'تسلسل تقريبي للمناطق الرئيسية في الرحلة.',items:['White Orchard — التهيئة','Velen — التحقيق والبحث','Novigrad — خيوط جديدة','Skellige — متابعة الأثر','نهاية المسار الرئيسي والمحتوى الإضافي'],spoiler:'يمكن استكشاف بعض المناطق بترتيب مختلف.'}},
  'Horizon Zero Dawn':{
   story:{intro:'رحلة Aloy لكشف أسرار العالم والآلات التي تجوب الأرض.',items:['الطفولة والتدريب في Nora','الانطلاق بعد الأحداث المفصلية','استكشاف المناطق والآثار القديمة','كشف أسرار الآلات والحضارة السابقة','المواجهة الختامية'],spoiler:'الأقسام الأخيرة مرتبطة بكشف أسرار القصة.'},
   bestiary:{intro:'الآلات لها أنماط هجوم ومكوّنات ونقاط ضعف مختلفة.',items:['آلات استطلاع — راقب مساراتها ورؤيتها','آلات قتالية — حدّد المكوّنات القابلة للفصل','آلات ثقيلة — جهّز الذخيرة والعناصر المناسبة','استخدم Focus لفحص الآلة قبل المواجهة'],spoiler:'نقاط الضعف الدقيقة تختلف باختلاف الآلة والتجهيز.'},
   secrets:{intro:'قائمة عامة لما يستحق التتبع أثناء الاستكشاف.',items:['Tallnecks لفتح معلومات المنطقة','Cauldrons ومحتواها','Vantage points والآثار','مصادر الموارد ومواقع الآلات','المهام الجانبية والشخصيات'],spoiler:'بعض المناطق تحتاج قدرات أو تقدمًا إضافيًا.'},
   timeline:{intro:'تسلسل إرشادي لرحلة Aloy.',items:['التدريب والبداية','الانطلاق إلى العالم الأوسع','التحقيق في الآثار القديمة','كشف الحقيقة وراء الآلات','الخاتمة والمحتوى الإضافي'],spoiler:'لا يتضمن هذا التسلسل تفاصيل المفاجآت.'}},
  'Assassin’s Creed Odyssey':{
   story:{intro:'رحلة في اليونان القديمة تخلط الصراع العائلي بالحرب والبحث عن الحقيقة.',items:['البداية في Kephallonia','الانخراط في صراع الحرب بين أثينا وSparta','كشف خيوط العائلة','مطاردة أعضاء Cult of Kosmos','القرارات والمهام الختامية'],spoiler:'خيارات الحوار تؤثر في بعض النتائج.'},
   secrets:{intro:'أهداف الاستكشاف والأنشطة الاختيارية.',items:['مواقع Ancient Stele','قادة المرتزقة وأعضاء Cult of Kosmos','المقابر والألغاز القديمة','الجزر والمواقع غير المكتشفة'],spoiler:'قد يتطلب بعضها مستوى أو تجهيزًا مناسبًا.'},
   timeline:{intro:'خط عام للمحتوى الرئيسي.',items:['Kephallonia — بداية الرحلة','Megaris — أولى خطوات الحرب','Athens ومناطق البر الرئيسي','الجزر والمهام المرتبطة بالعائلة','القرارات الختامية ومحتوى ما بعد القصة'],spoiler:'عالم اللعبة يسمح بترتيب مرن لبعض المهام.'}},
  'Ghost of Tsushima Director’s Cut':{
   story:{intro:'قصة Jin Sakai وصراعه بين التقاليد وأساليب المقاومة أثناء الغزو.',items:['البداية وسقوط الدفاعات','استعادة الحلفاء والقدرات','تحرير المناطق ومواجهة قادة الغزو','التقدم نحو المواجهات الحاسمة','المراحل الختامية'],spoiler:'قد تكشف أسماء المراحل اتجاه القصة.'},
   secrets:{intro:'عناصر الاستكشاف التي تعزز قدرات Jin.',items:['Fox Dens وInari Shrines','Hot Springs','Bamboo Strikes','Haiku locations','Mythic Tales والعتاد الخاص'],spoiler:'بعض الأنشطة تمنح ترقيات دائمة.'},
   timeline:{intro:'التقدم العام عبر مناطق الجزيرة.',items:['Izuhara','Toyotama','Kamiagata','المهام الختامية ومحتوى Iki Island'],spoiler:'Iki Island محتوى إضافي وقد يحتوي حرقًا.'}},
  'Fallout 4':{
   story:{intro:'رحلة بحث في Commonwealth بعد الاستيقاظ من القبو، وسط فصائل متنافسة.',items:['الخروج من Vault 111','البحث عن خيوط في منطقة Boston','التعرّف على الفصائل الكبرى','اختيار التحالفات','نهاية تتأثر بالفصيل الذي تدعمه'],spoiler:'الاختيارات المتأخرة قد تغلق مسارات فصائل أخرى.'},
   secrets:{intro:'أهداف الاستكشاف والبناء.',items:['Vaults ومواقعها','Bobbleheads وMagazines','ورش البناء والمستوطنات','أسلحة فريدة ومخابئ','مهام الفصائل'],spoiler:'سجل ما جمعته قبل الانتقال إلى منطقة جديدة.'},
   timeline:{intro:'خط عام لمسار اللعب.',items:['البداية في Vault 111','استكشاف المناطق المحيطة','فتح مسارات الفصائل','اتخاذ قرارات التحالف','المرحلة النهائية'],spoiler:'لا يوجد مسار واحد إلزامي لكل اللاعبين.'}},
  'The Elder Scrolls V: Skyrim Special Edition':{
   story:{intro:'رحلة Dragonborn في Skyrim وسط تنانين وصراع سياسي قديم.',items:['الهروب من Helgen','اكتشاف دور Dragonborn','رحلة Greybeards والتدريب','اختيار مسار الصراع السياسي والمهام الجانبية','المواجهة الرئيسية'],spoiler:'المهام الجانبية قد تغير ترتيب تقدمك.'},
   bestiary:{intro:'استعد للخصم حسب نوعه ومقاومته.',items:['التنانين — راقب الهجمات والعناصر','Undead مثل Draugr','المخلوقات البرية والعمالقة','Daedra ومخلوقات السحر'],spoiler:'تختلف المقاومة حسب العدو والمستوى.'},
   secrets:{intro:'أنشطة ومقتنيات لاكتشافها في Skyrim.',items:['Word Walls وكلمات القوة','Daedric quests','الكهوف والأطلال النوردية','Standing Stones','المهام المخفية والعناصر الفريدة'],spoiler:'بعض العناصر مرتبطة بمهام أو مستويات محددة.'},
   timeline:{intro:'تسلسل مرن للأحداث الرئيسية.',items:['Helgen وRiverwood','Whiterun وDragon Rising','High Hrothgar','المهام الرئيسية والتنانين','الخاتمة'],spoiler:'يمكنك تأجيل القصة الرئيسية والتركيز على الاستكشاف.'}}
 };
 const mediaData={
  'Red Dead Redemption 2':[
   {src:'https://cdn.staticneo.com/ew/0/0a/RDR2_0081.jpg',title:'مدخل Mule في دليل الحيوانات داخل اللعبة',kind:'دليل الحيوانات'},
   {src:'https://www.gtabase.com/igallery/3801-3900/RDR2_Online_WildAnimalKillsChallenge_Bear-3882-1080.jpg',title:'Grizzly Bear — مواجهة دب رمادي',kind:'الحياة البرية'},
   {src:'https://images7.alphacoders.com/950/thumb-1920-950038.jpg',title:'قطيع البيسون في البراري',kind:'حيوانات السهول'}
  ],
  'The Witcher 3: Wild Hunt':[
   {src:'https://images.pushsquare.com/3cf9d1e02c151/leshens-the-witcher-3-wild-hunt-ps4-playstation-4-guide.large.jpg',title:'Leshens — مدخل دليل الوحوش',kind:'Bestiary'},
   {src:'https://www.gtogg.com/att/Games/RPG/The_Witcher/The_Witcher_3_Wild_Hunt/Screenshots/4/04.jpg',title:'مواجهة Royal Griffin',kind:'وحوش اللعبة'}
  ],
  'Horizon Zero Dawn':[
   {src:'https://cdn.80.lv/api/upload/content/9b/images/5d2cfebfbb616/widen_1840x0.jpg',title:'مواجهة آلة Sawtooth',kind:'دليل الآلات'},
   {src:'https://images.everyeye.it/img-articoli/horizon-zero-dawn-dinosauri-meccanici-trovarli-speciale-v6-33110-1280x16.jpg',title:'آلة ضخمة في بيئة اللعبة',kind:'آلات اللعبة'}
  ],
  'Horizon Zero Dawn Complete Edition':[
   {src:'https://cdn.80.lv/api/upload/content/9b/images/5d2cfebfbb616/widen_1840x0.jpg',title:'مواجهة آلة Sawtooth',kind:'دليل الآلات'},
   {src:'https://images.everyeye.it/img-articoli/horizon-zero-dawn-dinosauri-meccanici-trovarli-speciale-v6-33110-1280x16.jpg',title:'آلة ضخمة في بيئة اللعبة',kind:'آلات اللعبة'}
  ],
  'Assassin’s Creed Odyssey':[
   {src:'https://cdn.mos.cms.futurecdn.net/gAP9ZsvpLCDXoXDwzJQqG7.jpg',title:'Kalydonian Boar — الخنزير الأسطوري',kind:'الحيوانات الأسطورية'},
   {src:'https://cdn.mos.cms.futurecdn.net/RsGL5hCrLXmiFY5Wcu6797-1024-80.jpg',title:'موقع الخنزير الأسطوري في Phokis',kind:'لقطة خريطة داخل اللعبة'}
  ],
  'Assassin’s Creed Origins':[
   {src:'https://www.gamereactor.eu/media/71/assassinscreedorigins_2117113b.jpg',title:'الحياة البرية في مصر القديمة',kind:'الحيوانات والبيئة'},
   {src:'https://www.gamersdecide.com/sites/default/files/authors/u158268/ac_origin_tahira_near_giant_crocodile_by_ladyrosearasaka_dcuyaep-pre.jpg',title:'تمساح في مياه النيل',kind:'الحياة البرية'}
  ],
  'Ghost of Tsushima Director’s Cut':[
   {src:'https://www.play3.de/wp-content/uploads/2020/07/Ghost-of-Tsushima-Jin-und-ein-Fuchs.jpg',title:'Jin والثعلب المرشد',kind:'حيوانات الاستكشاف'}
  ],
  'The Elder Scrolls V: Skyrim Special Edition':[
   {src:'https://www.krinein.com/img_galerie/big/63508.jpg',title:'الماموث في Skyrim',kind:'كائنات العالم'}
  ],
  'Fallout 4':[
   {src:'https://cdn.mos.cms.futurecdn.net/d72c6f1f274f646a7a59043cbb59d067-1734-80.jpg',title:'مواجهة Deathclaw',kind:'الأعداء والمخلوقات'}
  ],
  'Cyberpunk 2077':[
   {src:'https://img.game8.co/3313481/c2da5b6d7207d9c1edb5d8910c939fe3.png/original',title:'مواجهة Cyberpsycho في Night City',kind:'الأعداء والمهام'}
  ],
  'Watch Dogs 2':[
   {src:'https://m.media-amazon.com/images/M/MV5BMjEwNmQ5ZmEtZTdkYS00NzZmLThiNjYtYjBkZWYzMTBjYjUwXkEyXkFqcGc%40._V1_.jpg',title:'Marcus مع كلب في Watch Dogs 2',kind:'شخصيات وبيئة اللعبة'},
   {src:'https://i0.wp.com/gamingph.com/wp-content/uploads/2017/03/watch-dogs-2-san-francisco.jpg?ssl=1',title:'واجهة ساحلية داخل Watch Dogs 2',kind:'الاستكشاف والبيئة'}
  ],
  'Marvel’s Spider-Man':[
   {src:'https://images.cgames.de/images/gsgp/226/spider-man_6042386.jpg',title:'Spider-Man يتنقل بين شوارع Manhattan',kind:'مشهد من اللعبة'},
   {src:'https://i.blogs.es/juegos/13417/spiderman_ps4__nombre_provisional_/fotos/analisis/spiderman_ps4__nombre_provisional_-4655325.jpg',title:'دورية في شوارع نيويورك',kind:'بيئة اللعبة'}
  ],
  'Days Gone':[
   {src:'https://www.thepixelempire.net/uploads/1/2/1/1/12119064/days-gone-playstation-4-11_orig.png',title:'هجوم حشد Freakers',kind:'الأعداء والمواجهات'},
   {src:'https://i0.wp.com/gideonsgaming.com/wp-content/uploads/2020/09/Days-Gone-horde-attack.jpg?resize=1024%2C576&ssl=1',title:'Deacon محاصر بالحشد',kind:'مشهد قتال'}
  ],
  'Far Cry 5':[
   {src:'https://images.everyeye.it/img-notizie/come-trovare-reclutare-orso-cheeseburger-far-cry-5-v7-325919.jpg',title:'Cheeseburger — الدب المرافق',kind:'حيوان وشخصية مساعدة'}
  ],
  'Assassin’s Creed Origins':[
   {src:'https://miro.medium.com/v2/resize%3Afit%3A1400/1%2A8T-5i13uP3PhvFpiCYDdiw.jpeg',title:'Bayek يطل على Memphis',kind:'شخصية وبيئة اللعبة'},
   {src:'https://gamefabrique.com/storage/screenshots/xbox-one/assassins-creed-origins-01.png',title:'رحلة Bayek عبر الصحراء',kind:'مشهد استكشاف'}
  ],
  'Grand Theft Auto V':[
   {src:'https://cdn.mos.cms.futurecdn.net/094136e09401ba6ce8a083d82c9590cd.png',title:'الحياة البرية في San Andreas',kind:'حيوانات داخل اللعبة'}
  ]
 };
 function renderMedia(title,tab){
  const all=mediaData[title]||[];
  const filtered=all.filter(x=>x.title && x.kind!=='محتوى غير مطابق');
  if(!filtered.length)return '';
  const heading=tab==='bestiary'?'صور الكائنات والحيوانات والأعداء':tab==='gallery'?'معرض صور اللعبة':tab==='secrets'?'صور مرجعية للاستكشاف':tab==='timeline'?'مشاهد من عالم اللعبة':'صور مرتبطة بهذه اللعبة';
  return `<section class="six-media-section"><h4>${heading}</h4><div class="six-media-grid">${filtered.map(x=>`<figure class="six-media-card"><img src="${x.src}" alt="${escapeHtml(x.title)} — ${escapeHtml(title)}" loading="lazy" onerror="this.closest('figure').classList.add('media-unavailable');this.remove();"><figcaption><b>${escapeHtml(x.title)}</b><span>${escapeHtml(x.kind)}</span></figcaption></figure>`).join('')}</div><p class="six-media-disclaimer">الصور تظهر داخل REIGN دون فتح صفحة أخرى. يعتمد تحميلها على إتاحة مصدر الصورة عبر الإنترنت.</p></section>`;
 }
 const generic={
  worlds:{title:'خريطة عالم اللعبة',text:'اختيرت اللعبة من مكتبة REIGN. إذا كانت لها خريطة موثقة ضمن قاعدة الخرائط فستظهر في قسم REIGN Worlds أعلاه. لا نستبدل الخرائط غير المتاحة برسوم مختلقة.',items:['خريطة العالم إذا كانت اللعبة مفتوحة العالم','مناطق ومراحل منفصلة إذا كانت اللعبة خطية','توسيع تغطية الخرائط يجري عند توفر صورة موثوقة']},
  story:{title:'أرشيف القصة',text:'صفحة فهرسة للقصة دون اختلاق أسماء فصول أو أحداث غير موثقة لهذه اللعبة.',items:['ملخص البداية: راجع وصف اللعبة الرسمي داخل المكتبة','المهام الرئيسية: استخدم مركز الأدلة الموجود في REIGN','المهام الجانبية: سجلها بحسب تقدمك الشخصي']},
  bestiary:{title:'دليل الكائنات والأعداء',text:'لا تتوفر قاعدة موثقة مفصلة لهذا العنوان في هذه النسخة. استخدم القائمة لتدوين ما اكتشفته بنفسك.',items:['اسم الكائن أو العدو','الموقع الذي ظهر فيه','نقطة الضعف أو أسلوب المواجهة','المكافأة أو المورد الذي حصلت عليه']},
  secrets:{title:'دفتر الأسرار',text:'قائمة متابعة شخصية للأسرار والمقتنيات بدل نشر مواقع غير مؤكدة.',items:['مهمة أو موقع مخفي','مقتنيات اختيارية','تحديات وإنجازات','ملاحظات اللاعب']},
  timeline:{title:'الخط الزمني',text:'هيكل قابل للتخصيص لترتيب تقدمك. لم تتم إضافة أحداث خاصة بهذه اللعبة قبل التحقق منها.',items:['البداية','منتصف اللعبة','المهام أو المناطق المتقدمة','الخاتمة أو محتوى ما بعد القصة']},
  gallery:{title:'معرض الصور',text:'لا توجد مجموعة صور موثقة خاصة بهذا العنوان في قاعدة REIGN بعد. يمكن استخدام المعرض لتسجيل لقطاتك الشخصية.',items:['لقطة مفضلة','مشهد قصة','مكان مميز','لحظة إنجاز']}
 };
 const gameList=typeof games!=='undefined'?games:(Array.isArray(window.games)?window.games:[]);
 gameList.forEach(g=>{const o=document.createElement('option');o.value=g.title;o.textContent=g.title;select.appendChild(o);});
 function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
 function currentTab(){return document.querySelector('[data-six-tab].active')?.dataset.sixTab||'worlds';}
 function syncGameOptions(tab){
  Array.from(select.options).forEach(o=>{const unsupported=tab==='worlds'&&!mapImgs[o.value];o.disabled=unsupported;o.hidden=unsupported;});
  if(tab==='worlds'&&select.selectedOptions[0]?.disabled){const first=Array.from(select.options).find(o=>!o.disabled);if(first)select.value=first.value;}
 }
 function render(){const tab=currentTab();syncGameOptions(tab);const title=select.value,entry=(data[title]||{})[tab]||generic[tab];let html=`<article class="reign-panel six-feature-card"><div class="six-feature-card-head"><span class="six-feature-symbol">${({worlds:'🗺️',story:'📜',bestiary:'🐾',secrets:'🔎',timeline:'⌛',gallery:'🖼️'})[tab]}</span><div><span class="kicker">${featureNames[tab]}</span><h3>${escapeHtml(entry.title||featureNames[tab])}</h3><p>${escapeHtml(entry.intro||entry.text||'')}</p></div></div>`;
 if(tab!=='worlds')html+=renderMedia(title,tab);
 if(tab==='worlds'){const src=mapImgs[title];html+=src?`<div class="six-inline-map"><img src="${src}" alt="خريطة ${escapeHtml(title)}" loading="lazy"><p>الخريطة مضمّنة داخل الصفحة وليست رابطًا قابلًا للنقر.</p></div>`:`<div class="six-empty-state"><b>لا توجد خريطة موثقة مضافة بعد</b><p>لن نعرض خريطة واقعية أو خريطة مصطنعة بدل خريطة اللعبة.</p></div>`;}
 if(tab==='gallery'){html+=`<div class="six-gallery-note"><b>معرض REIGN</b><p>تُعرض الصور المتاحة أعلاه. أضف ملاحظتك إلى ألبومك الشخصي؛ الحفظ محلي على هذا الجهاز.</p><label for="galleryNote">ملاحظة على الصور</label><textarea id="galleryNote" rows="3" placeholder="اكتب اسم الشخصية أو الحيوان أو المكان الذي تريد تذكره"></textarea><button class="btn btn-outline" id="saveGalleryNote" type="button">حفظ الملاحظة</button><small id="galleryNoteStatus" role="status"></small></div>`;}
 if(tab!=='worlds'&&tab!=='gallery'){const items=entry.items||[];html+=`<ul class="six-item-list">${items.map((it,i)=>`<li><label><input type="checkbox" data-six-check="${tab}:${i}"> <span>${escapeHtml(it)}</span></label></li>`).join('')}</ul>`;if(entry.spoiler)html+=`<details class="six-spoiler"><summary>ملاحظة عن الحرق / التفاصيل</summary><p>${escapeHtml(entry.spoiler)}</p></details>`;html+=`<label class="six-notes-label" for="sixPlayerNotes">ملاحظاتي لهذه اللعبة</label><textarea id="sixPlayerNotes" rows="3" placeholder="اكتب تقدمك أو الملاحظات التي تريد تذكرها"></textarea><button class="btn btn-primary" id="saveSixNotes" type="button">حفظ تقدمي وملاحظاتي</button><small id="sixSaveStatus" role="status"></small>`;}
 html+='</article>';content.innerHTML=html;restoreChecks(title,tab);restoreNotes(title,tab);}
 function keyFor(title,tab,suffix){return `reign-six:${title}:${tab}:${suffix}`;}
 function restoreChecks(title,tab){content.querySelectorAll('[data-six-check]').forEach(c=>{try{c.checked=localStorage.getItem(keyFor(title,tab,c.dataset.sixCheck))==='1';}catch(_){}});content.querySelectorAll('[data-six-check]').forEach(c=>c.addEventListener('change',()=>{try{localStorage.setItem(keyFor(title,tab,c.dataset.sixCheck),c.checked?'1':'0');}catch(_){}}));}
 function restoreNotes(title,tab){const n=$('#sixPlayerNotes');if(n){try{n.value=localStorage.getItem(keyFor(title,tab,'notes'))||'';}catch(_){}}const g=$('#galleryNote');if(g){try{g.value=localStorage.getItem(keyFor(title,tab,'gallery'))||'';}catch(_){}}}
 content.addEventListener('click',e=>{if(e.target.id==='saveSixNotes'){try{localStorage.setItem(keyFor(select.value,currentTab(),'notes'),$('#sixPlayerNotes').value);$('#sixSaveStatus').textContent='حُفظت الملاحظات على هذا الجهاز.';}catch(_){$('#sixSaveStatus').textContent='تعذر الحفظ في هذا المتصفح.';}}if(e.target.id==='saveGalleryNote'){try{localStorage.setItem(keyFor(select.value,currentTab(),'gallery'),$('#galleryNote').value);$('#galleryNoteStatus').textContent='حُفظت الملاحظة على هذا الجهاز.';}catch(_){$('#galleryNoteStatus').textContent='تعذر الحفظ في هذا المتصفح.';}}});
 document.querySelectorAll('[data-six-tab]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-six-tab]').forEach(x=>x.classList.toggle('active',x===b));render();}));select.addEventListener('change',render);select.value=gameList.some(g=>g.title==='Grand Theft Auto V')?'Grand Theft Auto V':gameList[0]?.title||'';render();
})();
