<script setup lang="ts">
import { useLocale } from '@i18n/useLocale'
import { ref } from 'vue'

import ProductModal from './ProductModal.vue'
import type { IProductCard } from './types'

defineProps<{ item: IProductCard }>()

const url = typeof window !== 'undefined' ? new URL(window.location.href) : null

const { t } = useLocale(url!)

const loading = ref<boolean>(true)
</script>

<template>
	<div class="w-[250px] max-h-[350px] flex flex-col cursor-default gap-2">
		<div class="relative w-[250px] h-[250px]">
			<div
				v-if="loading"
				class="absolute inset-0 bg-gray-200 animate-pulse rounded"
			></div>
			<img
				v-show="!loading"
				:src="item.imageUrl"
				:alt="item.name"
				width="250px"
				height="250px"
				class="object-cover rounded"
				@load="loading = false"
			/>
		</div>
		<div class="flex flex-col gap-1">
			<h3 class="font-semibold line-clamp-2">{{ item.name }}</h3>
			<h4 class="text-gray-500 line-clamp-3">
				{{ item.description }}
			</h4>
		</div>
		<div class="flex justify-between mt-2 items-center">
			<p class="font-medium">
				{{ t('menu.button.from') }} {{ item.price.value }}₽
			</p>
			<ProductModal :url="url!" :item="item">
				<button
					class="cursor-pointer text-sm text-green-950 px-4 py-2 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
				>
					{{ t('menu.button.more') }}
				</button>
			</ProductModal>
		</div>
	</div>
</template>
