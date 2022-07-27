import XSpread from './spread.vue'

XSpread.install = function(Vue) {
  Vue.component(XSpread.name, XSpread)
}

export default XSpread