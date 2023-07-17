<template>
  <div id="valineComment"></div>
</template>

<script>
export default {
  data() {
    return {
      Valine: null
    }
  },
  mounted() {
    import('valine').then(res => {
      this.Valine = res.default
      this.handleInitValine()
    })
  },
  methods: {
    handleInitValine() {
      new this.Valine({
        el: '#valineComment',
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
      })
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
