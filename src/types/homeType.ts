export interface homeData {
  tabControlItemList: tabControlItemListType[],
  newPeopleArea: scrollBarType[],
  financeTheme: scrollBarType[],
  homeBottomContentList: homeBottomContentListType[]
}

export type homeBottomContentListType = {
  imgUrl: string,
  title: string,
  description: string
}

export type tabControlItemListType = {
  main: string,
  detail: string,
  textColor: string
}

export type scrollBarType = {
  title: string,
  description: string,
  bgColor: string
}



