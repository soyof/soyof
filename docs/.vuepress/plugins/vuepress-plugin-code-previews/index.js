const path = require('path')
const { getComContent, highlightCode, resolveCompName } = require('./utils')
module.exports = (options, ctx) => {
  return {
    name: 'vuepress-plugin-code-previews',
    enhanceAppFiles: [
      path.resolve(__dirname, './enhanceAppFile.js')
    ],
    plugins: [
      [
        'container',
        {
          type: 'code-preview',
          render(tokens, ids) {
            const copyTips = options.copyTips || undefined
            const tipsTimes = options.tipsTimes || 1000
            const infoStr = tokens[ids].info
            const infoList = infoStr.split(' ')
            const isOnlyCode = infoStr.includes('--isOnlyShowCode')
            const isOnlyComp = infoStr.includes('--isOnlyShowComp')
            const dirTitle = infoList.find(item => item.includes('--title:')) || ''
            const dirComPath = infoList.find(item => item.includes('.vue')) || ''
            const comPath = dirComPath.trim()
            const title = dirTitle.replace(/--title:/, '').trim()
            const code = comPath ? getComContent(ctx.sourceDir, comPath) : ''
            const newCode = highlightCode(code)
            const compName = resolveCompName(comPath)
            if (tokens[ids].nesting === 1) {
              if (isOnlyCode) {
                return `<div>
                <CodeView
                  title="${title}"
                  copyTips="${copyTips}"
                  isOnlyShowComp="${isOnlyComp}"
                  tipsTimes="${tipsTimes}"
                  code="${encodeURIComponent(code)}"
                >${newCode}</CodeView>`
              }
              return `<div>
                <CodeView
                  title="${title}"
                  component="${compName}"
                  copyTips="${copyTips}"
                  isOnlyShowComp="${isOnlyComp}"
                  tipsTimes="${tipsTimes}"
                  code="${encodeURIComponent(code)}"
                >${newCode}</CodeView>`
            }
            return `</div>`
          }
        }
      ]
    ]
  }
}
