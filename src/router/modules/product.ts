// 根据模块拆分路由表
import { RouteRecordRaw } from 'vue-router'
// 报错 Initial list of routes that should be added to the router.
const routers: RouteRecordRaw = {
  path: '/product',
  name: 'product',
  component: () => import('@/views/product/index.vue'),
  children: [
    {
      path: 'product_list',
      name: 'product_list',
      component: () => import('@/views/product/list/index.vue')
    },
    {
      path: 'product_classify',
      name: 'product_classify',
      component: () => import('@/views/product/classify/index.vue')
    },
    {
      path: 'product_attr',
      name: 'product_attr',
      component: () => import('@/views/product/attr/index.vue')
    },
    {
      path: 'product_reply',
      name: 'product_reply',
      component: () => import('@/views/product/reply/index.vue')
    }
  ]
}

export default routers
