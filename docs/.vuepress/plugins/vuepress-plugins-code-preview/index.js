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
            const infoStr = tokens[ids].info
            const infoList = infoStr.split(' ')
            const copyTips = options.copyTips || '复制成功'
            const tipsTimes = options.tipsTimes || 1000
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
                  copytips="${copyTips}"
                  isOnlyShowComp="${isOnlyComp}"
                  tipstimes="${tipsTimes}"
                  code="${encodeURIComponent(code)}"
                >${newCode}</CodeView>`
              }
              return `<div>
                <CodeView
                  title="${title}"
                  component="${compName}"
                  copytips="${copyTips}"
                  isOnlyShowComp="${isOnlyComp}"
                  tipstimes="${tipsTimes}"
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
