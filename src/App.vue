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
				<Vue3Lottie
					class="logo-animation"
					:animationData="logoJson"
				/>
				<div>Xuan UI</div>
			</div>
			<div class="header-search"></div>
			<div class="header-switch"></div>
		</div>
		<div class="main">
			<router-view></router-view>
		</div>
	</div>
</template>



<script setup lang="ts">
import logoJson from '../public/lottie/110955-rocket-launch-animation-space-exploration.json';
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
			flex: 1.5;
			display: flex;
			justify-content: space-around;
			align-items: center;
			div {
				flex: 1.5;
				margin: 0;
				padding: 0;
				font-size: 30px;
				height: 45px;
				width: 120px;
				font-weight: 300;
				border-right: 1px solid #dcdfe6;
			}
			.logo-animation {
				flex: 1;
				height: 70px;
				width: 70px;
				transform: rotate(-90deg);
			}
		}

		&-search {
			height: 60px;
			flex: 8.5;
		}
	}
}
</style>
