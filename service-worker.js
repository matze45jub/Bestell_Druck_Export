self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('bestellapp-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',  // Deine CSS-Datei(en) hier eintragen
        '/script.js',   // Deine JavaScript-Datei(en) hier eintragen
        '/icons/icon-192x192.png',
        '/icons/icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
