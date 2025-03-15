<script lang="ts" setup>
import DatePicker from "./DatePicker.vue";
const filter = defineModel('filter',{
  type: Object,
  default: () => ({
    keyword: '',
    role: [],
  }),
})
</script>

<template>
  <div
    class="d-flex align-center justify-space-between pa-3 font-weight-bold ga-2"
    style="font-size: 18px; max-width: 70%"
  >
    <v-text-field
      v-model="filter.keyword"
      placeholder="Search"
      color="primary"
      name="search"
      label-text="Search"
      prepend-inner-icon="mdi-magnify"
      class="flex-2-0"
    />
    <v-autocomplete
      v-model="filter.role"
      placeholder="Tags"
      multiple
      :items="tags"
      item-title="name"
      return-object
      chips
      bg-color="#fff"
      variant="outlined"
      color="primary"
      density="compact"
      hide-details
      dense
      menu-icon="mdi-chevron-down"
      prepend-inner-icon="mdi-tag-outline"
      class="flex-0-1"
      style="min-width: 13%"
      item-value="id"
    />


    <DatePicker v-model="filter.dates" />

    <v-btn
      variant="text"
      class="text-capitalize"
      height="40"
      bg-color="white"
      @click="resetFilters"
    >
      <v-icon
        color="grayText"
        class="me-1"
      >
        mdi-close
      </v-icon>
      <span class="text-grayText">Clear Filters</span>
    </v-btn>
  </div>
</template>
