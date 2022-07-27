import XModal from './modal.vue'

XModal.install = function(Vue) {
  Vue.component(XModal.name, XModal)
}

export default XModal