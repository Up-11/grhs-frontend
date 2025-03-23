<script setup lang="ts">
import type { IMenu } from './types'

defineProps<{ item: IMenu; isActive?: boolean }>()
</script>

<template>
	<a
		:class="[
			'cursor-pointer  py-2 items-center rounded-2xl px-2 hover:bg-green-50 font-semibold hover:text-green-900 transition-colors',
			isActive && 'bg-green-50 text-green-900'
		]"
		:key="item.id"
		:href="'#' + item.id"
	>
		{{ item.title }}</a
	>
</template>

<style scoped></style>
