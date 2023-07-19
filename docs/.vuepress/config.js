// const vdoing = require('./plugins/vuepress-theme-vdoing')
const { formatDate } = require('./utils/utils')
const { pwd } = require('./global/global')
module.exports = {
  title: 'Soyo.F BLOG',
  description: '这算是描述吧！！！',
  base: '/soyof/', // 使用相对路径，读取相对路径下的静态文件
  theme: require.resolve('./plugins/vuepress-theme-vdoing'),
  head: [
    ['link', { rel: 'icon', href: '/soyof/favicon.ico' }],
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?aff4517848b734ae9374d9c99ecbbc51";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `
    ]
  ],
  themeConfig: {
    isShowReadTime: true,
    footer: {
      createYear: 2023,
      copyrightInfo: 'Soyo.F | ISC Licensed'
    },
    lastUpdated: '上次更新',
    logo: '/images/dog.png',
    nav: [
      { text: '插件', items: [
        { text: 'tinymce-vue-h', link: '/pages/865b99/' },
        { text: 'code-preview', link: '/pages/c5a9c9/' }
      ]
      },
      { text: 'Github', link: 'https://github.com/dashboard' }
    ],
    sidebar: 'structuring'
  },
  markdown: {
    lineNumbers: true,
    anchor: {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: '#'
    },
    // 目录支持
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'],
    toc: {
      includeLevel: [1, 2, 3, 4, 5]
    }
  },
  plugins: [
    ['@vuepress/last-updated', {
      transformer: (timestamp) => {
        return formatDate(timestamp, 'yyyy-MM-dd hh:mm:ss')
      }
    }],
    ['code-previews', { copyTips: 'copied' }],
    [
      'reading-progress',
      {
        fixed: 'left'
      }
    ],
    [
      '@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      }
    ],
    // 配置插件vuepress-plugin-thirdparty-search, 默认主题的搜索框集成第三方搜索引擎
    [
      'thirdparty-search',
      {
        'thirdparty': [
          // 可选，默认 []
          {
            title: '在谷歌中搜索',
            frontUrl: 'https://www.google.com.hk/search?q='
          },
          {
            title: '在百度中搜索', // 在搜索结果显示的文字
            frontUrl: 'https://www.baidu.com/s?wd=', // 搜索链接的前面部分
            behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
          }
        ]
      }
    ],
    ['vuepress-plugin-code-copy', {
      align: '1px',
      successText: '复制成功!'
    }
    ],
    ['element-ui'],
    [
      'ribbon',
      {
        size: 90, // width of the ribbon, default: 90
        opacity: 0.8, // opacity of the ribbon, default: 0.3
        zIndex: -1 // z-index property of the background, default: -1
      }
    ],
    [
      'cursor-effects',
      {
        size: 2, // size of the particle, default: 2
        shape: 'star', // ['star' | 'circle']shape of the particle, default: 'star'
        zIndex: 999999999 // z-index property of the canvas, default: 999999999
      }
    ],
    [
      'dynamic-title',
      {
        showIcon: '/soyof/favicon.ico',
        showText: '(/≧▽≦/)咦！又好了！',
        hideIcon: '/soyof/images/funny265.ico',
        hideText: '(●—●)喔哟，崩溃啦！',
        recoverTime: 2000
      }
    ],
    ['go-top'],
    [
      'vuepress-plugin-live2d',
      {
        modelName: '', // 模型名称，可传入一个字符串或者数组
        mobileShow: false, // 是否在移动设备上显示
        position: 'left' // 显示在左下角还是右下角
      }
    ],
    // 评论
    [
      '@vssue/vuepress-plugin-vssue',
      {
        locale: 'zh',
        platform: 'github-v4',
        owner: 'soyof',
        repo: 'soyof',
        clientId: '53478b88cf84092bc037',
        clientSecret: 'c2bf8eb2f5e8e572bca2949026c34ea1e2fbc703'
      }
    ],
    [
      'vuepress-plugin-image-viewer',
      {
        selector: '.theme-vdoing-content' // 你想要的插件起作用的页面的class或id
      }
    ],
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine',
        options: {
          el: '#valine-vuepress-comment',
          appId: 'ErrD2Ef6tawtDoG7CYDLGZT4-MdYXbMMI',
          appKey: 'yDTo3JsGFGAWKgN3nslMRSXs',
          pageSize: 10,
          placeholder: '有什么建议请告诉我...',
          meta: ['nick', 'mail', 'link'],
          lang: 'zh-CN',
          visitor: true,
          highlight: true,
          avatarForce: false,
          recordIP: true,
          serverURLs: 'https://errd2ef6.api.lncldglobal.com',
          requiredFields: [],
          enableQQ: true,
          avatar: 'monsterid',
          emojiCDN: 'https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/',
          emojiMaps: null
        }
      }
    ]
  ]
}
