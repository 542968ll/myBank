import { createWebHistory, createRouter } from 'vue-router'

import FinanceMain from '../components/Financecpns/FinanceMain.vue'
import LifeMain from '../components/Lifecpns/LifeMain.vue'
import Search from '../components/Financecpns/Search.vue'

const routes = [
  { path: '/financeMain', component:  FinanceMain},
  { path: '/lifeMain', component:  LifeMain},
  { path: '/search', component:  Search},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router