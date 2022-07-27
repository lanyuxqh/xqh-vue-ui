import XCarousel from './carousel.vue'
import XCarouselItem from './carousel-item.vue'

XCarousel.install = function(Vue) {
  Vue.component(XCarousel.name, XCarousel)
  Vue.component(XCarouselItem.name, XCarouselItem)
}

export default XCarousel