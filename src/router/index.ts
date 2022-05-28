import { createRouter, createWebHashHistory } from 'vue-router'
import ProductRoutes from './modules/product'
import MediaRoutes from './modules/media'
import OrderRoutes from './modules/order'
import PermissionRoutes from './modules/permission'
const routes = [
  {
    path: '/',
    name: 'wrapper',
    component: () => import('@/layout/components/AppLayout.vue'),
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/login.vue')
      },
      ProductRoutes,
      MediaRoutes,
      OrderRoutes,
      PermissionRoutes
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: '登录'
    }
  }
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes
})

export default router
