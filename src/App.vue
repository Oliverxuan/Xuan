<!--
 * @Author: Yinzhuoxuan
 * @Date: 2022-07-01 09:50:57
 * @LastEditors: Yinzhuoxuan
 * @LastEditTime: 2022-07-05 17:56:11
 * @Description: 
-->
<template>
	<div class="container">
		<div class="header">
			<div class="header-logo">
				<div id="animation"></div>
				<div @click="logoAnimation">Xuan UI</div>
			</div>
			<div class="header-search"></div>
			<div class="header-switch"></div>
		</div>
		<div class="main">
			<router-view></router-view>
		</div>
	</div>
</template>



<script lang="ts">
import { onMounted } from 'vue';
import lottie from 'lottie-web';

export default {
	name: 'App',
	setup() {
		const logoAnimation = () => {
			console.log(123);
			const lottieAnimationItem = lottie.loadAnimation({
				// 选取一个容器，用于渲染动画
				container: document.querySelector('#animatiom'),
				// 定义JSON文件路径
				path: require('./assets/108680-atoms-lottie-animation.json'),
				// 是否循环播放
				loop: true,
				// 渲染的格式svg/canvas/html，svg性能更优，兼容性更好
				renderer: 'svg',
			});
		};
		return { logoAnimation };
		onMounted(() => {
			logoAnimation();
		});
	},
};
</script>

<style lang="scss">
body,
html {
	margin: 0;
	padding: 0;
}
.container {
	.header {
		height: 60px;
		width: auto;
		box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
		display: flex;
		&-logo {
			height: 60px;
			flex: 2;
			border-right: 1px solid #dcdfe6;
			display: flex;
			justify-content: center;
			align-items: center;
			div {
				margin: 0;
				padding: 0;
				font-size: 30px;
				height: 45px;
				width: 110px;
				font-weight: 330;
			}
			#animation {
				height: 40px;
				width: 40px;
			}
		}
		&-search {
			height: 60px;
			flex: 8;
		}
	}
}
</style>
