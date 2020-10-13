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
      <!--订单-->
      <el-form ref="orderForm" :model='orderForm'>
        <el-form-item label="姓名：" prop="name">
          <el-input v-model="orderForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机：" prop="telephone">
          <el-input v-model="orderForm.telephone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱：" prop="email">
          <el-input v-model="orderForm.email"></el-input>
        </el-form-item>
        <el-form-item label="微信：" prop="wechat">
          <el-input v-model="orderForm.wechat"></el-input>
        </el-form-item>
        <el-form-item label="你的身份：" prop="identity">
          <el-select v-model="orderForm.identity" placeholder="请选择">
            <el-option label="教授/研究员" value="professor"></el-option>
            <el-option label="副教授/副研究员" value="associateProfessor"></el-option>
            <el-option label="讲师/助理研究员/博士后" value="post-doctoral"></el-option>
            <el-option label="硕士/博士研究生" value="master"></el-option>
            <el-option label="本科" value="undergraduate "></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="你的单位：" prop="workspace">
          <el-input v-model="orderForm.workspace"></el-input>
        </el-form-item>
        <el-form-item label="你所需要的服务类型：" prop="serviceType">
            <el-radio-group v-model="orderForm.resource">
            <el-radio label="I. 基础润色 (优惠价：0.3元/word） 包括基础语言校对、语法修改、词汇及句式修改、格式修改等服务内容"></el-radio>
            <el-radio label="II. 深度润色 (优惠价：0.5元/word）（重点推荐！） 包括语言校对、语法修改、词汇及句式修改、格式修改+行文风格与逻辑、论文查重、提供修改报告、180天内免费修改等服务内容"></el-radio>
            <el-radio label="III. 专家润色 (优惠价：0.9元/word)  基于深度润色的基础同专业资深教授级编辑精心润色，免费论文查重，Manuscript、response及cover letter 等全程免费修改直至发表"></el-radio>
        </el-radio-group>
        </el-form-item>
        <el-form-item label="您是否需要1V1文稿修改意见讲解服务:" prop="need1v1">
          <el-switch v-model="orderForm.need"></el-switch>
        </el-form-item>
        <el-form-item label="您核定的稿件字数为:" prop="wordsNumber">
          <el-input v-model="orderForm.wordsNumber"></el-input>
        </el-form-item>
        <el-form-item label="您的研究领域:" >
          <div class="block">
          <el-cascader
            v-model="orderForm.researchField"
            :options="orderForm.researchFieldOptions"
            :props="{ expandTrigger: 'hover' }"
            @change="handleChange">
            </el-cascader>
        </div>
        </el-form-item>
        <el-form-item label="你希望投稿的期刊：" prop="book">
          <el-input v-model="orderForm.book"></el-input>
        </el-form-item>
        <el-form-item label="你希望润色的语言类型：" prop="editType">
            <el-radio-group v-model="orderForm.editType">
            <el-radio label="英式英语"></el-radio>
            <el-radio label="美式英语"></el-radio>
        </el-radio-group>
        </el-form-item>
        <el-form-item label="你稿件的投稿状态：" prop="paperState">
            <el-radio-group v-model="orderForm.paperState">
            <el-radio label="全新稿件未投"></el-radio>
            <el-radio label="编辑返稿（请提供期刊编辑返稿意见）"></el-radio>
        </el-radio-group>
        </el-form-item>
        <el-form-item label="或在下方直接输入：" prop="text">
          <el-input v-model="orderForm.text"></el-input>
        </el-form-item>
      </el-form>
    </el-main>
      <el-footer>
      <home-footer></home-footer>
    </el-footer>
    </el-container>
  </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader'
import HomeFooter from '../components/HomeFooter'
export default {
  name: 'order',
  components: {HomeHeader, HomeFooter},
  data () {
    return {
      // 订单
      orderForm: {
        name: '',
        telephone: '',
        email: '',
        wechat: '',
        identity: '',
        workspace: '',
        serviceType: '',
        need: false,
        wordsNumber: '',
        researchField: '',
        researchFieldOptions: [
          {
            value: '04',
            label: '04教育学',
            children: [{
              value: '0401',
              label: '0401教育学'},
            {
              value: '0402',
              label: '0402心理学'
            },
            {
              value: '0403',
              label: '0403体育学'
            } ]
          },
          {
            value: '05',
            label: '05文学',
            children: [{
              value: '0501',
              label: '0501中国语言学'},
            {
              value: '0502',
              label: '0502外国语言文学'
            },
            {
              value: '0503',
              label: '0503新闻传播学'
            } ]
          },
          {
            value: '06',
            label: '06历史学',
            children: [{
              value: '0601',
              label: '0601考古学'},
            {
              value: '0602',
              label: '0602中国史'
            },
            {
              value: '0603',
              label: '0603世界史'
            }]
          },
          {
            value: '07',
            label: '07理学',
            children: [{
              value: '0701',
              label: '0701数学'},
            {
              value: '0702',
              label: '0702物理学'
            },
            {
              value: '0703',
              label: '0703化学'
            },
            {
              value: '0704',
              label: '0704天文学'
            },
            {
              value: '0705',
              label: '0705地理学'
            },
            {
              value: '0706',
              label: '0706大气科学'
            },
            {
              value: '0707',
              label: '0707海洋科学'
            }, {
              value: '0708',
              label: '0708地球物理学'
            },
            {
              value: '0709',
              label: '0709地质学'
            },
            {
              value: '0710',
              label: '0710生物学'
            },
            {
              value: '0711',
              label: '0711系统科学'
            },
            {
              value: '0712',
              label: '0712科学技术学'
            },
            {
              value: '0713',
              label: '0713生态学'
            },
            {
              value: '0714',
              label: '0714统计学'
            }]
          },
          {
            value: '08',
            label: '08工学',
            children: [{
              value: '0801',
              label: '0801力学'},
            {
              value: '0802',
              label: '0802机械工程'
            },
            {
              value: '0803',
              label: '0803光学工程'
            },
            {
              value: '0804',
              label: '0804仪器科学与技术'
            },
            {
              value: '0805',
              label: '0805材料科学与工程'
            },
            {
              value: '0806',
              label: '0806冶金工程'
            },
            {
              value: '0807',
              label: '0808动力工程及工程热物理'
            }, {
              value: '0808',
              label: '0808电器工程'
            },
            {
              value: '0809',
              label: '0809电子科学与技术'
            },
            {
              value: '0810',
              label: '0810信息与通信工程'
            },
            {
              value: '0811',
              label: '0811控制科学与工程'
            },
            {
              value: '0812',
              label: '0812计算机科学与技术'
            },
            {
              value: '0813',
              label: '0813建筑学'
            },
            {
              value: '0814',
              label: '0814土木工程'
            },
            {
              value: '0815',
              label: '0815水利工程'
            },
            {
              value: '0816',
              label: '0816测绘科学与技术'
            },
            {
              value: '0817',
              label: '0817化学工程与技术'
            },
            {
              value: '0818',
              label: '0818地质资源与地质工程'
            },
            {
              value: '0819',
              label: '0819矿业工程'
            },
            {
              value: '0820',
              label: '0820石油与天然气工程'
            },
            {
              value: '0821',
              label: '0821纺织科学与工程'
            },
            {
              value: '0822',
              label: '0822轻工技术与工程'
            },
            {
              value: '0823',
              label: '0823交通运输工程'
            },
            {
              value: '0824',
              label: '0824船舶与海洋工程'
            },
            {
              value: '0825',
              label: '0825航空宇航科学与技术'
            },
            {
              value: '0826',
              label: '0826兵器科学与技术'
            },
            {
              value: '0827',
              label: '0827核科学与技术'
            },
            {
              value: '0828',
              label: '0828农业工程'
            },
            {
              value: '0829',
              label: '0829林业工程'
            },
            {
              value: '0830',
              label: '0830环境科学与工程'
            },
            {
              value: '0831',
              label: '0831生物医学工程'
            },
            {
              value: '0832',
              label: '0832食品科学与工程'
            }, {
              value: '0833',
              label: '0833城乡规划学'
            },
            {
              value: '0834',
              label: '0834风景园林学'
            },
            {
              value: '0835',
              label: '0835软件工程'
            },
            {
              value: '0836',
              label: '0836生物工程'
            },
            {
              value: '0837',
              label: '0837安全科学与工程'
            },
            {
              value: '0838',
              label: '0838公安技术'
            }]
          },
          {
            value: '09',
            label: '09农学',
            children: [{
              value: '0901',
              label: '0901作物学'},
            {
              value: '0902',
              label: '0902园艺学'
            },
            {
              value: '0903',
              label: '0903农业资源与环境'
            },
            {
              value: '0904',
              label: '0904植物保护'
            },
            {
              value: '0905',
              label: '0905畜牧学'
            },
            {
              value: '0906',
              label: '0906兽医学'
            },
            {
              value: '0907',
              label: '0907林学'
            }, {
              value: '0908',
              label: '0908水产'
            },
            {
              value: '0909',
              label: '0909草学'
            }]
          },
          {
            value: '10',
            label: '10医学',
            children: [{
              value: '1001',
              label: '1001基础医学'},
            {
              value: '1002',
              label: '1002临床医学'
            },
            {
              value: '1003',
              label: '1003口腔医学'
            },
            {
              value: '1004',
              label: '1004公共卫生与预防医学'
            },
            {
              value: '1005',
              label: '1005中医学'
            },
            {
              value: '1006',
              label: '1006中西医结合'
            },
            {
              value: '1007',
              label: '1007药学'
            },
            {
              value: '1008',
              label: '1008中药学'
            },
            {
              value: '1009',
              label: '1009特种医学'
            },
            {
              value: '1010',
              label: '1010医学技术'
            },
            {
              value: '1011',
              label: '1011护理学'
            }]
          },
          {
            value: '11',
            label: '11军事学',
            children: [{
              value: '1101',
              label: '1101军事思想及军事历史'},
            {
              value: '1102',
              label: '1102战略学'
            },
            {
              value: '1103',
              label: '1103战役学'
            },
            {
              value: '1104',
              label: '1104战术学'
            },
            {
              value: '1105',
              label: '1105军队指挥学'
            },
            {
              value: '1106',
              label: '1106军制学'
            },
            {
              value: '1107',
              label: '1107军队政治工作学'
            },
            {
              value: '1108',
              label: '1108军事后勤学'
            },
            {
              value: '1109',
              label: '1109军事装备学'
            },
            {
              value: '1110',
              label: '1110军事训练学'
            }]
          },
          {
            value: '12',
            label: '12管理学',
            children: [{
              value: '1201',
              label: '1201管理科学与工程'},
            {
              value: '1202',
              label: '1202工商管理'
            },
            {
              value: '1203',
              label: '1203农林经济管理'
            },
            {
              value: '1204',
              label: '1204公共管理'
            },
            {
              value: '1205',
              label: '1205图书情报与档案管理'
            }]
          },
          {
            value: '13',
            label: '13艺术学',
            children: [{
              value: '1301',
              label: '1301艺术学理论'},
            {
              value: '1302',
              label: '1302音乐与舞蹈学'
            },
            {
              value: '1303',
              label: '1303戏剧与影视学'
            },
            {
              value: '1304',
              label: '1304美术学'
            },
            {
              value: '1305',
              label: '1305设计学'
            }]
          }
        ]
      },
      book: '',
      editTpye: '',
      paperState: ''
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>

<style>

</style>
