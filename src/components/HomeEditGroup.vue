<template>
  <div class="main">
    <div class="group">
      <!--标题-->
      <div class="group_header_title">
        <div>&nbsp;编辑团队</div>
        <a>更多&nbsp;</a>
      </div>
      <!--介绍团队-->
      <div class="group_introduce">
        彪哥编辑拥有500位以上各学科专家。编辑团队全部以英语为母语，全部具有丰富的文稿修改编辑经验（很多从事编辑行业长达20余年），大量的编辑具有丰富的科研背景（如生物、化学、物理、天文学、人文社会学、商学等不同学科领域），部分编辑常年从事专业期刊的审稿与编辑工作。
        募格编辑会严格管理和控制这些精心挑选的编辑的工作质量，在每次服务完成之后，我们都会请顾客做出详细的评价；我们会以顾客评价为主的原则
        ,常年对专业的编辑团队实行优胜劣汰的淘汰机制，严格保证只有最优秀，评价最好的编辑才能为我们的顾客服务。
      </div>
      <!--编辑团队-->
      <div class="group_editors">
        <el-image src="static/edit_group/p10.jpg"> </el-image>
        <el-image src="static/edit_group/p2.jpg"> </el-image>
        <el-image src="static/edit_group/p3.jpg"> </el-image>
        <el-image src="static/edit_group/p4.jpg"> </el-image>
        <el-image src="static/edit_group/p5.jpg"> </el-image>
        <el-image src="static/edit_group/p6.jpg"> </el-image>
        <el-image src="static/edit_group/p7.jpg"> </el-image>
        <el-image src="static/edit_group/p8.jpg"> </el-image>
        <el-image src="static/edit_group/p9.jpg"> </el-image>
      </div>
    </div>
    <!--广告-->
    <div class="picture">
      <el-image src="static/edit_group/p1.jpg"> </el-image>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeEditGroup"
};
</script>

<style scoped lang="stylus">
.main{
  height 20%
  display flex
  align-items flex-start
  justify-content center
  .group{
    flex-direction:row
    .group_header_title{
      display flex
      height 3rem
      width 35rem
      margin 20px
      margin-bottom 0
      padding 5px
      flex-direction: row
      align-items center
      justify-content space-between
      background #2CA4A3
      border-top-left-radius: 5px
      border-top-right-radius: 5px
    }
    .group_introduce{
      border 1px solid #D5E9E9;
      width 35rem
      margin 20px
      margin-top 0
      padding 5px
    }
    .group_editors{
      display flex
      height 3rem
      width 35rem
      margin 20px
      margin-bottom 0
      padding 5px
    }
  }
  .picture{
    display flex
    margin 20px
    height 50rem
    width 35rem
  }
}
</style>
