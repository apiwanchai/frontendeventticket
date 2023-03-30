<script setup>
// Import
import eventMaps from '~~/constants/interface-props/eventMaps'

// State
defineProps(eventMaps)
const onHover = ref(false)
const selected = ref(false)

// Function
function clearCanvas(ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

const drawCanvas = (ctx, textPositon, backgroundColor, chunk, alt) => {
  // SET POLY
  ctx.beginPath()
  for (let i = 0; i < chunk.length; i++) {
    if (i === 0) {
      ctx.fillStyle = backgroundColor
      ctx.moveTo(+chunk[i][0], +chunk[i][1])
    } else {
      ctx.fillStyle = backgroundColor
      ctx.lineTo(+chunk[i][0], +chunk[i][1])
    }
  }
  ctx.fill()

  // SET TEXT
  ctx.strokeStyle = 'black'
  ctx.lineWidth = 4
  ctx.strokeText(alt, textPositon[0], textPositon[1])
  ctx.font = 'bolder 20px tahoma'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = '#ffffff'
  ctx.fillText(alt, textPositon[0], textPositon[1])
}

const canvasEditor = (e) => {
  // canvas hover
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  // canvas click
  const canvasSelected = document.getElementById('canvasSelected')
  const ctxSelected = canvasSelected.getContext('2d')
  // set data
  const coords = e.target.coords.split(',')
  const textPositon = e.target.attributes.datacoordstext.value.split(',')
  const backgroundColor = e.target.attributes.databackgroundcolor.value
  const chunk = coords
    .reduce((prev, next, i, arr) => [...prev, arr[2 * i] ? [arr[2 * i], arr[2 * i + 1]] : false], [])
    .filter((v) => v)
  // action conditions
  if (e.type === 'click') {
    selected.value = true
    clearCanvas(ctxSelected)
    drawCanvas(ctxSelected, textPositon, backgroundColor, chunk, e.target.alt)
  }
  if (e.type === 'mouseover') {
    drawCanvas(ctx, textPositon, backgroundColor, chunk, e.target.alt)
  }
  if (e.type === 'mouseleave') {
    clearCanvas(ctx)
  }
}
</script>

<template>
  <div class="w-max relative">
    <div class="absolute top-0 left-0 pointer-events-none z-10">
      <canvas id="canvas" width="623" height="620" />
    </div>
    <div class="absolute top-0 left-0 pointer-events-none z-10">
      <canvas id="canvasSelected" width="623" height="620" />
    </div>
    <img :class="onHover || selected ? 'filter grayscale' : 'filter-none'" :src="image" usemap="#image-map" />
    <map name="image-map" @mouseover="onHover = true" @mouseleave="onHover = false">
      <area
        v-for="(item, index) in area"
        :key="index"
        class="cursor-pointer"
        :alt="item.name"
        :title="item.name"
        :shape="item.shape"
        :coords="item.coords"
        :dataBackgroundColor="item.backgroundColor"
        :dataCoordsText="item.coordsText"
        :dataTextColor="item.textColor"
        @click="canvasEditor"
        @mouseover="canvasEditor"
        @mouseleave="canvasEditor"
      />
    </map>
  </div>
</template>
