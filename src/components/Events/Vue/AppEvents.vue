<script setup lang="ts">
import { useLocale } from '@i18n/useLocale'
import { computed, onMounted, provide, ref } from 'vue'
import axios from 'axios'

import EventList from './EventList.vue'
import type { IEventCard } from './types'
import { getMonthTranslation } from './utils'

interface ITab {
	title: string
	value: string
}

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]
const events = ref<IEventCard[]>([])
const currentView = ref<'current' | 'past'>('current')
const url = typeof window !== 'undefined' ? new URL(window.location.href) : null
const { t } = useLocale(url!)

const fetchEvents = async () => {
	try {
		const response = await axios.get('http://api.up-mailer.ru/api/events')
		events.value = response.data as IEventCard[]
	} catch (error) {
		console.error('Error fetching events:', error)
	}
}

onMounted(fetchEvents)

const incomingEvents = computed(() => {
	return events.value.filter(event => new Date(event.date) >= new Date())
})

const pastEvents = computed(() => {
	return events.value.filter(event => new Date(event.date) < new Date())
})

const filteredMonths = computed(() => {
	const viewEvents =
		currentView.value === 'current' ? incomingEvents.value : pastEvents.value
	const uniqueMonths = new Set(
		viewEvents.map(event => new Date(event.date).getMonth())
	)
	return Array.from(uniqueMonths).sort()
})

const filteredEvents = (month: number) => {
	const viewEvents =
		currentView.value === 'current' ? incomingEvents.value : pastEvents.value
	return viewEvents.filter(event => new Date(event.date).getMonth() === month)
}

const toggleView = () => {
	currentView.value = currentView.value === 'current' ? 'past' : 'current'
}

provide('url', url)
</script>

<template>
	<div class="flex flex-col">
		<div
			class="relative w-full h-90 bg-center bg-cover bg-[url(/src/assets/coffeeshop-of-future.jpg)]"
		>
			<div class="absolute inset-0 z-10 bg-black/80"></div>
			<div
				class="relative z-10 text-white flex items-center justify-between container mx-auto h-full px-4"
			>
				<div class="flex flex-col gap-2">
					<span
						class="font-bold cursor-pointer select-none text-green-300 sm:text-4xl text-xl"
					>
						{{
							currentView === 'current'
								? t('event.closest-title')
								: t('event.past-title')
						}}
					</span>
				</div>
				<div class="flex items-center">
					<button
						@click="toggleView"
						class="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-sm font-medium hover:bg-white/20 transition-colors"
					>
						{{
							currentView === 'current'
								? t('event.past-title')
								: t('event.closest-title')
						}}
					</button>
				</div>
			</div>
		</div>
		<div>
			<EventList
				v-for="month in filteredMonths"
				:month="t(getMonthTranslation(months[month]))"
				:key="month"
				:events="filteredEvents(month)"
			/>
		</div>
	</div>
</template>
