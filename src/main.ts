import { createApp } from 'vue'
import './style.css'
import './assets/css/reset.css'
import App from './App.vue'
import router from './routes'
import "./mock/index"
import { Swipe, SwipeItem, Search, DropdownMenu, DropdownItem, Popup } from 'vant'
import 'vant/lib/index.css';
import * as echarts from 'echarts';
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()


app.config.globalProperties.$echarts = echarts

app
.use(router)
.use(pinia)
.use(Swipe)
.use(SwipeItem)
.use(Search)
.use(DropdownMenu)
.use(DropdownItem)
.use(Popup)
.mount('#app')
