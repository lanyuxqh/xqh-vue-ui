<template>
  <Transition name="x">
    <div v-if="show" class="x-modal" :class="`x-modal-${size}`">
      <div class="x-modal-backdrop" @click="closeModal"></div>
      <div class="x-modal-content" >
        <div class="header">
          <span>{{title}}</span>
          <x-icon icon="close" @click="closeModal"></x-icon>
        </div>
        <slot></slot>
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
  name: 'XModal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'md'
    },
    title: {
      type: String,
      default: 'title'
    },
    confirm: Function,
    cancel: Function,
  },
  methods: {
    closeModal () {
      this.$emit('close', false)
    },
    handleConfirm () {
      this.confirm()
      this.closeModal()
    },
    handleCancel () {
      this.cancel()
      this.closeModal()
    }
  },
}
</script>
<style lang="scss" scoped>
@import "./modal.scss";
</style>
