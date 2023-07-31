/* eslint-disable */
const fs = require('fs');
const path = require('path');
// const AdmZip = require("adm-zip");

const colors = {
  bold: '\x1B[1m', // 粗体
  bright: '\x1B[1m', // 亮色
  grey: '\x1B[2m', // 灰色
  italic: '\x1B[3m', // 斜体
  underline: '\x1B[4m', // 下划线
  reverse: '\x1B[7m', // 反向
  hidden: '\x1B[8m', // 隐藏
  black: '\x1B[30m', // 黑色
  red: '\x1B[31m', // 红色
  green: '\x1B[32m', // 绿色
  yellow: '\x1B[33m', // 黄色
  blue: '\x1B[34m', // 蓝色
  magenta: '\x1B[35m', // 品红
  cyan: '\x1B[36m', // 青色
  white: '\x1B[37m', // 白色
  blackBG: '\x1B[40m', // 背景色为黑色
  redBG: '\x1B[41m', // 背景色为红色
  greenBG: '\x1B[42m', // 背景色为绿色
  yellowBG: '\x1B[43m', // 背景色为黄色
  blueBG: '\x1B[44m', // 背景色为蓝色
  magentaBG: '\x1B[45m', // 背景色为品红
  cyanBG: '\x1B[46m', // 背景色为青色
  whiteBG: '\x1B[47m' // 背景色为白色
};

/**
 * @author: Mr.H
 * @description: 设置控制台字体颜色
 * @param str (String) 需要改变颜色的字符串
 * @param color (String) 修改的颜色
 * @return string (String) 修改后的字符串
 * @Date: 2023-06-14 14:08:22
 */
const colorize = (str, color) => {
  return colors[color] + str + '\x1B[0m';
};

/**
 * @author: Mr.H
 * @description: 删除文件或文件夹
 * @param fofPath (File | Folder) 需要删除的文件/文件夹路径
 * @Date: 2023-06-14 14:10:49
 */
const removeFileOrFolder = (fofPath, isTips = true) => {
  // 判断文件夹是否存在
  if (fs.existsSync(fofPath)) {
    // isTips && console.log(`\n-------------------------- ${colorize('START: DELETE FILE OR FOLDER', 'underline')} ---------------------------\n`);
    if (fs.statSync(fofPath).isDirectory()) {
      fs.readdirSync(fofPath).forEach((file) => { // 读取文件夹下的文件目录，以数组形式输出
        const curPath = path.join(fofPath, file); // 拼接路径
        if (fs.statSync(curPath).isDirectory()) { // 判断是不是文件夹，如果是，继续递归
          removeFileOrFolder(curPath, isTips);
        } else {
          fs.unlinkSync(curPath); // 删除文件或文件夹
          isTips && console.log(`${colorize('已删除：', 'bold')}${colorize(curPath, 'cyan')}`);
        }
      });
      fs.rmdirSync(fofPath); // 仅可用于删除空目录
      isTips && console.log(`${colorize('已删除：', 'bold')}${colorize(fofPath, 'blue')}`);
    } else {
      fs.unlinkSync(fofPath);
      isTips && console.log(`${colorize('已删除：', 'bold')}${colorize(fofPath, 'cyan')}`);
    }
    // isTips && console.log(`\n--------------------------- ${colorize('END: DELETE FILE OR FOLDER', 'underline')} ---------------------------\n\n`);
  } else {
    console.log(`${colorize(`当前在--`, 'red')}${colorize(`${fofPath}`, 'yellow')}`);
  }
};

/**
 * @author: Mr.H
 * @description: 复制文件夹或文件至目标目录
 * @param origin (File | Folder) 源文件夹或文件
 * @param target (Folder) 目标文件夹
 * @param cb 回调函数
 * @Date: 2022-09-24 01:10:20
 */
const fileCopyFn = (origin, target, cb) => {
  try {
    if (fs.statSync(origin).isDirectory()) {
      if (!fs.existsSync(target)) {
        fs.mkdirSync(target);
      }
      fs.readdirSync(origin).forEach(originName => {
        const originFilePath = path.resolve(origin, originName);
        const targetFilePath = path.resolve(target, originName);
        fileCopyFn(originFilePath, targetFilePath, cb);
      });
    } else {
      fs.copyFileSync(origin, target);
    }
    cb && cb(origin, target)
    const copySuccessStr = colorize(`${target}`, 'green')
    console.log(`COPY SUCCESS TO: ${copySuccessStr}`);
  } catch (error) {
    console.log(`\n ERROR-INFO: ${colorize(`${error}`, 'red')} \n`);
  }
};


const unZip = (zp, td, zn) => {
  // const zipObj = new AdmZip(zp, {})
  // try {
  //   zipObj.extractAllTo(td, true, true, '')
  //   console.log(`\n\n${colorize(`${zn}`, 'green')}文件解压完成，请前往 ${colorize(`${td}`, 'blue')} 目录下查看\n\n`)
  // } catch (err) {
  //   console.log(`\n\n${zn}文件解压失败：${colorize(`${err}`, 'red')}\n\n`)
  // }
}

const zip = (td, zn, sMsg, cb) => {
  // sMsg = sMsg || colorize(`${td}压缩完成，压缩文件为${zn}`, 'green')
  // const zipObj = new AdmZip()
  // console.log(`------------------ ${colorize(`START COMPRESSION`, 'blue')} ------------------`)
  // let num = 0
  // zipObj.addLocalFolder(td, '', (name) => {
  //   num++
  //   console.log(`${num} 压缩中：${colorize(`${name}`, 'blue')}`)
  //   return true
  // })
  // zipObj.writeZip(zn, (err) => {
  //   if (err) {
  //     console.log(`${colorize(err, 'red')}`)
  //   } else {
  //     console.log(`------------------ ${colorize(`COMPRESSION COMPLETED`, 'blue')} ------------------`)
  //     cb && cb(td, false)
  //     console.log(sMsg)
  //   }
  // });
}


module.exports = {
  colorize,
  removeFileOrFolder,
  fileCopyFn,
  unZip,
  zip
};
