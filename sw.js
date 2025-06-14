const CACHE_NAME = "picto-ma-cache-v1";
const urlsToCache = [
  "index.html",
  "manifest.json",
  "https://i.imgur.com/Gv2uqzq.png",
  "https://i.imgur.com/00776cd8.png",
  "https://i.imgur.com/42db2f82.png",
  "https://i.imgur.com/jlZFg1W.png",
  "https://i.imgur.com/ZdKijOQ.png",
  "https://i.imgur.com/HBT4cAi.png",
  "https://i.imgur.com/jQRrhMc.png",
  "https://i.imgur.com/77jyWmU.png",
  "https://i.imgur.com/506U62R.png",
  "https://i.imgur.com/B2UtjHJ.png",
  "https://i.imgur.com/7F7Zrqu.png",
  "https://i.imgur.com/VXYghee.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
