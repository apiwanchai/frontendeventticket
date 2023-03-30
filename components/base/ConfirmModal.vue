<template>
  <vue-final-modal
    v-slot="{ close }"
    classes="flex justify-center items-center"
    content-class="relative flex flex-col mx-4 p-4 border rounded bg-white min-w-[300px]"
  >
    <button class="modal__close absolute right-1 top-1" @click="close">
      <nuxt-icon name="svg/cancel" class="text-title text-xl" />
    </button>
    <span class="modal__title font-semibold text-lg">Title</span>
    <div class="modal__content text-sm">
      <slot></slot>
    </div>
    <div class="modal__action flex justify-center gap-2 mt-2">
      <button class="bg-blue-400 p-2 rounded text-white">Submit</button>
      <button class="bg-red-400 p-2 rounded text-white" @click="close">Cancel</button>
    </div>
  </vue-final-modal>
</template>

<style lang="scss">
</style>
