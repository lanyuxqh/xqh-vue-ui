import XContainer from './container.vue'

XContainer.install = function(Vue) {
  Vue.component(XContainer.name, XContainer)
}

export default XContainer