self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('3d-model-cache').then(function(cache) {
        return cache.addAll([
          'boizroom-transformed.glb',
          // Add other assets you want to cache here
        ]);
      })
    );
  });