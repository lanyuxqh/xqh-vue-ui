<template>
  <transition name="x-zoom-in-center">
    <span class="x-tag" @click="handleClick" :class="[`x-tag-${type}`,`x-tag-${size}`]" :style="{'backgroundColor':color}">
      <slot></slot>
      <x-icon class="x-tag-close" v-if="closable" icon="close" @click="handleClose"></x-icon>
    </span>
  </transition>
</template>
<script>
export default {
  name: 'XTag',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'md'
    },
    closable: Boolean,
    color: String,
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    },
    handleClose (e) {
      e.stopPropagation();
      this.$emit('close', e);
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./tag.scss";
</style>
