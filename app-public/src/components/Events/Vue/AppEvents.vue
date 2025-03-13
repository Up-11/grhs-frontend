<script setup lang="ts">
import { useLocale } from '@i18n/useLocale'
import { provide, ref } from 'vue'

import EventList from './EventList.vue'

interface ITab {
	title: string
	value: string
}

const url = typeof window !== 'undefined' ? new URL(window.location.href) : null

const { t } = useLocale(url!)

const tabs: ITab[] = [
	{
		title: t('event.closest-title'),
		value: 'closest'
	},
	{
		title: t('event.past-title'),
		value: 'past'
	}
]

const currentTab = ref<ITab>(tabs[0])

const setCurrentTab = (tab: ITab) => (currentTab.value = tab)

provide('url', url)
</script>

<template>
	<div
		class="relative w-full h-90 bg-center bg-cover bg-[url(/src/assets/coffeeshop-of-future.jpg)]"
	>
		<div class="absolute inset-0 bg-black/80"></div>
		<div
			class="relative z-10 text-white flex items-center justify-start container mx-auto h-full"
		>
			<div class="flex flex-col gap-2">
				<h2
					v-for="tab in tabs"
					:key="tab.value"
					@click="setCurrentTab(tab)"
					:class="[
						'font-bold cursor-pointer select-none',
						tab.value === currentTab.value
							? 'text-green-300 text-4xl order-1'
							: ' text-2xl order-2'
					]"
				>
					{{ tab.title }}
				</h2>
			</div>
		</div>
	</div>
	<EventList />
</template>

<style scoped></style>
