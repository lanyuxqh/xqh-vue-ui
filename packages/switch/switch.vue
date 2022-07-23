<template>
  <div class="x-switch-wrap" :class="{'is-checked':value,'is-disabled':disabled}" @click.prevent="handleClick">
    <span class="x-switch" ref="switch">
      <span class="x-switch-button"></span>
    </span>
    <input type="checkbox" class="x-switch-input" ref="input" :disabled="disabled">
  </div>
</template>
<script>
export default {
  name: 'XSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    if (this.activeColor || this.inactiveColor) {
      var color = this.value ? this.activeColor : this.inactiveColor
      this.$refs.switch.style.borderColor = color
      this.$refs.switch.style.backgroundColor = color
    }
    this.$refs.input.checked = this.value
  },
  watch: {
    'value' (e) {
      if (this.activeColor || this.inactiveColor) {
        var color = e ? this.activeColor : this.inactiveColor
        this.$refs.switch.style.borderColor = color
        this.$refs.switch.style.backgroundColor = color
      }

    }
  },
  methods: {
    handleClick () {
      if (!this.disabled) {
        this.$emit('input', !this.value)
        this.$emit('change', !this.value)
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.x-switch-wrap {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .x-switch {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .x-switch-button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  &.is-disabled {
    opacity: 0.6;
    .x-switch {
      cursor: not-allowed;
    }
  }
}
// 选中样式
.is-checked {
  .x-switch {
    border-color: #409eff;
    background-color: #409eff;
    .x-switch-button {
      transform: translateX(20px);
    }
  }
}
// 隐藏input标签
.x-switch-input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>
 
