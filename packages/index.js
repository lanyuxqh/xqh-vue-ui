// import './style/fonts/iconfont.css'  // iconfont
// import './style/fonts/icon.css'  // iconfont cdn-link
import '@/style/icon.js' // svg
import '@/style/xqh-icon.js' // svg

// 所有组件的入口
import XIcon from './icon'
import XRow from './row'
import XCol from './col'
import XContainer from './container'
import XHeader from './header'
import XFooter from './footer'
import XMain from './main'
import XAside from './aside'
import XButton from './button'
import XButtonGroup from './button-group'
import XInput from './input'
import XInputNumber from './input-number'
import XDatePicker from './date-picker'
import XProgress from './progress'
import XUpload from './upload'
import XTable from './table'
import XPagination from './pagination'
import XPopover from './popover'
import XTab from './tab'
import XToast from './toast'
import XCollapse from './collapse'
import XSpread from './spread'
import XCarousel from './carousel'
import XInfiniteScroll from './infinite-scroll'
import XGoTopBottom from './go-top-bottom'
import XRadio from './radio'
import XRadioGroup from './radio-group'
import XCheckbox from './checkbox'
import XCheckboxGroup from './checkbox-group'
import XSwitch from './switch'
import XBadge from './badge'
import XRate from './rate'
import XLoading from './loading'
import XSkeleton from './skeleton'
import XLazy from './lazy'
import XAlert from './alert'
import XModal from './modal'
import XDrawer from './drawer'
import XCard from './card'
import XTag from './tag'
import XAvatar from './avatar'
import XList from './list'
import XDivider from './divider'
import XSelect from './select'
import XSpace from './space'
import XTextarea from './textarea'

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
  XCollapse,
  XSpread,
  XCarousel,
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
  XTextarea,
  XLoading,
  XToast,
  XInfiniteScroll,
  XLazy
]

// 全局注册组件
const install = Vue => {
  if (install.installed) return
  components.forEach(c => {
    Vue.use(c)
  })
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
  install,
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
  XCollapse,
  XSpread,
  XCarousel,
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
  XTextarea,
  XLoading,
  XToast,
  XInfiniteScroll,
  XLazy
}
