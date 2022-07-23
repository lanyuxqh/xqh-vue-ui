<template>
  <div class="x-rate" :style="{ cursor: disabled ? 'auto' : 'pointer'}">
    <i class="x-rate-box" ref="box" @mousemove='handelMousemove' @mouseleave='handelMouseleave' @click='selectValue'>
      <span class="x-rate-dark">
        <x-icon v-for='item in num' :key='item' :size='size' :icon='iconType.name' :color='iconType.darkColor' :class="{ 'x-rate-big':item < bigIndex}"></x-icon>
      </span>
      <span class="x-rate-bright" :style="{ width }">
        <x-icon v-for='item in num' :key='item' :size='size' :icon='iconType.name' :color='iconType.brightColor' :class="{ 'x-rate-big':item < bigIndex}"></x-icon>
      </span>
    </i>
    <span v-if='score' class="x-rate-score">
      <slot name="score">{{value | fix}}</slot>
    </span>
  </div>
</template>
<script>
import { myToFixed } from '@/utils/util'
export default {
  name: 'XRate',
  props: {
    value: {
      type: [Number, String],
      required: true
    },
    num: {
      type: Number,
      default: 5
    },
    score: Boolean, // 是否显示分值
    total: {
      type: Number,
      default: 5
    },
    one: Boolean, // 只让完整的每一颗
    disabled: Boolean, // 为true的时候, 不允许修改
    icon: String, // 自定义图标
    size: {
      type: Number,
      default: 20
    },
    darkColor: String, // 自定义暗色
    brightColor: String, // 自定义亮色
    big: Boolean, // 变大效果
  },
  data () {
    return {
      oldVal: 0,
      bigIndex: 0
    }
  },
  mounted () {
    this.oldVal = this.value;
  },
  computed: {
    // icon样式
    iconType () {
      let { icon, darkColor, brightColor } = this;
      return {
        name: icon || "star-fill",
        brightColor: brightColor || "rgb(247, 186, 42)",
        darkColor: darkColor || "#bbbbbb"
      };
    },
    numTotal () {
      // 传入一个有效的总分数
      return this.total <= 0 ? this.num : this.total;
    },
    width () {
      let proportion = this.boundary(this.value) / this.numTotal;
      return `${proportion * (this.size * this.num)}px`;
    }
  },
  filters: {
    fix: myToFixed
  },
  methods: {
    // 判断是否超出边界
    boundary (value) {
      if (value <= 0) value = 0;
      if (value >= this.numTotal) value = this.numTotal;
      return value;
    },
    handelMousemove (e) {
      // 实时判断的原因是, 可能用户现在禁止改动, 一会又需要改动了!!
      if (!this.disabled) {
        let node = this.$refs.box;
        let value =
          ((e.pageX - node.getBoundingClientRect().left) / (this.size * this.num)) *
          this.numTotal;
        value = this.boundary(value);
        // 前面的变大效果
        // 每颗必须完整 一颗的距离
        let i, oneNum;
        if (this.big || this.one) {
          i = 0;
          oneNum = this.numTotal / this.num;
          while (oneNum * i <= value) {
            i++;
          }
          if (this.big) {
            this.bigIndex = i;
          }
        }
        if (this.one) {  // 防止溢出
          value = Math.min(oneNum * i, this.numTotal);
        }
        this.$emit("input", value);
      }
    },
    // 离开区域
    handelMouseleave () {
      this.bigIndex = 0;
      if (!this.disabled) {
        this.$emit("input", this.oldVal);
      }
    },
    // 选择到某个值
    selectValue () {
      this.oldVal = this.value;
      this.$emit("change", myToFixed(this.oldVal));
    },
  },
}
</script>
<style lang="scss" scoped>
@import "./rate.scss";
</style>
