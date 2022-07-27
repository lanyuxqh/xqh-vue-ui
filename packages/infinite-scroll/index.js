import XInfiniteScroll from './infinite-scroll.js'

XInfiniteScroll.install = function(Vue) {
  Vue.directive(XInfiniteScroll.name, XInfiniteScroll)
}

export default XInfiniteScroll