<script setup lang="ts">
import { useLocale } from '@i18n/useLocale'
import SidebarItem from './SidebarItem.vue'
import type { Category } from './types'

const props = defineProps<{
	menuItems: Category[]
	currentId: string
	url: URL
}>()
const { t } = useLocale(props.url)
</script>

<template>
	<aside class="md:sticky bg-white z-10 bottom-20 top-0 md:top-5 self-start">
		<h2 class="text-2xl font-semibold max-md:hidden cursor-default">
			{{ t('menu.category') }}
		</h2>
		<section class="flex flex-col gap-1 my-5">
			<SidebarItem
				v-for="item in menuItems"
				:item="item"
				:is-active="currentId === item.id"
			/>
		</section>
	</aside>
</template>
