import { computed, ref } from 'vue'

import type { IEventCard } from '../types'
import { getMonthTranslation } from '../utils'

export const useDates = (events: IEventCard[], lastDate: string) => {
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

	const today = new Date()
	today.setHours(0, 0, 0, 0)
	const startDate = ref(new Date(today))
	startDate.value = new Date(today)
	startDate.value.setDate(today.getDate() + 1)
	const lastDateInput = ref(new Date('2025-04-16'))

	const currentEventDate = ref<Date | null>(null)

	const startMonth = computed(() => months[startDate.value.getMonth()])
	const lastMonth = computed(() => months[lastDateInput.value.getMonth()])

	const startIndex = computed(() => months.indexOf(startMonth.value))
	const lastIndex = computed(() => months.indexOf(lastMonth.value))

	const clearCurrentEventDate = () => {
		currentEventDate.value = null
	}

	const filteredMonths = computed(() =>
		months.slice(startIndex.value, lastIndex.value + 1)
	)

	const days = computed(() => {
		const eventDates = new Set(events.map(event => event.date.split('T')[0]))

		const result: Date[] = []

		const lastDate = new Date(lastDateInput.value)
		let currentDate = new Date(startDate.value)

		while (currentDate <= lastDate) {
			const formattedDate = new Date(currentDate.toISOString().split('T')[0])

			if (eventDates.has(formattedDate.toISOString().split('T')[0])) {
				result.push(formattedDate)
			}

			currentDate = new Date(currentDate)
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

	const formatStingDate = (date: Date, t: any): string => {
		const day = date.getDate().toString().padStart(2, '0')
		const month = getMonthTranslation(months[date.getMonth()]).toLowerCase()
		return `${day} ${t(month)}`
	}

	return {
		formatMonth,
		groupedDays,
		currentEventDate,
		days,
		filteredMonths,
		lastDateInput,
		startDate,
		clearCurrentEventDate,
		formatStingDate
	}
}
