<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <AppAside />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import AppAside from './AppAside.vue'
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
  .el-header {
    background-color: rgb(198, 226, 225);
  }

  .el-aside {
    background-color: rgb(217, 236, 255);
  }
  .el-main {
    background-color: rgb(236, 245, 255);
  }
}
</style>
