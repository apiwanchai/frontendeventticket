<script setup>
const favorite = new URL('../../assets/icons/2d/stars.png', import.meta.url)
const unfavorite = new URL('../../assets/icons/2d/stars_outline.png', import.meta.url)

const isFavorite = ref(false)

// Functions
const emit = defineEmits(['update:modelValue'])
emit('update:modelValue', false)
const updateValue = () => {
  isFavorite.value = !isFavorite.value
  emit('update:modelValue', isFavorite)
}
</script>
<template>
  <div
    class="favorite flex justify-center items-center cursor-pointer bg-[var(--light)] rounded-full w-[32px] h-[32px]"
    @click="updateValue"
  >
    <img :src="isFavorite ? favorite : unfavorite" alt="favorite-icon" class="favorite-icon w-[18px] h-[15px]" />
  </div>
</template>
