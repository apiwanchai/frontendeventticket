<script setup>
const isCheck = ref(false)
</script>
<template>
  <div class="mx-auto flex flex-col w-full my-[80px] min-h-[100vh] px-10">
    <base-checkbox v-model="isCheck" />
  </div>
</template>
