<script setup>
// const bg1 = new URL('../assets/images/bg/concert1.jpg', import.meta.url)
// const bg2 = new URL('../assets/images/bg/concert2.jpg', import.meta.url)
</script>
<template>
  <page-home-banner-promote />
  <div class="swiper content-lg">
    <page-home-banner-slide id="home-banner" :bg-show="true" />
  </div>
  <div class="ticket py-16 relative overflow-hidden <sm:py-10">
    <img
      class="absolute top-0 left-0 w-full h-full filter blur-[15px] object-cover"
      src="../assets/images/bg/concert1.jpg"
    />
    <page-home-up-coming-show />
  </div>
  <div class="eventsAll py-16 relative overflow-hidden <sm:py-10">
    <img
      class="absolute top-0 left-0 w-full h-auto filter blur-[15px] object-cover"
      src="../assets/images/bg/concert3.jpg"
    />
    <page-home-events-all />
  </div>
  <div class="souvenirs py-16 <sm:py-10">
    <page-home-souvenirs-slide />
  </div>
  <div class="box pb-16 <sm:pb-10">
    <page-home-news />
  </div>
</template>

<style lang="scss" scoped>
.ticket::before,
.eventsAll::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  display: block;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  width: 100%;
  height: 100%;
}
</style>
