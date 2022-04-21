import { createApp } from 'vue'
import App from './App.vue'
import KacComponents from './index'

const app = createApp(App)

app.use(KacComponents)
app.mount('#app')
