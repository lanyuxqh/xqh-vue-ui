<template>
  <button class="x-button" :class="btnClass" :disabled="disabled||loading" @click="$emit('click', $event)">
    <x-icon v-if="loading" icon="sync" class="x-button-icon x-icon-loading"></x-icon>
    <x-icon v-if="icon && !loading" :icon="icon" class="x-button-icon"></x-icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
import classNames from "@/utils/classNames";
export default {
  name: 'XButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    status: {
      type: String,
      default: 'default'
    },
    shape: {
      type: String,
      default: 'square'
    },
    size: {
      type: String,
      default: 'md'
    },
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: 'left',
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClass () {
      return classNames([
        `x-button-type-${this.type}`,
        `x-button-status-${this.status}`,
        `x-button-shape-${this.shape}`,
        `x-button-size-${this.size}`,
        this.icon ? 'x-button-hasicon' : '',
        this.iconPosition ? `x-button-${this.iconPosition}` : '',
        this.disabled ? 'x-button-disabled' : ''
      ])
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./button.scss";
</style>
