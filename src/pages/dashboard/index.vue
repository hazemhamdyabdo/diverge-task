<script lang="ts" setup>
import { fetchUsers } from "@/api/mockApi";
import DataTable from "@/components/app/DataTable.vue";
import UserFilter from "@/components/users/UserFilter.vue";
import { useAppStore } from "@/stores/app";
import { useTableOptions } from "@/composables/users/useTableOptions";
import {  ref, watch } from "vue";

const { notify } = useAppStore();
const {handleEdit,handleRemove} = useTableOptions();
const headers = [
  {
    title: "ID",
    key: "id",
  },
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Email",
    key: "email",
  },
  {
    title: "Role",
    key: "role",
  },
  {
    title: "",
    key: "actions",
    sortable: false,
  },
];

const isLoading = ref(false);
const usersResponse = ref({});
const filters = ref({
  page: 1,
  search: "",
  filterRole:undefined,
});

const handleFilter = async ()=>{
  isLoading.value = true
  try {
     usersResponse.value = await fetchUsers(filters.value);
  } catch  {

    notify({
      type: "error",
      message: "Failed to fetch users",
    });

  }finally{
    isLoading.value = false;
  }

}

watch(
  filters, () => {
    handleFilter()
  },
  {
    deep: true,
    immediate: true,
  }
);
</script>

<template>
  <section>
    <h2 class="font-weight-bold">
      Users List
    </h2>
    <DataTable
      v-model:page="filters.page"
      :headers
      :response-data="usersResponse"
      :is-loading="isLoading"
    >
      <template #top>
        <UserFilter v-model:filter="filters" />
      </template>
      <template #item.actions="{ item }">
        <v-menu>
          <template #activator="{ props }">
            <v-btn
              icon
              density="compact"
              variant="flat"
              v-bind="props"
            >
              <V-icon icon="mdi-dots-vertical" />
            </v-btn>
          </template>
          <v-list min-width="200px">
            <v-list-item
              prepend-icon="mdi-pencil"
              title="Edit"
              value="edit"
              @click="handleEdit(item.id)"
            />
            <v-list-item
              prepend-icon="mdi-delete"
              title="Delete"
              value="delete"
              @click="handleRemove(item.id)"
            />
          </v-list>
        </v-menu>
      </template>
    </DataTable>
  </section>
</template>
