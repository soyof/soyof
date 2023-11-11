const tranStyle = 'height 0.3s ease-in-out'
const Transition = {
  beforeEnter(el) {
    el.style.transition = tranStyle
    if (!el.dataset) el.dataset = {}
    el.style.height = 0
  },
  enter(el) {
    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`
    } else {
      el.style.height = ''
    }
    el.style.overflow = 'hidden'
  },
  afterEnter(el) {
    el.style.transition = ''
    el.style.height = ''
  },
  beforeLeave(el) {
    if (!el.dataset) el.dataset = {}
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  leave(el) {
    if (el.scrollHeight !== 0) {
      el.style.transition = tranStyle
      el.style.height = 0
    }
  },
  afterLeave(el) {
    el.style.transition = ''
    el.style.height = ''
  }
}

export default {
  name: 'SelfTransition',
  functional: true,
  render(h, { children }) {
    return h('transition', {
      on: Transition
    }, children)
  }
}
