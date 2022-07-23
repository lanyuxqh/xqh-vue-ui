<template>
  <div class="x-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'XButtonGroup',
  mounted () {
    // 检查当前组件实例的子元素不是 button,则予以警告
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`button-group 的子元素应该全是 button，但是你写的是 ${name}`)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./button-group.scss";
</style>
