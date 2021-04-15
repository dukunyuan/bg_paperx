<template>
  <div class="footer">
    <!--地址、联系方式、二维码-->
    <div>
      <!--地址-->
      <div>
        <h3>办公地址</h3>
        <!--地图-->
        <div>
         ？ <el-image src='static/picture/map.png' @click='mapClick'></el-image>
        </div>
         <!-- <baidu-map :center="{lng:104.116729,lat:30.629222} " zoom="17" style="height:300px"></baidu-map> -->
         <baidu-map :center="centerlist" :zoom="zoomlist" mapType="BMAP_NORMAL_MAP" style="height:16rem"
         			 @click="getClickInfos" :scroll-wheel-zoom="true">
         	<bm-marker :position="centerrlist" :dragging="true" @click="infoWindowOpens" animation="BMAP_ANIMATION_BOUNCE"></bm-marker>//点击创建点
         </baidu-map>
        <!--文字描述-->
        <div></div>
      </div>
      <!--联系方式-->
      <div></div>
      <!--二维码-->
      <div>备案信息123456789</div>
    </div>
    <!--备案信息-->
    <div></div>
  </div>
</template>

<script>
  export default {
    name: 'homeFooter',
    components: {
    },
    data(){
        return {
          centerlist: {lng: 116.40,lat: 39.90},//中心点
          			zoomlist: 10,//放大比例
          			propprovince:'',//省
          			propcity :'',//市
          			propcounty :'',//县
          			propaddress:'',//详细地址
        }
    },
      methods: {
        //图片点击
        mapClick() {
          window.open('https://j.map.baidu.com/9b/c5nJ', "_blank")
        },
        //地图点击事件
        		getClickInfos(e) {
        			console.log(e)
        			let _this = this;
        			this.longitude = e.point.lng;//经度
        			this.latitude = e.point.lat;//维度
        			this.centerrlist.lng = _this.longitude; //中心点
        			this.centerrlist.lat = _this.latitude;//中心点
        			let geocoder = new BMap.Geocoder(); //创建地址解析器的实例
        			geocoder.getLocation(e.point, function(rs) {
        				console.log(rs)
        				_this.propprovince = rs.addressComponents.province  //省
        				_this.propcity = rs.addressComponents.city  //市
        				_this.propcounty = rs.addressComponents.district //县
        				_this.propaddress= rs.addressComponents.address//详细地址
        			});

        		}
      }
  }

</script>

<style>
</style>
