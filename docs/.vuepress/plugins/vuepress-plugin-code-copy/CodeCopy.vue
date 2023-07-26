<template>
    <div class="code-copy">
        <span class="iconfont icon-fuzhi1 copy-box-iconfont" @click="copyToClipboard"></span>
        <span :class="[success ? 'success' : '', 'copy-text']" :style="alignStyle">
            {{ options.successText }}
        </span>
    </div>
</template>

<script>
export default {
    props: {
        parent: Object,
        code: String,
        options: {
            align: String,
            color: String,
            backgroundTransition: Boolean,
            backgroundColor: String,
            successText: String,
            staticIcon: Boolean
        }
    },
    data() {
        return {
            success: false,
            originalBackground: null,
            originalTransition: null
        }
    },
    computed: {
        alignStyle() {
            let style = {}
            style[this.options.align] = '7.5px'
            return style
        },
        iconClass() {
            return this.options.staticIcon ? '' : 'hover'
        }
    },
    mounted() {
        this.originalTransition = this.parent.style.transition
        this.originalBackground = this.parent.style.background
    },
    beforeDestroy() {
        this.parent.style.transition = this.originalTransition
        this.parent.style.background = this.originalBackground
    },
    methods: {
        // From: https://stackoverflow.com/a/5624139
        hexToRgb(hex) {
            let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
            return result
                ? {
                      r: parseInt(result[1], 16),
                      g: parseInt(result[2], 16),
                      b: parseInt(result[3], 16)
                  }
                : null
        },
        copyToClipboard(el) {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(this.code).then(
                    () => {
                        this.setSuccessTransitions()
                    },
                    () => {}
                )
            } else {
                let copyelement = document.createElement('textarea')
                document.body.appendChild(copyelement)
                copyelement.value = this.code
                copyelement.select()
                document.execCommand('Copy')
                copyelement.remove()

                this.setSuccessTransitions()
            }
        },
        setSuccessTransitions() {
            clearTimeout(this.successTimeout)

            if (this.options.backgroundTransition) {
                this.parent.style.transition = 'background 350ms'

                let color = this.hexToRgb(this.options.backgroundColor)
                this.parent.style.background = `rgba(${color.r}, ${color.g}, ${color.b}, 0.1)`
            }

            this.success = true
            this.successTimeout = setTimeout(() => {
                if (this.options.backgroundTransition) {
                    this.parent.style.background = this.originalBackground
                    this.parent.style.transition = this.originalTransition
                }
                this.success = false
            }, 500)
        }
    }
}
</script>

<style scoped>
.code-copy {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 40px;
  height: 18px;
  position: absolute;
  right: .5em;
  top: .5em;
  z-index: 5;
}
.copy-box-iconfont {
  position: relative;
  font-size: 18px;
  opacity: 0.75;
  cursor: pointer;
  color: #53a8ff;
  z-index: 55;
}

.copy-box-iconfont.hover {
  opacity: 0;
}

.copy-box-iconfont:hover {
  opacity: 1 !important;
}

.copy-text {
  position: absolute;
  font-size: 12px;
  line-height: 0.425rem;
  right: 28px;
  opacity: 0;
  color: #F56C6C;
  transition: opacity 500ms;
}

.success {
    opacity: 1 !important;
}
</style>
