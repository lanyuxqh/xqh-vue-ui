<template>
  <transition name="x">
    <div class="x-carousel-item" v-show="isShow" :class="{reverse}">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'XCarouselItem',
  data () {
    const children = this.$parent.$children.filter(child => child.$options.name === 'XCarouselItem')
    return {
      index: children.length - 1,
      reverse: false,
    }
  },
  computed: {
    isShow () {
      return this.$parent.currentSelected == this.index
    }
  }
}
</script>
<style lang="scss" scoped>
.x-carousel-item {
  width: 100%;
  height: 100%;
}
.x-enter-active,
.x-leave-active {
  transition: all 0.5s linear;
}
.x-leave-to {
  transform: translateX(-100%);
}
.x-enter {
  transform: translateX(100%);
}

.x-leave-to.reverse {
  transform: translateX(100%);
}
.x-enter.reverse {
  transform: translateX(-100%);
}
.x-enter-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
