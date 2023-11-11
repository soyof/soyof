import CodeCopy from './CodeCopy.vue'
import Vue from 'vue'
import './style.css'

export default {
  updated() {
    this.update()
  },
  methods: {
    update() {
      setTimeout(() => {
        document.querySelectorAll(selector).forEach(el => {
          if (el.classList.contains('code-copy-added')) return
          const ComponentClass = Vue.extend(CodeCopy)
          const instance = new ComponentClass()

          const options = {
            align: align,
            color: color,
            backgroundTransition: backgroundTransition,
            backgroundColor: backgroundColor,
            successText: successText,
            staticIcon: staticIcon
          }
          instance.options = { ...options }
          instance.code = el.innerText
          instance.parent = el
          instance.$mount()
          el.classList.add('code-copy-added')
          el.appendChild(instance.$el)
        })
      }, 100)
    }
  }
}
