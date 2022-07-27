<template>
  <main class="x-main">
    <slot></slot>
  </main>
</template>
<script>
export default {
  name: 'XMain',
}
</script>
<style lang="scss" scoped>
.x-main {
  flex: 1;
}
</style>