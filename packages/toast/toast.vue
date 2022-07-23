<template>
  <div class="wrapper" :class="`toast-position-${position}`">
    <div class="x-toast" :class="`x-toast-${type}`" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html='$slots.default[0]'></div>
      </div>
      <div class="line" ref="line"></div>
      <span v-if="closeButton" @click="onClickClose" class="close">{{this.closeButton.text}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'XToast',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    autoClose: {
      type: [Boolean, Number],
      default: false,
      validator (value) {
        return typeof value === 'boolean' || typeof value === 'number'
      }
    },
    closeButton: {
      type: Object,
      default () {
        return {
          text: '关闭',
          callback: () => {
            this.close()
          }
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return ['top', 'bottom', 'middle', 'right', 'left'].indexOf(value) >= 0
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
    })
    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, this.autoClose * 1000)
    }
  },
  methods: {
    close () {
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    // 点击后销毁组件，并执行用户传入的 callback
    onClickClose () {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback()
      }
    }

  },
}
</script>
<style lang="scss" scoped>
@import "./toast.scss";
</style>
