<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
  >
  <HelloWorld
    ref="helloWorld"
    msg="Hello Vue 3 + TypeScript + Vite"
  />
  <router-link to="/">
    Go to Home
  </router-link>
  <br>
  <router-link to="/login">
    Go to Login
  </router-link>
  <router-view />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// Module '"vue"' has no default export.  使用vetur会出现这个报错 vue3还是得用volar这个插件,安装后就没有报错了
import HelloWorld from './components/HelloWorld.vue'

defineProps<{msg: string}>()

// InstanceType 指定组件实例类型，这样就可以正常访问属性了
const helloWorld = ref<InstanceType<typeof HelloWorld> | null>(null)

onMounted(() => {
  console.log(helloWorld.value)
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
