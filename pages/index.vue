<script setup lang="ts">
const title = ref('roostec - soluções')
const description = ref('Desenvolvimento de sistemas e APIs web personalizadas para otimizar seu negócio')
useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})

function myTweak(offset: number = 0) {
  return { minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh' }
}

</script>
<template>
  <q-card class="bg-primary text-white no-border-radius q-py-lg" flat>
    <q-card-section class="wrapper q-px-lg" style="padding-bottom: 50px;">
      <div class="text-h4 q-py-md">Our Changing Planet</div>
      <div class="text-subtitle2">by John Doe</div>
      <div class="q-py-sm">
        Transformando ideias em soluções digitais avançadas. Vamos construir juntos o futuro digital!
      </div>
    </q-card-section>
    <div class="wave-contain">
      <svg class="waves_effect" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="#0C2340b3"></use>
          <use xlink:href="#gentle-wave" x="48" y="3" fill="#0C234080 "></use>
          <use xlink:href="#gentle-wave" x="48" y="5" fill="#0C23404d "></use>
          <use xlink:href="#gentle-wave" x="48" y="7" :fill="$q.dark.isActive ? '#121212' : '#FFFFFF'"></use>
        </g>
      </svg>
    </div>
  </q-card>
  <q-page padding class="wrapper" :style-fn="myTweak">
  </q-page>
</template>
