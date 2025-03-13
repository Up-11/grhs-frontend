<script lang="ts" setup>
import { useLocale } from '@i18n/useLocale'
import { inject } from 'vue'

const url = inject<URL>('url')
const { t } = useLocale(url!)
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
					src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
					alt="card-image"
					class="object-cover w-full h-full"
				/>
			</div>
			<div class="p-6">
				<div class="flex items-center justify-between mb-2">
					<h2
						class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900"
					>
						Apple AirPods
					</h2>
				</div>
				<p
					class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75"
				>
					With plenty of talk and listen time, voice-activated Siri access, and
					an available wireless charging case.
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
