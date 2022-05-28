<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="rgb(217, 236, 255)"
    @open="handleOpen"
    @close="handleClose"
    router
    :collapse="container.isCollapse"
  >
    <el-menu-item index="/">
      <el-icon><icon-menu /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="/product">
      <template #title>
        <el-icon><location /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/product_list">
        商品列表
      </el-menu-item>
      <el-menu-item index="/product/product_classify">
        商品分类
      </el-menu-item>
      <el-menu-item index="/product/product_attr">
        商品规格
      </el-menu-item>
      <el-menu-item index="/product/product_reply">
        商品评论
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/order">
      <template #title>
        <el-icon><location /></el-icon>
        <span>订单</span>
      </template>
      <el-menu-item index="/order/list">
        订单列表
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/media">
      <el-icon><icon-menu /></el-icon>
      <span>媒体</span>
    </el-menu-item>
    <el-sub-menu index="/permission">
      <template #title>
        <el-icon><location /></el-icon>
        <span>权限</span>
      </template>
      <el-menu-item index="/permission/role">
        角色
      </el-menu-item>
      <el-menu-item index="/permission/admin">
        管理员
      </el-menu-item>
      <el-menu-item index="/permission/rule">
        权限规则
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { useContainerStore } from '@/stores/contanier'
import {
  Menu as IconMenu,
  Location
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const container = useContainerStore()
</script>

<style lang="scss" scoped>
::v-deep.el-menu {
  background-color: rgb(217, 236, 255);
  border-right: none;
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
