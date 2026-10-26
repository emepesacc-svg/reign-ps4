#!/usr/bin/env python3
"""REIGN ULTRA local game artwork builder.
Fetches public Steam Store cover/header/screenshots for each catalog title with a Steam app ID,
validates downloaded files, saves them locally, and rewrites script.js to use local assets.
Run from the project root: python download_game_artwork.py
"""
import json, re, time, urllib.request, urllib.error
from pathlib import Path

ROOT = Path(__file__).resolve().parent
JS = ROOT / 'script.js'
ASSET_ROOT = ROOT / 'assets' / 'game-gallery'
UA = 'REIGN-ULTRA-Artwork-Builder/1.0 (personal static-site asset downloader)'


def get(url, timeout=25):
    req = urllib.request.Request(url, headers={'User-Agent': UA, 'Accept': 'application/json,image/avif,image/webp,image/apng,image/*,*/*;q=0.8'})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read(), resp.headers.get('Content-Type','')


def save_image(url, path):
    if not url or not url.startswith('https://'):
        return False
    try:
        data, content_type = get(url)
        # Basic image signature validation: don't save HTML/API error pages as images.
        valid = data.startswith(b'\xff\xd8\xff') or data.startswith(b'\x89PNG\r\n\x1a\n') or data[:6] in (b'GIF87a', b'GIF89a') or (data[:4] == b'RIFF' and data[8:12] == b'WEBP')
        if not valid or len(data) < 1500:
            return False
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(data)
        return True
    except Exception:
        return False


def main():
    raw = JS.read_text(encoding='utf-8')
    m = re.search(r'const\s+games\s*=\s*(\[.*?\])\s*;', raw, re.S)
    if not m:
        raise SystemExit('لم أجد مصفوفة الألعاب في script.js. تأكد أنك تشغّل الأداة من مجلد المشروع الصحيح.')
    games = json.loads(m.group(1))
    report = []
    total = len(games)
    for n, game in enumerate(games, 1):
        title = game.get('title', f"Game {n}")
        # Existing title-specific Steam asset URLs contain the app ID.
        ids = re.findall(r'/apps/(\d+)/', str(game.get('image','')) + ' ' + str(game.get('header','')))
        appid = ids[0] if ids else None
        if not appid:
            report.append(f"NO STEAM ID | {title}")
            game['screenshots'] = []
            continue
        folder = ASSET_ROOT / str(game.get('id', n))
        local_base = f"assets/game-gallery/{game.get('id', n)}"
        cover_path = folder / 'cover.jpg'
        header_path = folder / 'header.jpg'
        shot_paths = []
        data = None
        try:
            payload, _ = get(f'https://store.steampowered.com/api/appdetails?appids={appid}&l=english&cc=us')
            result = json.loads(payload.decode('utf-8-sig'))
            item = result.get(appid, {})
            if item.get('success'):
                data = item.get('data', {})
        except Exception:
            data = None
        # Download a real vertical library capsule, with a title-specific header as fallback.
        cover_urls = [
            f'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/{appid}/library_600x900.jpg',
            f'https://cdn.cloudflare.steamstatic.com/steam/apps/{appid}/library_600x900.jpg',
            f'https://cdn.akamai.steamstatic.com/steam/apps/{appid}/library_600x900.jpg',
        ]
        cover_ok = cover_path.exists() and cover_path.stat().st_size > 1500
        if not cover_ok:
            for url in cover_urls:
                if save_image(url, cover_path): cover_ok = True; break
        header_urls = [data.get('header_image') if data else None,
            f'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/{appid}/header.jpg',
            f'https://cdn.cloudflare.steamstatic.com/steam/apps/{appid}/header.jpg',
            f'https://cdn.akamai.steamstatic.com/steam/apps/{appid}/header.jpg']
        header_ok = header_path.exists() and header_path.stat().st_size > 1500
        if not header_ok:
            for url in header_urls:
                if save_image(url, header_path): header_ok = True; break
        screenshots = (data or {}).get('screenshots', [])
        for i, shot in enumerate(screenshots[:6], 1):
            shot_path = folder / f'screenshot-{i:02d}.jpg'
            shot_url = shot.get('path_full') or shot.get('path_thumbnail')
            ok = shot_path.exists() and shot_path.stat().st_size > 1500
            if not ok: ok = save_image(shot_url, shot_path)
            if ok: shot_paths.append(f'{local_base}/screenshot-{i:02d}.jpg')
        if cover_ok:
            game['image'] = f'{local_base}/cover.jpg'
        elif header_ok:
            game['image'] = f'{local_base}/header.jpg'
        if header_ok:
            game['header'] = f'{local_base}/header.jpg'
        game['screenshots'] = shot_paths
        report.append(f"{'OK' if (cover_ok or header_ok) else 'MISSING ART'} | {title} | cover={'yes' if cover_ok else 'no'} header={'yes' if header_ok else 'no'} screenshots={len(shot_paths)}")
        print(f'[{n}/{total}] {title}: غلاف {"✓" if cover_ok else "—"} | أفقي {"✓" if header_ok else "—"} | لقطات {len(shot_paths)}')
        time.sleep(0.45)  # Be polite to the public store endpoint.
    updated = raw[:m.start(1)] + json.dumps(games, ensure_ascii=False, indent=2) + raw[m.end(1):]
    JS.write_text(updated, encoding='utf-8')
    report_path = ROOT / 'ARTWORK_REPORT_AR.txt'
    report_path.write_text('تقرير تجهيز صور REIGN ULTRA\n' + '='*30 + '\n' + '\n'.join(report) + '\n\nعدد الألعاب: ' + str(total) + '\nعدد الألعاب التي لديها ملف غلاف أو صورة أفقية: ' + str(sum(1 for x in report if x.startswith('OK |'))) + '\n\nأعد رفع كامل مجلد المشروع بعد تشغيل الأداة. الملفات التي تظهر MISSING ART تحتاج مراجعة يدوية؛ لم تُستبدل بصور عشوائية.\n', encoding='utf-8')
    print('\nاكتمل تنزيل الصور المتاحة. التقرير: ARTWORK_REPORT_AR.txt')
    print('ارفع مجلد المشروع كاملًا إلى GitHub Pages بعد مراجعة التقرير.')

if __name__ == '__main__':
    main()
