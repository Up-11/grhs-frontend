<script setup lang="ts">
import SidebarItem from './SidebarItem.vue'
import type { IMenu } from './types'

defineProps<{ menuItems: IMenu[]; currentId: string }>()
</script>

<template>
	<aside class="md:sticky bg-white z-10 bottom-20 top-0 md:top-5 self-start">
		<h2 class="text-2xl font-semibold max-md:hidden cursor-default">
			Категории
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
