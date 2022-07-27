<template>
  <div class="x-loading" :style="{'z-index':zIndex,'position': position}" @click.stop="handleClick">
    <div class="x-loading-curtain" :style="{'opacity':opacity,'background-color':curtainColor}"></div>
    <div class="x-loading-icon">
      <x-icon :icon="iconName" :color="iconColor" :size="iconSize" class="x-icon-loading"></x-icon>
      <span :style="{'color':textColor,'font-size':textFontSize+'px'}">{{text}}</span>
    </div>
  </div>
</template>
<script>
import XIcon from '../icon/icon.vue'
export default {
  name: 'XLoading',
  components: { XIcon },
  props: {
    curtainColor: {
      type: String,
      default: "black"
    },
    opacity: {
      type: Number,
      default: 0.8
    },
    zIndex: {
      type: Number,
      default: 100
    },
    position: {
      type: String,
      default: "fixed"
    },
    iconName: {
      type: String,
      default: "loading"
    },
    iconColor: {
      type: String,
      default: "#3F8BDB"
    },
    iconSize: {
      type: Number,
      default: 25
    },
    text: {
      type: String,
      default: "加载中 . . ."
    },
    textColor: {
      type: String,
      default: "#3F8BDB"
    },
    textFontSize: {
      type: Number,
      default: 17
    },
  },
  methods: {
    handleClick () {
      this.$emit("click");
    }
  },
}
</script>
<style lang="scss" scoped>
@import "./loading.scss";
</style>
