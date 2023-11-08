<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="wrapper">
        <q-btn flat dense round icon="sym_r_notes" aria-label="Menu" @click="toggleLeftDrawer" v-if="!$q.screen.gt.sm" />
        <q-toolbar-title> roostec </q-toolbar-title>
        <q-tabs v-model="tab" no-caps narrow-indicator v-if="$q.screen.gt.sm" dense class="q-px-md">
          <q-route-tab to="/" exact name="home" :label="$t('HOME')" />
          <q-route-tab to="/about" exact name="about" label="Sobre nós" />
          <q-route-tab to="/solutions" exact name="solutions" label="Soluções" />
          <q-route-tab to="/articles" exact name="articles" label="Artigos" />
          <q-route-tab to="/contact" exact name="contact" :label="$t('CONTACT')" />
        </q-tabs>
        <div class="q-gutter-sm ">
          <change-language />
          <q-btn color="primary" :icon="$q.dark.isActive ? 'sym_r_dark_mode' : 'sym_r_light_mode'" padding="sm"
            @click="Dark.toggle()" />
          <q-btn color="white" label="Entrar" outline padding="sm lg" v-if="$q.screen.gt.sm" />
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" bordered v-if="!$q.screen.gt.sm">
      <q-list>
        <q-item-label header> Essential Links </q-item-label>
      </q-list>
    </q-drawer>
    <q-page-container>
      <slot />
    </q-page-container>
    <!-- <q-card class="bg-secondary text-white no-border-radius q-py-lg" flat>
      <q-card-section class="wrapper q-px-lg" style="padding-bottom: 50px;">
        <div class="text-h4 q-py-md">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
        <div class="q-py-sm">
          Transformando ideias em soluções digitais avançadas. Vamos construir juntos o futuro digital!
        </div>
      </q-card-section>
    </q-card> -->
    <q-card flat class="bg-secondary text-white no-border-radius">
      <q-separator inset dark />
      <q-card-section class="wrapper">
        <div class="q-py-xs text-caption text-weight-light text-center">
          Roostec desenvolvimento LTDA | CNPJ: 52.534.676/0001-69 | Av. das Americas, Barra da Tijuca, 04200 - RJ - Brasil
        </div>
      </q-card-section>
    </q-card>
  </q-layout>
</template>

<script setup lang="ts">
import { Dark } from 'quasar';
import ChangeLanguage from '~/components/ChangeLanguage.vue';
import { ref } from 'vue';
const leftDrawerOpen = ref(false);
const tab = ref('home')
function toggleLeftDrawer(): void {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
