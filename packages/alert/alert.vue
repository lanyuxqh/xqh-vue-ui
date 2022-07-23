<template>
  <div v-if="show" class="x-alert" :class="[`x-alert-${type}`]">
    <x-icon v-if="icon" :icon="icon" :class="['x-alert-icon',description?'has-description':'']"></x-icon>
    <div class="x-alert-content" :class="description?'has-description':''">
      <span>{{message}}</span>
      <p>{{description}}</p>
    </div>
    <div v-if="closable" class="x-alert-close">
      <span v-if="closeText" @click="closeAlert">{{closeText}}</span>
      <x-icon v-else icon="close" @click="closeAlert"></x-icon>
    </div>
  </div>
</template>
<script>
export default {
  name: 'XAlert',
  props: {
    show: {
      type: Boolean,
      default: true
    },
    closable: {
      type: Boolean,
      default: false
    },
    closeText: String,
    type: {
      type: String,
      default: 'info'
    },
    icon: String,
    message: String,
    description: String,
  },
  methods: {
    closeAlert () {
      this.$emit('update:show', false);
    }
  },
}
</script>
<style lang="scss" scoped>
@import "./alert.scss";
</style>
