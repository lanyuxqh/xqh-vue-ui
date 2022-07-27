import XCard from './card.vue'

XCard.install = function(Vue) {
  Vue.component(XCard.name, XCard)
}

export default XCard