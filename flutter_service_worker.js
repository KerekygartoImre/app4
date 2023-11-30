'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "93c6c3421100c3b6f3930e02c1a67a2a",
"assets/AssetManifest.json": "2f9c77c51702a4664376cd8ad28bc2f8",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/images/amazingmeeting.png": "6b7064a3bce698ff9bfc1888e1b671b9",
"assets/images/anna.png": "c2df44fd0ad7e62f6460054743d5e462",
"assets/images/bananasplit.png": "738b5fe5745bc6f2b284806aa860391f",
"assets/images/bentcowgirl.png": "847c4c17a5ee838f63e6beed6816efb2",
"assets/images/breeze.png": "b799766fb59278d7f08082a2b4561ba0",
"assets/images/bung.png": "b9d558b288cf5517d8f37144634448b0",
"assets/images/butterfly.png": "a2474ceb1f30f9f86e559d678e957e32",
"assets/images/captivity.png": "ee741eec9e2384812531e2a6b7ab6b94",
"assets/images/carmechanic.png": "e05ff8b5850f009b6c0f5e2eab3ec7ee",
"assets/images/cat.png": "84d82c5eb75816bc371145b55d77650a",
"assets/images/chairman.png": "45bdf885eca172fe4193965c69c70681",
"assets/images/comfortableplace.png": "16034f11fc54a4bd000040e2b7087661",
"assets/images/cowgirl.png": "8ae0842d457e2315b7294f60590e0402",
"assets/images/deckchair.png": "2071bb8c762136f159d01da71836c6c8",
"assets/images/descent.png": "cc6dc5acfc2ad5de46791e2478283d4c",
"assets/images/dirtydancing.png": "d3c6c68301b5a95bd9653868d57b02df",
"assets/images/doggyontheedge.png": "dd33c37fd32d385c81d72e4b77ad0235",
"assets/images/dragon.png": "4edec7541d766acc51f736e40109160d",
"assets/images/eagle.png": "e17d3e6fcf5ef0afd2499e117ddf49f8",
"assets/images/facesitting.png": "ff87caafb2cfdf39c45178afffa3bdfd",
"assets/images/ghetto.png": "94df2a9321ed1181de191546f0729f81",
"assets/images/gimlet.png": "a55fda8e7bbc7b01dc2784087f5898ac",
"assets/images/goddess.png": "20ee2ebd25ecb7edbcf510ae6c415bac",
"assets/images/gorge.png": "ad7c0282b93b8f288af2a110105898e5",
"assets/images/grasshopper.png": "5a5b0b0d136c5ca051960d05f521f86f",
"assets/images/harp.png": "c322e94479f4f1cf97f09379a8a29ea3",
"assets/images/hatter.jpg": "75b0ca221458f575e0c4d96647d056dc",
"assets/images/hatter2.png": "5311128db7c92f4167669d64c2817c9d",
"assets/images/hood.png": "cf428116eca4f5f4fe2d764ddf788b84",
"assets/images/horizon.png": "41d594cfc6e372954008282419ad2e03",
"assets/images/hunger.png": "86599dd68d9c40ee119927c525cc2aa3",
"assets/images/inventive69.png": "b249462f15c3564a636a0c43b17fca12",
"assets/images/jamaicancocktail.png": "8d79f7238d7bb7f6bd641abf69db3387",
"assets/images/knight.png": "5122e4365c3a35526970f55f359da457",
"assets/images/launchpad.png": "b18e2a67a49d8d565f75bee23feb36c4",
"assets/images/legsonshoulder.png": "a555c509daebc09ed50dd9023b132b8d",
"assets/images/lickingmaster.png": "aff1e5bf02b8565602261172008d4020",
"assets/images/louise.png": "1e43d171663f9af2390d32e30f82f529",
"assets/images/lowdoggy.png": "c345f7fb6f25ea1658bc6003cafddb8b",
"assets/images/magicmountain.png": "662a5bee6a571669b944c30ac2d7a144",
"assets/images/mast.png": "b8955906219383034a640f17766a82df",
"assets/images/merger.png": "fa38fb1195ec1071810cf63775daf70d",
"assets/images/mirage.png": "ca6dbc754b1df39aa4713f6cc62382e9",
"assets/images/missionary.gif": "523a8ec400f80f98f7d35f1a3d8d5f9d",
"assets/images/missionary.png": "e164b249344ae9f4205daed465654d34",
"assets/images/moonlight.png": "d29183fda3906783481b76e619654a62",
"assets/images/pearl.png": "f6c0b1ef006e0348920501740ad2f592",
"assets/images/pendant.png": "d34e3207c51676f90ad1e9c43ae5b795",
"assets/images/pisces.png": "4d95ee919c04539afbf863e3a3d0aea5",
"assets/images/plank.png": "8c4ecdf97c453f2caefa5111a5acdb91",
"assets/images/pleasurebible.png": "0ab18648f64370f4e9ec1483ed0569fc",
"assets/images/pretzel.png": "be59e13fd9d60967e5ee86e865aaa55f",
"assets/images/raretrick.png": "b5c69ab9c9d0227acd67ed909f7e6589",
"assets/images/recharge.png": "90d1b68069175ca3bf91166eccfacb92",
"assets/images/reversecowgirl.png": "7b26d475126694f48d6854b0a7b308b1",
"assets/images/screw.png": "926090d4ef630acb835a552e8ec424c2",
"assets/images/seashell.png": "5deb38aaa310f0cfd3cd818288891b4b",
"assets/images/shell.png": "45e37377604072b3eb9bff702c135610",
"assets/images/shining.png": "f725dd32ebca68ca6e4abc1e72369f97",
"assets/images/slope.png": "b300ead1c58326f968af0b3b649bfa6f",
"assets/images/snail.png": "3c552248b047ff42938f118a071fd7d1",
"assets/images/snakecharmer.png": "19b5805b674f9c726ccb9ff31a80e9e0",
"assets/images/source.png": "050f65fcc9bc7c1ab52de33b0f7e2348",
"assets/images/spanishguitar.png": "fe0eb4273ceeb9c672f148f66299c222",
"assets/images/sphinx.png": "751e02a6bf628c6d29ac64bc053d7602",
"assets/images/spicydish.png": "f7b75a8c92eb55fc73f45c56612788b2",
"assets/images/splittingbamboo.png": "8fc23d7067ce87a79fd3f4761168ad14",
"assets/images/spoon.png": "23ecdaa98f5f1096d375f62d10912736",
"assets/images/spreadeagle.png": "678b8ee008f56b7706337f8cdf43def9",
"assets/images/superhero.png": "5bcd684ccedcd63cdc29bb7aa94ad36d",
"assets/images/superwomen.png": "6776b2065da03782f68772f6cb075fda",
"assets/images/szajhatter.jpg": "3dda31572116d10c100141aaabec3920",
"assets/images/tiramisu.png": "f4b52af366c584ad2f280caaf7ae2547",
"assets/images/tulip.png": "7ed85dec091e8d1a041783b105169af9",
"assets/images/valedictorian.png": "914ef8bc950ddfad80a691f0ae5b984c",
"assets/images/virgo.png": "6f3bce48b728bc9b0d4914aead40552d",
"assets/images/wedge.png": "4bad453e1004fb6838786a02983d9493",
"assets/images/wrestling.png": "616757d3f90b1df4cc276210e73517e7",
"assets/images/zeus.png": "b410139e691f3babf5f7cd6b1a93ce0c",
"assets/images/zodiac.png": "4602ca3f655ad4b9637b7b0ac848f2ac",
"assets/NOTICES": "578536b63a0f7e1b64a085e05f0c8070",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c36d3290300283f960eb806ef7a6876b",
"/": "c36d3290300283f960eb806ef7a6876b",
"main.dart.js": "14a106efcab2ad9bc9f2f17547cc7910",
"manifest.json": "22cffe42ffac16b45b3f86146d01b21d",
"version.json": "7bffd655e001ff09af931eafa8c437ca"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
