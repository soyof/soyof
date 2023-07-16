const path = require('path')
const { getComContent, highlightCode, resolveCompName } = require('./utils')

module.exports = (options, ctx) => {
  return {
    name: 'vuepress-plugins-code-preview',
    enhanceAppFiles: [
      path.resolve(__dirname, 'enhanceAppFile.js')
    ],
    plugins: [
      [
        'container',
        {
          type: 'code-preview',
          render(tokens, ids) {
            const comPath = tokens[ids].info.replace('code-preview', '').trim()
            const code = comPath ? getComContent(ctx.sourceDir, comPath) : ''
            const newCode = highlightCode(code)
            const compName = resolveCompName(comPath)
            if (tokens[ids].nesting === 1) {
              return `<div>
                <CodeView component="${compName}" code="${encodeURIComponent(code)}">${newCode}</CodeView>`
            }
            return `</div>`
          }
        }
      ]
    ]
  }
}
