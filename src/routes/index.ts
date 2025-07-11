import { createWebHistory, createRouter } from 'vue-router'

import FinanceMain from '../components/Financecpns/FinanceMain.vue'
import LifeMain from '../components/Lifecpns/LifeMain.vue'
import Search from '../components/Financecpns/Search.vue'
import Detail from '../components/Financecpns/Detail.vue'


const routes = [
  { path: '/financeMain', component:  FinanceMain},
  { path: '/lifeMain', component:  LifeMain},
  { path: '/search', component:  Search},
  { path: '/productDetail', component: Detail},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router