// À placer dans service-worker.js

// L'écouteur d'événement 'install' qui s'active lorsque le service worker s'installe
self.addEventListener('install', event => {
    // Pré-cacher les ressources
    event.waitUntil(
      caches.open('v1').then(cache => {
        return cache.addAll([
          '/index.html',
          '/css/style.css',
          '/js/script.js',
          // Ajoutez d'autres ressources que vous voulez cacher
        ]);
      })
    );
  });
  
  // L'écouteur d'événement 'fetch' qui intercepte toutes les requêtes de ressources
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        // Renvoie la ressource du cache si elle est trouvée
        if (response) {
          return response;
        }
        // Sinon, cherchez la ressource sur le réseau
        return fetch(event.request);
      })
    );
  });
  