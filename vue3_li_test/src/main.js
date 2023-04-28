import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080'
// axios.interceptors.request.use(config=>{
//     config.headers
// })

createApp(App).use(router).mount('#app')
