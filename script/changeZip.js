const configObj = require('../hui.config.js')
const { name } = require('../package.json')
const fs = require('fs')
const path = require('path')
const { colorize, removeFileOrFolder, unZip, zip, fileCopyFn } = require('./common')
const libsTmpPath = path.join(__dirname, '../libsTmp')
const zipName = configObj.see.packageName || configObj.see.appName || name
const zipDirPath = path.join(__dirname, `../${name}.zip`)
const zipTmpPath = path.join(__dirname, '../zipTmp')
const copyTargetPath = `${zipTmpPath}/${configObj.see.appName || name}/libs`
const publicLibsPath = path.join(__dirname, '../public/libs')
const distLibsPath = path.join(__dirname, '../dist/libs') // 运行npm run buildSee时生成的dist目录

if (!fs.existsSync(libsTmpPath)) {
  console.log(`\n********* ${colorize(`文件夹不存在或无需进行此操作，文件夹路径：${libsTmpPath}`, 'red')} *********\n`)
  console.log(`--------- PS：请先运行 ${colorize('hui build --lib-bundler', 'green')} 命令，同时确保配置文件中libs配置项已进行相关配置 ---------\n\n`)
  return false
}

fileCopyFn(libsTmpPath, distLibsPath) // 将libs移动至dist目录下  覆盖原有libs

if (!fs.existsSync(zipDirPath)) {
  console.log(`\n********* ${colorize(`ERROR: 文件不存在，文件路径：${zipDirPath}`, 'red')} *********\n`)
  console.log(`********* 请先运行 ${colorize(`hui build --filename-hashing  --see`, 'green')} 进行发布物生成 *********\n\n`)
  return false
}
if (fs.existsSync(publicLibsPath)) {
  removeFileOrFolder(publicLibsPath, false)
  console.log(`\n--- ${colorize(`已移除： ${publicLibsPath} `, 'underline')} ---\n`)
}

unZip(zipDirPath, zipTmpPath, `${zipName}.zip`)
removeFileOrFolder(zipDirPath, false)
console.log(`\n--- ${colorize(`已移除 ${zipDirPath} `, 'underline')} ---\n`)

removeFileOrFolder(copyTargetPath, false)
console.log(`\n--- ${colorize(`已移除 ${copyTargetPath} `, 'underline')} ---\n`)

fileCopyFn(libsTmpPath, copyTargetPath)

if (fs.existsSync(libsTmpPath)) {
  removeFileOrFolder(libsTmpPath, false) // 移除libs临时目录
  console.log(`\n--- ${colorize(`已移除 ${libsTmpPath} `, 'underline')} ---\n`)
}

if (!fs.existsSync(zipTmpPath)) { // 判断临时zip解压后的目录是否存在
  console.log(`\n\n********* ${colorize(`临时目录不存在，路径：${zipTmpPath}`, 'red')} *********\n`)
  console.log(`\n--------- PS：请重新运行命令 ${colorize(`npm run buildSee`, 'green')} ---------\n\n`)
  return false
}

const completedStr = `\n\n------------------********* RELEASE COMPLETED *********------------------\n\n ${colorize('发布物', 'green')} ${colorize(zipName + '.zip', 'yellow')} ${colorize('调整完成，您可以在 SEE 平台上传并部署应用！', 'green')} \n\n------------------*************************************------------------\n\n`

zip(zipTmpPath, `${zipName}.zip`, completedStr, removeFileOrFolder)

