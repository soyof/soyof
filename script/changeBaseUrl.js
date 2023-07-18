const fs = require('fs')
const path = require('path')

const distPath = path.join(__dirname, '../dist')

const handleBaseUrl = (direct) => {
  console.log(direct)
  if (fs.statSync(direct).isFile()) {
    if (path.extname(direct) === '.html' || path.extname(direct) === '.js' || path.extname(direct) === '.css') {
      const fileContent = fs.readFileSync(direct, 'utf-8')
      // 替换文件中的文本
      const updatedContent = fileContent.replace(/\/soyof\//g, '/')
      // 将替换后的内容写回文件
      fs.writeFileSync(direct, updatedContent, 'utf-8')
    }
    return true
  }
  const fileList = fs.readdirSync(direct)
  fileList.forEach(filePath => {
    handleBaseUrl(path.join(direct, filePath))
  })
}

handleBaseUrl(distPath)
