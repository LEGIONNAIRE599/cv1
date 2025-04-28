javascript
    const CACHE_NAME = 'cv-cache-v1';
    const urlsToCache = [
      '/',
      '/index.html',
      '/App.js',
      '/App.css',
      // ... ajoute les autres fichiers CSS et JS
      '/icon.png',
      '/icon-512.png'
    ];

    self.addEventListener('install', function(event) {
      // Perform install steps
      event.waitUntil(
        caches.open(CACHE_NAME)
          .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
          })
      );
    });

    self.addEventListener('fetch', function(event) {
      event.respondWith(
        caches.match(event.request)
          .then(function(response) {
            // Return the cached response if available, otherwise fetch from the network.
            return response || fetch(event.request);
          }
        )
      );
    });