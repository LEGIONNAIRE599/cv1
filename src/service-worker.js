/* eslint-disable no-unused-expressions, no-undef, no-restricted-globals */

import { precacheAndRoute } from 'workbox-precaching';
import { CacheFirst } from 'workbox-strategies';

// Liste des fichiers à mettre en cache (ceci sera automatiquement généré par Workbox)
precacheAndRoute(self.__WB_MANIFEST);

// Lors de l'installation du service worker, on peut aussi mettre en cache certains fichiers spécifiques si nécessaire
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('cv-cache-v1').then(cache => {
      console.log('Cache ouvert et fichiers ajoutés');
      return cache.addAll([
        '/',
        '/index.html',
        '/App.js',
        '/App.css',
        '/icon.png',
        '/icon-512.png'
        // Ajoute ici d'autres fichiers que tu souhaites mettre en cache
      ]);
    })
  );
});

// Lors des requêtes fetch, on tente d'utiliser la réponse du cache, sinon on va chercher la ressource sur le réseau
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Exemples de stratégies de mise en cache : tu peux choisir d'autres stratégies selon tes besoins.
const cacheFirstStrategy = new CacheFirst({
  cacheName: 'cv-cache',
  plugins: [
    // Exemple de plugin pour limiter la taille du cache
    {
      cacheWillUpdate: async ({ request, response }) => {
        if (response.status === 404) {
          // Si la ressource est introuvable, ne pas la mettre en cache
          return null;
        }
        return response;
      },
    },
  ],
});

self.addEventListener('fetch', event => {
  // Application de la stratégie CacheFirst pour certaines ressources comme les images
  if (event.request.url.includes('.png') || event.request.url.includes('.jpg')) {
    event.respondWith(cacheFirstStrategy.handle({ request: event.request }));
  }
});
