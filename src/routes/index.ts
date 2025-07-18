import { createWebHistory, createRouter } from 'vue-router'

import FinanceMain from '../components/financeCpns/FinanceMain.vue'
import LifeMain from '../components/lifeCpns/LifeMain.vue'
import Search from '../components/financeCpns/Search.vue'
import Detail from '../components/financeCpns/Detail.vue'
import Message from '../components/Message.vue'
import Login from '../components/Login.vue'
import FinancialInformation from '../components/financeCpns/FinancialInformation.vue'
import Home from '../components/home/Home.vue'
import MyMain from '../components/my/MyMain.vue'
import Setting from '../components/Setting.vue'
import AccountOverview from '../components/AccountOverview.vue'


const routes = [
  { path: '/', component:  Login},
  { path: '/financeMain', component:  FinanceMain},
  { path: '/lifeMain', component:  LifeMain},
  { path: '/search', component:  Search},
  { path: '/productDetail', component: Detail},
  { path: '/message', component: Message},
  { path: '/login', component: Login},
  { path: '/financialInformation', component: FinancialInformation},
  { path: '/myMain', component: MyMain},
  { path: '/home', component: Home},
  { path: '/setting', component: Setting},
  { path: '/accountOverview', component: AccountOverview},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router