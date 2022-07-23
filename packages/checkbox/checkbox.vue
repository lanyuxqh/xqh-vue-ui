<template>
  <label class="x-checkbox" :class="{'is-checked':isChecked,'is-disabled':disabled}">
    <span class="x-checkbox-input">
      <span class="x-checkbox-inner"></span>
      <input type="checkbox" class="x-checkbox-original" :name="name" v-model="model" :value="label" :disabled="disabled" @change="$emit('change',$event.target.checked)">
    </span>
    <span class="x-checkbox-label">
      <slot></slot>
      <template v-if="!$slots.default">
        {{label}}
      </template>
    </span>
  </label>
</template>
<script>
export default {
  name: 'XCheckbox',
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set (value) {
        this.isGroup ? this.CheckboxGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isChecked () {
      return this.isGroup ? this.model.includes(this.label) : this.model
    },
    isGroup () {
      return !!this.CheckboxGroup
    }
  },
}
</script>
<style lang="scss" scoped>
.x-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .x-checkbox-input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .x-checkbox-inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s, cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #ffffff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .x-checkbox-original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .x-checkbox-label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
  &.is-disabled {
    .x-checkbox-inner {
      background-color: #edf2fc;
      border-color: #dcdfe6;
      cursor: not-allowed;
    }
    .x-checkbox-label {
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
// 选中的样式
.x-checkbox.is-checked {
  .x-checkbox-input {
    .x-checkbox-inner {
      background-color: #409eff;
      border-color: #409eff;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .x-checkbox-label {
    color: #409eff;
  }
  &.is-disabled {
    .x-checkbox-inner {
      background-color: #edf2fc;
      border-color: #dcdfe6;
      &::after {
        border-color: #c0c4cc;
      }
    }
    .x-checkbox-label {
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
</style>