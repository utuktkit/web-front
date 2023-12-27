// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/iconfont/iconfont.css'
import './assets/iconfont1/iconfont.css'

import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-persistedstate-plugin'

const pinia = createPinia()
const persist = createPersistedState()

pinia.use(persist)
Vue.use(pinia)

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')