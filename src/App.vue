<!--
 * @Author: Yinzhuoxuan
 * @Date: 2022-07-01 09:50:57
 * @LastEditors: Yinzhuoxuan
 * @LastEditTime: 2022-07-07 10:18:53
 * @Description: 
-->
<template>
	<div class="container">
		<div class="header">
			<div
				class="header-logo"
				@click="switchMenu('index')"
			>
				<Vue3Lottie
					class="logo-animation"
					:animationData="logoJson"
				/>
				<div>Cookie UI</div>
			</div>
			<div class="header-search">
				<input
					type="text"
					v-model="mes"
					placeholder="搜索文档"
				>
			</div>
			<div class="header-switch"></div>
			<div class="header-more"></div>
		</div>
		<div class="main">
			<router-view></router-view>
		</div>
	</div>
</template>

<script lang="ts">
export default { name: 'App' };
</script>

<script setup lang="ts">
import logoJson from './assets/lottie/110955-rocket-launch-animation-space-exploration.json';
import { ref } from 'vue';
import router from './router';

const mes = ref('');
const switchMenu = (item) => {
	router.push({
		name: item,
	});
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
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		background: rgb(255, 255, 255);
		z-index: 9999;

		&-logo {
			height: 60px;
			flex: 1.5;
			min-width: 275px;
			display: flex;
			justify-content: space-around;
			align-items: center;
			cursor: pointer;
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
			flex: 3.5;

			display: flex;
			align-items: center;
			input {
				background: white;
				color: rgb(103, 101, 101);
				width: 260px;
				height: 30px;
				margin-left: 10px;
				border: 1px solid #dcdfe6;
				border-radius: 15px;
				outline: none;
				text-indent: 30px;
			}
		}
		&-switch {
			height: 60px;
			flex: 3.5;
		}
		&-more {
			height: 60px;
			flex: 1.5;
		}
	}
}
::-webkit-input-placeholder {
	color: rgb(162, 159, 159);
}
</style>
