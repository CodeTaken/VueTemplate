import Vue from 'vue'
import Router from 'vue-router'
import store  from '../store'

import Home from '../pages/Home/Home'
Vue.use(Router)


const router = new Router({
  // mode: 'history',
  // base: 'dist/',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        headerStatus:true,
        tabStatus:true
      }
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})

// 路由的前置守卫
 router.beforeEach ((to, from, next) => {
    next()
});
export default router
