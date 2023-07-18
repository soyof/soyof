const fs = require('fs');
const path = require('path');
const { colorize, fileCopyFn, removeFileOrFolder } = require('./common');

const routeFilePath = path.join(__dirname, './routeFile.js');
const originLibsPath = path.join(__dirname, '../dist/libs');
const targetPath = path.join(__dirname, '../public/libs');
const libsTmpPath = path.join(__dirname, '../libsTmp');

fs.existsSync(targetPath) && removeFileOrFolder(targetPath, false);

if (!fs.existsSync(originLibsPath)) {
  console.log(`\n********* ${colorize(`文件夹不存在或无需进行此操作，文件夹路径：${originLibsPath}`, 'red')} *********`);
  console.log(`\n--------- ${colorize(`PS：请先运行hui build --lib-bundler命令，同时确保配置文件中libs配置项已进行相关配置`, 'yellow')} ---------\n\n`);
  return false;
}

fileCopyFn(originLibsPath, libsTmpPath);

fileCopyFn(originLibsPath, targetPath, (op, tp) => {
  // 修改public目录下libs文件夹所有文件大小为0，提升打包效率，不影响manifest.json映射生成
  if (fs.statSync(tp).isFile()) {
    const fd = fs.openSync(tp, 'r+');
    fs.ftruncateSync(fd, 0);
    fs.closeSync(fd);
  }
});

removeFileOrFolder(originLibsPath, false);
console.log(`\n--- ${colorize(`已移除 ${originLibsPath} `, 'underline')} ---\n\n`);

if (fs.existsSync(routeFilePath)) { // 移除routeFile.js文件
  removeFileOrFolder(routeFilePath, false);
  console.log(`\n--- ${colorize(`已移除 ${routeFilePath} `, 'underline')} ---\n\n`);
}

