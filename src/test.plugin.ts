import { App, h } from 'vue'

const plugin = {
  install: (app: App) => {
    app.config.globalProperties.$echo = () => {
      console.log('plugins')
      app.component('HelloComp', {
        render() {
          return h('h1', 'Hello World')
        }
      })
    }
  }
}
export default plugin
