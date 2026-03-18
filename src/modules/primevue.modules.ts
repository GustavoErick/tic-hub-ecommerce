/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import type { App } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

import Button from 'primevue/button'
import Card from 'primevue/card'
import DataView from 'primevue/dataview'
import InputNumber from 'primevue/inputnumber'
import ConfirmDialog from 'primevue/confirmdialog'
import Toast from 'primevue/toast'
import Menubar from 'primevue/menubar'
import Menu from 'primevue/menu'

import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'

export function setPrimeVue(app: App) {
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  app.use(ConfirmationService)
  app.use(ToastService)

  app.component('Button', Button)
  app.component('Card', Card)
  app.component('DataView', DataView)
  app.component('InputNumber', InputNumber)
  app.component('ConfirmDialog', ConfirmDialog)
  app.component('Toast', Toast)
  app.component('Menubar', Menubar)
  app.component('Menu', Menu)
}
