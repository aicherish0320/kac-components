import { App } from 'vue'
import KaShape from './KaShape.vue'

KaShape.install = (app: App) => {
  app.component(KaShape.name, KaShape)
}

export default KaShape
