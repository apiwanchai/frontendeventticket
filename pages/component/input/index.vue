<script setup>
const { t } = useI18n()
const form = reactive({ email: '', password: '', phoneNumber: '' })
const errors = reactive({})
const timeoutId = ref(null)

// Mock call api
const checkFromApi = (val) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (val === '1234') resolve()
      else reject(new Error(t('password not match')))
    }, 500)
  })
}

const validatorPassword = async (val) => {
  try {
    await checkFromApi(val)
    return ''
  } catch (error) {
    return error.message
  }
}

const loginValidator = computed(() =>
  useValidator(form, errors).rules({
    email: Rules().required(t('home')).email(),
    password: Rules().required().custom(validatorPassword),
    phoneNumber: Rules().email(),
  })
)

// Functions
const handleCheckPassword = () => {
  clearTimeout(timeoutId.value)
  timeoutId.value = setTimeout(() => {
    loginValidator.value.validate('password')
  }, 500)
}
</script>

<template>
  <div class="mx-auto flex flex-col w-full my-[80px] min-h-[100vh] px-10">
    <base-input
      v-model="form.email"
      type="text"
      label="Email"
      placeholder="Enter Email"
      required
      size="sm"
      :error="errors?.email"
      :disabled="true"
      @change="loginValidator.validate('email')"
    />
    <base-input
      v-model="form.password"
      label="Password"
      type="password"
      size="md"
      :error="errors?.password"
      @change="handleCheckPassword()"
    />
    <base-input
      v-model="form.phoneNumber"
      label="PhoneNumber"
      type="tel"
      size="md"
      :error="errors?.phoneNumber"
      @change="loginValidator.validate('phoneNumber')"
    />
    <base-button class="btn-primary btn-sm" @click="loginValidator.validate('phoneNumber')">CLICK</base-button>
  </div>
</template>
