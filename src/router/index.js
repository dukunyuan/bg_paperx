import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/welcome',
      name: 'home',
      component: () => import('../pages/home.vue')
    }
  ]
})
