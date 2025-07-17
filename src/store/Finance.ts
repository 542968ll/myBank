import { defineStore } from 'pinia'
import { fetchShowFinance } from '../api/Finance'
import type { tabControlItemType, investmentType } from '../types/financeType'

export const useFinanceStore = defineStore('finance', {
  state: () => {
    return {
      tabControlItemList: [] as tabControlItemType[],
      shortItemInvestmentList: {} as investmentType,
      longItemInvestmentList: {} as investmentType,
      currentInvestmentList: {} as investmentType
    }
  },
  getters: {

  },
  actions: {
    async financePageData() {
      const res = await fetchShowFinance()
      this.tabControlItemList = res.tabControlItem
      this.shortItemInvestmentList = res.shortItemInvestment
      this.longItemInvestmentList = res.longItemInvestment
      this.currentInvestmentList = res.currentInvestment
    }
  }
})