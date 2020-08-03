<template>
  <div class="register-box">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPassword">
        <el-input v-model="form.checkPassword" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="register-btn" type="primary" @click="register" round>注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'register',
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.form.checkpassword !== '') {
            this.$refs.form.validateField('checkPassword');
          }
          callback();
        }
      };
      var validateCheckPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        form: {
          name: '',
          email: '',
          password: '',
          checkPassword: ''
        },
        activeName: 'login',
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 2, max: 12, message: '2~12 个字符', trigger: 'change' }
          ],
          password: [{ required: true, validator: validatePass, trigger: 'blur' }],
          checkPassword: [{ required: true, validator: validateCheckPass, trigger: 'blur' }],
          email :[
                  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                  { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                 ]
        }
      };
    },
    methods: {
      register() {
        this.$refs['form'].validate(valid => {
          if (valid) {
            this.$axios.post('register', this.form).then(res => {
              console.log('register')
            })
          }
        });
      }
    }
  };
</script>

<style>
  .register-box {
    display: flex;
    padding-top: 10%;
    margin-left: -5%;
    justify-content: center;
    align-items: center;
  }

  .register-btn {
    width: 45%;
    margin-left: -15%;
  }
</style>
