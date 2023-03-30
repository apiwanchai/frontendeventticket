<script setup>



</script>

<template>
  <layout-sidebar />
  <layout-header />
  <main class="">
    <!-- <main class="max-w-[1920px] mx-auto"> -->
    <slot />
  </main>
  <layout-footer />
  <login-modal />
  <register-modal />
  <forgot-password-modal />
  <reset-password-modal />
</template>
