import { defineStore } from 'pinia'
import { fetchHomeData } from '../api/Home'
import type { homeBottomContentListType, tabControlItemListType, scrollBarType } from '../types/homeType'


export const useHomeStore = defineStore('home', {
  state: () => {
    return {
      tabControlItemList: [] as tabControlItemListType[],
      newPeopleArea: [] as scrollBarType[],
      financeTheme: [] as scrollBarType[],
      homeBottomContentList: [] as homeBottomContentListType[]
    }
  },
  getters: { },
  actions: {
    async homePageData() {
      const res = await fetchHomeData()
      this.tabControlItemList = res.tabControlItemList
      this.newPeopleArea = res.newPeopleArea
      this.financeTheme = res.financeTheme
      this.homeBottomContentList = res.homeBottomContentList
    }
  }
})