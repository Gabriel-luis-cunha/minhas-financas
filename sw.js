

const CACHE = 'minhas-financas-v1';

const ARQUIVOS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icone-192.png',
  './icone-512.png',
  './icone-maskable-512.png',
  './apple-touch-icon.png',
  './favicon-32.png',
];
self.addEventListener('install', (evento) => {
  evento.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ARQUIVOS)));
  self.skipWaiting();
});
self.addEventListener('activate', (evento) => {
  evento.waitUntil(
    caches.keys()
      .then((nomes) => Promise.all(nomes.filter((n) => n !== CACHE).map((n) => caches.delete(n))))
      .then(() => self.clients.claim()),
  );
});
self.addEventListener('fetch', (evento) => {
  const pedido = evento.request;
  if (pedido.method !== 'GET' || new URL(pedido.url).origin !== self.location.origin) return;

  evento.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const guardado = await cache.match(pedido, { ignoreSearch: true });
      const daRede = fetch(pedido)
        .then((resposta) => {
          if (resposta.ok) cache.put(pedido, resposta.clone());
          return resposta;
        })
        .catch(() => null);

      if (guardado) {
        evento.waitUntil(daRede);
        return guardado;
      }
      const resposta = await daRede;
      return resposta || cache.match('./index.html');
    }),
  );
});
