const path = require('path')
const fs = require('fs')
const { colorize } = require('./common')

const { fileCopyFn } = require('./common')
const sourcePath = path.join(__dirname, '../docs/.vuepress/dist')
const targetPath = path.join(__dirname, '../dist')
const isExistDir = fs.existsSync(sourcePath)
if (isExistDir) {
  fileCopyFn(sourcePath, targetPath)
} else {
  console.log('ERROR：' + colorize(`当前路径下不存在dist目录 - ${sourcePath}`, 'red'))
}
