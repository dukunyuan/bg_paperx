<template>
  <div class="login-box">
    <el-form ref="form" :model="form" :rules="rules" label-width="70px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="login" round>登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import md5 from 'js-md5'
export default {
  name: 'login',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.form.checkpassword !== '') {
          this.$refs.form.validateField('checkPassword')
        }
        callback()
      }
    }
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'change' },
          { min: 2, max: 10, message: '2~10 个字符', trigger: 'change' }
        ],
        password: [{ required: true, validator: validatePass, trigger: 'blur' }]
      }
    }
  },
  methods: {
    login () {
      this.$refs['form'].validate(valid => {
        if (valid) {
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
        }
      })
      // axios
      //   .userLogin(this.form)
      //   .then(({ data }) => {
      //     //账号不存在
      //     if (data.info === false) {
      //       this.$message({
      //         type: 'info',
      //         message: '账号不存在'
      //       });
      //       this.$router.push('register');
      //       return;
      //     }
      //     //账号存在
      //     if (data.success) {
      //       this.$message({
      //         type: 'success',
      //         message: '登陆成功'
      //       });
      //       //拿到返回的token和username，并存到store
      //       let token = data.token;
      //       let username = data.username;
      //       this.$store.dispatch('UserLogin', token);
      //       this.$store.dispatch('UserName', username);
      //       //跳到目标页
      //       this.$router.push('page1');
      //     }
      //   })
      //   .catch(function(reason) {
      //     console.log('Failed: ' + reason);
      //   });
    }
  }
}
</script>

<style>
	.login-box {
	  display: flex;
	  padding-top: 10%;
	  justify-content: center;
	  align-items: center;
	}

	.login-btn {
	  width: 45%;
	  margin-left: -10%;
	}
</style>
