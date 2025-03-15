<script setup lang="ts">

 defineProps({
  items: {
    type: Array,
    required: true,
  },
  nav: Boolean,
})
</script>


<template>
  <v-list
    :nav="nav"
    :items="items"
    :lines="false"
    color="primary"
    density="compact"
    item-props
    elevation="10"
    @click:select="$emit('click:select', $event)"
  >
    <template #divider>
      <slot name="divider" />

      <v-divider
        v-if="!$slots.divider"
        class="my-3 mb-4 ms-2 me-n2"
      />
    </template>

    <template #title="{ item }">
      {{ item.title }}

      <v-badge
        v-if="item.emphasized"
        class="ms-n1"
        color="success"
        dot
        inline
      />
    </template>

    <template #subheader="{ props: subheaderProps }">
      <slot
        name="subheader"
        v-bind="{ subheaderProps }"
      />

      <v-list-subheader
        v-if="!$slots.subheader"
        class="text-high-emphasis text-uppercase font-weight-black"
      >
        {{ subheaderProps.title }}
      </v-list-subheader>
    </template>
  </v-list>
</template>

