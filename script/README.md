# 使用必知

- **将此脚本文件夹以软链接的方式引入至项目根目录下**
- 配置 package.json 相关脚本命令

```javascript
"buildComps": "node ./script/libsFileInfo.js", // 生成routeFile.js文件
"libBundler": "hui build --lib-bundler" // 生成libs相关内容
"libsSetting": "node ./script/libsSetting.js", // 将生成的libs目录存入根目录临时目录下，同时将public/libs目录下的文件设置为0k(不移除是为了manifest.json文件映射使用)
"changeZip": "node ./script/changeZip.js", // 对生成的zip文件进行libs替换并重新压缩
```

> 该文件夹下面内容为 hui2.0(APP 模式)下 libs 相关内容生成以及打包优化相关操作

- libsFileInfo.js

  > 运行此脚本将会读取 src/router/asyncRouter Component.js 文件，并在当前 script 目录下生成 routeFile.js 文件，routeFile.js 文件内容为 hui.config.js 配置中 libs 相关内容

- libsSetting.js

  > 运行此脚本将会读取 dist/libs 目录，将其移动至/tmpLibs临时目录中，同时往/public/libs目录复制且文件大小设置为0（不移除是为了manifest.json文件映射使用）

- changeZip.js

  > 解压zip文件至zipTmp临时文件中，将 tmpLibs 内容拷贝至 zipTmp 目录下特定文件夹中，并删除根目录下 tmpLibs 目录，最后进行zip压缩，同时移除所有临时目录（直接往zip文件复制内容，会导致在linux解析失败，包损坏等问题）

  > 该文件运行需 adm-zip 依赖包，如有使用，请先进行依赖下载

  ```javascript
  npm i adm-zip --save-dev
  ```

PS：如 hui.config.js 中的 libs 需要自定义特定文件，则无需 libsFileInfo.js 文件
如 hui.config.js 中 libs 是以生成的 routeFile.js 文件为基础，则请进行文件是否存在判断

```javascript
let routesFile = {}; // 对应hui.config.js配置项中libs配置
let externals = {}; // 对应hui.config.js配置项中externals配置,该配置项用于设置哪些模块可以不被打包
if (process.env.NODE_LIBS) {
  externals = {
    "h_ui/dist/h_ui.min.js": "hComponent",
  };
  const target = path.join(__dirname, "./script/routeFile.js");
  if (fs.existsSync(target)) {
    routesFile = require("./script/routeFile.js");
  }
}
```

可参考 iknow 改造方案   [hui2.0（APP模式）项目优化（针对libs过大，导致内存溢出）](https://iknow.hs.net/console/teamManage/knowledgeBase/214/docManage/library/821/document/54197)

