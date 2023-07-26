/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6e6a0a18230c4ec693015b5a3eda60c1"
  },
  {
    "url": "archives/index.html",
    "revision": "d5aba4fc5cefd9545f76f9b1ad3d7128"
  },
  {
    "url": "assets/css/0.styles.858778fd.css",
    "revision": "0a5afac53d189ab76632f17d84e1e615"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/claw.f886b8d5.svg",
    "revision": "f886b8d5021c8af029e2cd4dea609bcc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.d918b47e.js",
    "revision": "3d75c810a0d82837c9214faa94364a55"
  },
  {
    "url": "assets/js/10.52b4ae1c.js",
    "revision": "48f8e4a90139ec1f4e641b67bf5163ff"
  },
  {
    "url": "assets/js/11.1e1c7766.js",
    "revision": "e2b4e5b2e2bf373271c18cd73a948bb1"
  },
  {
    "url": "assets/js/12.d212b531.js",
    "revision": "45a5d983b79f218ec1d4a1cda7299b7f"
  },
  {
    "url": "assets/js/13.2e216057.js",
    "revision": "1e1d4a0e5617f28d47980d8e9dd5d1d6"
  },
  {
    "url": "assets/js/14.2ed6d8e6.js",
    "revision": "cea6dda453f01275d4f8ec35b50b1c44"
  },
  {
    "url": "assets/js/15.365f5a39.js",
    "revision": "0d5265d2c1f8ee36e05582c18f54c5eb"
  },
  {
    "url": "assets/js/16.9a3fe0b1.js",
    "revision": "09967a5db7bc2bd7b40f7aca97622ee4"
  },
  {
    "url": "assets/js/17.ffe1d4fb.js",
    "revision": "4f4ce5e062d2c768e31dfc4f1cddf62f"
  },
  {
    "url": "assets/js/18.7bd633db.js",
    "revision": "5e61cc3b605b6606589c457681611d44"
  },
  {
    "url": "assets/js/19.47ecd46e.js",
    "revision": "90012f698eb557756770a19e06ba77bc"
  },
  {
    "url": "assets/js/20.1268a778.js",
    "revision": "75d36a211a6fc159732d04f8866d9dd2"
  },
  {
    "url": "assets/js/21.66e97e66.js",
    "revision": "3e773c2eb2c77499cd66891a21e57251"
  },
  {
    "url": "assets/js/22.2bba7c3c.js",
    "revision": "c43ba4258544c16cb8b09bf00945d895"
  },
  {
    "url": "assets/js/23.9b7ffd5b.js",
    "revision": "6e387358962c7082de9e1f9224eabbfd"
  },
  {
    "url": "assets/js/3.a669de58.js",
    "revision": "6542a5ce7bc53dfc27994bba2460c722"
  },
  {
    "url": "assets/js/4.dc6ee7e1.js",
    "revision": "ab6d0fc23711a8578543b381dbb8e124"
  },
  {
    "url": "assets/js/5.00e10be7.js",
    "revision": "79bbe215f02bf85aa5afa231d2d6cadf"
  },
  {
    "url": "assets/js/6.edaefa47.js",
    "revision": "b4b7737b941d3b4a067cf9415d904d85"
  },
  {
    "url": "assets/js/7.b326e939.js",
    "revision": "7b715ca8b5bc5b2f4fd0adeb8793a02d"
  },
  {
    "url": "assets/js/8.c0b6914d.js",
    "revision": "376c8a86f30653d8701dd8a2d03531b8"
  },
  {
    "url": "assets/js/9.23e69bff.js",
    "revision": "efd1bc5db4b8f30b65f03cbd4dd7d2ad"
  },
  {
    "url": "assets/js/app.bdc9ab94.js",
    "revision": "ba482463789281a7f72e57affcd64f3e"
  },
  {
    "url": "categories/index.html",
    "revision": "d318c140498a6209993bbc63836a4e26"
  },
  {
    "url": "images/bg.jpg",
    "revision": "5a70cb53312d5e9e547aa54574dfbabb"
  },
  {
    "url": "images/bg01.jpg",
    "revision": "ac05b55f546235ca31f4a2b9bee15f21"
  },
  {
    "url": "images/bg2560.jpg",
    "revision": "ef75729c2d63810295348e2f0ce32e14"
  },
  {
    "url": "images/bgcontent.jpg",
    "revision": "1bc929d268c17f6a34d21bcf4aed6559"
  },
  {
    "url": "images/blueContent.jpg",
    "revision": "92fa89c9a660aa452533b80ba745270a"
  },
  {
    "url": "images/construction_design_architecture.jpg",
    "revision": "72d122035061e4a268b3c52c6dc0e498"
  },
  {
    "url": "images/dog.png",
    "revision": "4da19391198f35ec57be15f69051880c"
  },
  {
    "url": "images/felbad.png",
    "revision": "b4c3a30c8e2351e1c4274b05427d2da6"
  },
  {
    "url": "images/funny.png",
    "revision": "7adb28450c2a392f9c72163409418b94"
  },
  {
    "url": "images/githubActions/01.png",
    "revision": "aa6ee6e3a62d9208dbea1e43707fe3ef"
  },
  {
    "url": "images/githubActions/02.png",
    "revision": "3e99bd0302dd7a85f1b84c4d54db2c09"
  },
  {
    "url": "images/githubActions/03.png",
    "revision": "9609f59c02bffaf7fd924d879c56d480"
  },
  {
    "url": "images/githubActions/04.png",
    "revision": "253c7743062eb6b76a910a5db1ae695d"
  },
  {
    "url": "images/githubActions/05.png",
    "revision": "9705ff7c4baef083fc21f899452a0f0f"
  },
  {
    "url": "images/githubActions/06.png",
    "revision": "73e691f0f46ca5a37059c988614c78e4"
  },
  {
    "url": "images/githubActions/07.png",
    "revision": "51bc52e96184f2a3fced5e798733263e"
  },
  {
    "url": "images/hexagons_honeycombs_relief.jpg",
    "revision": "03759c7484781b321c76621a77e95e5e"
  },
  {
    "url": "images/honeycomb_gray_volume.jpg",
    "revision": "adea70e227677a614898dc97bff4e8ef"
  },
  {
    "url": "images/lightContent.jpg",
    "revision": "b53420381247d4dd59e13496847c1103"
  },
  {
    "url": "images/Madrid.png",
    "revision": "0a667f09a01402ce08d098486b436d44"
  },
  {
    "url": "images/shapes_drops_metal.jpg",
    "revision": "dc2f34a82ceab6a24dca8d09e67f0554"
  },
  {
    "url": "images/starEye.png",
    "revision": "69487cddc50f6dfcd67fa86beac20af1"
  },
  {
    "url": "images/V3_Loading_Wallpaper_1.1.png",
    "revision": "e675a3d0a0f6d310f609c5074fe04e35"
  },
  {
    "url": "images/volume_figure_square.jpg",
    "revision": "00623b177284fc2e900f6ed75e22a206"
  },
  {
    "url": "images/wallhaven-gp2jqd.jpg",
    "revision": "cb75ed21b12329a27126d059ada3005d"
  },
  {
    "url": "images/windows_light_dark.jpg",
    "revision": "9efe39ae44c863d8563cbf2c8fd25c5c"
  },
  {
    "url": "images/惊吓.png",
    "revision": "1cb969653c672d09e3913f7b1d0d6ed5"
  },
  {
    "url": "index.html",
    "revision": "c970297d02f37ebf3828bd8add4e2fba"
  },
  {
    "url": "pages/72b170/index.html",
    "revision": "ea16d1d8554f3668d5129b07394ffd4f"
  },
  {
    "url": "pages/865b99/index.html",
    "revision": "a01119988371d31572e2b20c00a04b3a"
  },
  {
    "url": "pages/c5a9c9/index.html",
    "revision": "f514cf4d25d9db12811624075c0d9387"
  },
  {
    "url": "tags/index.html",
    "revision": "716f558bf3a6e5993de6930a72c42eb0"
  },
  {
    "url": "tinymce/icons/icons.js",
    "revision": "136f7e9295f6e00da94c5ddf0cb3ad15"
  },
  {
    "url": "tinymce/langs/zh_CN.js",
    "revision": "c607a3c42665fb10fe3e95acdbbbfd2a"
  },
  {
    "url": "tinymce/skins/content/default/content.css",
    "revision": "6195a2a449158f04940d8d4d73ea1bcf"
  },
  {
    "url": "tinymce/skins/content/default/content.min.css",
    "revision": "646457914dfc1cd8d0cce188865878f6"
  },
  {
    "url": "tinymce/skins/ui/oxide/content.css",
    "revision": "8bd1ce45eeb02b9b2a8f668b99811d00"
  },
  {
    "url": "tinymce/skins/ui/oxide/content.inline.css",
    "revision": "c96a34d3418b48c5dcd71421b5ea0a4c"
  },
  {
    "url": "tinymce/skins/ui/oxide/content.inline.min.css",
    "revision": "c8e961847a2c2cb78d719b7f43e66ee4"
  },
  {
    "url": "tinymce/skins/ui/oxide/content.min.css",
    "revision": "0c8ec304351e3ef1033802c39965fede"
  },
  {
    "url": "tinymce/skins/ui/oxide/content.mobile.css",
    "revision": "ee0bbaa9a65a80eed6569842c9cbc3cd"
  },
  {
    "url": "tinymce/skins/ui/oxide/content.mobile.min.css",
    "revision": "e36bc75469654354c5f467491ecfe850"
  },
  {
    "url": "tinymce/skins/ui/oxide/fonts/tinymce-mobile.woff",
    "revision": "baecf466c40e709e7ffdbc935fc0813a"
  },
  {
    "url": "tinymce/skins/ui/oxide/skin.css",
    "revision": "ef2fb4fea584178b57566ac739c71a2d"
  },
  {
    "url": "tinymce/skins/ui/oxide/skin.min.css",
    "revision": "60e14a222d157b5c54ae65366d72f880"
  },
  {
    "url": "tinymce/skins/ui/oxide/skin.mobile.css",
    "revision": "45f53cf907528cd4295a7a9fcbc6c70c"
  },
  {
    "url": "tinymce/skins/ui/oxide/skin.mobile.min.css",
    "revision": "9a6b46d30696025dc18e8a7e71ac2ef9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
