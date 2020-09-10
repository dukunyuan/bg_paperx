import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/welcome',
      name: 'home',
      component: () => import('../pages/home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../pages/order.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    let token = localStorage.getItem('token')
    if (token === 'null' || token === '') {
      next('/login')
    } else {
      next()
    }
  }
})
export default router
