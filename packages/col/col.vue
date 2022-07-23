<template>
  <div class="x-col" :class="colClass" :style='colStyle'>
    <slot></slot>
  </div>
</template>

<script>
import classNames from "@/utils/classNames";
export default {
  name: 'XCol',
  inject: ['gutter'],
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    colClass () {
      const classes = []
      const sizeTypes = ["xs", "sm", "md", "lg", "xl"];
      ["xs", "sm", "md", "lg", "xl"].forEach(type => {
        if (typeof this[type] === "object") {
          let { span, offset } = this[type];
          span && classes.push(`x-col-${type}-${span}`); // x-col-xs-1
          offset && classes.push(`x-col-${type}-offset-${offset}`); // x-col-xs-offset-1
        } else {
          this[type] && classes.push(`x-col-${type}-${this[type]}`); // x-col-xs-1
        }
      });
      return classNames([
        this.span ? `x-col-${this.span}` : '',  // x-col-1
        this.offset ? `x-col-offset-${this.offset}` : '',  // // x-col-offset-1
        ...classes
      ])
    },
    colStyle () {
      let style = {}
      if (this.gutter) {
        style = {
          ...style,
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px',
        }
      }
      return style
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./col.scss";
</style>