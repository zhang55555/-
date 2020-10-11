import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/:qid',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/newPage2',
    redirect: '/newPage1'
  }, {
    path: '/newPage1',
    name: 'newPage1',
    beforeEnter: (to, from, next) => {
      next()
    },
    component: () => import('../views/newPage1.vue'),
    children: [
      {
        name: 'zql',
        path: '/zql',
        component: () => import('../views/zql.vue')
      },
      {
        name: 'ybh',
        path: '/ybh',
        component: () => import('../views/ybh.vue')
      },
      {
        name: 'nzq',
        path: '/nzq',
        component: () => import('../views/nzq.vue')
      },
      {
        name: 'bxw',
        path: '/bxw',
        component: () => import('../views/bxw.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
// router.beforeEach((to,from,next)=>{
//   console.log(1234);
//   next()
// })
export default router
