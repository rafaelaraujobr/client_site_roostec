<script setup lang="ts">
import { ref } from "vue";
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
  <q-card class="bg-primary text-white no-border-radius q-pt-lg" flat>
    <q-card-section class="wrapper row item-center q-pa-lg">
      <div class="col-12 flex flex-center col-md-6 col-lg-6 col-xl-6">
        <div>
          <div class="q-py-md text-center" :class="!$q.screen.gt.sm ? 'text-h4' : 'text-h3'">Transformando ideias
            em soluções
            digitais!</div>
          <div class="q-py-sm text-body1">
            "Transformamos sua visões em realidade digital,
            inovação, precisão e experiência em cada linha de código.
            sua solução, nossa paixão, seu sucesso."
          </div>
        </div>
      </div>
      <div class="col-12 flex flex-center col-md-6 col-lg-6 col-xl-6">
        <!-- <Vue3Lottie animation-link="https://lottie.host/6db8654a-d8f3-4a0d-ae63-2650695ed799/tinTzJZ28b.json"
          v-if="$q.screen.gt.sm" :height="650" class="absolute" style="opacity: 0.1;" :width="650" /> -->
        <q-img src="@/assets/imgs/developer.svg" spinner-color="white" spinner-size="82px" width="356px" />
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
