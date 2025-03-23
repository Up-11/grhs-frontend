<script setup lang="ts">
import { useLocale } from '@i18n/useLocale'
import { computed, onMounted, ref, watch } from 'vue'

import ProductNutrition from './ProductNutrition.vue'
import SwitchVolumeButton from './SwitchVolumeButton.vue'
import type { IProductCard } from './types'

const props = defineProps<{ item: IProductCard; url: URL }>()
const modalRef = ref<HTMLDialogElement | null>(null)
const open = ref<boolean>(false)

const openModal = () => {
	modalRef.value?.showModal()
	open.value = true
}

onMounted(() => {
	const url = new URL(window.location.href)
	if (url.searchParams.has('product')) {
		if (url.searchParams.get('product') === props.item.name) {
			modalRef.value?.showModal()
			open.value = true
		}
	}
})

watch(open, () => {
	const url = new URL(window.location.href)

	if (open.value) {
		url.searchParams.set('product', props.item.id)
	} else {
		url.searchParams.delete('product')
	}

	window.history.replaceState({}, '', url)
})
const closeModal = (event: MouseEvent) => {
	if (
		event.target instanceof HTMLDialogElement &&
		event.target === modalRef.value
	) {
		modalRef.value?.close()
		open.value = false
	}
}

const closeModalOnButton = () => {
	modalRef.value?.close()
	open.value = false
}

const loading = ref<boolean>(true)

const composition = computed(() => props.item.composition.join('/'))

const { t } = useLocale(props.url)

const chosenVolume = ref<number>(props.item.volumes.value)

const volumes = computed(() =>
	Object.values(props.item.volumes).sort((a, b) => a - b)
)

const currentPrice = computed(() =>
	chosenVolume.value === props.item.volumes.value
		? props.item.price.value
		: props.item.price.max
)

const activeVolumeIndex = computed(() =>
	volumes.value.indexOf(chosenVolume.value)
)

const setChosenVolume = (volume: number, index: number) => {
	chosenVolume.value = volume
}

const nutritionData = computed(() => {
	return Object.entries(props.item.nutrition).map(([key, value]) => ({
		title: `nutrition.${key}`,
		nutritionVariant:
			chosenVolume.value === props.item.volumes.value ? value.value : value.max
	}))
})
</script>

<template>
	<button @click="openModal"><slot /></button>

	<dialog ref="modalRef" class="modal" @click="closeModal">
		<div class="modal-box w-11/12 max-w-5xl">
			<button
				@click="closeModalOnButton"
				class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
			>
				✕
			</button>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="justify-self-center max-md:mt-5">
					<div class="relative">
						<div
							v-if="loading"
							class="absolute inset-0 bg-gray-200 animate-pulse rounded"
						></div>
						<img
							v-show="!loading"
							:src="item.imageUrl"
							:alt="item.name"
							class="object-cover rounded w-full h-full"
							@load="loading = false"
						/>
					</div>
					<div class="flex gap-2 mt-4 relative flex-wrap justify-start">
						<div
							class="rounded-full bg-green-100 absolute border-3 border-green-900"
							:style="{
								width: '50px',
								height: '50px',
								transform:
									activeVolumeIndex !== null
										? `translateX(calc(${activeVolumeIndex * 144}% - 100%))`
										: 'none'
							}"
							:class="['bottom-5.5 left-14', 'transition-all duration-300']"
						/>
						<SwitchVolumeButton
							v-for="(volume, i) in volumes"
							:key="i"
							@set-is-active="setChosenVolume(volume, i)"
							:volume="volume"
							:isActive="chosenVolume === volume"
							:size="i === 0 ? 'small' : 'large'"
							:text="t('modal.ml')"
						/>
					</div>
				</div>
				<div class="py-4 flex flex-col gap-4">
					<h2 class="text-2xl font-bold">{{ item.name }}</h2>
					<h3 class="text-base text-gray-500">{{ item.description }}</h3>
					<div>
						<h4 class="text-2xl font-bold">{{ t('modal.composition') }}</h4>
						<p class="text-green-900">{{ composition }}</p>
					</div>
					<div>
						<h4 class="text-2xl font-bold">{{ t('modal.EV') }}</h4>
						<div
							class="grid grid-cols-2 justify-items-center sm:grid-cols-4 gap-2"
						>
							<ProductNutrition
								v-for="(nutrition, index) in nutritionData"
								:key="index"
								:nutrition-variant="nutrition.nutritionVariant"
								:title="t(nutrition.title as any)"
							/>
						</div>
					</div>
					<div>
						<h4 class="text-2xl font-bold">{{ t('modal.price') }}</h4>
						<h2 class="text-4xl font-bold text-green-700">
							{{ currentPrice }} ₽
						</h2>
					</div>
				</div>
			</div>
			<div class="modal-action"></div>
		</div>
	</dialog>
</template>
