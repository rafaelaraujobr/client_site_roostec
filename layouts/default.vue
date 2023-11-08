<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="wrapper">
        <div class="row col-3">
          <q-btn flat dense round icon="sym_r_" aria-label="Menu" @click="toggleLeftDrawer" v-if="!$q.screen.gt.sm" />
          <q-toolbar-title> roostec </q-toolbar-title>
        </div>
        <div class="col-6" v-ripple="false" v-if="$q.screen.gt.sm">
          <q-tabs v-model="tab" no-caps narrow-indicator class="text-body1">
            <q-route-tab to="/" exact name="home" label="Inicio" />
            <q-route-tab to="/about" exact name="about" label="Sobre nós" />
            <q-route-tab to="/solutions" exact name="solutions" label="Soluções" />
            <q-route-tab to="/articles" exact name="articles" label="Artigos" />
            <q-route-tab to="/contact" exact name="contact" label="Contato" />
          </q-tabs>
        </div>
        <!-- <div class="text-white">Quasar v{{ $q.version }}</div> -->
        <div class="col-3 text-right q-gutter-sm q-my-sm">
          <q-btn color="primary" :icon="$q.dark.isActive ? 'sym_r_dark_mode' : 'sym_r_light_mode'" padding="sm"
            @click="Dark.toggle()" />
          <q-btn color="white" label="Entrar" outline />
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
import { ref } from 'vue';
const leftDrawerOpen = ref(false);
const tab = ref('home')
function toggleLeftDrawer(): void {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
