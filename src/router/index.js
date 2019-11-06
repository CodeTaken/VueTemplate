import Vue from 'vue'
import Router from 'vue-router'
import store  from '../store'

// 路由懒加载
const Home = ()=> import('../pages/Home/Home')
const Other = ()=> import('../pages/Other/Other')
// 或 import Home from '../pages/Home/Home'
// 或 const Home =  () => import(/* webpackChunkName: 'basicHome' */ '../pages/Home/Home')
Vue.use(Router)


const router = new Router({
  // mode: 'history',
  // base: 'dist/',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title:'demo-首页',
        headerStatus: true,
        tabStatus: true
      },
      beforeEnter(to,from,next){
        console.log('beforeEnter');
        console.log(to);
        console.log(from);
        next()
      }
    },
    {
      path: '/other',
      name: 'Other',
      component: Other,
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

// 路由的前置守卫
router.beforeEach((to, from, next) => {
  console.log('beforeEach');
  console.log(to);
  console.log(from);
  next()
});
export default router
