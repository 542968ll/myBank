import { createWebHistory, createRouter } from 'vue-router'

import FinanceMain from '../components/Financecpns/FinanceMain.vue'
import LifeMain from '../components/lifeCpns/LifeMain.vue'
import Search from '../components/financeCpns/Search.vue'
import Detail from '../components/financeCpns/Detail.vue'
import Message from '../components/Message.vue'


const routes = [
  { path: '/', component:  FinanceMain},
  { path: '/financeMain', component:  FinanceMain},
  { path: '/lifeMain', component:  LifeMain},
  { path: '/search', component:  Search},
  { path: '/productDetail', component: Detail},
  { path: '/Message', component: Message},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router