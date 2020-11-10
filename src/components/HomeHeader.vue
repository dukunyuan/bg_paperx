<template>
  <div class="header">
    <div class="header_logo">
    <!--logo-->
    <el-image class="logo" src="static/logo/logo.png" fit="cover"></el-image>
    <!--登陆-->
    <i class="el-icon-user">
    <el-button type="text" @click="loginDialog = true" v-if="!store.state.userId">登陆</el-button>
    <div v-else></div>
    </i>
    </div>
    <!--登陆dialog-->
    <el-dialog title="用户登录" :visible.sync="loginDialog" width="320px">
      <el-form ref="form" :model="form" :rules="rules" label-width="70px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <Verify type="compute" :figure="10" :arith="0" @success="submit" @error="error"></Verify>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import Verify from 'vue2-verify'
import md5 from 'js-md5'
import { mapMutations } from 'vuex'
// import * as api from '../api/http'
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
        username: '',
        password: ''
      },
      // 校验
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(['setToken']),
    // 成功
    submit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.shoot()
        }
      })
    },
    // 失败
    error () {
      this.$message.error('验证码错误!')
    },
    shoot () {
      let _this = this
      this.$axios.post('login', {username: this.form.username, password: md5(this.form.password)}).then(res => {
        // console.log(res)
        if (res.data.code === '200') {
          this.$message({ type: 'success', message: '登录成功' })
          this.loginDialog = false
          // _this.setToken({token: res.data.token})
          this.$store.commit('setToken', res.data.token)
          this.$store.commit('setToken', res.data.currentUser.id)
          // this.$axios.get('register')
        } else if (res.data.code === '500') {
          this.$message({ type: 'error', message: res.data.msg })
        } else {
          this.$message({ type: 'error', message: '登录错误，请联系程序开发人员！' })
        }
      })
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
