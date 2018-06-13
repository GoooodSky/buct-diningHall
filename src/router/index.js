import Vue from 'vue'
import Router from 'vue-router'
import gauge from 'components/gauge'
import history from 'components/history'
import recommend from 'components/recommend'
import ranking from 'components/ranking'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    },
    {
      path: '/gauge',
      name: 'gauge',
      component: gauge
    },
    {
      path: '/history',
      name: 'history',
      component: history
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: ranking
    }
  ]
})
