<!--
 * @Author: Yinzhuoxuan
 * @Date: 2022-07-01 09:50:57
 * @LastEditors: Yinzhuoxuan
 * @LastEditTime: 2022-07-01 16:13:47
 * @Description: 
-->
<template>
	<div class="container">
		<router-view></router-view>
	</div>
</template>



<script lang="ts">
export default {
	name: 'App',
	setup() {
		return {};
	},
};
</script>

<style lang="scss">
body,
html {
	margin: 0;
}
</style>
