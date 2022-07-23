<template>
  <ul class="x-list" :class="[`x-list-${size}`,hover?'has-hover':'',border?'has-border':'']">
    <li v-for="item in data" :key="item" >{{item}}</li>
  </ul>
</template>
<script>
export default {
  name: 'XList',
  props: {
    data: {
      type: Array,
      default: []
    },
    size: {
      type: String,
      default: 'md'
    },
    border: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
  },
}
</script>
<style lang="scss" scoped>
@import "./list.scss";
</style>
