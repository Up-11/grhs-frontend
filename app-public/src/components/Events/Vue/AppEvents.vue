<script setup lang="ts">
import { useLocale } from '@i18n/useLocale'
import dayjs from 'dayjs'
import { computed, provide, ref } from 'vue'

import CalendarDay from './CalendarDay.vue'
import { useDates } from './composables/useDates'
import EventList from './EventList.vue'
import type { IEventCard } from './types'
import { getMonthTranslation } from './utils'

interface ITab {
	title: string
	value: string
}

const responseEvents = await fetch(`http://localhost:4200/api/events`)

const events = (await responseEvents.json()) as IEventCard[]
const firstEvent = computed(() =>
	events.sort((a, b) => (new Date(a.date) > new Date(b.date) ? 1 : -1))
)

const url = typeof window !== 'undefined' ? new URL(window.location.href) : null

const { t } = useLocale(url!)

const firstEventDate = firstEvent.value[0].date
const lastEventDate = firstEvent.value.at(-1)!.date

const {
	currentEventDate,
	groupedDays,
	formatMonth,
	filteredMonths,
	startDate,
	lastDateInput,
	clearCurrentEventDate
} = useDates(events, lastEventDate)

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
const onWheel = (event: WheelEvent) => {
	event.preventDefault()
	const scrollContainer = event.currentTarget as HTMLElement

	scrollContainer.scrollLeft += event.deltaY
}
const setCurrentTab = (tab: ITab) => {
	if (currentTab.value.value === tab.value) {
		return
	}

	currentTab.value = tab
	clearCurrentEventDate()

	if (currentTab.value.value === 'closest') {
		const today = new Date()
		today.setHours(0, 0, 0, 0)

		startDate.value = new Date(today)
		startDate.value.setDate(today.getDate() + 1)

		lastDateInput.value = new Date(lastEventDate)
	} else {
		lastDateInput.value = new Date(startDate.value)
		startDate.value = new Date(firstEventDate)
	}
}

const filteredEvents = (month: string) => {
	return events
		.filter(curr => {
			const currDate = new Date(curr.date.split('T')[0])
			const currMonth = formatMonth(currDate)

			if (currMonth === month) {
				if (currentTab.value.value === 'closest') {
					return currDate.getDate() >= new Date().getDate()
				} else if (currentTab.value.value === 'past') {
					return currDate < new Date()
				}
			}

			return false
		})
		.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

const dayEvents = computed(() => {
	if (!currentEventDate.value) return []

	return events
		.filter(curr => {
			const currDate = new Date(curr.date.split('T')[0])
			const selectedDate = new Date(currentEventDate.value!)

			return (
				currDate.getFullYear() === selectedDate.getFullYear() &&
				currDate.getMonth() === selectedDate.getMonth() &&
				currDate.getDate() === selectedDate.getDate()
			)
		})
		.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
})

const setIsActive = (day: Date) => {
	if (currentEventDate.value !== day) currentEventDate.value = day
}

provide('url', url)
</script>

<template>
	<div class="flex flex-col">
		<div
			class="relative w-full h-90 bg-center bg-cover bg-[url(/src/assets/coffeeshop-of-future.jpg)]"
		>
			<div class="absolute inset-0 z-10 bg-black/80" />
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
									@clear-is-active="clearCurrentEventDate"
									:is-active="currentEventDate === day"
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
			v-if="!currentEventDate"
			v-for="month in filteredMonths"
			:key="month"
			:month="t(getMonthTranslation(month))"
			:events="filteredEvents(month)"
		/>
		<EventList
			v-else-if="currentEventDate"
			v-for="event in dayEvents"
			:month="dayjs(event.date.split('T')[0]).format('DD/MM')"
			:key="event.id"
			:events="dayEvents"
		/>
	</div>
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
