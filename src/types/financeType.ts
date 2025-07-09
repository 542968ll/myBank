export interface financeDataType {
  bannerList: bannerListType[],
  currentInvestment: investmentType,
  longItemInvestment: investmentType,
  shortItemInvestment: investmentType,
  tabControlItem: tabControlItemType[],
}

export type investmentType = {
  title: string,
  list: investMentList[]
}

export type bannerListType = {
  id: number,
  imgUrl: string,
  name: string
}

export type investMentList = {
  description: string,
  percentage: string,
  time: string,
  title: string
}

export type tabControlItemType = {
  detail: string,
  main: string
}