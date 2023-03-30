<script setup>
// imports
const loginModal = useState('loginModal')
const registerModal = useState('registerModal')
const forgotPasswordModal = useState('forgotPasswordModal')
const resetPasswordModal = useState('resetPasswordModal')

// State
const loading = ref(false)
const form = reactive({ email: '' })
const errors = reactive({})

// Computed
const loginValidator = computed(() =>
  useValidator(form, errors).rules({
    email: Rules().email().required(),
  })
)

// Functions

const handleRegister = () => {
  forgotPasswordModal.value = false
  registerModal.value = true
}

const handleLogin = () => {
  forgotPasswordModal.value = false
  loginModal.value = true
}

const alert = () => {
  useAlert({
    isOpen: true,
    title: 'ตรวจสอบอีเมล',
    text: 'กรุณาตรวจสอบกล่องข้อความทางเราได้ส่งอีเมลรีเซ็ทรหัสผ่านไปที่อีเมลที่คุณสมัคร:',
    html: `<p class="text-[var(--text-hightlight)]">${form.email}</p>`,
    duration: 2000,
    buttonText: 'ฉันเข้าใจแล้ว',
    actionsCallBack: callBackFn,
  })
}

const callBackFn = () => {
  resetPasswordModal.value = true
}

const handleFogotPassword = async () => {
  loading.value = true
  const { data, error } = await useLazyFetchAPI().post('/requestResetPassword', {
    email: form.email,
  })
  if (error.value) {
    loading.value = false
    forgotPasswordModal.value = false
  }
  if (data) {
    alert()
    loading.value = false
    forgotPasswordModal.value = false
  }
  // try {
  //   loading.value = true
  //   const res = await useLazyFetchAPI().post('/requestResetPassword', {
  //     email: form.email,
  //   })
  //   forgotPasswordModal.value = false
  //   alert()
  // } catch (error) {
  //   // :TODO
  //   useAlert({
  //     isOpen: true,
  //     title: 'Error',
  //     text: `${error.message}`,
  //   })
  // } finally {
  //   loading.value = false
  // }
}
</script>
<template>
  <base-modal-dialog v-model="forgotPasswordModal" id-dialog="login-forgot-password-modal">
    <template #body>
      <button class="modal__close absolute right-2 top-2" @click="close">
        <nuxt-icon name="svg/cancel" class="text-title text-xl" />
      </button>
      <div class="flex flex-col gap-2 mb-4">
        <h1 class="text-xl text-center">{{ 'ลืมรหัสผ่าน' }}</h1>
        <h3 class="text-base text-center font-normal">
          {{ 'กรุณากรอกอีเมลของคุณที่เคยสมัครใช้งาน' }}
        </h3>
      </div>
      <div class="modal__content text-sm">
        <form class="flex flex-col" @submit.prevent="handleFogotPassword">
          <base-input
            type="text"
            v-model="form.email"
            label="อีเมล"
            placeholder="กรอกอีเมล"
            :error="errors?.email"
            preset
            @keyup="loginValidator.validate('email')"
          />
          <base-button
            :disabled="!loginValidator.isFormValid"
            :loading="loading"
            class="btn-primary"
            rounded
            @click="handleFogotPassword"
          >
            {{ $t('ยื่นยัน') }}
          </base-button>
        </form>
        <div class="mt-[35px] flex justify-center text-base gap-1">
          <h3 class="cursor-pointer underline text-link" @click="handleLogin()">{{ 'เข้าสู่ระบบ' }}</h3>
          <h3>{{ '/' }}</h3>
          <h3 class="cursor-pointer underline text-link" @click="handleRegister()">{{ 'สมัครใช้งาน' }}</h3>
        </div>
      </div>
    </template>
  </base-modal-dialog>
</template>

<style lang="scss"></style>
