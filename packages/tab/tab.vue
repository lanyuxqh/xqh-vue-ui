<template>
  <div class="x-tab">
    <ul class="x-tab-nav" :class="{'is-card':type==='card'}">
      <li v-for="item in navList" :key="item.name" :class="{'is-active':item.name===value,'is-disabled':item.disabled}" @click="handleClick($event,item)">
        <x-icon v-if="item.icon" :icon="item.icon"></x-icon>
        {{item.label}}
      </li>
    </ul>
    <slot />
  </div>
</template>
<script>
export default {
  name: 'XTab',
  props: {
    value: {
      type: String,
      required: true
    },
    type: {
      type: String
    },
  },
  data () {
    return {
      navList: []
    }
  },
  mounted () {
    this.initNav()
    this.initSeleced()
  },
  methods: {
    initNav () {
      this.layer(item => {
        let result = {
          label: item.label,
          name: item.name,
          icon: item.icon,
          disabled: item.disabled
        };
        // 放入导航数组里面
        this.navList.push(result);
      });
    },
    initSeleced () {
      this.layer(item => (item.visible = item.name === this.value));
    },
    layer (task) {
      let allSlots = this.$slots.default;
      // 这里是用来去除$slots.default中的空节点
      let tabSlots = allSlots.filter(item => {
        if (item.tag) {
          return item
        } else return
      })
      tabSlots.map(item => task(item.componentInstance));
    },
    handleClick (e, item) {
      if (item.disabled) return;
      this.$emit("input", item.name);
      this.$emit("tab-click", e);
      this.$nextTick(() => {
        this.initSeleced()
      })
    },
  },
}
</script>
<style lang='scss' scoped>
@import "./tab.scss";
</style>
