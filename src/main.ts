import { createApp } from 'vue'
import './style.css'
import './assets/css/reset.css'
import App from './App.vue'
import router from './routes'
import "./mock/index"
import { Swipe, SwipeItem } from 'vant'

createApp(App).use(router).use(Swipe).use(SwipeItem).mount('#app')
