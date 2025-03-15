import { defineStore } from "pinia";
import { ref, readonly } from "vue";

export const useAppStore = defineStore('app', () => {

  const isLoading = ref(false)
  const currentMode = ref('light')
  const snackbar = ref({
    show: false,
    message: '',
    color: 'primary',
    location: 'top right',
    timeout: 3000,

  })


  const notify = (payload: string | object) => {
    snackbar.value = {
      ...snackbar.value,
      // Allow passing a string instead of options object
      ...(typeof payload === 'string' ? { message: payload, color: 'primary' } : payload),
      show: true,
    }
  }

  const setMode = (mode: 'light' | 'dark') => {
    currentMode.value = mode
  }

  const setLoading = (status: boolean) => {
    isLoading.value = status

  }
  return { currentMode: readonly(currentMode), isLoading: readonly(isLoading), snackbar: readonly(snackbar), notify, setMode, setLoading, }

})
