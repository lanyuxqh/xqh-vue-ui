import XCollapse from './collapse.vue'
import XCollapseItem from './collapse-item.vue'

XCollapse.install = function(Vue) {
  Vue.component(XCollapse.name, XCollapse)
  Vue.component(XCollapseItem.name, XCollapseItem)
}

export default XCollapse