<script setup lang="ts">
import EventCard from './EventCard.vue'
import type { IEventCard } from './types'

defineProps<{ month: string; events?: IEventCard[] }>()
</script>

<template>
	<section class="container mx-auto flex flex-col gap-4 flex-1">
		<h1 class="text-4xl my-4 font-bold">{{ month }}</h1>
		<div
			class="justify-items-center gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
		>
			<EventCard v-for="event in events" :key="event.id" :event="event" />
		</div>
	</section>
</template>
