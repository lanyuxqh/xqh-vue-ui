import XMain from './main.vue'

XMain.install = function(Vue) {
  Vue.component(XMain.name, XMain)
}

export default XMain