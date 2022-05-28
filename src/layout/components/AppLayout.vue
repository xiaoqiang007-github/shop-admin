<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <AppAside />
      </el-aside>
      <el-container>
        <el-header>
          <ToggleSidebar />
          <Bread />
          <FullScreen />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import AppAside from './AppAside.vue'
import ToggleSidebar from './ToggleSidebar.vue'
import Bread from './Bread.vue'
import FullScreen from './FullScreen.vue'
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
  .el-header {
    display: flex;
    align-items: center;
    background-color: rgb(198, 226, 225);
  }

  .el-aside {
    width: auto;
    background-color: rgb(217, 236, 255);
  }
  .el-main {
    background-color: rgb(236, 245, 255);
  }
}
</style>
