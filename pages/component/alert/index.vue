<script setup>
const onOpen = () => {
  useAlert({
    isOpen: true,
    title: 'ตรวจสอบอีเมล',
    text: 'กรุณาทำการยืนยันอีเมล โดยทำการตรวจสอบกล่องข้อความทางเราได้ส่งอีเมลยืนยันไปที่อีเมลที่คุณสมัคร:',
    html: '<p class="text-[var(--text-hightlight)]">Test1234@gmail.com</p>',
    duration: 1500,
    successPath: '/',
    successCallBack: callBackFn,
  })
}
const onOpen2 = () => {
  useAlert({
    isOpen: true,
    title: 'ตรวจสอบอีเมล',
    text: 'กรุณาทำการยืนยันอีเมล โดยทำการตรวจสอบกล่องข้อความทางเราได้ส่งอีเมลยืนยันไปที่อีเมลที่คุณสมัคร:',
    html: '<p class="text-[var(--text-hightlight)]">Test1234@gmail.com</p>',
    buttonText: 'Click',
    duration: 'none',
    actionsPath: '/',
  })
}
const onOpen3 = () => {
  useAlert({
    isOpen: true,
    success: true,
  })
}
const callBackFn = () => {
  alert('success')
}
</script>
<template>
  <layout-page-layout>
    <pre>{{ globalAlert }}</pre>
    <div class="h-[300px] w-full bg-red-900 flex items-center justify-center" @click="onOpen">CLICK ALERT1</div>
    <div class="h-[300px] w-full bg-yellow-400 flex items-center justify-center" @click="onOpen2">CLICK ALERT2</div>
    <div class="h-[300px] w-full bg-green-500 flex items-center justify-center" @click="onOpen3">CLICK ALERT3</div>
  </layout-page-layout>
</template>
