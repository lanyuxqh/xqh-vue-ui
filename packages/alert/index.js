import XAlert from './alert.vue'

XAlert.install = function(Vue) {
  Vue.component(XAlert.name, XAlert)
}

export default XAlert