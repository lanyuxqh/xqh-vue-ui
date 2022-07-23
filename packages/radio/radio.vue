<template>
  <label class="x-radio" :class="{'is-checked':label===model,'is-disabled':disabled}">
    <span class="x-radio-input">
      <span class="x-radio-inner"></span>
      <input type="radio" class="x-radio-original" :value="label" v-model="model" :disabled="disabled" @change="$emit('change',$event.target.value)">
    </span>
    <span class="x-radio-label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
export default {
  name: "XRadio",
  props: {
    value: null,
    label: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (val) {
        this.isGroup ? this.RadioGroup.$emit('input', val) : this.$emit('input', val)
      }
    },
    isGroup () {
      return !!this.RadioGroup
    }
  },
  methods: {
  },
}
</script>
<style lang="scss" scoped>
.x-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  user-select: none;
  .x-radio-input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .x-radio-inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .x-radio-original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .x-radio-label {
    font-size: 14px;
    padding-left: 10px;
  }
  &.is-disabled {
    .x-radio-inner {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      cursor: not-allowed;
    }
    .x-radio-label {
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
// 选中的样式
.x-radio.is-checked {
  .x-radio-input {
    .x-radio-inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .x-radio-label {
    color: #409eff;
  }
  &.is-disabled {
    .x-radio-inner {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      &:after {
        background-color: #c0c4cc;
      }
    }
    .x-radio-label {
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
</style>

