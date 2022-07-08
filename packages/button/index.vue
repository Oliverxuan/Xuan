<!--
 * @Author: Yinzhuoxuan
 * @Date: 2022-07-06 09:35:28
 * @LastEditors: Yinzhuoxuan
 * @LastEditTime: 2022-07-08 15:04:32
 * @Description: 
-->
<template>
	<button
		:class="xClass"
		:disabled="disabled"
	>
		<span>
			<slot></slot>
		</span>
	</button>
</template>
<script lang='ts'>
export default {
	name: 'xButton',
};
</script>

<script  setup lang='ts'>
import { computed } from 'vue';
const props = defineProps({
	type: {
		type: String,
		default: 'default',
	},
	disabled: Boolean,
	plain: Boolean,
});
const xClass = computed(() => {
	return [
		`x-button`,
		`x-button-${props.type}`,
		props.disabled ? 'x-button-disabled' : '',
		props.plain ? 'x-button-plain' : '',
	];
});
</script>
<style lang="scss" scoped>
.x-button {
	border: 0;
	padding: 12px 24px;
	outline: none;
	background: none;
	line-height: 1;
	font-size: 14px;
	box-sizing: border-box;
	border-radius: 4px;
	cursor: pointer;
	&:hover,
	&:focus {
		opacity: 0.5;
	}
	&-default {
		color: #333;
		border: 1px solid #dcdfe6;
	}
	&-primary {
		color: #fff;
		background: $primary;
		border-color: $primary;
	}
	&-success {
		color: #fff;
		background: $success;
		border-color: $success;
	}
	&-info {
		color: #fff;
		background: $info;
		border-color: $info;
	}
	&-warning {
		color: #fff;
		background: $warning;
		border-color: $warning;
	}
	&-danger {
		color: #fff;
		background: $danger;
		border-color: $danger;
	}
	&-disabled {
		opacity: 0.8;
		cursor: no-drop;
		&:hover,
		&:focus {
			opacity: 0.8;
		}
	}
	&-plain {
		border: 1px solid $danger;
		color: #333;
		background-color: rgba(95, 183, 183, 0.3);
		&:hover,
		&:focus {
			background: $danger;
			color: #fff;
		}
	}
}
</style>
