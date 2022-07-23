<template>
  <div class="x-input-number" :class="[{'is-disabled':disabled},`x-input-number-${size}`]">
    <span class="decrease" @click="decrease" :class="{disabled:minDisabled}">-</span>
    <span class="increase" @click="increase" :class="{disabled:maxDisabled}">+</span>
    <input :value="currentInputValue" @change="handleInputChange" :disabled="disabled" />
  </div>
</template>
<script>
export default {
  name: 'XInputNumber',
  props: {
    value: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: -Infinity
    },
    max: {
      type: Number,
      default: Infinity
    },
    step: {
      type: Number,
      default: 1
    },
    precision: {  // precision 的值必须是一个非负整数，并且不能小于 step 的小数位数。
      type: Number,
      validator (val) {
        return val >= 0 && val === parseInt(val, 10);
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'md'
    }
  },
  data () {
    return {
      currentValue: 0
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (value) {
        //Number() 函数把对象的值转换为数字。
        let newVal = value === undefined ? value : Number(value);
        if (newVal !== undefined) {
          if (isNaN(newVal)) {
            return;
          }
          if (this.precision !== undefined) {
            //如果数值精度存在，将数字按精度转换
            newVal = this.toPrecision(newVal, this.precision);
          }
        }
        if (newVal >= this.max) newVal = this.max;
        if (newVal <= this.min) newVal = this.min;
        this.currentValue = newVal;
        this.$emit('input', newVal);
      }
    }
  },
  computed: {
    currentInputValue () {
      const currentValue = this.currentValue;
      if (typeof currentValue === 'number' && this.precision !== undefined) {
        return currentValue.toFixed(this.precision);
      } else {
        return currentValue;
      }
    },
    // 返回当前减号是否被禁用
    minDisabled () {
      // 当前值-计数器步长<最小值时，减号被禁用，不能再继续减
      return this._decrease(this.value, this.step) < this.min;
    },
    maxDisabled () {
      return this._increase(this.value, this.step) > this.max;
    },
    numPrecision () {
      const { value, step, getPrecision, precision } = this;
      const stepPrecision = getPrecision(step);
      if (precision !== undefined) {
        if (stepPrecision > precision) {
          console.warn('[InputNumber]precision should not be less than the decimal places of step');
        }
        return precision;
      } else {
        return Math.max(getPrecision(value), stepPrecision);
      }
    },
  },
  methods: {
    getPrecision (value) {
      if (value === undefined) return 0;
      const valueString = value.toString();
      const dotPosition = valueString.indexOf('.');
      let precision = 0;
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1;
      }
      return precision;
    },
    toPrecision (num, precision) {
      if (precision === undefined) precision = this.numPrecision;
      return parseFloat(Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision));
    },
    _increase (val, step) {
      if (typeof val !== 'number' && val !== undefined) return this.currentValue;
      const precisionFactor = Math.pow(10, this.numPrecision);
      return this.toPrecision((precisionFactor * val + precisionFactor * step) / precisionFactor);
    },
    _decrease (val, step) {
      if (typeof val !== 'number' && val !== undefined) return this.currentValue;
      const precisionFactor = Math.pow(10, this.numPrecision);
      return this.toPrecision((precisionFactor * val - precisionFactor * step) / precisionFactor);
    },
    increase () {
      if (this.disabled || this.maxDisabled) return;
      const value = this.value || 0;
      const newVal = this._increase(value, this.step);
      this.setCurrentValue(newVal);
    },
    decrease () {
      if (this.disabled || this.minDisabled) return;
      const value = this.value || 0;
      const newVal = this._decrease(value, this.step);
      this.setCurrentValue(newVal);
    },
    setCurrentValue (newVal) {
      const oldVal = this.currentValue;
      if (typeof newVal === 'number' && this.precision !== undefined) {
        newVal = this.toPrecision(newVal, this.precision);
      }
      if (newVal >= this.max) newVal = this.max;
      if (newVal <= this.min) newVal = this.min;
      if (oldVal === newVal) return;
      //改变input的当前值
      this.$emit('input', newVal);
      this.$emit('change', newVal);
      this.currentValue = newVal;
    },
    handleInputChange (e) {
      let value = e.target.value;
      const newVal = value === '' ? undefined : Number(value);
      if (!isNaN(newVal) || value === '') {
        this.setCurrentValue(newVal);
      }
    }
  },

}
</script>
<style lang="scss" scoped>
@import "./input-number.scss";
</style>
