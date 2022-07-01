<!--
 * @Author: Yinzhuoxuan
 * @Date: 2022-07-01 15:37:21
 * @LastEditors: Yinzhuoxuan
 * @LastEditTime: 2022-07-01 16:37:29
 * @Description: 
-->
<template>
	<div class='container'>
		<div class="left-menu">
			<li
				v-for="(item,index) in menuList"
				:key="index"
				:class="{active:activeIndex === index}"
				@click="switchMenu(item,index)"
			>{{item.name}}</li>
		</div>
		<div class="router-view">
			<router-view></router-view>
		</div>
	</div>
</template>

<script lang='ts'>
import list from '@/router/routerPage/pages.ts';
import { useRouter } from 'vue-router';

import { ref } from 'vue';
import router from '../router';

export default {
	setup() {
		const menuList = ref(list[0].children);
		const activeIndex = ref(0);
		const router = useRouter();

		const switchMenu = (item, index) => {
			activeIndex.value = index;
			router.push({
				name: item.name,
			});
		};

		return {
			menuList,
			activeIndex,
			switchMenu,
		};
	},
};
</script>
<style  lang='scss' scoped>
.container {
	width: 100%;
	height: 100vh;
	display: flex;
	.left-menu {
		width: 360px;
		height: auto;
		overflow-y: auto;
		border: 1px solid #f0f0f0;
		li {
			list-style: none;
			line-height: 40px;
			padding: 0 10px;
			box-sizing: border-box;
			cursor: pointer;
		}
		li.active {
			border-right: 4px solid #0e80eb;
			color: #0e80eb;
			background: rgba(14, 128, 235, 0.1);
		}
	}
	.router-view {
		flex: 1;
		height: auto;
		overflow-y: auto;
		padding: 0 15px;
		box-sizing: border-box;
	}
}
</style>