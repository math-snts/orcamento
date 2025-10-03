self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('orcamentos-v1').then((cache) => {
      return cache.addAll([
        '/',
        'index.html',
        // Adicione outros arquivos se necessário
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});