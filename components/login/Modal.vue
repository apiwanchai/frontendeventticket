<script setup>
// imports
import { useStorage } from '@vueuse/core'
const { setCookie, fetchUser } = useAuth()
const { setToken } = useToken()
const loginModal = useState('loginModal')
const registerModal = useState('registerModal')
const forgotPasswordModal = useState('forgotPasswordModal')
const loadingShow = useLoading()

// State
const loading = ref(false)
const isCheck = ref()
const errors = reactive({})
const form = reactive({ email: localStorage.getItem('email') || '', password: localStorage.getItem('password') || '' })

// Computed
const loginValidator = computed(() =>
  useValidator(form, errors).rules({
    email: Rules().email(),
    password: Rules().required(),
  })
)

onMounted(() => {
  localStorage.getItem('rememberMe') === 'true' ? (isCheck.value = true) : (isCheck.value = false)
  // console.log('===>', isCheck)
})

// Functions
function handleRegister() {
  loginModal.value = false
  registerModal.value = true
}
const handleFoGotPassword = () => {
  loginModal.value = false
  forgotPasswordModal.value = true
}

const alertDone = () => {
  useAlert({
    success: true,
    isOpen: true,
    title: 'ยินดีตอนรับ',
    text: 'ดำเนินการสำเร็จ',
  })
}

const handleSubmit = async () => {
  loading.value = true
  const { data, error } = await useLazyFetchAPI().post('/signin', {
    email: form.email,
    password: form.password,
  })
  if (error.value) {
    useAlert({
      error: true,
      isOpen: true,
      title: 'เกิดข้อผิดพลาด',
      text: error.value.data.error.message,
    })
    loadingShow.show()
    loading.value = false
    loginModal.value = false
    return
  }
  if (isCheck) {
    alertDone()
    useStorage('rememberMe', isCheck)
    useStorage('email', form.email)
    useStorage('password', form.password)
    loading.value = false
  }
  loading.value = false
  loginModal.value = false
  setToken(data.value)
  setCookie(data.value)
  fetchUser()
}
</script>
<template>
  <base-modal-dialog v-model="loginModal" id-dialog="login-">
    <template #body>
      <div class="flex flex-col gap-2 mb-4">
        <h1 class="text-xl text-center">{{ 'ยินดีต้อนรับสู่ Event Ticket!' }}</h1>
        <h3 class="text-base text-center font-normal">
          {{ 'กรุณาเข้าสู่ระบบเพื่อประสบการณ์การใช้งานในรูปแบบที่เต็มขั้น!' }}
        </h3>
      </div>
      <div class="modal__content text-sm">
        <form class="flex flex-col" @submit.prevent="handleSubmit">
          <!-- <pre>{{ isCheck }}</pre> -->
          <base-input
            v-model="form.email"
            type="text"
            label="อีเมล"
            placeholder="กรอกอีเมล"
            :error="errors?.email"
            preset
            @keyup="loginValidator.validate('email')"
          />
          <!-- <pre>{{ form.password }}</pre> -->
          <base-input
            v-model="form.password"
            type="password"
            label="รหัสผ่าน"
            placeholder="กรอกรหัสผ่าน"
            :error="errors?.password"
            preset
            @keyup="loginValidator.validate('password')"
          />

          <div class="flex justify-between mb-2">
            <div class="flex gap-1">
              <base-checkbox v-model="isCheck" />
              <!-- <pre>{{ form.password }}</pre> -->
              <h3 class="text-sm font-light">{{ 'จดจำฉัน' }}</h3>
            </div>
            <div class="cursor-pointer">
              <h3 class="text-sm font-light" @click="handleFoGotPassword()">{{ 'ลืมรหัสผ่าน ?' }}</h3>
            </div>
          </div>
          <base-button
            :disabled="!loginValidator.isFormValid"
            :loading="loading"
            class="btn-primary"
            rounded
            @click="handleSubmit"
          >
            {{ $t('login') }}
          </base-button>
        </form>
        <h3 class="text-base font-normal text-center my-3">{{ 'หรือ' }}</h3>
        <div class="flex justify-center items-center gap-2">
          <div class="w-[88px] h-[48px] flex justify-center items-center rounded-full bg-white cursor-pointer">
            <img src="~/assets/images/login/google.png" class="h-[24px]" />
          </div>
          <div class="w-[88px] h-[48px] flex justify-center items-center rounded-full bg-[#1778F2] cursor-pointer">
            <img src="~/assets/images/login/facebook.png" class="h-[24px]" />
          </div>
          <div class="w-[88px] h-[48px] flex justify-center items-center rounded-full bg-[#39CD00] cursor-pointer">
            <img src="~/assets/images/login/line.png" class="h-[24px]" />
          </div>
        </div>
        <div class="mt-[35px] flex justify-center text-base gap-1">
          <h3>{{ 'ยังไม่มีบัญชีใช่ไหม?' }}</h3>
          <h3 class="cursor-pointer underline text-link" @click="handleRegister()">{{ 'สมัครเลย' }}</h3>
        </div>
      </div>
    </template>
  </base-modal-dialog>
</template>

<style lang="scss"></style>
