<template>
  <v-menu
    key="language-menu"
    close-delay="100"
    location="bottom end"
    open-delay="60"
  >
    <template #activator="{ props }">
      <app-tooltip-btn
        v-bind="props"
        color="medium-emphasis"
        icon="mdi-translate"
        path="languages"
      />
    </template>

    <v-sheet
      class="overflow-hidden"
      rounded
    >
      <app-list
        :items="locales"
        nav
      />
    </v-sheet>
  </v-menu>
</template>

<script setup lang="ts">
// import storage from '@/plugins/storage'
import AppList from '@/components/app/List.vue'
import AppTooltipBtn from '@/components/app/TooltipBtn.vue'

const locales = [
  { title: 'Translations', type: 'subheader' },
  { title: 'English', value: 'en' },
  { title: 'Arabic', value: 'ar' },
]


// function switchLocale({ id }:{id:string}) {
//   current.value = id
//   storage.set('locale', id)
// }
</script>
