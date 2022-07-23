<template>
  <div class="x-select" :class="[disabled?`is-disabled`:'']" :style="{width: parseInt(width) < 100 ? '100px' : width,height :parseInt(height) < 25 ? '25px' : height}" v-clickoutside="handleClose">
    <div class="x-select-input" @click="focus">
      <input type="text" :readonly="!searchable" :placeholder="selectVal === '' ? placeholder : selectVal" :disabled="disabled" @input="search" :value="selectVal" />
      <x-icon :icon="iconName" :size="14" color="#94969b"></x-icon>
    </div>
    <transition name="x-slide-fade">
      <div class="x-select-option" v-if="isShow">
        <ul>
          <li v-for="(item, index) in optionsData" :key="index" @click="selectChange(item, index)" :class="{
                'is-active':
                  activeIndex == index ||
                  selectVal == item[labelFiled] ||
                  item.selected,
                'is-disabled': item.disabled,
              }">
            {{ item[labelFiled] }}
            <x-icon icon="check" color="#0e80eb" :size="16" v-if="multiple && item.selected"></x-icon>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.directive('clickoutside', {
  bind: function (el, binding, vode) {
    function documentHandler (e) {
      if (el.contains(e.target)) {
        return false
      }
      if (binding.expression) {
        binding.value(e)
      }
    }
    el.__vueClickOutSide__ = documentHandler
    document.addEventListener('click', documentHandler)
  },
  unbind: function (el, binding) {
    document.removeEventListener('click', el.__vueClickOutSide__)
    delete el.__vueClickOutSide__
  }
})
export default {
  name: 'XSelect',
  props: {
    placeholder: String,
    value: String | Array,
    options: {
      type: Array,
      default: () => {
        return [];
      },
    },
    disabled: Boolean,
    //默认需要显示的label字段
    labelFiled: {
      type: String,
      default: "label",
    },
    //默认需要显示的value字段
    valueFiled: {
      type: String,
      default: "value",
    },
    multiple: Boolean,
    searchable: Boolean,
    width: {
      type: String,
      default: "260px",
    },
    height: {
      type: String,
      default: "",
    },
  },
  data () {
    return {
      isShow: false,
      activeIndex: -1,
      selectVal: this.multiple
        ? this.value.map(value => {
          return this.options.filter(item => {
            if (item[this.valueFiled] === value) {
              item.selected = true;
              return item;
            }
          }).map(item => item[this.labelFiled])
        })
        : this.value != ""
          ? this.options.filter((item) => {
            return item[this.valueFiled] == this.value;
          })[0][this.labelFiled]
          : "",
      optionsData: this.options ? this.options : [],
      values: [],
      indexs: []
    }
  },
  computed: {
    iconName () {
      return this.isShow ? 'up' : 'down'
    }
  },
  methods: {
    focus () {
      if (this.disabled) return;
      this.isShow = !this.isShow
    },
    selectChange (item, index) {
      if (!this.multiple) {
        if (item.disabled) return;
        this.activeIndex = index;
        this.selectVal = item[this.labelFiled];
        this.$emit("input", this.selectVal);
        this.$emit("change", { lable: item[this.labelFiled], value: item[this.valueFiled], index: index }, index);
        this.isShow = false;
      } else {
        if (item.disabled) return;
        Array.prototype.indexOf = function (val) {
          for (var i = 0; i < this.length; i++) {
            if (this[i] == val) return i;
          }
          return -1;
        };
        item.selected = !item.selected;
        if (item.selected) {
          this.selectVal.push(item[this.labelFiled]);
          this.values.push(item[this.valueFiled]);
          this.indexs.push(index);
        } else {
          this.selectVal.splice(this.selectVal.indexOf(item[this.labelFiled]), 1);
          this.values.splice(this.values.indexOf(item[this.valueFiled]), 1);
          this.indexs.splice(this.indexs.indexOf(index), 1);
        }
        this.$emit("input", this.selectVal);
        this.$emit("change", { lables: this.selectVal, values: this.values, index: this.indexs }, index);
      }
    },
    search (e) {
      this.selectVal = e.target.value;
      this.optionsData = [];
      let filterList = this.options.filter((item) => {
        return item[this.labelFiled].indexOf(e.target.value) != -1;
      });
      filterList.forEach((item) => {
        this.optionsData.push(item);
      });
    },
    handleClose () {
      this.isShow = false;
    }
  },
}
</script>
<style lang="scss" scoped>
@import "./select.scss";
</style>
