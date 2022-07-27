<template>
  <div class="x-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'XCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  },
}
</script>
<style>
</style>
