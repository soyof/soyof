import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfonts/iconfont.css'
// 引入elementUI
Vue.use(ElementUI)

export default ({ Vue, router }) => {
  if (typeof process === 'undefined') {
    import('tinymce-vue-h/dist/tinymce-vue-h.umd').then(comp => {
      Vue.use(comp.default)
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
