import XToast from './toast.vue'

let currentToast
export default {
  install(Vue) {
    Vue.prototype.$xToast = function (toastOptions) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        toastOptions,
        onClose: () => {
          currentToast = null
        }
      })
    }
  }
}
function createToast({ Vue, toastOptions, onClose }) {
  let construstor = Vue.extend(XToast),
    toast
  if (typeof toastOptions === 'object' && toastOptions instanceof Object) {
    toast = new construstor({ propsData: toastOptions })
    toast.$slots.default = [toastOptions.message]
  } else if (typeof toastOptions === 'string') {
    toast = new construstor()
    toast.$slots.default = [toastOptions]
  }
  toast.$mount()
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el)
  return toast
}
