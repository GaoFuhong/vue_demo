<template>
  <div>
    <img class="logo" src="./assets/logo.png" alt="logo">
    <!-- 3、使用组件标签 -->
    <hello-world></hello-world>
  </div>
</template>

<script>
// 1、引入组件
import HelloWorld from './components/HelloWord.vue'
export default {
  // 2、映射组件标签
  components: {
    HelloWorld
  }
}
</script>

<style>
  .logo {
      width: 400px;
      height: 400px;
  }
</style>
