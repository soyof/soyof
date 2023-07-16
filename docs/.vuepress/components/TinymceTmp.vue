<template>
  <div class="editor-wrap">
    <TinymceVueH v-model="editVal" :init="tinymceInit" />
  </div>
</template>

<script>

export default {
  name: 'TinymceTmp',
  data() {
    return {
      editVal: '',
      tinymceInit: {
        width: '100%',
        autosave_ask_before_unload: false,
        theme: 'silver', // 必须参数, 否则富文本编辑器无法显示
        skin_url: '/soyof/tinymce/skins/ui/oxide', // 必须参数, 否则富文本编辑器无法显示
        language_url: '/soyof/tinymce/langs/zh_CN.js', // 如需中文,则引入
        language: 'zh_CN', // 如需中文,则引入
        content_css: `/soyof/tinymce/skins/content/default`, // 必须参数
        toolbar: 'fontselect styleselect fontsizeselect restoredraft undo redo bold italic underline strikethrough subscript superscript removeformat forecolor backcolor lineheight align outdent indent help'
      }
    }
  }
}
</script>

<style lang="styl" scoped>
.editor-wrap {
  width: 100%;
}
</style>
