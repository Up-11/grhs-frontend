<script setup lang="ts">
defineProps<{ title: string; nutritionVariant: number }>()
</script>

<template>
	<div class="flex flex-col w-fit gap-1">
		<p class="text-center font-semibold text-green-700">
			{{ nutritionVariant }}
		</p>
		<hr class="border-t border-gray-300" />
		<p class="text-center font-medium">{{ title }}</p>
	</div>
</template>

<style scoped></style>
