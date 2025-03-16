<script setup>
import { ref } from 'vue'

const modalRef = ref(null)

const openModal = () => {
	modalRef.value?.showModal()
}

const closeModal = event => {
	if (event.target === modalRef.value) {
		modalRef.value?.close()
	}
}

const closeButton = () => {
	modalRef.value?.close()
}
</script>

<template>
	<button @click="openModal"><slot /></button>

	<dialog ref="modalRef" class="modal" @click="closeModal">
		<div class="modal-box">
			<form method="dialog">
				<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
					✕
				</button>
			</form>
			<h3 class="text-lg font-bold">Привет!</h3>
			<p class="py-4">Нажмите ESC или кнопку ниже, чтобы закрыть</p>
			<div class="modal-action"></div>
		</div>
	</dialog>
</template>
