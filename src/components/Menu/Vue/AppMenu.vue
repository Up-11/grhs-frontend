<script setup lang="ts">
import { useLocale } from '@i18n/useLocale'
import { useIntersectionObserver } from '@vueuse/core'
import { nextTick, onMounted, onUnmounted, ref } from 'vue'

import MenuCard from './MenuCard.vue'
import MenuSidebar from './MenuSidebar.vue'
import type { Category, IProductCard } from './types'
import axios from 'axios'

const sectionRefs = ref<HTMLElement[]>([])
const currentId = ref<string>('')

const responseCategories = await axios.get(
	`http://api.up-mailer.ru/api/products/categories`
)

const items = (await responseCategories.data) as Category[]

const response = await axios.get(`http://api.up-mailer.ru/api/products`)

const products = (await response.data) as IProductCard[]

const url = typeof window !== 'undefined' ? new URL(window.location.href) : null

const { t, lang } = useLocale(url!)

onMounted(() => {
	nextTick(() => {
		sectionRefs.value = items.map(
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
		sectionRefs.value = items.map(
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
	<div
		class="grid max-md:p-4 mb-15 grid-cols-1 md:grid-cols-[200px_1fr] gap-5 mt-4"
	>
		<MenuSidebar :current-id="currentId" :menu-items="items" />

		<div class="flex flex-col gap-25">
			<div v-for="item in items" :key="item.id">
				<h2 ref="target" class="text-4xl font-bold" :id="item.id">
					{{ item.title[lang] }}
				</h2>

				<div
					class="grid grid-cols-1 max-md:justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
				>
					<MenuCard
						v-for="product in products.filter(p => p.categoryId === item.id)"
						:key="product.id"
						:item="product"
					/>
				</div>
			</div>
		</div>
	</div>
</template>
