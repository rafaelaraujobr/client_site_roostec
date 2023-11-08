<template>
    <q-btn flat padding="xs">
        <q-avatar :size="$q.screen.gt.sm ? '32px' : '38px'">
            <img src="@/assets/imgs/brazil-48.png" spinner-color="primary" spinner-size="32" :ratio="1" height="48px"
                v-if="$i18n.locale == 'pt'" />
            <img src="@/assets/imgs/eua-48.png" spinner-color="primary" spinner-size="32" :ratio="1" v-else height="48px" />
        </q-avatar>
        <q-menu>
            <q-list style="min-width: 100px">
                <q-item clickable v-ripple @click="onChangeLanguage('pt')">
                    <q-item-section side>
                        <q-avatar size="md">
                            <img src="@/assets/imgs/brazil-48.png" spinner-color="primary" spinner-size="32" :ratio="1"
                                height="48px" />
                        </q-avatar>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Português (pt-BR)</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple @click="onChangeLanguage('en')">
                    <q-item-section side>
                        <q-avatar size="md">
                            <img src="@/assets/imgs/eua-48.png" spinner-color="primary" spinner-size="32" :ratio="1"
                                height="48px" />
                        </q-avatar>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>English (en-US)</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-menu>
    </q-btn>
</template>

<script setup lang="ts">
const { locale } = useI18n()
function onChangeLanguage(lang: string): void {
    locale.value = lang
}
</script>