<template>
  <el-tabs type="border-card">
    <el-tab-pane label="注册">
      <register></register>
    </el-tab-pane>
    <el-tab-pane label="登录">配置管理</el-tab-pane>
    <el-tab-pane label="找回密码">角色管理</el-tab-pane>
  </el-tabs>
</template>

<script>
  import register from '@/components/AboutUser/register'
  export default {
     components: { register }
  }
</script>
<style lang='stylus'>
.el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav {
  width: 100%;
  display: flex;
  justify-content: center ;
}
</style>
