
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