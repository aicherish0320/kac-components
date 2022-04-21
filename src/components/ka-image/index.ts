import { App } from 'vue'
import KaImage from './KaImage.vue'

KaImage.install = (app: App) => {
  app.component(KaImage.name, KaImage)
}

export default KaImage
