<template>
  <div class="code-view">
    <div v-if="component" class="comp-wrap">
      <component :is="component" />
    </div>
    <div v-if="isOnlyShowComp === 'false'" class="code-preview-btn">
      <div class="code-preview-btn-left">
        <span v-if="title" :title="title">{{ title }}</span>
      </div>
      <div class="code-preview-btn-right">
        <span title="复制">
          <svg
            t="1689430122812"
            class="icon"
            viewBox="0 0 1024 1024"
            width="18"
            height="18"
            @click="handleCopyCode"
          >
            <path d="M571.52 909.44H280.96c-61.44 0-111.36-49.92-111.36-111.36V387.2c0-61.44 49.92-111.36 111.36-111.36h290.56c61.44 0 111.36 49.92 111.36 111.36v410.88c0 61.44-49.92 111.36-111.36 111.36z m-290.56-569.6c-26.24 0-47.36 21.12-47.36 47.36v410.88c0 26.24 21.12 47.36 47.36 47.36h290.56c26.24 0 47.36-21.12 47.36-47.36V387.2c0-26.24-21.12-47.36-47.36-47.36H280.96z" fill="#409eff" p-id="3364" /><path d="M775.68 742.4c-17.92 0-32-14.08-32-32V333.44c0-66.56-53.76-120.32-120.32-120.32h-256c-17.92 0-32-14.08-32-32s14.08-32 32-32h256c101.76 0 184.32 82.56 184.32 184.32V710.4c0 17.28-14.08 32-32 32z" fill="#409eff" p-id="3365" />
          </svg>
          <transition
            name="animate__animated animate__fadeIn"
            enter-active-class="animate__fadeInRight"
            leave-active-class="animate__fadeOutLeft"
          >
            <span v-if="isShowTips && copytips" class="code-view-tips">{{ copytips }}</span>
          </transition>
        </span>
        <span :title="showCode ? '隐藏源码' : '查看源码'">
          <svg
            t="1689429958327"
            class="icon"
            viewBox="0 0 1024 1024"
            p-id="2308"
            width="18"
            height="18"
            @click="handleShowAndHideCode(!showCode)"
          >
            <path d="M153.770667 517.558857l200.387047-197.241905L302.86019 268.190476 48.761905 518.290286l254.439619 243.614476 50.590476-52.833524-200.021333-191.512381zM658.285714 320.316952L709.583238 268.190476l254.098286 250.09981L709.241905 761.904762l-50.590476-52.833524 200.021333-191.512381L658.285714 320.316952z m-112.981333-86.186666L393.99619 785.554286l70.534096 19.358476 151.30819-551.399619-70.534095-19.358476z" p-id="2309" fill="#409eff" />
          </svg>
        </span>
      </div>
    </div>
    <transition
      v-if="isOnlyShowComp === 'false'"
      @before-enter="handleBeforeEnterOrLeve"
      @enter="handleEnter"
      @leave="handleBeforeEnterOrLeve"
    >
      <div v-if="showCode" class="code-wrap">
        <slot></slot>
        <div class="hide-code-btn" @click="handleShowAndHideCode(false)">
          隐藏源码
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'CodeView',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    code: {
      type: String,
      required: false,
      default() {
        return ''
      }
    },
    component: {
      type: String,
      required: false,
      default() {
        return ''
      }
    },
    isOnlyShowComp: {
      type: String,
      required: false,
      default() {
        return false
      }
    },
    copytips: { // 复制成功提示语
      type: String,
      required: false,
      default() {
        return ''
      }
    },
    tipstimes: { // 设置复制成功提示停留时间
      type: [Number, String],
      required: false,
      default() {
        return 1000
      }
    }
  },
  data() {
    return {
      showCode: false,
      isShowTips: false
    }
  },
  methods: {
    handleCopyCode() {
      const input = document.createElement('textarea')
      document.body.appendChild(input)
      input.value = decodeURIComponent(this.code)
      input.select()
      document.execCommand('Copy')
      input.remove()
      this.isShowTips = true
      const timer = setTimeout(_ => {
        this.isShowTips = false
        clearTimeout(timer)
      }, +this.tipstimes || 1000)
    },
    handleShowAndHideCode(flag) {
      this.showCode = flag
    },
    handleBeforeEnterOrLeve(el) {
      el.style.height = 0
    },
    handleEnter(el) {
      el.style.height = `${el.scrollHeight}px`
    }
  }
}
</script>

<style scoped>
.code-view {
  width: 100%;
}

.code-view .comp-wrap {
  padding: 10px;
  border: 1px solid #eaeefb;
}
.code-preview-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 12px;
  height: 35px;
  box-sizing: border-box;
  background-color: inherit;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  margin-top: -1px;
  border: 1px solid #eaeefb;
}
.code-preview-btn .code-preview-btn-left {
  flex: 1;
  padding-left: 12px;
  padding-right: 20px;
  font-size: 14px;
  color: #212121;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.code-preview-btn .code-preview-btn-right {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: flex-end;
  min-width: 70px;
  max-width: 70px;
  width: 70px;
  text-align: right;
}
.code-preview-btn .code-preview-btn-right span {
  cursor: pointer;
  margin-left: 8px;
}
.code-preview-btn .code-preview-btn-right span:first-child {
  margin-left: 0;
}

.code-preview-btn .code-preview-btn-right span .icon:last-child {
  margin-right: 0;
}
.code-view .code-preview-btn .code-view-tips {
  position: absolute;
  right: 25px;
  top: -20px;
  padding: 3px 5px;
  font-size: 12px;
  background-color: #91caff;
  z-index: 99999;
  border-radius: 5px;
  color: #fff;
  transition: top .5s ease-in-out;
}

.code-view .code-preview-btn .code-view-tips:hover {
  color: #fff;
}

.code-preview-btn:hover {
  color: #409eff;
  background-color: inherit;
}
.code-wrap {
  transition: height .3s ease-in-out;
  overflow: hidden;
  border: 1px solid #eaeefb;
  border-top-width: 0;
}
.code-view .code-wrap /deep/ pre {
  margin: 0 !important;
  padding: 16px !important;
  line-height: 22px !important;
  background-color: inherit !important;
  white-space: pre-wrap !important;
}
.code-view .code-wrap pre /deep/ code {
  line-height: 22px !important;
}
.code-view .code-wrap .hide-code-btn {
  width: 100%;
  height: 35px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #909399;
  border-top: 1px solid #eaeefb;
  box-sizing: border-box;
  cursor: pointer;
}
.code-view .code-wrap .hide-code-btn:hover {
  color: #056de8;
}
</style>
