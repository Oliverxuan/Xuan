import { createApp } from 'vue'
import App from './App.vue'
import XUI from '../packages/index';


const app = createApp(App)
app.use(XUI)
app.mount('#app')

