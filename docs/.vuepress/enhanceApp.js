import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfonts/iconfont.css'
// 引入elementUI
Vue.use(ElementUI)

export default ({ Vue, router }) => {
  if (typeof window !== 'undefined') {
    window.AV = require('leancloud-storage')
    window.AV.init({
      appId: 'ErrD2Ef6tawtDoG7CYDLGZT4-MdYXbMMI',
      appKey: 'yDTo3JsGFGAWKgN3nslMRSXs',
      serverURLs: 'https://errd2ef6.api.lncldglobal.com'
    })
  }
  router.beforeEach((to, from, next) => {
    // 触发百度的pv统计
    if (typeof _hmt !== 'undefined') {
      if (to.path) {
        _hmt.push(['_trackPageview', to.fullPath])
      }
    }
    next()
  })
}
