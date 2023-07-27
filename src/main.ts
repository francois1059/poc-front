// components
import App from './App.vue'

// composables
import { createApp } from 'vue'

  // plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
