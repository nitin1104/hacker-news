// Version
var appCacheNAme = 'hacker-news-v2.0'
// Files to cache
var urlsToCache = [
  '/',
  'static/css/main.53b1e842.chunk.css',
  'static/js/main.c8013b03.chunk.js',
  'api/search?page=0',
  'api/search?page=1',
  'api/search?page=2',
  'api/search?page=3',
  'api/search?page=4',
  'api/search?page=5',
  'api/search?page=6',
  'api/search?page=7',
  'api/search?page=8',
  'api/search?page=9',
  'api/search?page=10',
  'api/search?page=11',
  'api/search?page=12',
  'api/search?page=13',
  'api/search?page=14',
  'api/search?page=15',
  'api/search?page=16',
  'api/search?page=17',
  'api/search?page=18',
  'api/search?page=19',
  'api/search?page=20',
  'api/search?page=21',
  'api/search?page=22',
  'api/search?page=23',
  'api/search?page=24',
  'api/search?page=25',
  'api/search?page=26',
  'api/search?page=27',
  'api/search?page=28',
  'api/search?page=29',
  'api/search?page=30',
  'api/search?page=31',
  'api/search?page=32',
  'api/search?page=33',
  'api/search?page=34',
  'api/search?page=35',
  'api/search?page=36',
  'api/search?page=37',
  'api/search?page=38',
  'api/search?page=39',
  'api/search?page=40',
  'api/search?page=41',
  'api/search?page=42',
  'api/search?page=43',
  'api/search?page=44',
  'api/search?page=45',
  'api/search?page=46',
  'api/search?page=47',
  'api/search?page=48',
  'api/search?page=49'
];
  
// Install
self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches
        .open(appCacheNAme)
        .then(cache => {
            console.log('Opened cache');
            cache.addAll(urlsToCache)
        })
        .then(() => self.skipWaiting())
    );
  });


// Activate
self.addEventListener('activate', event => {
    console.log('Service worker is activated')
    event.waitUntil(
      caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cache => {
            if (cache !== appCacheNAme) {
              console.info('Deleting old cache...', cache)
              return caches.delete(cache);
            }
          })
        )
      })
    )    
  });

  //Fetch

  self.addEventListener('fetch', event => {
    event.respondWith (
        fetch(event.request).catch(() => caches.match(event.request))
    )
  })