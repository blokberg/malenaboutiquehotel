'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "159bdf605a4d63e85a60e16da221c790",
"index.html": "c79842228c79c48af7d8fc2966e96e6b",
"/": "c79842228c79c48af7d8fc2966e96e6b",
"main.dart.js": "6e7fe98c549e46f8f4b63390f0c60602",
"favicon.png": "418c8895fb041f92ffc257398e0ea794",
"icons/Icon-192.png": "b720dbfbd73fb665af6e8642193fe81b",
"icons/Icon-maskable-192.png": "b720dbfbd73fb665af6e8642193fe81b",
"icons/Icon-maskable-512.png": "97d8497cecc625be7fc28d8df12c584b",
"icons/Icon-512.png": "97d8497cecc625be7fc28d8df12c584b",
"style.css": "932058711becee68ac6d69a933bc74a7",
"manifest.json": "402dca5b6dcc11fee10f3425f7880a28",
".git/config": "06564e31bbbdb54733a4cd58b8d43c7b",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/57/7e1d6fcc1f3e895c6ad10fd3ed1cc72074a2be": "e58fd80d91d84a86701eae0647a6b291",
".git/objects/9b/43c91a97f71729fb1e2293c5013bc2eec84834": "e316e875d24531c8903dc052248b7246",
".git/objects/56/6c09bbc3269e0ac1311b0177d2c4594e7f6ff8": "39ba6cfcd580915e23ec8735bc63cea2",
".git/objects/3d/c36cb262b484cbba2f24e27e1ac274193b3d50": "54a5126ec6c73bfd63d604ebee1c1c2f",
".git/objects/93/6a6f960f51e3bb542e73b57ae8892f2f1eaad0": "e89b0be0c459d87eec98ab472003d7d2",
".git/objects/5a/8342f68f198b1584a1558f7cd0e8e4f1be9d09": "278e12a0b8e849d40eea879f4f48d158",
".git/objects/33/b59f3cda7f3e0d8ef67a1f27879698e962593a": "0e197b87250c80923ef3766ba73fbaac",
".git/objects/9d/f8c5bda0cee3e0db80732a51405909d108ffd2": "83ae01479f130c36043ac9e00a22f354",
".git/objects/9c/19355df92180ca48ac0fe9b0842aec08efced7": "6624f7db0196a9fdd9a6e7525040c8b6",
".git/objects/df/5dca32bd9e1ae7dfd5d72f85963d6ce6994f88": "71ef7b8fe78c5653f430b5fdde19b832",
".git/objects/a5/4e43e56d81d7d6c81208c33a9bf612434a5544": "a6318addbc51bb22e8436490f7d131b1",
".git/objects/ae/77f699eb8928bb3589ec69c2393918b70020e0": "b77a034a9ba6ae03348ba85a90f5ec5d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ee/df317359a5b22f22470384f796e9b9964beb22": "e97587bcccf0a6ebd48f750fb3b579f4",
".git/objects/c9/7d59cc9934d5de83616badfa5586af5dae971e": "3309c9abe40743d5b4b41d91e6629b20",
".git/objects/fc/22214c673519cb1bc316f97683e45ac8a70be9": "a6fea8274fd421072f9d37617f7a9e08",
".git/objects/fc/28fc2ecb1574ece36976258bcb711a4f201125": "4ecece696537ba41828cb0cf0700ea24",
".git/objects/f5/4fb605b152dac2e3982b95f53c8765e968ed60": "318e1abdf15f5e388242d5527105cc9f",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/11/7369c4aefce6d87a0995e13595f09ce1926e27": "0fcc06401fe2e483e19de4a4ca628660",
".git/objects/11/af6c57be9fb14734eda8f6d295e824653f0cde": "360999e92a265c5f4f5d0d09dc7022a8",
".git/objects/89/ed4ca5b541ac48e1fe0abd0dd09eb21e344656": "4e0a6015d392341c273e8676c9cfd69e",
".git/objects/73/1d0703bab0cf222e6343958e99c4191bebd5fe": "11dfec39c5b97c8c49f5a4dde5c6502f",
".git/objects/28/627361c837b736d1d35669ebd52deb58731edc": "e336acc9d9f7fbd0d01163b36369ce29",
".git/objects/8a/46807747671484008a69ff852945f467193660": "2154a695b81b555081e378ad93bb29a5",
".git/objects/10/d023aec4cf0af9f9d35ebe37090f277b1bddee": "924da8137094da1f53f27d76aae559b2",
".git/objects/81/6ea5d640c16332aad512ff7c765e2fda104aab": "757657c27461ff3b8b2cae847a339122",
".git/objects/2a/6a4707fe169d55d02284be5d56c9f3106b862f": "e7a729f3cceac741002a86e45a533ae0",
".git/objects/09/c8fc58c14061570da6f564e9ee97e99ab2f87b": "a729f878500b6d93e1fde7955328f9a4",
".git/objects/62/8277def66446bbef8da50d7f043c982bbebc4a": "e08eddb05ed4ccc5e76360b140138608",
".git/objects/62/389b61e6f35457ebe4b19af16d99414fd92259": "889920e42655e2cb8d20622b4bec2010",
".git/objects/5b/0d82f7034c92eaf50a9eea1eee7c209e2aadd2": "0acd263b3c7d32f06ae7dd1463c2db44",
".git/objects/5b/28a63aad41dce833cda24f6ad808371db04fab": "51b26cfa0d09adbfc60acec21897ecd2",
".git/objects/37/0415729c2dc883d860b06d3fd3520234e2c3e9": "f5f1436481a35e166771f5c1fe8a6686",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/af/4e334199df774bee2a29860b5a7bab133254f7": "58cf6d731bf09350baf4dbec917775e3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e0/4cbdd9ea87bb372fb8a58bd254e87f807e9c73": "284fe1165cd6bdb6fb082f5a107c7430",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/2b/6e4e5c3ec4b7fadfa6d1688f1c924c9fea82ca": "8f15a2f3831da9b4354cf82f4bb3cce8",
".git/objects/78/1a318615c30c3775f23428d67b4d1b1c54226f": "ce7e97a6d3c3af63f1966e52f39ea5c9",
".git/objects/8b/e3aa9a33b93d9c2d2f5b600987f3c86f0a5b6d": "4a4d9048632acb5127f02d0f29bb1cf3",
".git/objects/7f/5d5f3cfc2d1a8d2bcc438577eaf3b6037a9517": "557cced4e952ab857a64c738215f9e38",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f8b8befb1818e3f9dbc6fabfe9455461",
".git/logs/refs/heads/master": "f8b8befb1818e3f9dbc6fabfe9455461",
".git/logs/refs/remotes/origin/master": "44d3e1f685991643a7ddb1e3cb346da7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/master": "bb79218dc1280c06f1b411cbf82e67b0",
".git/refs/remotes/origin/master": "bb79218dc1280c06f1b411cbf82e67b0",
".git/index": "5dd08856e4f09c5072c51d6ab4c9707d",
".git/COMMIT_EDITMSG": "9289556383531d799d933062c72ade82",
"assets/AssetManifest.json": "ff2575f8560e01583b54ccc8afdf0c04",
"assets/NOTICES": "86e9d15ecba179af763268f130ba3631",
"assets/FontManifest.json": "a5fcf704da84c4d5ab843b1979b247e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/logo320.jpeg": "9d3a0676723d5a3aec379c511709a0bb",
"assets/assets/images/turkish.png": "7d0331378c1d6840f4a4623a90974fbe",
"assets/assets/images/map_view.png": "7008b6e29e1249161cc4dc2a7e06fec2",
"assets/assets/images/english.png": "aac0dfefc080856931658ea9c760534e",
"assets/assets/langs/tr-TR.json": "2933499590b76ab5821a768ef38873f7",
"assets/assets/langs/en-US.json": "38c4f3951eeda9b7203e6fb0318bd473",
"assets/assets/fonts/Comfortaa-Regular.ttf": "31aefe19554b85e0e5c1232daebc158e",
"assets/assets/fonts/Comfortaa-Bold.ttf": "9f81d628ecf6c80f7ebf80e1ed455d92",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
