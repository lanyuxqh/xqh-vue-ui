import XSkeleton from './skeleton.vue'

XSkeleton.install = function(Vue) {
  Vue.component(XSkeleton.name, XSkeleton)
}

export default XSkeleton