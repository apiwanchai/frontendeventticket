<script setup>
import stageConcert from '~~/constants/event-maps/stageConcert'
</script>

<template>
  <div class="mx-auto flex flex-col w-full my-[80px] min-h-[100vh] px-10">
    <base-event-maps :name="stageConcert.name" :image="stageConcert.img" :area="stageConcert.map" />
  </div>
</template>
