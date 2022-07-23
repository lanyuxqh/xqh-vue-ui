// import './style/fonts/iconfont.css'  // iconfont
// import './style/fonts/icon.css'  // iconfont cdn-link
import './style/icon.js' // svg
import './style/xqh-icon.js' // svg

// 所有组件的入口
import XIcon from './icon/icon.vue'
import XRow from './row/row.vue'
import XCol from './col/col.vue'
import XContainer from './container/container.vue'
import XHeader from './container/header.vue'
import XFooter from './container/footer.vue'
import XMain from './container/main.vue'
import XAside from './container/aside.vue'
import XButton from './button/button.vue'
import XButtonGroup from './button-group/button-group.vue'
import XInput from './input/input.vue'
import XInputNumber from './input-number/input-number.vue'
import XDatePicker from './date-picker/date-picker.vue'
import XProgress from './progress/progress.vue'
import XUpload from './upload/upload.vue'
import XTable from './table/table.vue'
import XPagination from './pagination/pagination.vue'
import XPopover from './popover/popover.vue'
import XTab from './tab/tab.vue'
import XTabPane from './tab/tab-pane.vue'
import XToast from './toast/toast.js'
import XCollapse from './collapse/collapse.vue'
import XCollapseItem from './collapse/collapse-item.vue'
import XSpread from './spread/spread.vue'
import XCarousel from './carousel/carousel.vue'
import XCarouselItem from './carousel/carousel-item.vue'
import XInfiniteScroll from './infinite-scroll/infinite-scroll.js'
import XGoTopBottom from './go-top-bottom/go-top-bottom'
import XRadio from './radio/radio.vue'
import XRadioGroup from './radio/radio-group.vue'
import XCheckbox from './checkbox/checkbox.vue'
import XCheckboxGroup from './checkbox/checkbox-group'
import XSwitch from './switch/switch.vue'
import XBadge from './badge/badge.vue'
import XRate from './rate/rate.vue'
import XLoading from './loading/loading.js'
import XSkeleton from './skeleton/skeleton.vue'
import XLazy from './lazy/lazy.js'
import XAlert from './alert/alert.vue'
import XModal from './modal/modal.vue'
import XDrawer from './drawer/drawer.vue'
import XCard from './card/card.vue'
import XTag from './tag/tag.vue'
import XAvatar from './avatar/avatar.vue'
import XList from './list/list.vue'
import XDivider from './divider/divider.vue'
import XSelect from './select/select.vue'
import XSpace from './space/space.vue'
import XTextarea from './textarea/textarea.vue'

const components = [
  XIcon,
  XRow,
  XCol,
  XContainer,
  XHeader,
  XFooter,
  XMain,
  XAside,
  XButton,
  XButtonGroup,
  XInput,
  XInputNumber,
  XDatePicker,
  XProgress,
  XUpload,
  XTable,
  XPagination,
  XPopover,
  XTab,
  XTabPane,
  XCollapse,
  XCollapseItem,
  XSpread,
  XCarousel,
  XCarouselItem,
  XGoTopBottom,
  XRadio,
  XRadioGroup,
  XCheckbox,
  XCheckboxGroup,
  XSwitch,
  XBadge,
  XRate,
  XSkeleton,
  XAlert,
  XModal,
  XDrawer,
  XCard,
  XTag,
  XAvatar,
  XList,
  XDivider,
  XSelect,
  XSpace,
  XTextarea
]

// 全局注册组件
const install = Vue => {
  components.forEach(c => {
    Vue.component(c.name, c)
  })
  Vue.use(XToast)
  Vue.use(XLoading)
  Vue.directive(XInfiniteScroll.name, XInfiniteScroll)
  Vue.directive(XLazy.name, XLazy)
}

// const req = require.context('@/icons/svg', false, /\.svg$/)
// req.keys().map(req)

/**
 * 有可能组件会通过script标签引入，如<script src='https://xxx/xqh-vue-ui'></script>
 */
if (typeof Window.Vue !== 'undefined') {
  install(Vue) // 全局直接通过script 引用的方式会默认调用install方法
}

export default {
  install
}
