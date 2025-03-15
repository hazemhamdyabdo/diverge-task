/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { useVuetify } from './vuetify'
import router from '../router'
import './axios'
import pinia from "./pinia"

// Types
import type { App } from 'vue'

export function registerPlugins(app: App) {
  useVuetify(app)
  app
    .use(router)
    .use(pinia)
}
