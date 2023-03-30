<script setup>
import eventNews from '~~/constants/interface-props/eventNews'

// Props
defineProps(eventNews)
</script>
<template>
  <div class="flex flex-col" :class="{ '<sm:flex-row': newCardMb }">
    <div class="relative img-event w-full cursor-pointer">
      <img
        :src="imgUrl"
        alt="icon"
        class="absolute top-0 left-0 w-full h-full"
        :class="newCardMb === 'mbCard' && detailsShow ? 'roundedImg' : detailsShow ? 'v-rounded-t' : 'v-rounded'"
      />
      <div
        v-if="!detailsShow"
        class="subject v-rounded-b absolute bottom-0 h-full flex items-end p-2 w-full text-lg font-semibold"
      >
        {{ subject }}
      </div>
    </div>
    <div
      v-if="detailsShow"
      class="p-2 details"
      :class="newCardMb === 'mbCard' && detailsShow ? 'roundedDetails' : 'v-rounded-b'"
    >
      <div class="text-sm font-medium sm:text-base">{{ subject }}</div>
      <div class="text-xs font-medium text-subtitle sm:text-sm">{{ details }}</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.img-event {
  padding-top: calc(453 / 1079 * 100%);
}
.subject {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 52.08%, rgba(0, 0, 0, 0.9) 100%);
}
.details {
  background: rgba(45, 45, 45, 0.5);
  backdrop-filter: blur(50px);
}

.roundedImg {
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  @media only screen and (orientation: portrait) and (max-width: 479px) {
    object-fit: cover;
    object-position: left;
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
}

.roundedDetails {
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  @media only screen and (orientation: portrait) and (max-width: 479px) {
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>
