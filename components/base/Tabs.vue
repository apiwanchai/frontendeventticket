<script setup>
import Tab from '~~/constants/interface-props/tabs'

// Props
const props = defineProps(Tab)

function slideActive() {
  // console.log(e)
  setTimeout(() => {
    // Active Slide Tab getElementsByClassName
    const nodeActive = document.querySelectorAll(`.${props.tabsId}.active`)[0]
    document.getElementsByClassName(`slide ${props.tabsId}`)[0].style.width = nodeActive.offsetWidth + 'px'
    document.getElementsByClassName(`slide ${props.tabsId}`)[0].style.left = nodeActive.offsetLeft + 'px'
  }, 100)
}

onMounted(() => {
  // Add default class Active Tab
  const activeName = props.active || props.items[0].id
  document.querySelector('#' + activeName).classList.add('active')
  const active = document.querySelectorAll(`[data-country="${activeName}"]`)
  active[0].classList.add('active')
  slideActive()
})

function openTabs(e) {
  //  function Add class Active Tab Click
  const btnTarget = e.currentTarget
  const country = btnTarget.dataset.country

  document.querySelectorAll(`.${props.tabsId}`).forEach((e) => e.classList.remove('active'))
  document.querySelectorAll(`#${props.tabsId} .tabcontent`).forEach((e) => e.classList.remove('active'))

  document.querySelector('#' + country).classList.add('active')
  btnTarget.classList.add('active')

  slideActive()
}
</script>
<template>
  <div :id="`${tabsId}`">
    <div class="tabsWrapper">
      <div class="tabs w-max flex rounded-full relative flex items-center justify-center">
        <div class="w-full h-full absolute top-0 left-0 rounded-full slide" :class="tabsId"></div>
        <div
          v-for="(item, index) in items"
          :key="index"
          class="tabslinks relative cursor-pointer flex items-center justify-center px-8"
          :class="tabsId"
          :data-country="item.id"
          @click="openTabs"
        >
          <img v-if="item.imgkey" :src="item.imgkey" :alt="`img-${item.imgkey}`" class="mr-2" />
          <nuxt-icon v-else :name="item.svgkey" class="transform mr-2" />
          {{ item.name }}
        </div>
      </div>
      <slot name="tabContent" tabcontent="tabcontent"></slot>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.tabsWrapper {
  .tabs {
    background: #212121;
    height: 44px;
    margin: 0 auto;
    .slide {
      background: linear-gradient(210.19deg, var(--tab-active1) 18.39%, var(--tab-active2) 81.61%);
      transition: all 0.3s;
    }
    .tabslinks {
      transition: 0.3s ease;
      color: var(--text-title);
    }
  }
  /* tab content */
}
.tabcontent {
  display: none;
  > p,
  > div,
  > span {
    color: var(--text-title);
    transition: all 1s ease;
    animation: fadeEffect 0.6s ease;
    width: 100%;
  }
  &.active {
    transition: all 1s ease;
    display: block;
  }
}
.tab-primary {
  .tabs {
    background: var(--tab-bg);
  }
  .slide {
    background: linear-gradient(210.19deg, var(--tab-active1) 18.39%, var(--tab-active2) 81.61%);
  }
}
/* Text*/
@keyframes fadeEffect {
  from {
    opacity: 0;
    margin-left: 30px;
  }
  to {
    opacity: 1;
    margin-left: 0;
  }
}
</style>
