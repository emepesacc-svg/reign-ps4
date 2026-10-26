/* REIGN Worlds — in-game maps only. Images are embedded in-page; no outbound links. */
(() => {
  'use strict';
  const $ = (s) => document.querySelector(s);
  const select = $('#atlasGameSelect'), img = $('#atlasVirtualMap'), placeholder = $('#atlasVirtualPlaceholder');
  if (!select || !img || !placeholder) return;
  const maps = {
    'Grand Theft Auto V': ['https://forum-cfx-re.akamaized.net/optimized/5X/3/f/4/5/3f4524097613e07c24da8f0a4b462e67d34859ad_2_1000x1000.jpeg','خريطة عالم GTA V — Los Santos وBlaine County','خريطة عالم اللعبة؛ قد يختلف توفر الصورة حسب خادم الاستضافة.'],
    'Red Dead Redemption 2': ['https://4.bp.blogspot.com/-Tb9XNSHdvlw/XWT5TLpGk-I/AAAAAAAACmI/GxACMPMbyU4c-_erUjc4cNA-_wRj6CUPQCKgBGAs/s7200/red-dead-redemption-2-map.jpg','خريطة عالم Red Dead Redemption 2','تظهر المناطق الخيالية الرئيسية مثل Ambarino وLemoyne وNew Hanover.'],
    'Assassin’s Creed Odyssey': ['https://img.consolepulse.com/uploads/franchises/assassins-creed/versions/odyssey/gameplay/ac-odyssey-100-percent-world-map-cleanup-state.webp','خريطة عالم Assassin’s Creed Odyssey','خريطة عالم اللعبة في اليونان القديمة.'],
    'Assassin’s Creed Origins': ['https://i.pinimg.com/originals/70/d3/2b/70d32b0d93a2df975eb18328ea5fa54f.jpg','خريطة عالم Assassin’s Creed Origins','خريطة مناطق عالم اللعبة في مصر القديمة.'],
    'Ghost of Tsushima Director’s Cut': ['https://images.pushsquare.com/fa434df42c085/ghost-of-tsushima-map-size.original.jpg','خريطة Ghost of Tsushima','خريطة اللعبة المقسمة إلى مناطق الجزيرة.'],
    'Watch Dogs 2': ['https://cdn.mos.cms.futurecdn.net/GAvA9T2SGrxPNWdQVcBnUk.png','خريطة Watch Dogs 2','خريطة مناطق اللعبة حول San Francisco داخل العالم الخيالي.'],
    'Marvel’s Spider-Man': ['https://cdn.mos.cms.futurecdn.net/GZrWwRQ3w2cb2ojyp4Xwb8.jpg','خريطة Manhattan في Marvel’s Spider-Man','خريطة المدينة داخل اللعبة.'],
    'Cyberpunk 2077': ['https://i.imgur.com/jn8Frrc.jpg','خريطة Night City في Cyberpunk 2077','خريطة مدينة Night City الخيالية.'],
    'The Witcher 3: Wild Hunt': ['https://livedoor.blogimg.jp/games084/imgs/4/e/4e1b5b77.jpg','خريطة عالم The Witcher 3','خريطة المناطق الخيالية في عالم اللعبة.'],
    'Horizon Zero Dawn': ['https://www.thumbculture.co.uk/wp-content/uploads/2017/03/map-1024x577.jpg','خريطة Horizon Zero Dawn','خريطة مناطق اللعبة والأهداف.'],
    'Horizon Zero Dawn Complete Edition': ['https://www.thumbculture.co.uk/wp-content/uploads/2017/03/map-1024x577.jpg','خريطة Horizon Zero Dawn','خريطة مناطق اللعبة والأهداف.'],
    'Days Gone': ['https://cdn.mos.cms.futurecdn.net/gZzyVXeR725BUErDtQjcXK.png','خريطة Days Gone','خريطة مناطق أوريغون الخيالية داخل اللعبة.'],
    'Fallout 4': ['https://staticdelivery.nexusmods.com/images/1151/2656542-1614870577.jpg','خريطة Commonwealth في Fallout 4','خريطة منطقة اللعب في عالم Fallout 4.'],
    'The Elder Scrolls V: Skyrim Special Edition': ['https://blog-imgs-61-origin.fc2.com/s/k/y/skyrim360/Tamriel_WorldMap.jpg','خريطة عالم The Elder Scrolls','خريطة قارة Tamriel الخيالية التي تقع فيها Skyrim.'],
    'Far Cry 5': ['https://www.psu.com/wp/wp-content/uploads/2018/03/far-cry-5-map-faiths-region.jpg','خريطة Hope County في Far Cry 5','خريطة إحدى مناطق عالم اللعبة.'],
    'Dying Light 2 Stay Human': ['https://steamuserimages-a.akamaihd.net/ugc/2471989872546366321/B9A1DA837F1C156FA82EF78A0A8175AE0B065789/','خريطة Villedor في Dying Light 2','خريطة أحياء المدينة داخل اللعبة.']
  };
  const allGames = Array.isArray(window.games) ? window.games : (typeof games !== 'undefined' ? games : []);
  allGames.forEach(g => { const o=document.createElement('option'); o.value=g.title; o.textContent=g.title; select.appendChild(o); });
  function render(){
    const title=select.value, entry=maps[title], game=allGames.find(g=>g.title===title);
    $('#atlasSelectedTitle').textContent=title||'اختر لعبة';
    $('#atlasSelectedDesc').textContent=game?.desc||'خريطة عالم اللعبة عند توفرها.';
    $('#atlasSourceNote').textContent='الصور معروضة داخل الصفحة دون روابط قابلة للنقر. بعض صور الخرائط مستضافة لدى مصادرها الأصلية، ولذلك يتطلب تحميلها اتصالًا بالإنترنت وقد تتغير إتاحتها.';
    if(!entry){img.hidden=true;img.removeAttribute('src');placeholder.hidden=false;$('#atlasVirtualPlaceholderTitle').textContent='لم تُضف خريطة موثقة لهذه اللعبة بعد';$('#atlasVirtualPlaceholderText').textContent='لم تُدرج صورة خريطة موثقة لهذا العنوان في إصدار REIGN الحالي؛ لن نضع خريطة مخترعة مكانها.';$('#atlasVirtualSource').textContent='لا توجد روابط خارجية للتنقل من هذه الصفحة.';return;}
    placeholder.hidden=true;img.hidden=false;img.alt=entry[1];img.src=entry[0];$('#atlasVirtualSource').textContent=entry[2];
    img.onerror=()=>{img.hidden=true;placeholder.hidden=false;$('#atlasVirtualPlaceholderTitle').textContent='تعذّر تحميل صورة الخريطة';$('#atlasVirtualPlaceholderText').textContent='قد يكون المصدر الأصلي قد منع العرض المضمّن أو غيّر رابط الصورة. لا توجد صفحة خارجية للانتقال إليها.';};
  }
  select.addEventListener('change',render);$('#atlasReloadMap')?.addEventListener('click',render);
  const preferred=['Grand Theft Auto V','Red Dead Redemption 2','Assassin’s Creed Odyssey','Assassin’s Creed Origins','Ghost of Tsushima Director’s Cut'];
  select.value=preferred.find(t=>allGames.some(g=>g.title===t))||allGames[0]?.title||'';render();
})();
