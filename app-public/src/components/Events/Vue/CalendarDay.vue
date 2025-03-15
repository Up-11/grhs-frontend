<script setup lang="ts">
defineProps<{ day: number; isActive?: boolean }>()
const emit = defineEmits<{
	(e: 'setIsActive'): void
	(e: 'clearIsActive'): void
}>()
</script>

<template>
	<div
		v-if="isActive"
		:class="[
			'font-semibold bg-green-200 text-black text-lg border-2 select-none border-green-300 cursor-pointer p-5 w-15 h-15 flex items-center justify-center relative'
		]"
	>
		<svg
			@click="emit('clearIsActive')"
			class="absolute -right-0 -top-0 cursor-pointer"
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
		>
			<path
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M18 6L6 18M6 6l12 12"
			/>
		</svg>
		{{ day }}
	</div>
	<div
		v-else
		@click="emit('setIsActive')"
		:class="[
			'font-semibold text-lg border-2 select-none border-green-300 cursor-pointer p-5 w-15 h-15 flex items-center justify-center relative'
		]"
	>
		{{ day }}
	</div>
</template>

<style scoped></style>
