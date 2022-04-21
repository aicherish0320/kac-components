import { createApp } from 'vue'
import App from './App.vue'

import TestPlugin from './test.plugin'

createApp(App).use(TestPlugin).mount('#app')
