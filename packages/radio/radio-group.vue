<template>
  <div class="x-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "XRadioGroup",
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  },
}
</script>
<style>
</style>
