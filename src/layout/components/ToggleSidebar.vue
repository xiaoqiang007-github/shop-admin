<template>
  <el-icon @click="container.setIsCollapse(!container.isCollapse)">
    <Fold
      :size="24"
      color="black"
      v-if="!container.isCollapse"
    />
    <Folder
      :size="24"
      color="black"
      v-else
    />
  </el-icon>
</template>

<script setup lang="ts">
import { useContainerStore } from '@/stores/contanier'
import { Fold, Folder } from '@element-plus/icons-vue'
const container = useContainerStore()
</script>

<style lang="scss" scoped>
</style>
