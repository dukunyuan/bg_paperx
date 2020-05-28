<template>
  <div class="main">
    <!-- 路由对应组件 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='stylus'>
.main {
  width 100%
  height 100%
}
</style>
