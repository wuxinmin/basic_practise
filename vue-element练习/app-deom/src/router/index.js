import Vue from 'vue'
import VueRouter from 'vue-router'
import Application from '../views/Application.vue'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/application',
    name: 'application',
    component: Application
  },
  // 第二种方式
  {
    path: '/config',
    name: 'config',
    component: () => import('../views/Config.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
