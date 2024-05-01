'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0b744aee4443a2f158abb55b4c6b203a",
"version.json": "0f1d46f67448586600937a1a23bc8c99",
"index.html": "306e42233f6e4507527021da6f2a4edd",
"/": "306e42233f6e4507527021da6f2a4edd",
"main.dart.js": "2fb977007a13542772802ba1c4903b5b",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5a02d9e929033fac016c6773191ab952",
".git/config": "34eb18974925217b9b0adebb2c85cc63",
".git/objects/92/46021828d7bb31f73d46fc539bf15f88ac0a48": "27486bb0083ac803e6c227f61888e0ca",
".git/objects/6a/528d7a12484a82704e2de3a027d8bb5f57c20f": "4a8d81973b56fe488ff406748b48b33e",
".git/objects/6a/34b47ac0e370b3a7f26ec42f789e10cca82b11": "c4193d596a1543f8e36619ffe3ba3f05",
".git/objects/3c/2fbb2826b17ab61948eab346b3d84c99c47fd0": "85636dbf7d4bc234e0f91aa2d5ad1d63",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/02/56206daae2d56509974bf00442264e784a0f4c": "2ad52676b1b5323f435f7bdb6670f3fb",
".git/objects/b5/37d8ff89cff7839944dc0af36689a88e7c6920": "f533cf04bf02efc256e382d4f866c82e",
".git/objects/b2/01d6d108a4681a5867c6e3bf658c9123daa616": "442dc7743e04afbdf3ce858ceb8c60dc",
".git/objects/ac/ab959c33afab314f938ffcd552250f699639ba": "f695ca4ed8ca84abb547099ce580746e",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/bd/17365f95305bf20799ee6f9f9fb3637d6481ee": "c904022c97dd601cce4822d3956cf085",
".git/objects/bd/a57d71b8417601bc5daa7a1526af641186bae6": "aacf7ba37e5a082a355f005ef4b98f43",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/314642068120edb7df00a399c39c52773c1fa8": "cfb743571451b7026ab42e7a8f3a2d08",
".git/objects/fd/c4ba1e7dbdcd77685c02ae2ae477bf185ce434": "5854bb66001fd64a0c7131aa07707527",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/654ae39873a5e1a4e4ab4ca779e10c565345f3": "dae792d9afaf227ec5a3a714043aea6b",
".git/objects/ca/b6237547b63ae9c74e33ef11fac956d843471f": "baee340afd6461ed15819da1baf9cb44",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/e4/f320fcd28c0bdd273f15cbbbf94b637e9995ea": "fe97d4a06bedd36b6e24ce79005489ef",
".git/objects/fb/68f3f9fc29295831fe2b7ec589e32bb0ba63f0": "13616f09d42a071e79b85659be8a393b",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/7d/a2c9581654aa8ba6902f2a717989bf10c61b7f": "ae9d1429c316e1e3bf4df3ca1185af76",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/d9d0315d560bcf7709db917879983a2b050b82": "b3a0dfc8d987757468120e3e9e52b312",
".git/objects/42/fa1cc8a385af6389e80d07e76eac03e380debb": "a8a7560893f31e30279d9b0660e84f18",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/49d09730c3aa9aade589aeacef5cc9e8043ecf": "6a8ed217d4b127123b08ff391baf6ab4",
".git/objects/8a/2a94f0761b960743e1a7f032d1342e6b11e2c3": "e49a9d7b95ce0690346369e2c4f976a9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/3c5016868211fb89af13033bef582d7b411dea": "581ec90269705cb5605d42ffb4a6b0f3",
".git/objects/86/c566f35345581f28991481806b86f0ca76445d": "18bffc1ec13c71b3079def550b565c14",
".git/objects/2f/09bc803fdd6b5c6f5a1f511ec7aac2c13e212b": "7bab2cc01c537481d6b1845f61454cce",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/31/f4a24456320b07051c8bd981c2930acc6565a2": "4b40b6f37e37148ad223d7b9c84db8aa",
".git/objects/91/81171b75f7823e6cd60b0724e426a87a9f8d5d": "44012fb2b6c777b861dab838e822aaab",
".git/objects/30/b03b5c90a85018f68cf690ff8cae6b5b0f60d7": "0f4ec19fc7813d8481477db2f30fb333",
".git/objects/08/21d9cb52e748aa415d1350b1bae1307ce0b0b5": "c3d0a82b9d7aa30b551d90ec9fc05628",
".git/objects/6d/d64b2f6ab9f929ca06c5cc50d6cd6133bc1283": "2302f7def66cd3db098c025d4216b2cd",
".git/objects/06/c1b1fc4c596aeea6dc82177a02129695066dd4": "873579cf020a2e64f2e013c38d5f026a",
".git/objects/63/b4bf99fd1ca4376efda2772889235ed2219772": "61f8d0ba1b454013818b599ab6bf687c",
".git/objects/d3/af19e1227d8b54fbe4b44a34a2d9781adc46d6": "00624536b7ef89b7620e6864a405f10c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/022447819709c38ec81a3a3ba17677c0cdb8f9": "8e945c864a7436a74b22ded165b904c9",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/2dd358a2c313469632689237a0040db34a79bd": "fd8d4699c6f05136cf9ba6fb9a4be97e",
".git/objects/a6/524f9ce4b33fa048f0fc54735c3599f791f8ba": "472c1924bfc68eb8c850fd3684a34b97",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/c779f1496e108725200fd466eed0fcee62ee2e": "734267bffc7aeda46ad947775deec6ea",
".git/objects/cc/ceb810f73098ad32d48f6984dc2bf250c676f5": "f9bdbcc7b7f56d123202dca3bd196400",
".git/objects/e8/1018fe8526a04163bf1c1b887fe6126c7889ee": "dd8be6b5505da92d346d34ee2d1b3d09",
".git/objects/2c/ea78ff2707140a98ccd6e8cb806cf5e4fe40d0": "63b62e94e0b23a8339393e743121778d",
".git/objects/2d/7186e35b29f29c9a3261a37ce473de0b5b4a23": "6c47b7f4877ccbab39e1f28afe90997b",
".git/objects/48/6ceb4491078030289c3a302a05be43e9830227": "b4cf8f6155d41fccc3426e8ae1e342a5",
".git/objects/12/6f880056d76eabe1e9836b821191637b6cc968": "6d64f218a0677c08fb879c2133b93cb7",
".git/objects/8c/96137f8d917fdcb2a4e5ddd69de24ef09541b9": "7871277758f1efee0b1379d6052e128d",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/2b/169cc015d70db2bc756fffb5effce91d9d74fd": "4ccdd9aa7c2e63c7316111fc0227e06b",
".git/objects/47/30ece5f82d9271cde78374071c9700b129bc83": "4cbe92f0ce53b92b8cc178290dbd51c1",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7ecb5a36c7df81b221fea48d89e8aa46",
".git/logs/refs/heads/main": "c52e534c7fd26cd07d057dcb61c3dff2",
".git/logs/refs/remotes/origin/main": "763515661560d6bd8d0d8eba40ed3e1f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7f51c1529f3f8cd3e8cb5f3b942d6043",
".git/refs/remotes/origin/main": "7f51c1529f3f8cd3e8cb5f3b942d6043",
".git/index": "c01a4f423cc0d6081763cbc323d3ab5f",
".git/COMMIT_EDITMSG": "d7c9720154ff3ea37de28760b25d0a0a",
"assets/AssetManifest.json": "cf4e2499e00e97c9bd29edf9bceca0b9",
"assets/NOTICES": "da3d5467d17706327abf4e46534b160b",
"assets/dotenv.develop": "aff22537bf842f94da40cf5841ac5af7",
"assets/FontManifest.json": "cc00a32f84673ab651dcea42481a97ef",
"assets/AssetManifest.bin.json": "1f05e72df43ca494004f10dd839edb7d",
"assets/packages/iconsax_plus/fonts/IconsaxPlusBroken.ttf": "71d12baa6ddbb770fb8f6d92021403e4",
"assets/packages/iconsax_plus/fonts/IconsaxPlusLinear.ttf": "08f8e5eef32e66caa70d237eea7e3edb",
"assets/packages/iconsax_plus/fonts/IconsaxPlusBold.ttf": "805a1bab0f9865af92fcec87325e104c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "34dee76d7066858b964bfcaabe6491fa",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "b1491baf1c552526cf6c1358443f7596",
"canvaskit/canvaskit.js.symbols": "272437b66ddec8c9830ccaedc88ae593",
"canvaskit/skwasm.wasm": "f55bfb1214a26e60e409ab661485b3dc",
"canvaskit/chromium/canvaskit.js.symbols": "cf6312e91377387e0db2269977666983",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "c4988367bd5df671c979d5aaac2a11a4",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "ef9655d2e6733a44237e78983093a104",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
