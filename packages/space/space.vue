<template>
  <div class="x-space" ref="spaceRef" :style="spaceStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'XSpace',
  props: {
    inline: {
      type: Boolean,
      default: true
    },
    size: {
      type: Array,
      default: () => [20, 20]
    }
  },
  computed: {
    spaceStyle () {
      return {
        display: this.inline ? "inline-flex" : "flex",
        gap:
          this.size.length == 2
            ? `${this.size[0]}px ${this.size[1]}px`
            : `${this.size[0]}px`,
        "flex-direction": this.inline ? "row" : "column",
        "flex-wrap": "wrap",
        margin: `${this.size[0] / 2}px 0px`,
        width: this.inline ? "100%" : "fit-content"
      }
    }
  },
}
</script>
<style lang="scss" scoped>
@import "./space.scss";
</style>
