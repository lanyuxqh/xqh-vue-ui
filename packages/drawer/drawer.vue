<template>
  <Transition name="x-drawer-fade">
    <div v-show="show" class="x-drawer">
      <div class="x-drawer-backdrop" @click="closeDrawer"></div>
      <div class="x-drawer-content" :class="[direction,show? 'open' :'']">
        <div class="header">
          <span>{{title}}</span>
          <x-icon icon="close" @click="closeDrawer"></x-icon>
        </div>
        <div class="main">
          <slot></slot>
        </div>
        <div class="footer">
          <x-button v-if="confirm" type="primary" @click="handleConfirm">确认</x-button>
          <x-button v-if="cancel" @click="handleCancel">取消</x-button>
        </div>
      </div>

    </div>
  </Transition>
</template>
<script>
export default {
  name: 'XDrawer',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'drawer'
    },
    direction: {
      type: String,
      default: 'ltr'
    },
    confirm: Function,
    cancel: Function,
  },
  methods: {
    closeDrawer () {
      this.$emit('close', false)
    },
    handleConfirm () {
      this.confirm()
      this.closeDrawer()
    },
    handleCancel () {
      this.cancel()
      this.closeDrawer()
    }
  },
}
</script>
<style lang="scss" scoped>
@import "./drawer.scss";
</style>
