<script setup lang="ts">
import EventCard from './EventCard.vue'
</script>

<template>
	<section class="container mx-auto flex flex-col gap-4">
		<h1 class="text-4xl my-4 font-bold">
			<span class="text-green-700 text-7xl">22</span> Февраля
		</h1>
		<div
			class="justify-items-center gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
		>
			<EventCard />
			<EventCard />
			<EventCard />
			<EventCard />
			<EventCard />
			<EventCard />
		</div>
		<h1 class="text-4xl my-4 font-bold">
			<span class="text-green-700 text-7xl">22</span> Февраля
		</h1>
		<div
			class="justify-items-center gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
		>
			<EventCard />
			<EventCard />
		</div>
	</section>
</template>

<style scoped></style>
