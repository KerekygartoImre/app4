'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "76ce908bb877fbe659e1001794c8758c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7536acfb55024b615d3ecb5ffa74de80",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d4654d2d8dd3975ce706714e228c2afe",
".git/logs/refs/heads/master": "d4654d2d8dd3975ce706714e228c2afe",
".git/logs/refs/remotes/origin/master": "b114f07ba350058403c0d42a1b82e66c",
".git/logs/refs/remotes/origin2/master": "1cb1bf1e46bfbfcdea46c75a03928027",
".git/objects/03/02ca26126460a035c1031ae1cdb41a2bdc572c": "4070134a1a4448bbd3b514b8c256d636",
".git/objects/05/ee8e97a74994531b4054588fb257b9cdcc1784": "61e82c04eeaaf924a9e53578a8dea8c9",
".git/objects/09/60d19abb552fc4ac1e16c063b61696487da308": "5eef2f0e73354e000f21eb072ad03ec7",
".git/objects/09/697cea990acf11ff0d2948d5c9ee1e5e556f96": "b4f1275ed68a8b296d97421d74639b3d",
".git/objects/09/e557b33e1dba30ecd39d76ae96b646df60e5cb": "50f603136c8f04ecb5374dc766099052",
".git/objects/11/d50b48390ca3164f3f78669a7661e094fedf2c": "0bed3853f8f4c32f0d155f5113a00325",
".git/objects/13/c5043269b9b0edd1deb865b14cd22ea99395ff": "edfdf30c11baea9488f7e0f7d4b437d6",
".git/objects/15/9c452f053c2c3ae8843984098f421137f66ccf": "357463b3765353f880888eae93b8ceef",
".git/objects/19/a393c3d6d00de5aab85378c187e56a0fb3a3b7": "d3542e701a977d7c3bbeeeb6d2af6b83",
".git/objects/1a/f160a7c19744a8ec27680d0948bb4d71d191d5": "2e901f8e41c8af1201e7706a55f3fe86",
".git/objects/1b/0fd64aeee799359baf092776c7309574d33fd5": "1091f310124e9d47193aebba792fb412",
".git/objects/1c/e3a5f94a62ef7bd79b05b6ce96023d6565aee5": "9fda377cd2bb615041f37f20395ef932",
".git/objects/1d/bf245a99af652d2ea8388ebdd2fc2968bded41": "1cae5fabeabddab709db3e0c7a821bbf",
".git/objects/1f/d0f2e164143f261df46aef1a8a041f95edea3c": "86ac010f621f8132a9d1312a33af72db",
".git/objects/21/591627c663f48b35a5459ebee33a75ebfb340a": "f73d47b350a01e4dafa929581c2ea3e4",
".git/objects/29/db258f2d0a5636492bc3671f117abd2ea28feb": "ea69fc354c704281b010102e8d04f104",
".git/objects/2e/e3f1883909c3e6973493d28325f134bb11d2b4": "36078fedc9f1cc9f7ea8afea012ad68d",
".git/objects/2e/f4434f4e3d4a505421fbe3b1a9a3b71f3de318": "0c79b290a58b4c25f7cc314260f6e6b9",
".git/objects/2f/227f4d2d53fa56785efb5ca4c37bcf12308326": "e506ef1176a65d72b2e3574d8816bd75",
".git/objects/32/c744fadbb5c1913ffa6300444fcc2cb6652a8f": "0e897a279e5ccbb8d87c0dd60be88f27",
".git/objects/32/f7cee7ccd0b97e5e150b41e638cc0f6c778cc3": "7383d242eb4b73f17198b0b75fd1eef1",
".git/objects/34/6de309d937124702a50bc33d6034018c655d4e": "84bbc567b1ac6935778786bb60e478ed",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/89e33367e5f394794c2dbfd3e7c48fed10b449": "5c3b3549af8cb2df34ba800d889fa050",
".git/objects/39/ec2c8ae4889fea5efdbc529ecfae0bf75e87ed": "69bbfa4cf056de2bee87464e8d0227ea",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/c2520dc3185533f25fa9ec0750b3e615e7b3d2": "f0c6faee00287a2cd8dd854122013627",
".git/objects/3c/afd2ef3c911faa39c04ac6e0606c9711110d8f": "f053b55ae45ae7e0763cfab33b20a098",
".git/objects/3e/f22b39583028404bfab3f4d6b32cee1d42da0e": "4a4d503d4ca05dfa40374d2ae86a1ab4",
".git/objects/3f/f20807eb70a152d6426664c066845db1ae46d6": "c20809b8c4a77283b8ac637d38e87bf1",
".git/objects/40/9db803d56c66c2f54fc81907b1da82ac4a9839": "6c37cb10c9a3e333b8ae54154ccd2085",
".git/objects/41/467729067b0be16af4acbaf1b210d935bc77b7": "13fd23af4c01515603b5024658523660",
".git/objects/46/1fa18ff8d6b1255306d200a251f81aa9f7c091": "ee1b77170fdf8b96b7a729e7609bf852",
".git/objects/4a/147252a54c14790c730a0c2d2afebc1a16f317": "4a9e831d5d978f9af795bafdd2cfc9ea",
".git/objects/4b/0d353ff49060fad21d609493aa3787c8b627ee": "aee7d14ad6cba60aebe2fd4f2c3d47fd",
".git/objects/4b/552f1d3bd3f4aa5c25f4d538dab102dad3fab5": "549078155f0abc2c5b843444c53f05ce",
".git/objects/4f/bb9e7a7a764b2fcef3d1e21efc640a27e51da2": "9dc37892b971f367b1d2aeb09cf86de6",
".git/objects/52/0bc7d03b72bff230fdee2cc1e35b4beaf9182e": "a18105a8617de0059cf63982412f0095",
".git/objects/52/92bf789a50f984737b8d4fe3e6e121dc0f1e28": "b5aa48f0c6802cdb69a50aa54edd3739",
".git/objects/54/a29e1fa3dc33bb9eaf00fad28bb740b4ea6554": "1cd8286aa471e429c9500cd4f08bc7ab",
".git/objects/58/2eac6907abb4084884a13447b5f582985f1ca7": "2066347d04b1027683b80946f706025b",
".git/objects/59/1504b15f89991f2e7853a2a619b93e4ffff74d": "fd3390b6487b30a37b966a13d590bd89",
".git/objects/5a/14c9b60305eb951eaeaec33057de5015eb1c56": "53020f91ea003d9bae89416451674bc9",
".git/objects/5a/41ca71b312e64773c93cafbacf2ea203c510d1": "4c280a61a1a79d1fa9b7642ece0236a5",
".git/objects/60/b8a128c76eba5300cf7dc277765b6dee21a2cc": "d4a300adea6c18a62dc34a74f35dc3aa",
".git/objects/63/dc969264f6c427dd49bf19bf123b3e9e3a73c1": "c8030100038766d76d7e6895b432520f",
".git/objects/64/d4bc8ba1f9e6acf88fa788624e4f5d91cffcb9": "94bcd2b01fc6148766ecd3e7a6e74d77",
".git/objects/65/9de3e9278324bfde741c8fc21cf3f13703912e": "e579a2a7e99c7aa93a98fee5170fa31a",
".git/objects/66/7baa278c7f31d08d24be933f6757f22bd73165": "7b50db3221f76716fd748c8105f7494b",
".git/objects/6b/ab429f6962c530614f8df339853ae078aa922e": "2b55c4910aeac4e64e4184d8d6e06869",
".git/objects/7d/c2de1f9629f81854e3d97c61e751cc9b24543e": "0ccc83cbe71ece5821abbc5971648955",
".git/objects/7f/6f79e4ffcd4d0b7f7d4d57dcb1fa054cf3e6a3": "a4a0e64aaa2d23796d4682af4b46a991",
".git/objects/80/29ea161e1a51589644d15bc901140a555da384": "43a5e2a1944f32a2cb62b2b7c0ca36e1",
".git/objects/84/4e3fb681c860f4ad8b421cabb51e563830e242": "cdaf2593419c9c789ed880cc2b5ac6aa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/4acff352334658e291e0f73205cb827594de1e": "9e4672f5320a58bd530cd0b914f96533",
".git/objects/89/d595d9955819ba4d5ade920821b51aef72aacd": "cbe942c7279320c28bc5f2ddd8bcc0f4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8c/cec369f60b87675620e9a0dbb0341c68a2e10c": "9139bd8d18cbe73b9f5a0566c70c0528",
".git/objects/90/02ebf889a47531e8ffa8de9b5f665c3684ac2b": "7dea2642e60a3785394a1e798a60b551",
".git/objects/91/17a4d530a7263c4b806e42f1fce933e30dae4f": "ebc9efba55801effb3ed176b06d591ff",
".git/objects/93/43f2d7c8147d76a0d15c1dc7158a69236f6e34": "ce9df708424c354b02ba2e92225de8ec",
".git/objects/94/09a08ebb8aca543789d6537aefc9ca11f67702": "94224667f12f1b40d2788443c3d5a2b4",
".git/objects/95/6f7717dd5e02632b08ef9984364a5dce6944f3": "7683d95ccc11887bc45e77defa6e2644",
".git/objects/95/acea445607c88013d9045f4ab1cd72375b0480": "94f6a6c5abc9b673fefeae5a79343642",
".git/objects/96/21a7616779e9b9150a6df3f6307f4d2f527347": "d45591c2d104834704031d210ee1de4d",
".git/objects/9c/6f029d4e87adac5b18e4d1f7ef58445985df9e": "fc8a5d4db852129b61b6428ec417d343",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9e/b8fe097579cc8b89f6599731b72d8f8026818c": "785c006b408e19048d3a9f6a1b21f487",
".git/objects/a3/84c135478a4a6b278301eeada5dae51e1f5f0c": "503160d3f51672d841e82f6de8e6fa78",
".git/objects/a3/aab0313cec1a096c1a13afc935bde2e6b35029": "c44f460644f5f7f7e1556c05accd660a",
".git/objects/a5/deea6f1b0ff10e423204ea4dd60f6c4227ffc2": "5a182c07ae3488650613602a431e772a",
".git/objects/aa/baaef1f7c8c86e1a356acb120db433eb4a656c": "93df22db5c20d7e79c49d08ee81fc03b",
".git/objects/aa/c7babacdbedb81aaf2eaa761bc7194a61de59c": "104f3634d84e9f57ae4c01ca26c5fc2f",
".git/objects/b0/95a4e8ea4a69c99b39cf09281d5de2206de79f": "49597104963262c1a8c7aa889a469add",
".git/objects/b5/4bb58bdce3b086ac2dfce35c15c5d55ee24ca1": "44daa3f5b0696e7219e8226014fea710",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/f3d4a81fa87bc0a3b121c9a415835691833776": "29480f2c342022af65e090c71657ffd8",
".git/objects/bd/397b21b583aaf8a3bdc1ebb91ab66b0453fe2d": "fe74a2ed44cf79884f2666240558742d",
".git/objects/bd/3c5b8e5a065f15a79955d3f1636777f9333d4d": "05246df56fb2735f09bfc5d598d6c8a0",
".git/objects/bd/dc72567867215c7ef5c76ef2fbeebef1f01072": "6bc1ffaa23acb4f450e08c0d9a556314",
".git/objects/be/0a12c707907f75e64af6752a317c837ae77689": "d18e8cf299b1b2e0c655bc2f3e110bf9",
".git/objects/bf/ec1f04cab29a3cdacecad1a27096333a41c9ef": "048fd0cf56cfc50fd3f44cd46befe524",
".git/objects/c2/4e27c34eaf840540644f22adcd4fbae59d2e77": "35fed7e14721239f88b0d97eb588f2f7",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c8/daaf9bb042f7662ef586c68bc53a0c9033bf03": "17951bea48c6423d7c86dd5ca9543243",
".git/objects/ca/d384ba6cda906c526a69a8eaccd5fe61087509": "1694bf7208a1b505a93ea7cf8ededd9e",
".git/objects/ca/f97795acc852aadce3f37a76953c6c13b90d61": "e9c0595a29e86662c835d385eebbe4bb",
".git/objects/ce/2e5de173d70f9bc42f3b97c60b60b39ea15ead": "7a153026b7427511c73d4478a19d10ed",
".git/objects/cf/6f52d2e685ab596beeeea23e92f423124360c9": "c9e555dd9433be97b3af2feaff864e8f",
".git/objects/d1/0b78dac0b2e99a1d677c874114c8ac2b8a2bc9": "d670b6ff6a26251ba8801100b5cbdf77",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/0354df0a06992c3308578c387b95b1a5fd3544": "1b52a6aec049c39ce2dddabe5eeaf0bc",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/4c61df3d3a4beac2184d10c26aafd0bf16d64d": "d8f358979835a6ec106d6537d49beb65",
".git/objects/d5/087a27f13b1b19cb7259d357667537695c3388": "c2f99dbac4c431a35b3a8629e1b0c9c1",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/48dba7555b9e4a7bed4eb1090119587dd3bdf6": "d8854a05ce92104dd226c743e220b60f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/95d045ff9a22e53c58878c04ff8fb3e51b82fe": "dc1f58c9cf6770a59ec3a383720bd1af",
".git/objects/dc/1498bed8bfa76166157ea4628e94b60d75bca6": "519222eed846a8d5f960520f2a5f54f9",
".git/objects/de/b5dee4bfe0581d6b9d376dbdbe3eff5bcb6dec": "678be3f3fb0d73f9e4c0a93ab82fe0f3",
".git/objects/de/d3acd8bfa1da36d11bde0192fdce4fe04603c6": "0d34a1440e66dc7090d043c52614ed06",
".git/objects/df/00e97333e773cd2fb07977d5e074fec8bcf782": "cd8965d41819403db287acd17b65ba17",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e1/2ca5f2f2fe99e13f6846530986177a139a52b5": "355f63ecefb24a749c30f496cccd52db",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e4/af1c868bdad3c3b13f1317cd1a65c6fe56907c": "ed4e4361b2157152ecfb7a038fc7900e",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/639be516eb57ecd378fc8d863981765910afad": "c3ef789be50a577c7f0a292baff3cc03",
".git/objects/e9/e04e80849d2893c7f0e3a4e958a01ccc107fd0": "2c83a1d7864763f964f643c95686f201",
".git/objects/ea/df29546a85825e2ab8b4f7a59c5350f3e5b2a4": "2bb6eebfb5999ed8a3be5cd75f6a9e94",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/e1c88be3ab00d180a3f941756f3c954b1916a8": "da62b1e6d1cc92bbcc82b72e265b2f0d",
".git/objects/f2/51458b58e7efc97a576f52abd8206652546d08": "fe45f2e1dfe36d4b64e977abf831e6b3",
".git/objects/f5/25483631034a8ce7fc46f8f3b4c5a1f41b6d74": "0fdcc99d244d3bd30f1544fab2034ba0",
".git/objects/f8/4ab45a301e85b893398b9fd01a06562a9eb551": "fc9fc1ffea2ee3c24f52301357dc0808",
".git/objects/f9/0d25e5425e24b9878b338f7d8e790b1a7c1664": "d99345d153e8bb89d2ce9846e2c31be4",
".git/objects/fa/11e5627790808562e44730ee9475ecb0c01a5e": "b9f051346e5cbdff1384c454b673906b",
".git/objects/fa/331c45b96e42a8241bbfecac65ee4e83c3a437": "e2dc067c1eb9e285f944e9ecb6ac8a2f",
".git/objects/fa/5f8768007b41c431a3f85ab4be13a370820cca": "702bbe47f9d9cfc2e8dc6d27cf9138c5",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fb/7925d0862685f6f889fb0127b2236beb265cb0": "ab8620aed925049b1d26e0490fc7e23e",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/refs/heads/master": "634fbfc3ae6991e2a24c1c0083334c79",
".git/refs/remotes/origin/master": "7a2eec7d9c97a82bfbb86c414eb92209",
".git/refs/remotes/origin2/master": "634fbfc3ae6991e2a24c1c0083334c79",
"assets/AssetManifest.bin": "fd67281425a95a1c83c97e144fb3d5a1",
"assets/AssetManifest.json": "bdf7248e3b4e9e21aea652c3131ed055",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/images/1.png": "380ad884eeb7040886ad236672595f0b",
"assets/images/10.png": "874c00f5463ecd140fed4086b363b0f7",
"assets/images/11.png": "d7e3508bc0da11da478e320c01c6051e",
"assets/images/12.png": "d4a369ea775f68afd775a81f11937c06",
"assets/images/13.png": "96731d0ecd86dcfa0bf5aaad2cf4856f",
"assets/images/14.png": "cf712947437082589b24da99c6173d2a",
"assets/images/15.png": "3dc6cc12c2ebc34e5841423d3eb019be",
"assets/images/16.png": "647e0703bc9f8557245f81c6e9cc77d6",
"assets/images/17.png": "8ff5f8a0c17d5673357719d211a51e02",
"assets/images/18.png": "4e21ac31eba845fe9597a435cd891b0b",
"assets/images/19.png": "ff2cf7987905d3fdef31b19c53bc887a",
"assets/images/2.png": "c021cf5649d8cf5171419785ee6f4296",
"assets/images/20.png": "721b2dfd03d62ddffdeb5a61343cf1bb",
"assets/images/21.png": "a109c173fcea47e81c875b0c0c7422c8",
"assets/images/22.png": "336e22b8a17f4728aba2a3e88f574a62",
"assets/images/23.png": "38a3decdbc6886099dca2369e5652da7",
"assets/images/24.png": "ed65f3173f0a1e8a3a83003eea91267f",
"assets/images/25.png": "0b6e0ece252958afa0ba704a37864df2",
"assets/images/26.png": "88bb94a8438f4af8a28445c4497248f8",
"assets/images/27.png": "79a1d5eddb5017d7a8aa822803d42dd4",
"assets/images/28.png": "02cd1031ba05fe7f62b8d93e4d4247ae",
"assets/images/3.png": "ff15db3f2d8b49fddd2daabd3ffbf019",
"assets/images/4.png": "285fa23185bb9a05beb6bc9db937bdb6",
"assets/images/5.png": "19c026533e0eef6710a258e4d1c824bb",
"assets/images/6.png": "2bb3f73ec213a6b3b1aaf58fcf312994",
"assets/images/7.png": "bb870ac78359ca5b0e9da3276a6367b8",
"assets/images/8.png": "c72829f19b96fc1d82418a3fe59087ba",
"assets/images/9.png": "63ae9d16ce289abda426c388c68a40f1",
"assets/images/amazingmeeting.png": "6b7064a3bce698ff9bfc1888e1b671b9",
"assets/images/anna.png": "c2df44fd0ad7e62f6460054743d5e462",
"assets/images/autohatter.jpg": "22f674d68805b4870e1b2e27aafbc5e2",
"assets/images/autohatter2.jpg": "b630017c119690dce6b2a60404ba3487",
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
"assets/images/extrahatter.jpg": "2201399304b8213f9087adb9e997a3bc",
"assets/images/f1.png": "fb2974226c1cd986aed89ba8610f6f92",
"assets/images/f10.png": "1f73e8f3bfb49d2854aa44da6df26229",
"assets/images/f11.png": "00a3b3fd262ec3746a17a82b40598f22",
"assets/images/f12.png": "bcd50c7ae59401c05ef50c176c14afe7",
"assets/images/f13.png": "bae8f2dd9b4f11a354f1dc7ae38716da",
"assets/images/f14.png": "09f4a5617a51549b6a464ec7e5562770",
"assets/images/f15.png": "924ab232ade68bbf80b999e9aec4d2d1",
"assets/images/f16.png": "1e43d171663f9af2390d32e30f82f529",
"assets/images/f17.png": "fdd47d30c624e1a4d4ba8a1f8900e531",
"assets/images/f18.png": "2d3d5088f382f599137b6689c9702502",
"assets/images/f19.png": "f9918587abbd19dec90f0c6d5417d319",
"assets/images/f2.png": "fbc783a11c5583b82f53fbc6577c4a34",
"assets/images/f20.png": "1cdab2b912959d8eda51a4c85d70b66d",
"assets/images/f21.png": "a5203ef4091e062a28df957eb0513c6b",
"assets/images/f22.png": "25402e34490bf042fb3ade8a1519f35b",
"assets/images/f23.png": "c26b26c5f53506effcddc2eeb9b0bfe1",
"assets/images/f24.png": "9a49c527dd1ac66aae962078d1919627",
"assets/images/f25.png": "a0156f5547f537912a09742a52217827",
"assets/images/f26.png": "0d9894f57fe83b800d015e6b7244214d",
"assets/images/f27.png": "6151582466e8c42552d4bdac5b4a4e32",
"assets/images/f28.png": "e40e8e25783a4a142ffbab973d1218b3",
"assets/images/f3.png": "6f3bce48b728bc9b0d4914aead40552d",
"assets/images/f4.png": "6058a9f79ac9f92fbefc3e77d1b8d276",
"assets/images/f5.png": "5b6b9bf58d946552a814d524df70b38b",
"assets/images/f6.png": "16b1a26babea8bbcf2f9774ffe6ee949",
"assets/images/f7.png": "193fed4716e2b6706be8adc553676e34",
"assets/images/f8.png": "d40ed317f267938e0b53eace60f17c3d",
"assets/images/f9.png": "b410139e691f3babf5f7cd6b1a93ce0c",
"assets/images/facesitting.png": "ff87caafb2cfdf39c45178afffa3bdfd",
"assets/images/foreplay.jpg": "17744e7125cda098b736aafa57d7a629",
"assets/images/furdohatter.jpg": "815c2291768c3b4701101aaaeecb3b3e",
"assets/images/furdohatter2.jpg": "faf6531398b531004e4d085d5cd24bb3",
"assets/images/ghetto.png": "94df2a9321ed1181de191546f0729f81",
"assets/images/gimlet.png": "a55fda8e7bbc7b01dc2784087f5898ac",
"assets/images/goddess.png": "20ee2ebd25ecb7edbcf510ae6c415bac",
"assets/images/gorge.png": "ad7c0282b93b8f288af2a110105898e5",
"assets/images/grasshopper.png": "5a5b0b0d136c5ca051960d05f521f86f",
"assets/images/harp.png": "c322e94479f4f1cf97f09379a8a29ea3",
"assets/images/hatter.jpg": "75b0ca221458f575e0c4d96647d056dc",
"assets/images/hatter2.png": "5311128db7c92f4167669d64c2817c9d",
"assets/images/hatter3.jpg": "7bc4d09cc80370d6e35919a29804271f",
"assets/images/hatter4.png": "067580657e01d6e8f5d99c262e87c6e2",
"assets/images/hood.png": "cf428116eca4f5f4fe2d764ddf788b84",
"assets/images/horizon.png": "41d594cfc6e372954008282419ad2e03",
"assets/images/hunger.png": "86599dd68d9c40ee119927c525cc2aa3",
"assets/images/inventive69.png": "b249462f15c3564a636a0c43b17fca12",
"assets/images/jamaicancocktail.png": "8d79f7238d7bb7f6bd641abf69db3387",
"assets/images/k1.png": "c8f2501b6f9055ea135d59f79c8a99b2",
"assets/images/k10.png": "f3aa3a40bc96cc6a810c449a073b2d00",
"assets/images/k11.png": "f32b1702ae4382f18dd38b7daa59f74d",
"assets/images/k12.png": "3926d500c7b05f3e5cb81584d6219c14",
"assets/images/k13.png": "e5cff0263a84d2c018b44eaeed0b3754",
"assets/images/k14.png": "7f06f0182b4e3050a357ad7fabf45441",
"assets/images/k15.png": "a8ec7077d8a86ea55ba961dc0ae819b6",
"assets/images/k16.png": "6f873e4f7ecddf55e065a1105da2c69d",
"assets/images/k17.png": "ff6f689dfd913319ed425f25b5c4f839",
"assets/images/k18.png": "3497ae4e9b20b502d67f2e64f640985b",
"assets/images/k19.png": "ec3f975032a44eb17b80dff96fd04d2a",
"assets/images/k2.png": "a3b96b65987132186ed5c5018a3f96b8",
"assets/images/k20.png": "b66b0c97b3946b97ab7071471ff87bf2",
"assets/images/k21.png": "2556e01942040038e51a5929df580a76",
"assets/images/k22.png": "a46b267c74baa60093cc37fbf11397e6",
"assets/images/k23.png": "8dece444573e61573246012f1be6a7e1",
"assets/images/k24.png": "7159d36dba4f424ce1e28d9788b73e66",
"assets/images/k25.png": "eb59549744491138ebe8fb3570db9090",
"assets/images/k3.png": "65ac32ade5053f953aacf49151e160d5",
"assets/images/k4.png": "5aa4bf81ad16aeb7c6acacdd7e3d9b5b",
"assets/images/k5.png": "c48c1bf57e8ce280153cff30b239a767",
"assets/images/k6.png": "50be7b7e3f673473b6a5ab8cddd23a51",
"assets/images/k7.png": "d0d7a908155641e316c5ad2f94a6ee2f",
"assets/images/k8.png": "781c1b816484883ecb74aa8fa5ed2aa7",
"assets/images/k9.png": "2e025e815953065a2ac7981c0082f71f",
"assets/images/knight.png": "5122e4365c3a35526970f55f359da457",
"assets/images/koyhahatter.jpg": "c62306603cec915816d2a298bb5963d8",
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
"assets/images/n1.png": "5507d5370b1b8b9cdd4e0bd6c74f6fae",
"assets/images/n10.png": "94df2a9321ed1181de191546f0729f81",
"assets/images/n11.png": "5cb279a88365f9121ac0abf8214a3400",
"assets/images/n12.png": "8bdd025d95765bd09be1eb30d222e37f",
"assets/images/n13.png": "cc6dc5acfc2ad5de46791e2478283d4c",
"assets/images/n14.png": "057c794694f8b79867c3f42da9c9fc65",
"assets/images/n15.png": "72e9843423ddcf5c385d4fc0c6abd8b3",
"assets/images/n16.png": "c322e94479f4f1cf97f09379a8a29ea3",
"assets/images/n17.png": "c204f07214b0b6a279c163a993b91c82",
"assets/images/n18.png": "218342f602a491a20f3e07092cd8e140",
"assets/images/n19.png": "4d2faf6ab9e2843f651ac520d4ae1b66",
"assets/images/n2.png": "a55fda8e7bbc7b01dc2784087f5898ac",
"assets/images/n20.png": "fc3be15bafb870e6747253a986477ffd",
"assets/images/n21.png": "0ea7da6313172cc60df2b3819412eac5",
"assets/images/n22.png": "3dd7c7b9819a7a62e3db11a41492b658",
"assets/images/n23.png": "b9d558b288cf5517d8f37144634448b0",
"assets/images/n24.png": "3367ed8076d942a8ddaa496f5c2f58df",
"assets/images/n25.png": "62563f9343818ee2bdbd4c09ffe337af",
"assets/images/n26.png": "92c6f79088881c11ecf6081b253c561b",
"assets/images/n27.png": "b249462f15c3564a636a0c43b17fca12",
"assets/images/n28.png": "d746eb0d224e2cac004b40d8b468ff57",
"assets/images/n29.png": "26d3572697e2360ba6d13ce6a3396ffc",
"assets/images/n3.png": "5dd5b1a7bac6556a427b3a65de8efde9",
"assets/images/n30.png": "f82c7918143860518661bccd1bb753c0",
"assets/images/n31.png": "4bad453e1004fb6838786a02983d9493",
"assets/images/n32.png": "2646e62cd9f1baabdb3ce21c3f5ad825",
"assets/images/n33.png": "2b7e03fb583fb4237830978e432607ce",
"assets/images/n34.png": "7ed85dec091e8d1a041783b105169af9",
"assets/images/n35.png": "cb3907661e97c409a82095d334aa5dab",
"assets/images/n36.png": "1bfb9a5e053c30ed417334b5e896859e",
"assets/images/n37.png": "86b1274154e4a84855a93a1c1a4fcbb6",
"assets/images/n38.png": "6b4ef165fb5adb26d0848cbcfa3776fa",
"assets/images/n39.png": "5a5b0b0d136c5ca051960d05f521f86f",
"assets/images/n4.png": "8564a95aa593b61632233e29f0390f21",
"assets/images/n40.png": "3eb1fd717c5cf4b2e3340606e4df2034",
"assets/images/n41.png": "fe2e70e1c30bb0a4ae18bffe16a438d0",
"assets/images/n42.png": "e6cb50cb2478ba2782b3219aec7431e7",
"assets/images/n43.png": "277e0147a5d86eeb42b3c36ae7606992",
"assets/images/n5.png": "f8999f4a9ce7f76ff29e33aeccf49e02",
"assets/images/n6.png": "f471cd2c7244bfe7a096189fe0995aa3",
"assets/images/n7.png": "c524861f6108f8c20399a8d1542da901",
"assets/images/n8.png": "f6c0b1ef006e0348920501740ad2f592",
"assets/images/n9.png": "d987341b3d21b2457bf5024ef7ba82a9",
"assets/images/nappalihatter.jpg": "fbea2c1921b9162b1aa17f26b2ec3bd6",
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
"assets/images/sz1.png": "616757d3f90b1df4cc276210e73517e7",
"assets/images/sz10.png": "c768141561923f5c7bcf31c1bee02cca",
"assets/images/sz11.png": "b300ead1c58326f968af0b3b649bfa6f",
"assets/images/sz12.png": "5122e4365c3a35526970f55f359da457",
"assets/images/sz13.png": "86ac3c07967199bca19dc546e7603779",
"assets/images/sz14.png": "16034f11fc54a4bd000040e2b7087661",
"assets/images/sz15.png": "8c4ecdf97c453f2caefa5111a5acdb91",
"assets/images/sz16.png": "7a0d7e08755fc8b72b315e77e8ca2ee2",
"assets/images/sz17.png": "e05ff8b5850f009b6c0f5e2eab3ec7ee",
"assets/images/sz18.png": "ebb32ed9c89e8dcaffe78951da22bca3",
"assets/images/sz19.png": "ff87caafb2cfdf39c45178afffa3bdfd",
"assets/images/sz2.png": "4754689ba96552db1837e93266ffa496",
"assets/images/sz20.png": "b5c69ab9c9d0227acd67ed909f7e6589",
"assets/images/sz21.png": "40c5164cea73b810657d064d692afde5",
"assets/images/sz22.png": "86599dd68d9c40ee119927c525cc2aa3",
"assets/images/sz23.png": "926090d4ef630acb835a552e8ec424c2",
"assets/images/sz24.png": "6b7064a3bce698ff9bfc1888e1b671b9",
"assets/images/sz25.png": "d3c6c68301b5a95bd9653868d57b02df",
"assets/images/sz26.png": "3fc23667bb4d8f00ce2c51e0e3cb9e49",
"assets/images/sz27.png": "6d3bc7d36cdac096c45cab4c3c99b239",
"assets/images/sz28.png": "ee741eec9e2384812531e2a6b7ab6b94",
"assets/images/sz29.png": "90d1b68069175ca3bf91166eccfacb92",
"assets/images/sz3.png": "b799766fb59278d7f08082a2b4561ba0",
"assets/images/sz30.png": "271a613df85b86d1dbb39404fe9bf171",
"assets/images/sz31.png": "149f0ec90897c8aa22d6d5ffd5005d67",
"assets/images/sz32.png": "fa38fb1195ec1071810cf63775daf70d",
"assets/images/sz33.png": "847c4c17a5ee838f63e6beed6816efb2",
"assets/images/sz34.png": "dd33c37fd32d385c81d72e4b77ad0235",
"assets/images/sz35.png": "f7b75a8c92eb55fc73f45c56612788b2",
"assets/images/sz36.png": "a2474ceb1f30f9f86e559d678e957e32",
"assets/images/sz4.png": "c2df44fd0ad7e62f6460054743d5e462",
"assets/images/sz5.png": "0967f41573c4522fd3ac0e61bd2aecb7",
"assets/images/sz6.png": "ce866b0eb5a61e2b1080d5a88357bbb0",
"assets/images/sz7.png": "050f65fcc9bc7c1ab52de33b0f7e2348",
"assets/images/sz8.png": "7024928d10f87bcb2ef490e9f26da14d",
"assets/images/sz9.png": "3a9601a4b77e6b5a6104822cec2db04d",
"assets/images/szajhatter.jpg": "3dda31572116d10c100141aaabec3920",
"assets/images/szobahatter.jpg": "eb24a7761649a2263e2fda0ffdc2633c",
"assets/images/tiramisu.png": "f4b52af366c584ad2f280caaf7ae2547",
"assets/images/tulip.png": "7ed85dec091e8d1a041783b105169af9",
"assets/images/valedictorian.png": "914ef8bc950ddfad80a691f0ae5b984c",
"assets/images/virgo.png": "6f3bce48b728bc9b0d4914aead40552d",
"assets/images/wedge.png": "4bad453e1004fb6838786a02983d9493",
"assets/images/wrestling.png": "616757d3f90b1df4cc276210e73517e7",
"assets/images/zeus.png": "b410139e691f3babf5f7cd6b1a93ce0c",
"assets/images/zodiac.png": "4602ca3f655ad4b9637b7b0ac848f2ac",
"assets/NOTICES": "392d20f9ba863619ed5214eccbae9de8",
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
"index.html": "1ac062e30eb59564d3a305d0036529f1",
"/": "1ac062e30eb59564d3a305d0036529f1",
"main.dart.js": "515bce1172e10bb7b85c1cb7681c8492",
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
