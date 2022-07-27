import XProgress from './progress.vue'

XProgress.install = function(Vue) {
  Vue.component(XProgress.name, XProgress)
}

export default XProgress