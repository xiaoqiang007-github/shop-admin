<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ container.user?.account }}
      <i class="el-icon-arrow-down el-icon--right" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { useContainerStore } from '@/stores/contanier'
const container = useContainerStore()
</script>

<style lang="scss" scoped></style>
