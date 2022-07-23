<template>
  <div class="x-avatar" :class="[`x-avatar-${size}`,`x-avatar-${shape}`]" :style="src?{}:{'background-color':'#CCCCCC'}">
    <img class="x-avatar-img" v-if="src" :src="src" :alt="alt">
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'XAvatar',
  props: {
    size: {
      type: String,
      default: 'md'
    },
    shape: {
      type: String,
      default: 'square'
    },
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./avatar.scss";
</style>
