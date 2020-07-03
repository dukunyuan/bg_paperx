<template>
  <div class="header">
    header
    <!--logo-->
    <el-img src='static/img_three/h.jpg'></el-img>
    <!--登陆-->
    <el-button type="text" @click="loginDialog = true">登陆</el-button>
    <!--登陆dialog-->
    <el-dialog title="用户登录" :visible.sync="loginDialog" width="320px">
     <el-form ref="form" :model="form" label-width="60px" >
       <el-form-item label="用户名">
         <el-input v-model="form.name" ></el-input>
       </el-form-item>
       <el-form-item label="密码">
         <el-input v-model="form.password" show-password ></el-input>
       </el-form-item>
       <el-form-item label="验证码">
         <Verify type="compute" figure="10" arith="0"></Verify>
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
    data() {
      return {
        loginDialog: false,
        //表单
         form: {
                  name: '',
                 password: ''
                }
      }
    },
      methods: {

      }
  }
</script>

<style>
</style>
