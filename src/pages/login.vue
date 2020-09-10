<template>
<div>
  <!-- 头部组件 -->
  <home-header></home-header>
  <div class="box">
  <el-tabs type="border-card">
    <el-tab-pane label="注册">
      <register></register>
    </el-tab-pane>
    <el-tab-pane label="登录">
      <login></login>
    </el-tab-pane>
    <el-tab-pane label="找回密码">

    </el-tab-pane>
  </el-tabs>
  </div>
 </div>
</template>

<script>
import register from '@/components/AboutUser/register'
import login from '@/components/AboutUser/login'
import HomeHeader from '@/components/HomeHeader'
export default {
  components: { register, login, HomeHeader }
}
</script>
<style lang='stylus'>
.el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav {
  width: 100%;
  display: flex;
  justify-content: center ;
}
.box{
  width: 400px;
  height: auto;
  margin: auto;
  padding: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
