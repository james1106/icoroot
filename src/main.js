// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import store from './store'
import router from './router'
import ECharts from 'vue-echarts/components/ECharts.vue'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './common/stylus/index.styl'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/pie'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://39.108.117.192:8080'
axios.defaults.headers.post['Content-Type'] = 'application/json'

Vue.use(BootstrapVue)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('common/images/error.png'),
  loading: require('common/images/loading.gif'),
  attempt: 1
})
Vue.component('pie', ECharts)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
