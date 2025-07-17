import { defineStore } from "pinia";
import { fetchShowLife } from '../api/Life'
import type {
  LifeEntertainmentType,
  bannerUrlType, 
  recommendListType, 
  superCheapType,
  moduleType,
  tabControlItemType
} from '../types/lifeType'


export const useLifeStore = defineStore('life', {
  state: () => {
    return {
      // 娱乐模块
      LifeEntertainmentList: [] as LifeEntertainmentType[],
      // 生活&旅游特惠
      lifeModuleList: {} as moduleType,
      hotelModuleList: {} as moduleType,
      // banner模块
      bannerUrlList: [] as bannerUrlType[],
      // 为你推荐模块
      recommendList: [] as recommendListType[],
      // 超实惠模块
      superCheapList: [] as superCheapType[],
      // TabControlItem
      tabControlItem1: [] as tabControlItemType[],
      tabControlItem2: [] as tabControlItemType[]
    }
  },
  // 计算属性
  getters: {

  },
  // 执行函数
  actions: {
    // 请求生活页面数据
    async lifePageData() {
      const res = await fetchShowLife()
      this.LifeEntertainmentList = res.LifeEntertainment
      this.lifeModuleList = res.ListItemCheapModule.lifeModule
      this.hotelModuleList = res.ListItemCheapModule.hotelModule
      this.bannerUrlList = res.bannerUrl
      this.recommendList = res.recommendList
      this.superCheapList = res.superCheap
      this.tabControlItem1 = res.TabControlItem1
      this.tabControlItem2 = res.TabControlItem2
    }
  }
})