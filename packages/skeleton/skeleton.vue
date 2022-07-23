<template>
  <transition name="x">
    <div class="x-skeleton">
      <div class="x-skeleton-box">
        <div class="x-skeleton-base" :style="`box-shadow: ${myShadow}; height: ${height}px;`">
          <!-- 模式一: 单圆 -->
          <template v-if="type === 1">
            <div class="x-skeleton-round" />
          </template>
          <!-- 模式二: 多圆 -->
          <template v-else-if="type === 2">
            <div class="x-skeleton-round" v-for="i in distanceList" :key='i' :style="{top:i}" />
          </template>
          <!-- 模式三: 表格 -->
          <template v-else-if="type === 3">
            <div class="x-skeleton-rec-big" />
          </template>
          <!-- 模式四: 复杂表格 -->
          <template v-else-if="type === 4">
            <div class="x-skeleton-round" v-for="i in distanceList" :key='i' :style="{left:i}" />
            <div class="x-skeleton-rec" />
          </template>
        </div>
      </div>
      <div class="across" />
    </div>
  </transition>
</template>
<script>
export default {
  name: 'XSkeleton',
  props: {
    type: {
      type: Number,
      default: 1
    },
    height: {
      type: Number,
      default: 30
    }
  },
  data () {
    return {
      n: 10,
      width: 30,
      myShadow: "",
    }
  },
  methods: {
    // 初始化颜色与条纹
    initClass () {
      let myShadow = "";
      for (let i = 0; i < 30; i++) {
        let h = (this.height + 20) * i;
        myShadow += `0px ${h}px 0 0 #F6F6F6,`;
      }
      // 去掉','
      this.myShadow = myShadow.slice(0, -1) + ";";
    }
  },
  computed: {
    distanceList () {
      let n = this.n,
        result = [];
      while (n--) {
        result.unshift(n * 180 + "px");
      }
      return result;
    }
  },
  mounted () {
    this.initClass();
  }
}
</script>
<style lang="scss" scoped>
@import "./skeleton.scss";
</style>
