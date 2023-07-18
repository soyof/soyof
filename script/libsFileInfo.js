const fs = require('fs');
const path = require('path');

const fileInfo = path.join(__dirname, '../src/router/asyncRouterComponent.js');

let info = fs.readFileSync(fileInfo, 'utf-8');
const { colorize } = require('./common');
const createFile = () => {
  try {
    // 移除对应注释
    info = info.replace(/\/\*(\s|.)*?\*\//g, '');
    // 移除import,箭头函数相关内容
    info = info.replace(/(\(\)|\=>|import)/g, '');
    // 将export default替换为module.exports =
    info = info.replace('export default', 'module.exports = ');
    fs.writeFileSync('./script/routeFile.js', info, {}, 'utf-8');

    console.log(`\n####################-SUCCESS-####################\n\n -------------${colorize('生成routeFile文件成功', 'blue')}-------------\n\n#################################################\n`);
  } catch (error) {
    console.log(`\n##################-ERROR-##################\n\n --write-file-error--：${colorize('src/router/asyncRouterComponent.js内容不符合规范，请检查！！', 'bold')} \n
    ${colorize(error, 'red')}
    \n\n#############################################\n`);
  }
};

createFile();

