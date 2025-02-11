self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("bestell-app-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/styles.css", // Falls vorhanden
        "/script.js",  // Falls vorhanden
        "/icon-192.png",
        "/icon-512.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
