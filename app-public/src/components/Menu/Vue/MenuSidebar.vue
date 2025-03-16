<script setup lang="ts">
import SidebarItem from './SidebarItem.vue'
import type { IMenu } from './types'

defineProps<{ menuItems: IMenu[]; currentId: string }>()
</script>

<template>
	<aside class="sticky top-5 self-start">
		<h2 class="text-2xl font-semibold">Категории</h2>
		<section class="flex flex-col gap-1 mt-5">
			<SidebarItem
				v-for="item in menuItems"
				:item="item"
				:is-active="currentId === item.id"
			/>
		</section>
	</aside>
</template>
