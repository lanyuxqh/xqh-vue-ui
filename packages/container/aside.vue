<template>
  <aside class="x-aside" :style="{width}">
    <slot></slot>
  </aside>
</template>
<script>
export default {
  name: 'XAside',
  props: {
    width: {
      type: String,
      default: '300px'
    }
  }
}
</script>