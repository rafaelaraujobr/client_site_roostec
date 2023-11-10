<template>
    <q-btn flat aria-label="language" round>
        <q-avatar :size="$q.screen.gt.sm ? '22px' : '28px'">
            <q-img src="@/assets/imgs/brazil-flag-icon.svg" spinner-color="primary" spinner-size="32" :ratio="1"
                height="38px" alt="pt-br" v-if="$i18n.locale == 'pt'" />
            <q-img src="@/assets/imgs/united-states-flag-icon.svg" spinner-color="primary" spinner-size="32" :ratio="1"
                v-else height="38px" alt="en-us" />
        </q-avatar>
        <q-menu>
            <q-list style="min-width: 100px">
                <q-item clickable v-ripple @click="onChangeLanguage('pt')">
                    <q-item-section side>
                        <q-avatar size="md">
                            <q-img src="@/assets/imgs/brazil-flag-icon.svg" spinner-color="primary" spinner-size="32"
                                :ratio="1" alt="pt-br" height="38px" />
                        </q-avatar>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Português (pt-BR)</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple @click="onChangeLanguage('en')">
                    <q-item-section side>
                        <q-avatar size="md">
                            <q-img src="@/assets/imgs/united-states-flag-icon.svg" spinner-color="primary" spinner-size="32"
                                :ratio="1" alt="en-us" height="38px" />
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