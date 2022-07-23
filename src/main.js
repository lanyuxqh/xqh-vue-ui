import Vue from 'vue'
import App from './App.vue'
import xqhVueUi from '../packages'

Vue.config.productionTip = false

Vue.use(xqhVueUi)

new Vue({
  render: h => h(App)
}).$mount('#app')
