import { createApp } from 'vue'
import App from './App.vue'
import BaseTemplate from './components/BaseTemplate.vue'
import BaseTemplate2 from './components/BaseTemplate2.vue'
import './assets/main.css'

const app = createApp(App)
app.component('BaseTemplate', BaseTemplate).component('BaseTemplate2', BaseTemplate2)
app.mount('#app')
