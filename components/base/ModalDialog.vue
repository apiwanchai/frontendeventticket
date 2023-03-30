<script setup>
import { VueFinalModal } from 'vue-final-modal'
import modalDialog from '~~/constants/interface-props/modalDialog'

// Props
// eslint-disable-next-line no-unused-vars
const props = defineProps(modalDialog)

// Functions
const emit = defineEmits(['update:modelValue'])
console.log(props)
</script>

<template>
  <vue-final-modal
    :id="idDialog"
    class="flex justify-center items-center dialog"
    content-class="flex flex-col max-w-xl mx-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg space-y-2"
    @update:model-value="(val) => emit('update:modelValue', val)"
  >
    <div class="relative flex flex-col">
      <nuxt-icon
        name="svg/cancel"
        class="absolute top-2 right-4 z-10 text-lg cursor-pointer"
        @click="emit('update:modelValue', false)"
      />
      <div v-if="title || subtitle" class="flex flex-col justify-center items-center">
        <slot v-if="title" name="title">
          <div class="text-2xl font-semibold">{{ title }}</div>
        </slot>
        <slot v-if="subtitle" name="desc">
          <div class="text-base mt-2">{{ subtitle }}</div>
        </slot>
      </div>
    </div>
    <slot name="body"> </slot>
  </vue-final-modal>
</template>

<style lang="scss">
.dialog {
  .vfm__container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .vfm__content {
    width: 100%;
    min-height: 100px;
    background-color: var(--modal-bg);
    border: 0px solid;
    padding: 2.5rem;
  }
}
</style>
