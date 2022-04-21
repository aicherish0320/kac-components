import { App } from 'vue'
import KaText from './KaText.vue'

KaText.install = (app: App) => {
  app.component(KaText.name, KaText)
}

export default KaText
