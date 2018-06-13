// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入官方组件
import router from './router'
import VueResource from 'vue-resource'
// 引入自定义样式
import './assets/css/normalize.css'
import './assets/css/main.css'
// 引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入eharts
import echarts from 'echarts'
// 引入font-awesome
import 'font-awesome/css/font-awesome.css'

Vue.use(VueResource)
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
