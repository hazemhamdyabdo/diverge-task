<script lang="ts" setup>
import {fetchUsers} from "@/api/mockApi"
import DataTable from "@/components/app/DataTable.vue"
import {onMounted,ref} from "vue"


const headers = [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Email',
    key: 'email',
  },
  {
    title: 'Role',
    key: 'role',
  },
  {
    title: '',
    key:'actions',
    sortable: false
  },

]

const usersResponse = ref({})

onMounted(async ()=>{
  // setLoading(true)
  usersResponse.value = await fetchUsers({})
  // setLoading(false)

})
</script>

<template>
  <section>
    <h2 class="font-weight-bold">
      Users List
    </h2>
    <DataTable
      :headers
      :items="usersResponse.data"
    >
      <template #item.actions>
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
            />
            <v-list-item
              prepend-icon="mdi-delete"
              title="Delete"
              value="delete"
            />
          </v-list>
        </v-menu>
      </template>
    </DataTable>
  </section>
</template>
