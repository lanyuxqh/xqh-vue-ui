<template>
  <div class="x-badge">
    <slot></slot>
    <sup v-show="!hidden && (content || content === 0 || isDot)" v-text="content" class="x-badge-content" :class="{'is-dot': isDot, 'is-fixed': $slots.default}" :style={background:color}>
    </sup>
  </div>
</template>
<script>
export default {
  name: 'XBadge',
  props: {
    value: [String, Number],
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
    color: String,
  },
  computed: {
    content () {
      if (this.isDot) return;
      const { value, max } = this;
      if (typeof value === 'number' && typeof max === 'number') {
        return value > max ? `${max}+` : value;
      }
      return value;
    }
  },
}
</script>
<style lang="scss" scoped>
@import "./badge.scss";
</style>
