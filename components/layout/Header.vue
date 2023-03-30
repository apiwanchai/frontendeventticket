<script setup>
// Imports
import thFlag from '~/assets/images/flags/th.png'
import enFlag from '~/assets/images/flags/en.png'
import cnFlag from '~/assets/images/flags/cn.png'
import sidebar from '~/constants/sidebar'
const { logout } = useAuth()
const user = useAuthUser()
// const { logout } = useAuth()
// const user = useAuthUser()
const loginModal = useLoginModal()
const { locales, locale, setLocale } = useI18n()
// State
const flagUrl = ref({
  th: thFlag,
  en: enFlag,
  cn: cnFlag,
})
const userInfo = reactive({ user })
// Functions
const handleLoginSubmit = () => {
  loginModal.value = true
}
const handleChangeLang = (lang) => {
  setLocale(lang || 'th')
}
</script>

<template>
  <header class="fixed top-0 left-0 z-50 w-full">
    <div class="base-container mx-auto w-full h-[4.375rem] flex justify-between items-center px-3 <sm:h-[3.5rem]">
      <!-- Left -->
      <div class="text-white">
        <img src="~/assets/images/logo.png" alt="" srcset="" class="h-10" />
      </div>
      <!-- Menu -->
      <div class="hidden lg:block">
        <ul class="flex text-title text-lg gap-4 md:gap-6 lg:gap-12">
          <li class="cursor-pointer" @click="$router.push('/')">{{ $t('home') }}</li>
          <li class="cursor-pointer" @click="$router.push('/events')">{{ $t('events') }}</li>
          <li class="cursor-pointer" @click="$router.push('/souvenirs')">{{ $t('souvenirs') }}</li>
          <li class="cursor-pointer" @click="$router.push('/news')">{{ $t('news') }}</li>
        </ul>
      </div>
      <!-- Login & Profil -->
      <div class="flex justify-center items-center gap-6 <sm:gap-4">
        <nuxt-icon name="svg/search" class="text-title text-xl" />
        <nuxt-icon name="svg/notification" class="text-title text-xl" />
        <base-popup top-position="30px" position="right" :type-switch="640">
          <img
            :src="flagUrl[locale]"
            alt=""
            srcset=""
            class="h-6 w-6 border border-white rounded-full cursor-pointer"
          />
          <!-- popup -->
          <template #content="{ toggleIsOpen }">
            <div class="w-full w-[170px] <sm:w-[95vw]">
              <div
                v-for="item in locales"
                :key="item.code"
                class="card-hover-primary w-full h-11 flex items-center justify-start gap-4 px-4"
                @click="
                  () => {
                    handleChangeLang(item.code)
                    toggleIsOpen()
                  }
                "
              >
                <img
                  :src="flagUrl[item.code]"
                  alt=""
                  srcset=""
                  class="h-6 w-6 border border-white rounded-full cursor-pointer"
                />
                <span class="text-title text-base">{{ item.name }}</span>
              </div>
            </div>
          </template>
        </base-popup>
        <base-button
          v-if="userInfo.user === null"
          class="btn-primary min-w-[114px]"
          rounded
          @click="handleLoginSubmit"
          >{{ $t('login') }}</base-button
        >
        <div
          v-if="userInfo.user !== null"
          class="justify-center items-end flex-col rounded-lg min-w-[122px] h-[52px] p-1 bg-opacity-30 bg-[#fff] <sm:hidden md:flex"
        >
          <div class="leading-snug text-sm">วอลเล็ท</div>
          <div class="leading-snug text-base">฿10,000</div>
        </div>
        <!-- menu popup -->
        <base-popup v-if="userInfo.user !== null" top-position="30px" position="right" :hidden="640">
          <div class="cursor-pointer" @click="useSidebar(true)">
            <img src="~/assets/images/user.png" alt="" srcset="" class="h-9 w-9 border border-white rounded-full" />
          </div>
          <!-- popup -->
          <template #content="{ toggleIsOpen }">
            <div class="w-full w-[300px]">
              <div class="w-full px-4">
                <div class="border-b">
                  <p class="text-lg">มาลี หอมหวญ</p>
                  <div class="flex justify-between items-end">
                    <span class="text-sm">วอลเล็ท</span>
                    <span class="text-lg">฿10,000.00</span>
                  </div>
                </div>
              </div>
              <div class="w-full flex flex-col">
                <router-link
                  v-for="item in sidebar"
                  :key="item.text"
                  class="card-hover-primary w-full h-11 px-4 py-[10px] text-base flex items-center justify-start gap-4"
                  :to="item.link"
                  @click="toggleIsOpen()"
                  ><nuxt-icon :name="item.icon" class="text-title text-xl" />{{ item.text }}</router-link
                >
                <router-link
                  class="card-hover-primary w-full h-11 px-4 py-[10px] text-base flex items-center justify-start gap-4"
                  to="/"
                  @click="logout"
                  ><nuxt-icon name="svg/sign-out" class="text-title text-xl" />ออกจากระบบ</router-link
                >
              </div>
            </div>
          </template>
        </base-popup>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background: linear-gradient(180deg, rgba(var(--RGB_header), 0.6) 0%, rgba(var(--RGB_header), 0.12) 100%);
  backdrop-filter: blur(15px);
}
</style>
