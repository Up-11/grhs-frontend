<script setup lang="ts">
import { useLocale } from '@i18n/useLocale'
import { computed, provide, ref } from 'vue'

import CalendarDay from './CalendarDay.vue'
import EventList from './EventList.vue'
import { events, type IEventCard } from './types'
import { getMonthTranslation } from './utils'

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
	'December'
]
const currentTab = ref<ITab>(tabs[0])

const startDate = ref(new Date())
const lastDateInput = ref(new Date('2025-04-16'))

const currentEventDate = ref<string | null>(null)

const startMonth = computed(() => months[startDate.value.getMonth()])
const lastMonth = computed(() => months[lastDateInput.value.getMonth()])

const startIndex = computed(() => months.indexOf(startMonth.value))
const lastIndex = computed(() => months.indexOf(lastMonth.value))

const filteredMonths = computed(() => {
	return months.slice(startIndex.value, lastIndex.value + 1)
})

const days = computed(() => {
	const result = []
	const lastDate = new Date(lastDateInput.value)
	let currentDate = new Date(startDate.value)

	while (currentDate <= lastDate) {
		result.push(new Date(currentDate))
		currentDate.setDate(currentDate.getDate() + 1)
	}

	return result
})

const groupedDays = computed(() => {
	const groups: Record<number, Date[]> = {}

	days.value.forEach(day => {
		const month = day.getMonth()
		if (!groups[month]) {
			groups[month] = []
		}
		groups[month].push(day)
	})

	return Object.values(groups)
})

const formatMonth = (date: Date) => months[date.getMonth()]

const onWheel = (event: WheelEvent) => {
	event.preventDefault()
	const scrollContainer = event.currentTarget as HTMLElement

	scrollContainer.scrollLeft += event.deltaY
}

const setCurrentTab = (tab: ITab) => {
	currentTab.value = tab
	if (currentTab.value.value === 'closest') {
		startDate.value = new Date()
		lastDateInput.value = new Date('2025-04-16')
	} else {
		lastDateInput.value = new Date(startDate.value)
		startDate.value = new Date('2025-01-20')
	}
}

const filteredEvents = computed(
	() => (month: string) =>
		events.filter(curr => {
			const currDate = new Date(curr.date)
			const currMonth = formatMonth(currDate)

			if (currMonth === month) {
				if (currentTab.value.value === 'closest') {
					return currDate >= new Date()
				} else if (currentTab.value.value === 'past') {
					return currDate < new Date()
				}
			}
			return false
		})
)

const setIsActive = (day: Date) => {
	currentEventDate.value = day.toISOString()
	console.log(currentEventDate.value)
}

provide('url', url)
</script>

<template>
	<div
		class="relative w-full h-90 bg-center bg-cover bg-[url(/src/assets/coffeeshop-of-future.jpg)]"
	>
		<div class="absolute inset-0 z-10 bg-black/80"></div>
		<div
			class="relative z-10 text-white flex items-center justify-start container mx-auto h-full"
		>
			<div class="flex flex-col gap-2">
				<div class="flex flex-col gap-2 w-fit">
					<span
						v-for="tab in tabs"
						:key="tab.value"
						@click="setCurrentTab(tab)"
						:class="[
							'font-bold cursor-pointer select-none',
							tab.value === currentTab.value
								? 'text-green-300 sm:text-4xl text-xl order-1'
								: 'sm:text-2xl order-2 text-lg'
						]"
					>
						{{ tab.title }}
					</span>
				</div>

				<div
					@wheel="onWheel"
					class="gap-5 flex overflow-x-auto max-sm:max-w-80 scrollbar-hide whitespace-nowrap flex-nowrap container md:gap-3 lg:gap-5"
				>
					<div v-for="(group, monthIndex) in groupedDays" :key="monthIndex">
						<h1 class="my-2 text-xl md:text-lg lg:text-xl">
							{{ t(getMonthTranslation(formatMonth(group[0]))) }}
						</h1>
						<div
							class="flex gap-5 z-30 overflow-x-auto whitespace-nowrap flex-nowrap scrollbar-hide md:gap-3 lg:gap-5"
						>
							<CalendarDay
								v-for="day in group"
								@set-is-active="setIsActive(day)"
								:key="day.getDate()"
								:day="day.getDate()"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<EventList
		v-for="month in filteredMonths"
		:key="month"
		:month="t(getMonthTranslation(month))"
		:events="filteredEvents(month)"
	/>
</template>
<style scoped>
.scrollbar-hide::-webkit-scrollbar {
	display: none;
}
.scrollbar-hide {
	-ms-overflow-style: none;
	scrollbar-width: none;
}
</style>
