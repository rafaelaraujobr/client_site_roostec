<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="wrapper">
        <q-btn flat dense round icon="sym_r_notes" aria-label="Menu" @click="toggleLeftDrawer" v-if="!$q.screen.gt.sm"
          size="lg" />
        <q-toolbar-title> roostec </q-toolbar-title>
        <!-- <q-toolbar-title>
          <q-img src="@/assets/imgs/roostec_light.svg" width="128px" spinner-color="primary" spinner-size="82px" />
        </q-toolbar-title> -->
        <q-tabs v-model="tab" no-caps narrow-indicator v-if="$q.screen.gt.sm" dense class="q-px-md">
          <q-route-tab to="/" exact name="home" :label="$t('HOME')" />
          <q-route-tab to="/about" exact name="about" label="Sobre nós" />
          <q-route-tab to="/solutions" exact name="solutions" label="Soluções" />
          <q-route-tab to="/articles" exact name="articles" label="Artigos" />
          <q-route-tab to="/contact" exact name="contact" :label="$t('CONTACT')" />
        </q-tabs>
        <div class="q-gutter-sm">
          <change-language />
          <q-btn color="primary" :icon="$q.dark.isActive ? 'sym_r_dark_mode' : 'sym_r_light_mode'" padding="sm"
            :size="!$q.screen.gt.sm ? 'lg' : 'md'" @click="Dark.toggle()" aria-label="modoDark" />
          <q-btn color="white" label="Entrar" outline padding="sm lg" v-if="$q.screen.gt.sm" aria-label="entrar" />
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
