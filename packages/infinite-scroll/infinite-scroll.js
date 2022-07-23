// 自定义用户参数 稍后和用户传入的进行合并
import throttle from 'lodash/throttle'

const getScrollContainer = el => {
  // 递归向上查找 查找带有overflow 字样的元素
  let parent = el
  while (parent) {
    if (document.documentElement == parent) {
      return window //表示没有找到
    }
    // 获取当前元素上是否有overflow属性
    const overflow = getComputedStyle(parent)['overflow-y']
    if (overflow.match(/scroll|auto/)) {
      return parent
    }
    parent = parent.parentNode
  }
}

const attributes = {
  // 节流时延
  delay: {
    default: 200
  },
  // 是否立即执行加载方法
  immediate: {
    default: true
  },
  // 触发加载的距离阈值
  distance: {
    default: 10
  },
  // 是否禁用
  disabled: {
    default: false
  }
}
// {delay: 200, immediate: true, distance: 30, disabled: false}
const getScrollOptions = (el, vm) => {
  return Object.entries(attributes).reduce((map, [key, option]) => {
    let defaultValue = option.default
    let value = el.getAttribute(`infinite-scroll-${key}`)
    value = vm[value] ? vm[value] : defaultValue
    map[key] = value
    return map
  }, {})
}

const handleScroll = function (cb) {
  let { container, el, vm, observer } = this[scope]
  // 看一下用户是否已经没有新的数据了
  let { disabled, distance } = getScrollOptions(el, vm)
  if (disabled) return // 没有更多数据了
  // 当前卷去的高度 + 可见高度= 当前滚动元素的底部显示的位置
  let scrollBottom = container.scrollTop + container.clientHeight
  // 总页面高度 - 当前滚动元素的底部显示的位置 和 需要加载的距离进行比对
  if (container.scrollHeight - scrollBottom <= distance) {
    cb()
  } else {
    if (observer) {
      // 解除监控，因为在滚动时不需要再次进行计算
      observer.disconnect()
      this[scope].observer = null
    }
  }
}

const scope = 'infinite-scroll'
export default {
  name: 'infinite-scroll',
  // 被绑定元素插入父节点时调用inserted
  // el 指令所绑定的元素，可以用来直接操作 DOM
  // binding 指令属性对象
  // vnode Vue 编译生成的虚拟节点
  inserted(el, bindings, vnode) {
    // 指令的绑定值 这里指数据的加载回调函数
    const cb = bindings.value
    // 当前VNode所在的上下文环境
    const vm = vnode.context
    // 1. 获取滚动元素 如果没有元素则直接结束
    const container = getScrollContainer(el)
    if (container !== window) {
      // 2. 获取配置的属性值
      let { delay, immediate } = getScrollOptions(el, vm)
      // 3. 滚动事件处理程序 配合节流
      let onScroll = throttle(handleScroll.bind(el, cb), delay)
      // 把所有需要别的地方需要用到的属性 都放到el的这个变量中
      el[scope] = { container, el, vm, onScroll }
      // 4. 监听滚动事件
      container.addEventListener('scroll', onScroll)
      // 5. 若立即执行加载
      if (immediate) {
        // 为观察DOM树结构发生变化：创建并返回一个观察器实例 MutationObserver
        // 当指定的DOM发生变化时，会执行回调函数 onScroll
        const observer = (el[scope].observer = new MutationObserver(onScroll))
        // 配置MutationObserver，开始观察目标节点
        observer.observe(container, {
          childList: true, // 添加、删除目标节点的子节点时会触发
          subtree: true // 目标节点或后代节点变更时都会触发
        })
        // 立即执行
        onScroll()
      }
    }
  },
  // unbind：只调用一次，指令与元素解绑时调用。
  unbind(el) {
    const { onScroll, container } = el[scope]
    if (container) {
      container.removeEventListener('scroll', onScroll)
      el[scope] = null
    }
  }
}
