<template>
  <div class="x-divider" :class="[`x-divider-${direction}`]">
    <div v-if="direction!=='vertical'" class="x-divider-content" :class="`is-${contentPosition}`">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'XDivider',
  props: {
    direction: {
      type: String,
      default: 'horizontal',
      validator (val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1;
      },
    },
    contentPosition: {
      type: String,
      default: 'center',
      validator (val) {
        return ['left', 'center', 'right'].indexOf(val) !== -1;
      }
    }
  },
}
</script>
<style lang="scss" scoped>
@import "./divider.scss";
</style>
