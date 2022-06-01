<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ container.user?.account }}
      <i class="el-icon-arrow-down el-icon--right" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="loginOutFn">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { useContainerStore } from '@/stores/contanier'
import { ElMessage, ElMessageBox } from 'element-plus'
import { loginOut } from '@/api/user'
import { useRouter } from 'vue-router'
const container = useContainerStore()

const router = useRouter()

const loginOutFn = async () => {
  ElMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  )
    .then(async () => {
      await loginOut()
      ElMessage({
        type: 'success',
        message: '退出成功'
      })
      router.push('/login')
      // 清除用户登录信息
      container.setToken(null)
      container.setUser(null)
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已经取消退出'
      })
    })
}
</script>

<style lang="scss" scoped></style>
