<script setup lang="ts">
defineProps<{ day: number; isActive?: boolean }>()
const emit = defineEmits<{
	(e: 'setIsActive'): void
}>()
</script>

<template>
	<div
		:class="[
			'font-semibold text-lg border-2 select-none border-green-300 cursor-pointer p-5 w-15 h-15 flex items-center justify-center relative',
			isActive && 'bg-green-200 text-black'
		]"
	>
		<svg
			v-if="isActive"
			@click="emit('setIsActive')"
			class="absolute -right-0 -top-0 hover:bg-black/50 transition-colors duration-200 cursor-pointer"
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
</template>

<style scoped></style>
