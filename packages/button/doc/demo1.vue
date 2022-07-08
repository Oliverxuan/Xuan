<!--
 * @Author: Yinzhuoxuan
 * @Date: 2022-07-01 16:49:54
 * @LastEditors: Yinzhuoxuan
 * @LastEditTime: 2022-07-07 11:05:04
 * @Description: 
-->

<template>
	<div class='.container'>
		<x-button>默认按钮</x-button>
		<x-button type="primary">主要按钮</x-button>
		<x-button type="success">成功按钮</x-button>
		<x-button type="info">信息按钮</x-button>
		<x-button
			type="warning"
			disabled
		>警告按钮</x-button>
		<x-button
			type="danger"
			disabled
		>危险按钮</x-button>
		<div></div>

		<x-button>朴素按钮</x-button>
		<x-button
			type="primary"
			plain
		>主要按钮</x-button>
		<x-button
			type="success"
			plain
		>成功按钮</x-button>
		<x-button
			type="info"
			plain
		>信息按钮</x-button>
		<x-button
			type="warning"
			disabled
			plain
		>警告按钮</x-button>
		<x-button
			type="danger"
			disabled
			plain
		>危险按钮</x-button>
	</div>
</template>

<script lang='ts'>
export default {
	setup() {
		return {};
	},
};
</script>
<style  lang='scss' scoped>
.container {
	button {
		margin: 10px;
	}
}
</style>