<script lang="ts" setup>
const filter = defineModel('filter',{
  type: Object,
  default: () => ({
    search: '',
    filterRole: undefined,
  }),
})

const roles = [
  'admin',
  'editor',
  'viewer',
]

const resetFilters = () => {
  filter.value = {
    search: '',
    filterRole: undefined,
  }
}

</script>

<template>
  <div
    class="d-flex align-center justify-space-between pa-3 font-weight-bold ga-2"
    style="font-size: 18px; max-width: 70%"
  >
    <v-text-field
      v-model="filter.search"
      placeholder="Search"
      color="primary"
      name="search"
      label-text="Search"
      prepend-inner-icon="mdi-magnify"
      class="flex-2-0"
    />
    <!-- :items="tags" -->
    <v-select
      v-model="filter.filterRole"
      :items="roles"
      placeholder="Role"
      bg-color="#fff"
      variant="outlined"
      color="primary"
      density="compact"
      hide-details
      dense
      menu-icon="mdi-chevron-down"
      class="flex-0-1"
      style="min-width: 13%"
    />



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
