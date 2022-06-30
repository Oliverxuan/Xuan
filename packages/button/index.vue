<template>
	<div class="x-button">
		<button>
			<slot></slot>
		</button>
	</div>
</template>

<script lang="ts">
export default {
	name: 'xButton',
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
button {
	outline: none;
	border: 0;
	background: rgb(66, 121, 116);
	cursor: pointer;
}
.x-button {
	button {
		padding: 12px 24px;
		border-radius: 4px;
		border: 1px solid rgba(0, 0, 0);
		&:hover {
			opacity: 0.9;
		}
	}
}
</style>
