import { createWebHistory, createRouter } from 'vue-router'

import FinanceMain from '../components/Financecpns/FinanceMain.vue'
import LifeMain from '../components/Lifecpns/LifeMain.vue'

const routes = [
  { path: '/financeMain', component:  FinanceMain},
  { path: '/lifeMain', component:  LifeMain},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router