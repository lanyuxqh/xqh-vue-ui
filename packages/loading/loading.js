import XLoading from './loading.vue'

export default {
  install(Vue) {
    Vue.component(XLoading.name, XLoading)
    Vue.prototype.$xShowLoading = function (options) {
      let Constructor = Vue.extend(XLoading)
      let node = new Constructor({
        propsData: options
      })
      node.vm = node.$mount()
      document.body.appendChild(node.$el)
    }
    Vue.prototype.$xHideLoading = function () {
      document.body.childNodes.forEach(item => {
        if (item.className === 'x-loading') {
          document.body.removeChild(item)
        }
      })
    }
  }
}
