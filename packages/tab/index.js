import XTab from './tab.vue'
import XTabPane from "./tab-pane.vue";

XTab.install = function(Vue) {
  Vue.component(XTab.name, XTab)
  Vue.component(XTabPane.name, XTabPane)
}

export default XTab