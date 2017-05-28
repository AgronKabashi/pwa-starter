const CACHE_ID = "v1";
const resources = [
  "/",
  "/main.js"
];

const serviceWorkerLifeCycle = {
  activate: event => {
    // Clear out older caches
    event.waitUntil(caches
      .keys()
      .then(keys => Promise.all(keys
        .filter(cacheId => cacheId !== CACHE_ID)
        .map(caches.delete)
      ))
      .catch(() => console.warn("Could not clear older caches"))); // eslint-disable-line no-console
  },
  install: event => {
    event.waitUntil(caches
      .open(CACHE_ID)
      .then(cache => cache.addAll(resources)));
  },
  fetch: event => {
    const { request } = event;
    event.respondWith(caches
      .match(request)
      .then(cachedResponse => cachedResponse || fetch(request)));
  }
};

// TODO: Replace with Object.entries when support/polyfill is
// available
Object.keys(serviceWorkerLifeCycle)
  .forEach(event => self.addEventListener(event, serviceWorkerLifeCycle[event]));