<template>
  <div class="x-collapse-item" @click="toggle">
    <div class="title">
      {{title}}
    </div>
    <x-spread>
      <div class="content" v-if="open">
        <slot></slot>
      </div>
    </x-spread>
  </div>
</template>
<script>
export default {
  name: 'XCollapseItem',
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String
    }
  },
  inject: ['eventBus'],
  data () {
    return {
      open: false,
    }
  },
  mounted () {
    this.eventBus && this.eventBus.$on('update:selected', (names) => {
      if (names.indexOf(this.name) >= 0) {
        this.open = true
      } else {
        this.open = false
      }
    })
  },
  methods: {
    toggle () {
      if (this.open) {
        this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
      } else {
        this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
      }
    },
  }
}
</script>
<style lang="scss" scoped>
.x-collapse-item {
  .title {
    border: 1px solid #999;
    padding: 0 8px;
    min-height: 32px;
    display: flex;
    align-items: center;
    margin-top: -1px;
    margin-left: -1px;
    margin-bottom: -1px;
    margin-right: -1px;
    background-color: #e2e6e9;
  }
  &:first-child {
    .title {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  &:last-child {
    .title:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  .content {
    padding: 8px;
  }
}
</style>
