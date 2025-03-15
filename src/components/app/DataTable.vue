<script lang="ts" setup>
import { useAppStore } from "@/stores/app";
import { watchEffect, useSlots, useAttrs } from "vue";

const props = defineProps<{
  headers: Array<{ title: string; key: string }>;
  responseData: any;
  isLoading: boolean;
}>();

const page = defineModel("page", { type: Number, default: 1 });
// const { setLoading } = useAppStore();
const slots = useSlots();

defineOptions({ inheritAttrs: false });

const attrs = useAttrs();

</script>

<template>
  <section>
    <v-data-table
      :headers
      :items=" responseData.data"
      :loading="isLoading"
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
            :length="responseData?.last_page"
            class="my-4"
          >
            <template #prev />
            <template #next />
          </v-pagination>
          <v-btn
            variant="text"
            class="text-capitalize"
            append-icon="mdi-arrow-right"
            :disabled="page === responseData?.last_page"
            border
            @click="++page"
          >
            Next
          </v-btn>
        </div>
      </template>

      <template #loading>
        <div class="loading-overlay">
          <loader />
        </div>
      </template>
    </v-data-table>
  </section>
</template>
