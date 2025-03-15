import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { createI18n, useI18n } from 'vue-i18n'
import { theme } from '@/data/theme'
import { ar as vuetifyAR, en as vuetifyEN } from 'vuetify/locale'
import en from '@/i18n/en.json'
import ar from '@/i18n/ar.json'

export const useVuetify = (app: any) => {
  const i18n = createI18n({
    legacy: false, // Vuetify does not support the legacy mode of vue-i18n//-
    locale: 'en',
    fallbackLocale: 'en',
    rtl: { ar: true },
    messages: {
      en: {
        $vuetify: vuetifyEN,
        ...en,
      },
      ar: {
        $vuetify: vuetifyAR,
        ...ar,
      },
    },
  })

  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides//-
  const vuetify = createVuetify({
    theme,
    locale: {
      adapter: createVueI18nAdapter({ i18n, useI18n }),
    },
    defaults: {
      global: {
        ripple: true,
      },
      VTextField: {
        variant: 'outlined',
        density: 'compact',
        color: 'blue',
        hideDetails: true,
        bgColor: 'white',
      },
      VSelect: {
        variant: 'outlined',
        density: 'comfortable',
        color: 'blue',
      },
      VBtn: {
        rounded: 'md',
      },
      VDataTable: {
        showSelect: false,
        hideDefaultFooter: true,
      },
      VPagination: {
        pageCount: 1,
      },
    },
  })

  //-
  app.use(i18n)
  app.use(vuetify)
}
