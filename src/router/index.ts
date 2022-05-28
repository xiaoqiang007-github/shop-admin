import { createRouter, createWebHashHistory } from 'vue-router'
import ProductRoutes from './modules/product'
const routes = [
  {
    path: '/',
    name: 'wrapper',
    component: () => import('@/layout/components/AppLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/login.vue')
      },
      ProductRoutes
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  }
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes
})

export default router
