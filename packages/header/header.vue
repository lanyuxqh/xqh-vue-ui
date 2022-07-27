<template>
  <header class="x-header">
    <slot></slot>
  </header>
</template>
<script>
export default {
  name: 'XHeader',
}
</script>
<style lang="scss" scoped>
.x-header {
  height: 60px;
}
</style>
