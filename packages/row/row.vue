<template>
  <div class="x-row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XRow',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    justify: {
      type: String,
      default: 'start',
    },
    align: {
      tyep: String,
      default: 'center'
    },
  },
  provide () {
    return {
      gutter: this.gutter
    }
  },
  computed: {
    rowStyle () {
      // 消除最左和最右两个col的左侧间隔和右侧间隔
      const margin = this.gutter ? { marginLeft: -this.gutter / 2 + 'px', marginRight: -this.gutter / 2 + 'px' } : ''
      const justifyContent = ['start', 'end'].includes(this.justify) ? 'flex-' + this.justify : this.justify
      const alignItems = ['start', 'end'].includes(this.align) ? 'flex-' + this.align : this.align
      return {
        'display': 'flex',
        'justify-content': justifyContent,
        'align-items': alignItems,
        ...margin
      }
    }
  },
}
</script>