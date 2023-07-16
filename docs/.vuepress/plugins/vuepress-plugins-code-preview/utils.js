const path = require('path')
const fs = require('fs')
const Prism = require('prismjs')
const getComContent = (souPath, tarPath) => {
  const comPath = path.resolve(souPath, '.vuepress/components')
  return fs.readFileSync(path.resolve(comPath, tarPath), 'utf-8')
}

const highlightCode = content => {
  const html = Prism.highlight(content, Prism.languages['markup'], 'markup')
  return `<pre v-pre class="language-vue"><code>${html}</code></pre>`
}

const resolveCompName = (filePath) => {
  const fileName = filePath ? path.basename(filePath) : ''
  return fileName.split('.')[0]
}

module.exports = {
  getComContent,
  highlightCode,
  resolveCompName
}
