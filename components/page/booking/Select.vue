<script setup>
import stageConcert from '~~/constants/event-maps/stageConcert'
</script>

<template>
  <div class="w-full mt-10 mb-[63px] gap-10">
    <div class="w-full flex gap-[31px] bg-primary rounded-[20px] p-10">
      <base-event-maps :name="stageConcert.name" :image="stageConcert.img" :area="stageConcert.map" />
      <div class="flex flex-col gap-6">
        <base-price-zone />
        <base-price-zone />
        <base-price-zone />
        <base-price-zone />
        <base-price-zone />
      </div>
    </div>
  </div>
</template>
