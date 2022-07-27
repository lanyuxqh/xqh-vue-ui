import XList from './list.vue'

XList.install = function(Vue) {
  Vue.component(XList.name, XList)
}

export default XList