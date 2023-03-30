<script setup>
// State
const outSideRef = ref(null)
const router = useRouter()

// Functions
const callBackFunction = () => {
  globalAlert.value?.actionsCallBack && globalAlert.value?.actionsCallBack()
  globalAlert.value?.actionsPath && router.push(globalAlert.value?.actionsPath)
  useClearAlert()
}

onClickOutside(outSideRef, () => {
  globalAlert.value?.successCallBack && globalAlert.value?.successCallBack()
  useClearAlert()
})
</script>

<template>
  <div
    v-if="globalAlert?.isOpen"
    class="base-alert-wrapper fixed top-0 left-0 w-screen h-screen bg-[#000000] bg-opacity-60 flex items-center justify-center"
  >
    <div
      ref="outSideRef"
      class="max-w-[29.25rem] w-full py-10 px-6 bg-[var(--alert-bg)] rounded-[20px] flex flex-col items-center justify-center text-base mx-4 <sm:(max-w-full px-4)"
    >
      <base-status-icon
        v-if="globalAlert?.success || globalAlert?.error || globalAlert?.warning || globalAlert?.info"
        :success="globalAlert?.success"
        :error="globalAlert?.error"
        :warning="globalAlert?.warning"
        :info="globalAlert?.info"
      />
      <div
        v-if="
          !globalAlert?.title &&
          (globalAlert?.success || globalAlert?.error || globalAlert?.warning || globalAlert?.info)
        "
      >
        <p v-if="globalAlert?.success" class="text-title text-lg mb-4 success <sm:text-base">Success</p>
        <p v-if="globalAlert?.error" class="text-title text-lg mb-4 error <sm:text-base">Error</p>
        <p v-if="globalAlert?.warning" class="text-title text-lg mb-4 warning <sm:text-base">Warning</p>
        <p v-if="globalAlert?.info" class="text-title text-lg mb-4 info <sm:text-base">Info</p>
      </div>
      <p v-if="globalAlert?.title" class="text-title text-lg mb-4 <sm:text-base">{{ globalAlert?.title }}</p>
      <p v-if="globalAlert?.text" class="text-title text-base text-center mb-4 <sm:text-sm">{{ globalAlert?.text }}</p>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-if="globalAlert?.html" v-html="globalAlert?.html"></div>
      <base-button
        v-if="globalAlert?.buttonText"
        class="btn-primary text-base mt-6"
        size="sm"
        rounded
        @click="callBackFunction"
      >
        {{ globalAlert?.buttonText }}
      </base-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.base-alert-wrapper {
  z-index: 52;
  .success {
    color: var(--success);
  }
  .error {
    color: var(--danger);
  }
  .warning {
    color: var(--warning);
  }
  .info {
    color: #3fc3ee;
  }
}
</style>
