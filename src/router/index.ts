import { createRouter, createWebHashHistory } from 'vue-router'
import ProductRoutes from './modules/product'
import MediaRoutes from './modules/media'
import OrderRoutes from './modules/order'
import PermissionRoutes from './modules/permission'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useContainerStore } from '@/stores/contanier'

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
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      notAuthenticated: true // 不需要权限的页面，默认没有改属性即需要权限
    }
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/template.vue'),
    meta: {
      title: '登录',
      notAuthenticated: true // 不需要权限的页面，默认没有改属性即需要权限
    }
  }

]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  const container = useContainerStore()
  if (!to.meta?.notAuthenticated && !container.user) {
    return next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
