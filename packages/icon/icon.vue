<template>
  <svg class="x-icon" :class="`x-icon-${icon}`" aria-hidden="true" v-on="$listeners" :style="{'fill':color,'width': `${size}px`,
  'height': `${size}px`}">
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'XIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'black'
    },
    size: {
      type: Number,
      default: 24
    }
  },
  mounted () {
    //   require('../style/icon');
    require('@/style/icon.js') // svg
    require('@/style/xqh-icon.js') // svg
  },
}
</script>

<style lang="scss" scoped>
@import "./icon.scss";
</style>