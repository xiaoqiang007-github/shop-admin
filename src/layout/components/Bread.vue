<template>
  <el-breadcrumb
    separator="/"
  >
    <el-breadcrumb-item
      v-for="item in routes"
      :key="item.path"
    >
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// import routes from '@/router/index'
// console.log('routes', routes.currentRoute.value.meta)
import { useRouter } from 'vue-router'
const router = useRouter()
const routes = computed(() => {
  return router.currentRoute.value.matched.filter(item => item.meta.title)
})
</script>

<style scoped>

</style>
