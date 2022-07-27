import XAvatar from './avatar.vue'

XAvatar.install = function(Vue) {
  Vue.component(XAvatar.name, XAvatar)
}

export default XAvatar