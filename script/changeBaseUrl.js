const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const distPath = path.join(__dirname, '../dist')

const handleBaseUrl = (direct) => {
  if (fs.statSync(direct).isFile()) {
    if (path.extname(direct) === '.html' || path.extname(direct) === '.js' || path.extname(direct) === '.css') {
      const fileContent = fs.readFileSync(direct, 'utf-8')
      // 替换并将内容写回文件
      const newFileContent = fileContent.replace(/\/soyof\//g, '/')
      fs.writeFileSync(direct, newFileContent, 'utf-8')
      console.log(chalk.blue(direct), chalk.yellow(newFileContent.includes('/soyof/')))
    }
    return true
  }
  const fileList = fs.readdirSync(direct)
  fileList.forEach(filePath => {
    handleBaseUrl(path.join(direct, filePath))
  })
}

handleBaseUrl(distPath)
