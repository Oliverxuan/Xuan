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
});
const xClass = computed(() => {
	return [
		`x-button`,
		`x-button-${props.type}`,
		props.disabled ? 'x-button-disabled' : '',
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
		opacity: 0.8;
	}
}
.x-button-default {
	color: #333;
	border: 1px solid #dcdfe6;
}
.x-button-primary {
	color: #fff;
	background: $primary;
	border-color: $primary;
}
.x-button-success {
	color: #fff;
	background: $success;
	border-color: $success;
}
.x-button-info {
	color: #fff;
	background: $info;
	border-color: $info;
}
.x-button-warning {
	color: #fff;
	background: $warning;
	border-color: $warning;
}
.x-button-danger {
	color: #fff;
	background: $danger;
	border-color: $danger;
}
.x-button-disabled {
	opacity: 0.4;
	cursor: no-drop;
	&:hover,
	&:focus {
		opacity: 0.4;
	}
}
</style>
