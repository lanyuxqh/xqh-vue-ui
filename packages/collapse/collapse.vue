<template>
  <div class="x-collapse">
    <slot />
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'XCollapse',
  props: {
    selected: {
      type: Array
    },
    single: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      eventBus: new Vue(),
      selectedArray: []
    }
  },
  provide () {
    return { eventBus: this.eventBus }
  },
  mounted () {
    this.eventBus.$emit('update:selected', this.selected)
    this.eventBus.$on('update:addSelected', (name) => {
      this.selectedArray = JSON.parse(JSON.stringify(this.selected))
      if (this.single) {
        this.selectedArray = [name]
      } else {
        this.selectedArray.push(name)
      }
      this.eventBus.$emit('update:selected', this.selectedArray)
      this.$emit('update:selected', this.selectedArray)
    })
    this.eventBus.$on('update:removeSelected', (name) => {
      this.selectedArray = JSON.parse(JSON.stringify(this.selected))
      let index = this.selectedArray.indexOf(name)
      this.selectedArray.splice(index, 1)
      this.eventBus.$emit('update:selected', this.selectedArray)
      this.$emit('update:selected', this.selectedArray)
    })
  }
}
</script>
<style lang="scss" scoped>
.x-collapse {
  border-radius: 4px;
  border: 1px solid #999;
}
</style>
