// const vdoing = require('./plugins/vuepress-theme-vdoing')
const { formatDate } = require('./utils/utils')
const { readEachFileWords } = require('./utils/readFile')
const { soyofGithub } = require('./global/global')

module.exports = {
  title: 'Soyo.F BLOG',
  description: '这算是描述吧！！！',
  base: '/soyof/', // 使用相对路径，读取相对路径下的静态文件
  theme: require.resolve('./plugins/vuepress-theme-vdoing'),
  head: [
    ['link', { rel: 'icon', href: '/soyof/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/c/font_4164376_5gvlznz6hy6.css' }],
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
    category: true,
    footer: {
      createYear: 2023,
      copyrightInfo: 'Soyo.F'
    },
    lastUpdated: '上次更新',
    logo: '/images/dog.png',
    nav: [
      { text: '插件', items: [
        { text: 'tinymce-vue-h', link: '/pages/865b99/' },
        { text: 'code-preview', link: '/pages/c5a9c9/' }
      ]
      },
      { text: 'Github', link: soyofGithub }
    ],
    sidebar: 'structuring',
    author: {
      name: 'Soyo.F',
      link: soyofGithub
    },
    // 站点配置（首页 & 文章页）
    blogInfo: {
      blogCreate: '2023-07-15', // 博客创建时间
      indexView: true, // 开启首页的访问量和排名统计，默认 true（开启）
      pageView: true, // 开启文章页的浏览量统计，默认 true（开启）
      readingTime: true, // 开启文章页的预计阅读时间，条件：开启 eachFileWords，默认 true（开启）。可在 eachFileWords 的 readEachFileWords 的第二个和第三个参数自定义，默认 1 分钟 300 中文、160 英文
      eachFileWords: readEachFileWords([''], 300, 160), // 开启每个文章页的字数。readEachFileWords(['xx']) 关闭 xx 目录（可多个，可不传参数）下的文章页字数和阅读时长，后面两个参数分别是 1 分钟里能阅读的中文字数和英文字数。无默认值。readEachFileWords() 方法默认排除了 article 为 false 的文章
      mdFileCountType: 'archives', // 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。提示：readFileList() 获取 docs 下所有的 md 文档（除了 `.vuepress` 和 `@pages` 目录下的文档）
      totalWords: 'archives', // 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
      moutedEvent: '.tags-wrapper', // 首页的站点模块挂载在某个元素后面（支持多种选择器），指的是挂载在哪个兄弟元素的后面，默认是热门标签 '.tags-wrapper' 下面，提示：'.categories-wrapper' 会挂载在文章分类下面。'.blogger-wrapper' 会挂载在博客头像模块下面
      // 下面两个选项：第一次获取访问量失败后的迭代时间
      indexIteration: 2500, // 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      pageIteration: 2500 // 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      // 说明：成功获取一次访问量，访问量 + 1，所以第一次获取失败后，设置的每个隔段重新获取时间，将会影响访问量的次数。如 100 可能每次获取访问量 + 3
    }
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
    {
      name: 'custom-plugins',
      globalUIComponents: ['GlobalTip'] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    },
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
        visitor: true, // 阅读量统计
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
          emojiMaps: null,
          path: '<%- frontmatter.to.path %>'
        }
      }
    ]
  ]
}
