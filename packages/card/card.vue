<template>
  <div class="x-card" :class="shadow?`is-${shadow}-shadow`:'is-always-shadow'">
    <div class="x-card-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="x-card-body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'XCard',
  props: {
    bodyStyle: {},
    shadow: String
  }
}
</script>
<style lang="scss" scoped>
@import "./card.scss";
</style>
