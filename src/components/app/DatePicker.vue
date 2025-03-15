<script setup lang="ts">
import { defineModel } from 'vue'

const date = defineModel({ type: Date, default: () => new Date() })
</script>

<template>
  <section>
    <v-date-input
      v-model="date"
      bg-color="dark-slate"
      variant="outlined"
      density="compact"
      prepend-icon=""
      prepend-inner-icon="mdi-calendar-blank-outline"
      multiple="range"
      hide-details
      min-width="250"
      placeholder="Select date"
      format="yyyy-MM-dd"
    />
  </section>
</template>
