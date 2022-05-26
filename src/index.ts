import KaText from './components/ka-text'
import KaImage from './components/ka-image'
import KaShape from './components/ka-shape'
import FinalPage from './components/final-page'
import { App } from 'vue'
export {
  textDefaultProps,
  textStylePropNames,
  TextComponentProps,
  imageDefaultProps,
  imageStylePropsNames,
  ImageComponentProps,
  shapeDefaultProps,
  shapeStylePropsNames,
  ShapeComponentProps,
  AllComponentProps
} from './defaultProps'

const components = [KaText, KaImage, KaShape, FinalPage]

const install = (app: App) => {
  components.forEach((comp) => {
    app.component(comp.name, comp)
  })
}

export { install, KaText, KaImage, KaShape, FinalPage }

export default {
  install
}
