<script setup>
import country from '~~/constants/country'
const state = ref({ data: '', data2: '', data3: '', data4: '' })
const mock1 = [
  {
    monkey: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Q80sTQ9bvGRiCQteqNniX9IX6TVfzbSVtw&usqp=CAU',
    text: 'ลิง1',
  },
  {
    monkey: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Q80sTQ9bvGRiCQteqNniX9IX6TVfzbSVtw&usqp=CAU',
    text: 'ลิง2',
  },
  {
    monkey: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Q80sTQ9bvGRiCQteqNniX9IX6TVfzbSVtw&usqp=CAU',
    text: 'ลิง3',
  },
]
const mock2 = [
  { flag: 'svg/dark', description: 'มืด1' },
  { flag: 'svg/dark', description: 'มืด2' },
  { flag: 'svg/dark', description: 'มืด3' },
]
// const mock3 = [0, 'aaa', 2, 'bbb']
const mock4 = [
  { id: 0, description: '0' },
  { id: 1, description: '1' },
  { id: 2, description: '2' },
]
</script>

<template>
  <div class="mx-auto flex flex-col w-full my-[80px] min-h-[100vh] px-10">
    <base-dropdown
      label="ลิงงงง"
      class="dropdown-primary"
      :data="mock1"
      img-key="monkey"
      :text-key="['text']"
      placeholder="เลือกลิง"
      size="sm"
    />
    <base-dropdown
      class="dropdown-primary mt-5"
      :data="mock2"
      svg-key="flag"
      :text-key="['description']"
      placeholder="เลือกธง"
      size="md"
      error="error"
      default-value="มืด1"
    />
    <base-dropdown
      v-model="state.data4"
      label="test0"
      class="dropdown-secondary mt-5"
      :data="mock4"
      :text-key="['description']"
      value-key="id"
      error="error"
    />
    <base-dropdown class="mt-5" :data="mock1" img-key="monkey" :text-key="['text']" :disabled="true" />
    <base-dropdown class="mt-5" :data="mock2" svg-key="flag" :text-key="['description']" />

    <base-dropdown
      v-model="state.data"
      label="Flag"
      class="mt-5"
      :data="country"
      required
      img-key="image"
      :text-key="['phoneCodeUse', 'countryName']"
      error="error"
      value-key="phoneCodeUse"
      default-value="+66"
    />
    <base-dropdown
      v-model="state.data"
      class="mt-5 w-max"
      :data="country"
      required
      img-key="image"
      :text-key="['phoneCodeUse', 'countryName']"
      value-key="phoneCodeUse"
    />
    <base-dropdown
      v-model="state.data3"
      class="mt-5 w-max"
      :data="country"
      required
      img-key="image"
      :text-key="['phoneCodeUse']"
      value-key="phoneCodeUse"
      :default-index="3"
    />
  </div>
</template>
