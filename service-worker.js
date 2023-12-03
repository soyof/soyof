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
    "revision": "74351bc67a0c67a794da3827b720b85b"
  },
  {
    "url": "archives/index.html",
    "revision": "f3dc82b1e2c175362c2760f3bfc15cac"
  },
  {
    "url": "assets/css/0.styles.5fc7a43f.css",
    "revision": "c91183619af8613c25ad34af52767f25"
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
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.3314f968.js",
    "revision": "96eead591f06c7dd642e8e3f4e106194"
  },
  {
    "url": "assets/js/10.307a57bd.js",
    "revision": "a07106f0d9fe4b048970b5cd393a5d33"
  },
  {
    "url": "assets/js/11.3c792776.js",
    "revision": "d44f34826d1655994c7281bfe1d0ea5e"
  },
  {
    "url": "assets/js/12.fda00068.js",
    "revision": "47a6ada5a046ded9a4b7d5061b7f98c9"
  },
  {
    "url": "assets/js/13.a7a612d3.js",
    "revision": "b416d197755c8bc7a7051ebbbd40052e"
  },
  {
    "url": "assets/js/14.0b37bd1b.js",
    "revision": "1b0b2e8043bcdd9949d1e477a88cf35d"
  },
  {
    "url": "assets/js/15.1f907618.js",
    "revision": "112205c7d27994eced17649e34dceb80"
  },
  {
    "url": "assets/js/16.09ebe131.js",
    "revision": "36481c6a7df81de20ac1256dac303a2d"
  },
  {
    "url": "assets/js/17.65089bc0.js",
    "revision": "fd2922452ae29120c6a336c8615bbcbc"
  },
  {
    "url": "assets/js/18.3b9d9bef.js",
    "revision": "68d152cc595fa465116a6d24a201add2"
  },
  {
    "url": "assets/js/19.ae22f127.js",
    "revision": "b6e8d7ed688f93f2ce22a1a2a428fe54"
  },
  {
    "url": "assets/js/20.46fe23bf.js",
    "revision": "d3cb9353087a21e9b2c748238195c568"
  },
  {
    "url": "assets/js/21.e6d9cc3e.js",
    "revision": "7bd58f9ab3091b8c0b1ff6d5ab7d647e"
  },
  {
    "url": "assets/js/22.50ac7843.js",
    "revision": "f5f79679daabba5d55b8cd9fd01aab27"
  },
  {
    "url": "assets/js/23.45a86bb7.js",
    "revision": "8a8dd2674ee9827d6c0ef3d6a718347f"
  },
  {
    "url": "assets/js/24.15461ba3.js",
    "revision": "1b49c2ce54e6b2c85c45bf938414470a"
  },
  {
    "url": "assets/js/3.6fe5bd21.js",
    "revision": "c980d3e5492de47eec2af45ab9e99fe9"
  },
  {
    "url": "assets/js/4.9838a430.js",
    "revision": "9d9b953d58716d206bfef196de4ea76d"
  },
  {
    "url": "assets/js/5.5f54cdb2.js",
    "revision": "b525391ef6924d890f936ce0059de99f"
  },
  {
    "url": "assets/js/6.089ddda3.js",
    "revision": "6d6063dbde3123a95680f958595a1a38"
  },
  {
    "url": "assets/js/7.1a4c16f0.js",
    "revision": "77ab91e0a9dbe36d17f3ee31d7423e12"
  },
  {
    "url": "assets/js/8.60edb082.js",
    "revision": "2249b1b206c4258fa066d1ca82301091"
  },
  {
    "url": "assets/js/9.f50cf13b.js",
    "revision": "93b1ab7c8abf9f4f5c4590f9749cbf60"
  },
  {
    "url": "assets/js/app.6f0f5076.js",
    "revision": "c62c8b9c3dc884ccaac07fc8f5ce1148"
  },
  {
    "url": "categories/index.html",
    "revision": "a548d3b18adfbc9c4c539b6b8102ab7e"
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
    "url": "images/othImg/01.jpg",
    "revision": "39c7d1c73f17b5a6d84f138fc32ab07b"
  },
  {
    "url": "images/othImg/02.jpg",
    "revision": "103dd64930ddaff80a0ffd18c4a2df26"
  },
  {
    "url": "images/othImg/03.jpg",
    "revision": "c81683e9533bd9f33210b9652cb39865"
  },
  {
    "url": "images/othImg/04.jpg",
    "revision": "890535a4e5895c09ac0febd31eebae86"
  },
  {
    "url": "images/othImg/05.jpg",
    "revision": "ab12ad085ea48fb262d783d6458a2a58"
  },
  {
    "url": "images/othImg/06.jpg",
    "revision": "1c6c1e38a1a2a51c5a8abf978032fa2b"
  },
  {
    "url": "images/othImg/07.jpg",
    "revision": "3aeb09d04b45e7a895fb0d46fc61cee4"
  },
  {
    "url": "images/othImg/08.jpg",
    "revision": "c8ede11035012527fc0ca8a904e18aad"
  },
  {
    "url": "images/othImg/09.jpg",
    "revision": "dc2a91040c82bb70de0aeb6cb7f8162d"
  },
  {
    "url": "images/othImg/10.jpg",
    "revision": "87022b1d7208abcfcae1ed42dd23a51e"
  },
  {
    "url": "images/othImg/11.jpg",
    "revision": "66187a0b39bc6412a0df04b6ae1a8e62"
  },
  {
    "url": "images/othImg/12.jpg",
    "revision": "c5ac84670fe39ce032a99cb8d1ec7d9c"
  },
  {
    "url": "images/othImg/13.jpg",
    "revision": "bd8da344858ad5852b50b3d8a18c8854"
  },
  {
    "url": "images/othImg/14.jpg",
    "revision": "6fd41e520b2c79128557e635f3f097e4"
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
    "revision": "4c68863907c29950be28af3f1fc05b39"
  },
  {
    "url": "pages/162945/index.html",
    "revision": "2754d5578f396a1a3d50c74c4c5d6cc2"
  },
  {
    "url": "pages/72b170/index.html",
    "revision": "d5f7fb4816c8c1c229cb640ba50d88d5"
  },
  {
    "url": "pages/865b99/index.html",
    "revision": "5d8ae0e0a5aeecb14485928da9e0e90e"
  },
  {
    "url": "pages/c5a9c9/index.html",
    "revision": "f3f7550267395644803d96a0c008347b"
  },
  {
    "url": "tags/index.html",
    "revision": "6a93a68fde41a5c441e1f66c1628ab74"
  },
  {
    "url": "tinymce/icons/icons.js",
    "revision": "478446c8793fa2438759fa1f4cdf8229"
  },
  {
    "url": "tinymce/langs/zh_CN.js",
    "revision": "e742f9a5babcf39cd376c8ced5814ae0"
  },
  {
    "url": "tinymce/skins/content/default/content.css",
    "revision": "7731675a9091b95d8882d88fd44ea978"
  },
  {
    "url": "tinymce/skins/content/default/content.min.css",
    "revision": "4b0fe2560b2cc6155425d4aaf234e209"
  },
  {
    "url": "tinymce/skins/ui/oxide/content.css",
    "revision": "36da153a88b37d2ae8e9c4aa96c3758f"
  },
  {
    "url": "tinymce/skins/ui/oxide/content.inline.css",
    "revision": "379bada20a04bcffe52b94c3d27cd94d"
  },
  {
    "url": "tinymce/skins/ui/oxide/content.inline.min.css",
    "revision": "612708ec96c7347e8aaae3fa70688f23"
  },
  {
    "url": "tinymce/skins/ui/oxide/content.min.css",
    "revision": "67e04b450adba5b6259b139d3e932cfb"
  },
  {
    "url": "tinymce/skins/ui/oxide/content.mobile.css",
    "revision": "e84062c0d71bace6637586be7c2590d3"
  },
  {
    "url": "tinymce/skins/ui/oxide/content.mobile.min.css",
    "revision": "411c2608b6be78849a76c0ed14200234"
  },
  {
    "url": "tinymce/skins/ui/oxide/fonts/tinymce-mobile.woff",
    "revision": "baecf466c40e709e7ffdbc935fc0813a"
  },
  {
    "url": "tinymce/skins/ui/oxide/skin.css",
    "revision": "378b4e57b95dd24b88a3786e7b731a7a"
  },
  {
    "url": "tinymce/skins/ui/oxide/skin.min.css",
    "revision": "393609bd1368f51e505531bf8baf6e1c"
  },
  {
    "url": "tinymce/skins/ui/oxide/skin.mobile.css",
    "revision": "338b06826c0e8a681688fc195dbb72b1"
  },
  {
    "url": "tinymce/skins/ui/oxide/skin.mobile.min.css",
    "revision": "4fdf33191102d7a24a5bf0639040d128"
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
