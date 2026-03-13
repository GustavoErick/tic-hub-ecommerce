/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import type { App } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import Button from 'primevue/button'
import Card from 'primevue/card'

export function setPrimeVue(app: App) {
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })

  app.component('Button', Button)
  app.component('Card', Card)
}
