const path = require('path')
const fs = require('fs')

const { fileCopyFn } = require('./common')
const sourcePath = path.join(__dirname, '../README.md')
const targetPath = path.join(__dirname, '../docs/.vuepress/dist')

console.log(sourcePath, targetPath)
const isExistDir = fs.existsSync(targetPath)
if (isExistDir) {
  const isDir = fs.statSync(targetPath).isDirectory()
  if (isDir) {
    // console.log(fs.accessSync(targetPath, '0755'))
    // fs.copyFileSync(sourcePath, targetPath)
    fs.chmodSync(sourcePath, fs.constants.W_OK)
    fs.chmodSync(targetPath, fs.constants.W_OK)
    fileCopyFn(sourcePath, targetPath)
  }
}
