import { createApp } from 'vue'
import './style.css'
import './assets/css/reset.css'
import App from './App.vue'
import router from './routes'
import "./mock/index"
import { Swipe, SwipeItem, Search, DropdownMenu, DropdownItem } from 'vant'
import 'vant/lib/index.css';

createApp(App)
.use(router)
.use(Swipe)
.use(SwipeItem)
.use(Search)
.use(DropdownMenu)
.use(DropdownItem)
.mount('#app')
