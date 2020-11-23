<template>
	<view class="content">
	<swiper indicator-dots="true" circular="true">
		<swiper-item v-for="item in swiper" :key="item.image" @click="swiperclick">
			<image :src="item.image"></image>
		</swiper-item>
	</swiper>
	<text>111</text>
	<text>333</text>
	<p>111</p>
	<p>222</p>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiper:[]
			}
		},
		onLoad() {
			this.getSwiper()
		},
		methods: {
			async getSwiper(){
				// uni.request({
				// 	url:'http://123.207.32.32:8000/home/multidata',
				// 	success:res => {
				// 		this.swiper = res.data.data.banner.list
				// 	}
				// })
				const res = await this.$request({
					url:'/home/multidata'
				})
				this.swiper = res.data.data.banner.list
			},
			swiperclick(){
				uni.navigateTo({
					url:'/pages/swipergoods/swipergoods'
				})
				console.log('1111')
			}
		}
	}
</script>

<style>
	
.content swiper{
/*	display: flex;
	不挤在一起 flex-wrap: wrap; 
	盒子不被撑大 box-sizing:bor-box
	*/
	height: 150px;
}
.content swiper image{
	width: 100%;
	height: 100%;
}
</style>
