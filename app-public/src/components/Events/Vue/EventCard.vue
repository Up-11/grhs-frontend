<script lang="ts" setup>
import { useLocale } from '@i18n/useLocale'
import dayjs from 'dayjs'
import { computed, inject } from 'vue'

import type { IEventCard } from './types'

const props = defineProps<{ event: IEventCard }>()

const url = inject<URL>('url')
const { t } = useLocale(url!)

const formattedDate = computed(() => dayjs(props.event.date).format('DD/MM'))
</script>

<template>
	<div class="max-w-[620px]">
		<div
			class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border w-80"
		>
			<div
				class="relative overflow-hidden text-gray-700 bg-white bg-clip-border h-70"
			>
				<img
					:src="event.imageUrl"
					alt="card-image"
					class="object-cover w-full h-full"
				/>
			</div>
			<div class="p-6">
				<div class="flex items-center justify-between mb-2">
					<h2
						class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900"
					>
						{{ event.name }}
					</h2>
					<p class="text-green-700 font-semibold">{{ formattedDate }}</p>
				</div>
				<p
					class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75"
				>
					{{ event.description }}
				</p>
			</div>
			<div class="p-6 pt-0">
				<button class="btn btn-outline border-green-600 text-green-800">
					{{ t('event.button') }}
				</button>
			</div>
		</div>
	</div>
</template>
