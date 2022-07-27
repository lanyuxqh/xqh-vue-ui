import XPopover from './popover.vue'

XPopover.install = function(Vue) {
  Vue.component(XPopover.name, XPopover)
}

export default XPopover