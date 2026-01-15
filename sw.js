const CACHE_NAME = 'fugu-usb-v1';
const ASSETS = ['./index.html', './manifest.json'];

// Instala e salva os arquivos no cache
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

// Responde mesmo se estiver offline
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
