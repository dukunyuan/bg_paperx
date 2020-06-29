<template>
  <div class="header">
    header
    <!--logo-->
    <el-img src='static/img_three/h.jpg'></el-img>
    <!--登陆-->
    <el-button type="text" @click="loginDialog = true">登陆</el-button>
    <!--登陆dialog-->
  
  </div>
</template>

<script>
  export default {
    name: 'homeHeader',
    data() {
      return {
        loginDialog: false
      }
    },
      methods: {
  
      }
  }
</script>

<style>
</style>
