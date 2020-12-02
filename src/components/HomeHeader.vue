<template>
  <div class="header">
    <div class="header_logo">
    <!--logo-->
    <el-image class="logo" src="static/logo/logo.png" fit="cover"></el-image>
    <!--登陆-->
    <div class="loginInfo">
    <div v-if="!$store.state.userId"><el-button type="text" @click="loginDialog = true" ><i class="el-icon-user">登陆</i></el-button><el-button type="text" @click="handleLogin" >注册</el-button></div>
    <div v-else>欢迎{{$store.state.userId}}<el-button type="text" @click="handleLogOut" >退出</el-button></div>

    </div>
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
      // 当前登录用户
      userId: localStorage.getItem('userId'),
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
    ...mapMutations(['setToken', 'setUserId', 'delToken', 'delUserId']),
    // 验证码成功
    submit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.shoot()
        }
      })
    },
    // 验证码失败
    error () {
      this.$message.error('验证码错误!')
    },
    shoot () {
      let _this = this
      this.$axios.post('login', {username: this.form.username, password: md5(this.form.password)}).then(res => {
        // console.log(res)
        if (res.data.code === '200') {
          this.$message({ type: 'success', message: '登录成功' })
          this.$router.replace({name: 'welcome'})
          this.loginDialog = false
          // _this.setToken({token: res.data.token})
          this.$store.commit('setToken', res.data.token)
          this.$store.commit('setUserId', res.data.currentUser.id)
          // this.$axios.get('register')
        } else if (res.data.code === '500') {
          this.$message({ type: 'error', message: res.data.msg })
        } else {
          this.$message({ type: 'error', message: '登录错误，请联系程序开发人员！' })
        }
      })
    },
    // 注销事件
    handleLogOut () {
      this.$confirm('确定注销并返回首页?', {
        type: 'warning',
        cancelButtonClass: 'confirmPosition'
      }).then(() => {
        this.$message({
          message: '注销成功',
          type: 'success'
        })
        this.$store.commit('delToken')
        this.$store.commit('delUserId')
        this.dialogVisible = false
        this.$router.replace({name: 'welcome'})
      })
    },
    // 注册
    handleLogin () {
      this.$router.replace({name: 'login'})
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
