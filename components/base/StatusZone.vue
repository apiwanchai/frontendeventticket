<script setup>
import statusZone from '~~/constants/interface-props/statusZone'
// Props
defineProps(statusZone)
</script>

<template>
  <div class="flex items-center justify-center gap-2">
    <div class="w-2 h-2 rounded-full" :class="[`bg-[${statusColor}]`]" />
    <p :class="[`text-[${statusColor}]`]">{{ label }}</p>
  </div>
</template>
