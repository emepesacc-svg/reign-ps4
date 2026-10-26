const CACHE_NAME = 'reign-player-edition-v16-all-tools';
const SHELL = ['./', './index.html', './style.css', './script.js', './reign-plus.js', './reign-ultra.js', './reign-arcade.js', './reign-experience.js', './reign-world-guides.js', './reign-world-atlas.js', './reign-six-features.js', './reign-player-tools.js', './reign-build-lab.js', './reign-player-edition.js', './manifest.webmanifest', './reign-icon.svg', './firebase-config.js', './cloud-auth.js'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if (response && response.ok) { const copy = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(request, copy)); }
    return response;
  }).catch(() => caches.match('./index.html'))));
});
