/* eslint-disable */
<template>
  <div class="main">
    <!--容器布局-->
    <el-container class="main">
      <el-header>
        <!-- 头部组件 -->
        <home-header></home-header>
      </el-header>
    <!-- 页面主组件 -->
    <el-main>
      <!--导航-->
      <el-menu default-active="1" class="el-menu"
                type='flex'
                mode="horizontal">
          <el-menu-item index="1"><a href="http://localhost:8888/#/welcome" target="_blank" style="text-decoration:none" >首页</a></el-menu-item>
          <el-menu-item index="2">论文润色</el-menu-item>
          <el-menu-item index="3">论文翻译</el-menu-item>
          <el-menu-item index="4">全程发表</el-menu-item>
          <el-menu-item index="5">书搞服务</el-menu-item>
          <el-menu-item index="6">留学书文</el-menu-item>
          <el-menu-item index="7">编辑团队</el-menu-item>
          <el-menu-item index="8">范例评价</el-menu-item>
          <el-menu-item index="9">资讯中心</el-menu-item>
          <el-menu-item index="10"><a href="http://localhost:8088/paperx/register" target="_blank" style="text-decoration:none" >质保及FAQ</a></el-menu-item>
      </el-menu>
      <!--走马灯-->
      <el-carousel height="500px">
        <el-carousel-item v-for='item in carousel_srcs'
                            :key=item>
          <div class="el-img">
          <el-image class="el-img" :src=item fit='contain'></el-image>
          </div>
        </el-carousel-item>
      </el-carousel>
      <!--文字-->
      <div class="indexFont">
        彪哥编辑为您提供专业的英文论文修改、润色服务及科研学术论文翻译服务，<br>
        让您的稿件语言更加准确、地道和优美。
      </div>
      <!--按钮-->
      <div class="h2_button">
      <el-button type="info" size='medium'>
        <h2 class="h2_class" @click="seeExample">查看范例</h2>
      </el-button>
      </div>
      <!--图片三栏-->
      <div class='img_three'>
        <div class='img_three_item' v-for='item in img_three_item' :key= item.word>
          <el-image :src= item.src fit='fill'>
          </el-image>
          <div class="img_three_word">{{item.word}}</div>
        </div>
      </div>
      <!--流程五栏-->
      <div class='process_five'>
        <div class='process_five_in'>
        <i class="el-icon-user-solid">专业的团队</i>
        <i class="el-icon-s-claim">科学的体系</i>
        <i class="el-icon-s-tools">严格的规范</i>
        <i class="el-icon-user-solid">完善的流程</i>
        <i class="el-icon-user-solid">卓越的润色</i>
        </div>
      </div>
      <!-- 编辑团队 -->
      <home-edit-group></home-edit-group>
    </el-main>
    <!--底部-->
    <el-footer>
      <home-footer></home-footer>
    </el-footer>
    </el-container>
  </div>
</template>

<script>
import HomeEditGroup from '../components/HomeEditGroup'
import HomeHeader from '../components/HomeHeader'
import HomeFooter from '../components/HomeFooter'
export default {
  components: {
    HomeEditGroup,
    HomeHeader,
    HomeFooter
  },
  data () {
    return {
      carousel_srcs: ['static/carousel/a.jfif',
        'static/carousel/b.jfif',
        'static/carousel/c.jfif',
        'static/carousel/d.jfif'],
      img_three_item: [{src: 'static/img_three/g.jpg', word: '英文论文润色'},
        {src: 'static/img_three/i.jpg', word: '科研论文翻译'},
        {src: 'static/img_three/g.jpg', word: '发表全程协助'}]
    }
  },
  methods: {
    seeExample () {
      // console.log('seeExample')
      this.$axios.get('register')
    }
  }
}
</script>

<style scoped lang='stylus'>
  .el-menu{
    display flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: center
  }
  .el-img{
    height 500px
    text-align: center
    background-color #f8f8f8
  }
  .indexFont{
    text-align: center
    font-size:24px
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif
    margin 20px
  }
  .h2_button{
    display flex
    justify-content: center
  }
  .h2_class{
    margin-left 30px
    margin-right 30px
  }
  .img_three{
    margin 1.25rem
    height 400px
    display flex
    flex-direction: row
    justify-content: center
    background-color #ebf4fa
    .img_three_item{
      margin 0.625rem
      height 10.25rem
      width  15.25rem
      .img_three_word{
        font-size:24px
        font-family: "微软雅黑",Arial,sans-serif
        position:relative
        margin-bottom 0rem
        text-align: center
      }
    }
  }
  .process_five{
    margin 1.25rem auto
    height 30px
    width 50rem
    .process_five_in{
      display flex
      flex-direction: row
      justify-content: space-between
    }
  }

</style>
