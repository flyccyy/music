import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    name:'navbar',
    path: '/',
    component: () => import('@/views/navbar'),
    children: [
      {
        name:'recommend',
        path: 'recommend',
        component: () => import('@/views/recommend')
      },
      {
        name:'singer',
        path: 'singer',
        component: () => import('@/views/singer')
      },
      {
        name:'rank',
        path: 'rank',
        component: () => import('@/views/rank')
      },
      {
        name:'search',
        path: 'search',
        component: () => import('@/views/search')
      },
    ]
  }
]
const router = new VueRouter({
  routes
})
export default router
