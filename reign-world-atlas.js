/* REIGN Worlds — in-game maps only. Images are embedded in-page; no outbound links. */
(() => {
  'use strict';
  const $ = (s) => document.querySelector(s);
  const select = $('#atlasGameSelect'), img = $('#atlasVirtualMap'), placeholder = $('#atlasVirtualPlaceholder');
  if (!select || !img || !placeholder) return;
  // Only titles with a curated in-game map image are selectable here.
  // Images stay inside REIGN; no map entry opens an external page.
  const maps = {
    'Grand Theft Auto V': ['https://forum-cfx-re.akamaized.net/optimized/5X/3/f/4/5/3f4524097613e07c24da8f0a4b462e67d34859ad_2_1000x1000.jpeg','خريطة عالم GTA V — Los Santos وBlaine County','خريطة عالم اللعبة داخل الصفحة.'],
    'Red Dead Redemption 2': ['https://4.bp.blogspot.com/-Tb9XNSHdvlw/XWT5TLpGk-I/AAAAAAAACmI/GxACMPMbyU4c-_erUjc4cNA-_wRj6CUPQCKgBGAs/s7200/red-dead-redemption-2-map.jpg','خريطة عالم Red Dead Redemption 2','خريطة مناطق العالم داخل اللعبة.'],
    'Assassin’s Creed Odyssey': ['https://img.consolepulse.com/uploads/franchises/assassins-creed/versions/odyssey/gameplay/ac-odyssey-100-percent-world-map-cleanup-state.webp','خريطة عالم Assassin’s Creed Odyssey','خريطة عالم اللعبة في اليونان القديمة.'],
    'Assassin’s Creed Origins': ['https://i.pinimg.com/originals/70/d3/2b/70d32b0d93a2df975eb18328ea5fa54f.jpg','خريطة عالم Assassin’s Creed Origins','خريطة مناطق عالم اللعبة في مصر القديمة.'],
    'Ghost of Tsushima Director’s Cut': ['https://images.pushsquare.com/fa434df42c085/ghost-of-tsushima-map-size.original.jpg','خريطة Ghost of Tsushima','خريطة مناطق اللعبة داخل العالم.'],
    'Watch Dogs 2': ['https://cdn.mos.cms.futurecdn.net/GAvA9T2SGrxPNWdQVcBnUk.png','خريطة Watch Dogs 2','خريطة العالم داخل اللعبة.'],
    'Marvel’s Spider-Man': ['https://cdn.mos.cms.futurecdn.net/GZrWwRQ3w2cb2ojyp4Xwb8.jpg','خريطة Manhattan في Marvel’s Spider-Man','خريطة المدينة داخل اللعبة.'],
    'Cyberpunk 2077': ['https://i.imgur.com/jn8Frrc.jpg','خريطة Night City في Cyberpunk 2077','خريطة المدينة الخيالية داخل اللعبة.'],
    'The Witcher 3: Wild Hunt': ['https://livedoor.blogimg.jp/games084/imgs/4/e/4e1b5b77.jpg','خريطة عالم The Witcher 3','خريطة المناطق داخل عالم اللعبة.'],
    'Horizon Zero Dawn': ['https://www.thumbculture.co.uk/wp-content/uploads/2017/03/map-1024x577.jpg','خريطة Horizon Zero Dawn','خريطة مناطق اللعبة.'],
    'Horizon Zero Dawn Complete Edition': ['https://www.thumbculture.co.uk/wp-content/uploads/2017/03/map-1024x577.jpg','خريطة Horizon Zero Dawn','خريطة مناطق اللعبة.'],
    'Days Gone': ['https://cdn.mos.cms.futurecdn.net/gZzyVXeR725BUErDtQjcXK.png','خريطة Days Gone','خريطة المناطق داخل اللعبة.'],
    'Fallout 4': ['https://staticdelivery.nexusmods.com/images/1151/2656542-1614870577.jpg','خريطة Commonwealth في Fallout 4','خريطة منطقة اللعب داخل Fallout 4.'],
    'The Elder Scrolls V: Skyrim Special Edition': ['https://blog-imgs-61-origin.fc2.com/s/k/y/skyrim360/Tamriel_WorldMap.jpg','خريطة عالم The Elder Scrolls V: Skyrim','خريطة عالم اللعبة الخيالي.'],
    'Far Cry 5': ['https://www.psu.com/wp/wp-content/uploads/2018/03/far-cry-5-map-faiths-region.jpg','خريطة Hope County في Far Cry 5','خريطة منطقة من عالم اللعبة.']
  };
  const allGames = Array.isArray(window.games) ? window.games : (typeof games !== 'undefined' ? games : []);
  Object.keys(maps).filter(title => allGames.some(g => g.title === title)).forEach(title => {
    const g = allGames.find(item => item.title === title);
    const o = document.createElement('option'); o.value = title; o.textContent = g?.title || title; select.appendChild(o);
  });
  function render(){
    const title=select.value, entry=maps[title], game=allGames.find(g=>g.title===title);
    $('#atlasSelectedTitle').textContent=title||'اختر لعبة';
    $('#atlasSelectedDesc').textContent=game?.desc||'خريطة عالم اللعبة عند توفرها.';
    $('#atlasSourceNote').textContent='هذه القائمة تعرض فقط الألعاب التي أُدرجت لها صورة خريطة. الصور تظهر داخل REIGN دون روابط تنقّل، وتحتاج إلى اتصال بالإنترنت لأنها مستضافة على خوادم الصور.';
    if(!entry){img.hidden=true;img.removeAttribute('src');placeholder.hidden=false;$('#atlasVirtualPlaceholderTitle').textContent='لم تُضف خريطة موثقة لهذه اللعبة بعد';$('#atlasVirtualPlaceholderText').textContent='لم تُدرج صورة خريطة موثقة لهذا العنوان في إصدار REIGN الحالي؛ لن نضع خريطة مخترعة مكانها.';$('#atlasVirtualSource').textContent='لا توجد روابط خارجية للتنقل من هذه الصفحة.';return;}
    placeholder.hidden=true;img.hidden=false;img.alt=entry[1];img.src=entry[0];$('#atlasVirtualSource').textContent=entry[2];
    img.onerror=()=>{
      const failedTitle=select.value;
      const failedOption=Array.from(select.options).find(o=>o.value===failedTitle);
      if(failedOption)failedOption.remove();
      if(select.options.length){select.value=select.options[0].value;render();return;}
      img.hidden=true;placeholder.hidden=false;
      $('#atlasVirtualPlaceholderTitle').textContent='لا توجد خريطة قابلة للعرض حاليًا';
      $('#atlasVirtualPlaceholderText').textContent='لم تنجح مصادر الصور المدرجة في التحميل. لا نعرض خرائط مخترعة ولا نفتح مواقع خارجية.';
    };
  }
  select.addEventListener('change',render);$('#atlasReloadMap')?.addEventListener('click',render);
  const preferred=['Grand Theft Auto V','Red Dead Redemption 2','Assassin’s Creed Odyssey','Ghost of Tsushima Director’s Cut'];
  select.value=preferred.find(t=>Object.prototype.hasOwnProperty.call(maps,t) && Array.from(select.options).some(o=>o.value===t))||select.options[0]?.value||'';render();
})();
