<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="wrapper">
        <q-btn flat dense round icon="sym_r_notes" aria-label="Menu" @click="toggleLeftDrawer" v-if="!$q.screen.gt.sm" />
        <q-toolbar-title> roostec </q-toolbar-title>
        <q-tabs v-model="tab" no-caps narrow-indicator v-if="$q.screen.gt.sm" dense>
          <q-route-tab to="/" exact name="home" label="Início" padding="sm md" />
          <q-route-tab to="/about" exact name="about" label="Sobre nós" />
          <q-route-tab to="/solutions" exact name="solutions" label="Soluções" />
          <q-route-tab to="/articles" exact name="articles" label="Artigos" />
          <q-route-tab to="/contact" exact name="contact" :label="$t('CONTACT')" padding="sm md" />
        </q-tabs>
        <q-separator spaced inset vertical dark v-if="$q.screen.gt.sm" />
        <div class="q-gutter-sm ">
          <change-language />
          <q-btn color="primary" :icon="$q.dark.isActive ? 'sym_r_dark_mode' : 'sym_r_light_mode'" padding="sm"
            @click="Dark.toggle()" />
          <q-btn color="white" label="Entrar" outline padding="sm lg" />
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
