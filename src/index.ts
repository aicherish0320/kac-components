import KaText from './components/ka-text'
import KaImage from './components/ka-image'
import KaShape from './components/ka-shape'
import { App } from 'vue'

const components = [KaText, KaImage, KaShape]

const install = (app: App) => {
  components.forEach((comp) => {
    app.component(comp.name, comp)
  })
}

export { KaText, KaImage, KaShape, install }

export default {
  install
}
