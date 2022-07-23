<template>
  <div class="x-tab-pane" v-if="visible">
    <slot>
    </slot>
  </div>
</template>
<script>
export default {
  name: 'XTabPane',
  props: {
    label: {
      type: String,
    },
    name: {
      type: String
    },
    icon: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visible: false
    }
  }
}
</script>
<style>
</style>
