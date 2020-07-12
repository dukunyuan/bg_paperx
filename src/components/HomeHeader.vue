<template>
  <div class="header">
    <div class="header_logo">
    <!--logo-->
    <el-image class="logo" src="static/logo/logo.png" fit="cover"></el-image>
    <!--登陆-->
    <i class="el-icon-user">
    <el-button type="text" @click="loginDialog = true">登陆</el-button>
    </i>
    </div>
    <!--登陆dialog-->
    <el-dialog title="用户登录" :visible.sync="loginDialog" width="320px">
      <el-form ref="form" :model="form" label-width="60px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <Verify type="compute" :figure="10" :arith="0" @success="submit"></Verify>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import Verify from 'vue2-verify'
export default {
  name: 'homeHeader',
  components: {
    Verify
  },
  data () {
    return {
      // 登录框
      loginDialog: false,
      // 表单
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    submit () {
      console.log('submit')
    }
  }
}
</script>

<style scoped lang='stylus'>
.header_logo{
  display flex
  justify-content: space-between
  .logo{
  height 50px
}
}

</style>
