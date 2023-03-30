<script setup>
// imports
const registerModal = useState('registerModal')

// State
const loading = ref(false)
const isCheck = ref(false)
const errors = reactive({})
const form = reactive({ email: '', password: '', confirmPassword: '', firstName: '', lastName: '' })

// Computed
const loginValidator = computed(() =>
  useValidator(form, errors).rules({
    email: Rules().email().required(),
    password: Rules().required(),
    confirmPassword: Rules().required(),
    firstName: Rules().required(),
    lastName: Rules().required(),
  })
)
const isCheckDisabled = () => !loginValidator.isFormValid

const handleSubmit = async () => {
  loading.value = true
  const { data, error } = await useLazyFetchAPI().post('/signup', {
    email: form.email,
    password: form.password,
    firstName: form.firstName,
    lastName: form.lastName,
  })

  if (error.value) {
    loading.value = false
    useAlert({
      error: true,
      isOpen: true,
      title: 'เกิดข้อผิดพลาด',
      text: error.value.data.error.message,
    })
    return
  }
  if (data) {
    useAlert({
      isOpen: true,
      title: 'ตรวจสอบอีเมล',
      text: 'กรุณาทำการยืนยันอีเมล โดยทำการตรวจสอบกล่องข้อความทางเราได้ส่งอีเมลยืนยันไปที่อีเมลที่คุณสมัคร:',
      html: `<p class="text-[var(--text-hightlight)]">${data?._rawValue.userData.email}</p>`,
      duration: 4000,
      successPath: '/',
    })
    registerModal.value = false
    loading.value = false
  }
  registerModal.value = false
  loading.value = false
}
</script>
<template>
  <base-modal-dialog v-model="registerModal" id-dialog="register-modal">
    <template #body>
      <div class="flex flex-col gap-2 mb-4">
        <h1 class="text-xl text-center">{{ 'สมัครสมาชิก' }}</h1>
      </div>
      <div class="modal__content text-sm">
        <form class="flex flex-col" @submit.prevent="handleSubmit">
          <base-input
            type="text"
            v-model="form.email"
            label="อีเมล"
            placeholder="กรอกอีเมล"
            :error="errors?.email"
            required
            preset
            @keyup="loginValidator.validate('email')"
          />
          <base-input
            type="password"
            v-model="form.password"
            label="รหัสผ่าน"
            placeholder="กรอกรหัสผ่าน"
            :error="errors?.password"
            required
            preset
            @keyup="loginValidator.validate('password')"
          />
          <base-input
            type="password"
            v-model="form.confirmPassword"
            label="ยืนยันรหัสผ่าน"
            placeholder="กรอกรหัสผ่าน"
            :error="errors?.confirmPassword"
            required
            preset
            @keyup="loginValidator.validate('confirmPassword')"
          />
          <base-input
            type="text"
            v-model="form.firstName"
            label="ชื่อจริง"
            placeholder="กรอกชื่อจริง"
            :error="errors?.firstName"
            required
            preset
            @keyup="loginValidator.validate('firstName')"
          />
          <base-input
            type="text"
            v-model="form.lastName"
            label="นามสกุล"
            placeholder="กรอกนามสกุล"
            :error="errors?.lastName"
            required
            preset
            @keyup="loginValidator.validate('lastName')"
          />
          <div class="flex gap-1 items-center">
            <base-checkbox v-model="isCheck" />
            <h3 class="flex gap-1 my-2">
              {{ 'ข้าพเจ้าได้อ่านและยอมรับ' }}
              <span class="text-link cursor-pointer underline"> {{ 'ข้อกำหนด' }}</span
              ><span>{{ 'และ' }}</span>
              <span class="text-link cursor-pointer underline">{{ 'เงื่อนไขในการเข้างาน' }}</span>
            </h3>
          </div>
          <base-button
            :disabled="isCheckDisabled && isCheck === false"
            :loading="loading"
            class="btn-primary"
            rounded
            @click="handleSubmit"
          >
            {{ $t('Register') }}
          </base-button>
        </form>
      </div>
    </template>
  </base-modal-dialog>
</template>

<style lang="scss"></style>
