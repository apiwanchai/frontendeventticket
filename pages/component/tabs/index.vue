<script setup>
// กรุณาส่ง imgkey หรือ svgkey อันใดอันหนึ่งเท่านั้น
const tabsItem = [
  {
    id: 'London',
    name: 'สินค้ามาใหม่',
    imgkey: '',
    svgkey: '',
  },
  {
    id: 'Paris',
    name: 'สินค้าขายดี',
    imgkey: '',
    svgkey: '',
  },
  {
    id: 'Parihh',
    name: 'สินค้าขายดี',
    imgkey: '',
    svgkey: '',
  },
]
const tabsItem2 = [
  {
    id: 'London1',
    name: 'สินค้ามาใหม่',
    imgkey: '',
    svgkey: '',
  },
  {
    id: 'Paris1',
    name: 'สินค้าขายดี',
    imgkey: '',
    svgkey: '',
  },
]
</script>
<template>
  <div class="mx-auto flex flex-col w-full my-[80px] px-10">
    <base-tabs tabs-id="test" :items="tabsItem" active="Paris" class="tab-primary">
      <template #tabContent>
        <div v-for="(item, index) in tabsItem" :id="item.id" :key="index" class="tabcontent">
          <div>
            {{ index }}
            London is the capital of Great Britain. It is one of the greatest cities in the world. It is an important
            business and financial centre. It is an intellectual centre, too. Everywhere in London, there are open
            spaces: Hyde Park and Regent Park are the largest. The City is the oldest part of London.
          </div>
        </div>
      </template>
    </base-tabs>
  </div>
  <div class="mx-auto flex flex-col w-full my-[80px] px-10">
    <base-tabs tabs-id="LondonMan" :items="tabsItem2" active="London1" class="tab-primary" />
    <div id="LondonMan">
      <div :id="tabsItem2[0].id" class="tabcontent">
        <div>
          22 London is the capital of Great Britain. It is one of the greatest cities in the world. It is an important
          business and financial centre. It is an intellectual centre, too. Everywhere in London, there are open spaces:
          Hyde Park and Regent Park are the largest. The City is the oldest part of London.
        </div>
      </div>

      <div :id="tabsItem2[1].id" class="tabcontent">
        <div>
          444 London is the capital of Great Britain. It is one of the greatest cities in the world. It is an important
          business and financial centre. It is an intellectual centre, too. Everywhere in London, there are open spaces:
          Hyde Park and Regent Park are the largest. The City is the oldest part of London.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
