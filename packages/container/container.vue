<template>
  <section class="x-container" :class="{isVertical}">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: 'XContainer',
  data () {
    return {
      isVertical: true
    }
  },
  mounted () {
    this.isVertical = this.$children.some(child => ['XHeader', 'XFooter'].includes(child.$options.name))
  }
}
</script>
<style lang='scss' scoped>
.x-container {
  display: flex;
  flex-direction: row;
  flex: 1; // container成为其他container的项目
  &.isVertical {
    flex-direction: column;
  }
}
</style>