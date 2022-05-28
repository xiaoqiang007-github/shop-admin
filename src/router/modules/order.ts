// 根据模块拆分路由表
import { RouteRecordRaw } from 'vue-router'
// 报错 Initial list of routes that should be added to the router.
const routers: RouteRecordRaw = {
  path: 'order',
  name: 'order',
  component: () => import('@/views/order/index.vue'),
  meta: {
    title: '订单'
  },
  children: [
    {
      path: 'list',
      name: 'order_list',
      component: () => import('@/views/order/list/index.vue'),
      meta: {
        title: '订单列表'
      }
    },
    {
      path: 'offline',
      name: 'order-offline',
      component: () => import('@/views/order/offline/index.vue'),
      meta: {
        title: '订单脱机'
      }
    }
  ]
}

export default routers
