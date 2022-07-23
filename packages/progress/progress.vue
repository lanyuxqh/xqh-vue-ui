<template>
  <div class="x-progress">
    <div v-if="type==='bar'" class="x-progress-bar">
      <div class="x-progress-bar-outer" :style="{height:`${width}px`,'backgroundColor':backgroundColor}">
        <div class="x-progress-bar-inner" :style="barStyle">
          <div class="x-progress-bar-bg" :style="{background:color,width:progressWidth}" />
        </div>
      </div>
      <div class="x-progress-info">
        {{ progressWidth}}
      </div>
    </div>
    <div v-else class="x-progress-circle" :style="{width: `${width}px`}">
      <svg style="transform: rotate(-90deg)" :width="width" :height="width" xmlns="http://www.w3.org/2000/svg">
        <circle :r="(width-strokeWidth)/2" :cy="width/2" :cx="width/2" :stroke-width="strokeWidth" :stroke="backgroundColor" fill="none" />
        <circle ref="$bar" :r="(width-strokeWidth)/2" :cy="width/2" :cx="width/2" :stroke="color" :stroke-width="strokeWidth" :stroke-linecap="isRound ? 'round' : 'square'" :stroke-dasharray="(width-strokeWidth)*3.14" :stroke-dashoffset="(width - strokeWidth) * 3.14 * (100 - percentage) / 100" fill="none" />
      </svg>
      <span class="x-progress-info">{{ percentage + '%' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XProgress',
  props: {
    type: {
      type: String,
      default: 'bar'
    },
    width: {
      type: Number,
      default: 10,
    },
    color: {
      type: String,
      default: 'lightgreen',
    },
    backgroundColor: {
      type: String,
      default: '#e5e5ea',
    },
    percentage: {
      type: Number,
      default: 0,
      required: true,
    },
    strokeWidth: {
      type: Number,
      default: 10,
    },
    isRound: {
      type: Boolean,
      default: true
    },
  },
  computed: {
    barStyle () {
      const style = {};
      style.width = this.percentage + '%';
      style.background = this.color;
      style.borderRadius = 6 + 'px';
      return style;
    },
    progressWidth () {
      return `${this.percentage.toFixed(0)}%`;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./progress.scss";
</style>
