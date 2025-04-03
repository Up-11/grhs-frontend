<script setup lang="ts">
import { useLocale } from '@i18n/useLocale'

import type { Category } from './types'

defineProps<{ item: Category; isActive?: boolean }>()

const url = typeof window !== 'undefined' ? new URL(window.location.href) : null

const { lang } = useLocale(url!)
</script>

<template>
	<a
		:class="[
			'cursor-pointer  py-2 items-center rounded-2xl px-2 hover:bg-green-50 font-semibold hover:text-green-900 transition-colors',
			isActive && 'bg-green-50 text-green-900'
		]"
		:key="item.id"
		:href="item.hrefId"
	>
		{{ item.title[lang] }}</a
	>
</template>

<style scoped></style>
