<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
import { nextTick, onMounted, onUnmounted, ref } from 'vue'

import MenuCard from './MenuCard.vue'
import MenuSidebar from './MenuSidebar.vue'
import { type IMenu, products } from './types'

const sidebarItems: IMenu[] = [
	{
		title: 'Сезонные напитки',
		id: 'seasonal-drinks'
	},
	{
		title: 'Авторские напитки',
		id: 'authors-drinks'
	},
	{
		title: 'Кофе',
		id: 'coffee'
	},
	{
		title: 'Горячие напитки',
		id: 'hot-drinks'
	},
	{
		title: 'Холодные напитки',
		id: 'cold-drinks'
	}
]

const sectionRefs = ref<HTMLElement[]>([])
const currentId = ref<string>('')

onMounted(() => {
	nextTick(() => {
		sectionRefs.value = sidebarItems.map(
			item => document.getElementById(item.id) as HTMLElement
		)
	})
})

const { stop } = useIntersectionObserver(
	sectionRefs,
	entries => {
		const visibleSection = entries
			.filter(entry => entry.isIntersecting)
			.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]

		if (visibleSection) {
			currentId.value = visibleSection.target.id
		}
	},
	{ threshold: 1, rootMargin: '0px 0px -50%' }
)

onUnmounted(() => {
	stop()
})

onMounted(() => {
	nextTick(() => {
		sectionRefs.value = sidebarItems.map(
			item => document.getElementById(item.id) as HTMLElement
		)

		const hash = window.location.hash.substring(1)
		if (hash) {
			const targetElement = document.getElementById(hash)
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: 'smooth' })
			}
		}
	})
})
</script>

<template>
	<div class="grid mb-15 grid-cols-[200px_1fr] gap-5 mt-4">
		<MenuSidebar :current-id="currentId" :menu-items="sidebarItems" />

		<div class="flex flex-col gap-25">
			<div v-for="item in sidebarItems" :key="item.id">
				<h2 ref="target" class="text-4xl font-bold" :id="item.id">
					{{ item.title }}
				</h2>
				<div class="grid grid-cols-4 gap-6">
					<MenuCard
						v-for="product in products.filter(p => p.category === item.id)"
						:key="product.id"
						:item="product"
					/>
				</div>
			</div>
		</div>
	</div>
</template>
