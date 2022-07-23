<template>
  <div class="x-date-picker" v-click-outside="handleBlur">
    <x-input suffix-icon="calendar" @focus="handleFocus" :value="formatDate"></x-input>
    <div v-if="isVisible" class="x-date-content">
      <template v-if="mode==='date'">
        <div class="x-date-picker-header">
          <x-icon icon="doubleleft" @click="changeYear(-1)"></x-icon>
          <x-icon icon="left" @click="changeMonth(-1)"></x-icon>
          <span>
            <b>{{tempTime.year}}</b>年
            <b>{{tempTime.month+1}}</b>月
          </span>
          <x-icon icon="right" @click="changeMonth(1)"></x-icon>
          <x-icon icon="doubleright" @click="changeYear(1)"></x-icon>
        </div>
        <div>
          <span class="cell" v-for="week in weeks" :key="week">{{week}}</span>
        </div>
        <div class="x-date-picker-content" v-for="i in 6" :key="`row_${i}`">
          <span v-for="j in 7" :key="`col_${j}`" @click="selectDate(getCurrentDate(i,j))" class="cell cell-date" :class="{isSelect:isSelect(getCurrentDate(i,j)),isToday:isToday(getCurrentDate(i,j)),isNotCurrentMonth:!isCurrentMonth(getCurrentDate(i,j))}">{{getCurrentDate(i,j).getDate()}}</span>
        </div>
      </template>
      <template v-if="mode==='year'"></template>
      <template v-if="mode==='month'"></template>
    </div>
  </div>
</template>
<script>
import clickOutside from 'v-click-outside'
import { getYearMonthDay } from '@/utils/util'
export default {
  name: 'XDatePicker',
  directives: {
    clickOutside: clickOutside.directive
  },
  props: {
    value: {
      type: [String, Date],
      default: () => new Date()
    },
    mode: {
      type: String,
      default: 'date'
    }
  },
  data () {
    let { year, month, day } = getYearMonthDay(this.value)
    return {
      isVisible: false,
      // mode: 'date',
      time: {  // 显示的是这个时间
        year,
        month,
        day
      },
      tempTime: {  // 实际操作的是这个时间
        year,
        month,
        day
      },
      weeks: ["日", "一", "二", "三", "四", "五", "六"],
    }
  },
  watch: {
    value (newValue) {
      // 监控value值变化 重新渲染页面
      // 根据最新的value 来更新 this.time / this.tempTime
      let { year, month, day } = getYearMonthDay(newValue);
      this.time = {
        year,
        month,
        day
      };
      this.tempTime = { ...this.time }; // 拷贝一个time属性用于后续选择的更改
    }
  },
  computed: {
    formatDate () {
      const { year, month, day } = this.time;
      return `${year}-${(month + 1 + "").padStart(2, 0)}-${(day + "").padStart(2, 0)}`;  // 补0操作
    },
    visibleData () {
      let firstDay = new Date(this.tempTime.year, this.tempTime.month, 1); // 获取当前1号
      let weekDay = firstDay.getDay(); // 获取当前1号是星期几
      weekDay = weekDay === 0 ? 7 : weekDay;  // 注意 周日为0
      let start = firstDay - weekDay * 24 * 60 * 60 * 1000; // 让当前可视区域的开始调整到当前的开始部分
      let arr = []; // 循环42个
      for (let i = 0; i < 42; i++) {
        arr.push(new Date(start + i * 24 * 60 * 60 * 1000));
      }
      return arr;
    },
  },
  methods: {
    handleFocus () {
      this.isVisible = true;
    },
    handleBlur () {
      this.isVisible = false;
    },
    getCurrentDate (i, j) {
      return this.visibleData[(i - 1) * 7 + (j - 1)];
    },
    // 更改年月 让系统自己算 不要自己考虑边界情况
    changeYear (count) {
      const oldDate = new Date(this.tempTime.year, this.tempTime.month);
      const newDate = oldDate.setFullYear(oldDate.getFullYear() + count);
      let { year } = getYearMonthDay(new Date(newDate));
      this.tempTime.year = year;
    },
    changeMonth (count) {
      const oldDate = new Date(this.tempTime.year, this.tempTime.month);
      const newDate = oldDate.setMonth(oldDate.getMonth() + count);
      let { year, month } = getYearMonthDay(new Date(newDate));
      this.tempTime.year = year;
      this.tempTime.month = month;
    },
    selectDate (date) {
      this.$emit("input", date); // 更改日期
      this.handleBlur(); // 隐藏面板
    },
    isSelect (date) {
      let { year, month, day } = this.time; // 当前选中的年月日
      let { year: y, month: m, day: d } = getYearMonthDay(date);
      return year === y && month === m && day === d;
    },
    isToday (date) {
      let { year, month, day } = getYearMonthDay(new Date()); // 当前的年月日
      let { year: y, month: m, day: d } = getYearMonthDay(date);
      return year === y && month == m && day === d;
    },
    isCurrentMonth (date) {
      let { year, month } = this.tempTime;  // 当前选中的年月
      let { year: y, month: m } = getYearMonthDay(date);
      return year === y && month === m;
    }
  }
}
</script>
<style lang='scss' scoped>
@import "./date-picker.scss";
</style>
