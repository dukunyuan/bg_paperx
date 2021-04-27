<template>
  <div class="footer">
    <!--地址、联系方式、二维码-->
    <div class="footer-three">
      <!--地址1-->
      <div class="footer-three-map">
        <h3>办公地址</h3>
        <!--地图-->
        <!-- 百度地图控件2 {lng: 120.743534, lat: 31.276173}-->
        <baidu-map class="map" :center='center' :zoom='zoom' :scroll-wheel-zoom="true">
          <bm-marker :position="center" :dragging="true" @click="infoWindowOpen">
            <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">苏州市吴中区苏州大学独墅湖校区<br>199号A05幢3楼
            </bm-info-window>
          </bm-marker>
        </baidu-map>
        <!-- <baidu-map class="map" center="北京"></baidu-map> -->
        <!--文字描述-->
        <div></div>
      </div>
      <!--联系方式2-->
      <div class="footer-three-phone">
        <div>邮箱：scibase2018@outlook.com苏州赛贝思网络科技服务有限公司17751280032</div>
      </div>
      <!--二维码2-->
      <div>
        <el-image src="static/picture/code.png"></el-image>
      </div>
    </div>
    <!--备案信息1-->
    <!-- <h3>备案信息123456789</h3> -->
  </div>
</template>

<script>
  export default {
    name: 'homeFooter',
    components: {},
    data() {
      return {
        center: {
          lng: 120.743534,
          lat: 31.276173
        }, // 中心点
        zoom: 15, // 放大比例
        show: true //信息显示
      }
    },
    methods: {
      // 图片点击
      mapClick() {
        window.open('https://j.map.baidu.com/9b/c5nJ', '_blank')
      },
      //地图信息点
      infoWindowClose() {
        this.show = false
      },
      infoWindowOpen() {
        this.show = true
      }
    }
  }
</script>

<style>
.foot-three {
   display: flex;
   flex-direction: row
}
   .footer-three-map{
     width: 30%;
   }
   .footer-three-phone{
     width: 40%;
   }

  .map {
    width: 100%;
    height: 300px
  }
</style>
