<script lang="ts" setup>
import {useAppStore } from "@/stores/app"
import {watchEffect,useSlots,useAttrs } from "vue"

const props = defineProps<{
  headers: Array<{ title: string; key: string }>
  items: Array<{ [key: string]: unknown }>
}>()

const page = defineModel('page', { type: Number, default: 1 })
const {setLoading} = useAppStore()
const slots = useSlots()

defineOptions({ inheritAttrs: false }); // Prevent Vue from applying $attrs to root

const attrs = useAttrs();

watchEffect(() =>{
setLoading(props.items?.length > 0 ? false : true);
})
</script>

<template>
  <section>
    <slot />
    <v-data-table
      :headers
      :items
      v-bind="attrs"
    >
      <template
        v-for="(_, name) in slots"
        #[name]="slotProps"
      >
        <slot
          :name="name"
          v-bind="slotProps"
        />
      </template>
      <template #bottom>
        <div
          style="height: 65px"
          class="border-t px-4 py-0 d-flex justify-space-between align-center"
        >
          <v-btn
            :disabled="page == 1"
            variant="text"
            class="text-capitalize"
            prepend-icon="mdi-arrow-left"
            border
            @click="--page"
          >
            Previous
          </v-btn>
          <v-pagination
            v-model="page"
            prev-icon=""
            next-icon=""
            previous-aria-label="previous"
            :total-visible="7"
            :length="meta?.last_page"
            class="my-4"
          >
            <template #prev />
            <template #next />
          </v-pagination>
          <v-btn
            variant="text"
            class="text-capitalize"
            append-icon="mdi-arrow-right"
            :disabled="page === meta?.last_page"
            border
            @click="++page"
          >
            Next
          </v-btn>
        </div>
      </template>
    </v-data-table>
  </section>
</template>
