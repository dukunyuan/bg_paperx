<template>
	<div class="baidumap" id="allmap"></div>
</template>
<script>
export default {
	data() {
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

		},
	}
}
</script>
<style>
.baidumap {
	width: 500px;
	height: 400px；
}

/* 去除百度地图版权那行字 和 百度logo */
/* .baidumap > .BMap_cpyCtrl {
	    display: none !important;
	}
	.baidumap > .anchorBL {
	    display: none !important;
	} */
</style>
