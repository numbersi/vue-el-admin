import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store'
import VueDND from 'awe-dnd'
import '../mock'

Vue.use(VueDND)

// 引入全局配置文件
import $conf from '@/common/config/config.js'
Vue.prototype.$conf = $conf

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
