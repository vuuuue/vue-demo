import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.mount('#app')

app.config.errorHandler = (err) => {
  console.log('>>>>')
  console.error(err)
  console.log('<<<')
}

