<!--
 * @Author: Yinzhuoxuan
 * @Date: 2022-07-06 11:01:23
 * @LastEditors: Yinzhuoxuan
 * @LastEditTime: 2022-07-07 10:13:11
 * @Description: 
-->
<template>
	<div class='container'>
		<div class="main">
			<div class="description">
				<h1>Cookie UI</h1>
				<h3>完美支持 Vue 3 和 Typescript 使用 vite 做到更快速度，更小体积。</h3>
			</div>
			<div class="logo">
				<Vue3Lottie
					class="logo-animation"
					:animationData="logoJson"
				/>
			</div>
		</div>
		<div class="switch">
			<div
				v-for="(item,index) in switchList"
				key="name"
				@click="switchMenu(item,index)"
			>
				{{item.name}}
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { ref } from 'vue';
import router from '../router';
export default { name: 'index' };
import logoJson from '@/assets/lottie/110955-rocket-launch-animation-space-exploration.json';
</script>

<script setup lang="ts">
const switchList = ref([
	{
		name: '即刻开始',
		path: 'home',
	},
	{
		name: '设计语言',
		path: 'art',
	},
]);

const switchMenu = (item: any, index: Number) => {
	router.push({
		name: item.path,
	});
};
</script>

<style  lang='scss' scoped>
.container {
	display: flex;
	width: 100%;
	height: 100vh;
	align-items: center;
	flex-direction: column;
	background: rgba(67, 206, 206, 0.448);
	.main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 600px;
		height: 600px;
		background: rgba(67, 206, 206, 0.448);
		border: 0px solid #fff;
		border-radius: 200px;
		margin-top: 30px;
		.description {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			h1 {
				transform: translate(0, 40px);
				font-size: 60px;
				margin: 0;
				margin-top: 30px;
				font-weight: 400;
				line-height: 48px;
				color: #555;
			}
			h3 {
				transform: translate(0, 60px);
				font-size: 18px;
				line-height: 28px;
				font-weight: 400;
				color: #888;
				margin: 10px 0 5px;
			}
		}
		.logo {
			width: 400px;
			height: 400px;
			transform: rotate(-90deg) translate(-50px);
		}
	}
	.switch {
		width: 700px;
		height: 100px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		div {
			display: flex;
			justify-content: center;
			align-items: center;
			color: rgb(241, 241, 241);
			width: 140px;
			height: 60px;
			background: rgba(18, 184, 184, 0.687);
			border-radius: 30px;
			&:hover {
				opacity: 0.8;
				color: rgb(10, 71, 132);
				cursor: pointer;
			}
		}
	}
}
</style>