import XLazy from './lazy.js'

XLazy.install = function(Vue) {
  Vue.directive(XLazy.name, XLazy)
}

export default XLazy