<script setup lang="ts">
import { useSlots } from 'vue'

const slots = useSlots()

defineProps({
  title: {
    type: String,
    default: '',
  },
  table: {
    type: Boolean,
    default: false,
  },
  borderless: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <v-sheet
    class="shadow-sm"
    rounded="lg"
  >
    <!-- Header -->
    <div class="d-flex align-center justify-space-between px-5 py-4">
      <h2
        v-if="!slots.header"
        class="font-weight-medium text-h5 text-grey-darken-3"
      >
        {{ title }}
      </h2>
      <slot
        v-else
        name="header"
      />
      <slot name="actions" />
    </div>

    <v-divider v-if="!borderless" />

    <v-sheet
      v-if="slots.toolbar"
      color="background"
      class="d-flex justify-space-between pa-2"
      rounded="lg"
    >
      <slot name="toolbar" />
    </v-sheet>

    <!-- Body -->
    <div :class="{ 'px-6 py-5': !table }">
      <slot />
    </div>
  </v-sheet>
</template>

