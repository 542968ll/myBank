export interface lifeDataType {
  LifeEntertainment: LifeEntertainmentType[],
  ListItemCheapModule: ListItemCheapModuleType[],
  bannerUrl: bannerUrlType[],
  recommendList: recommendListType[],
  superCheap: superCheapType[],
}

export type LifeEntertainmentType = {
  description: string,
  imgUrl: string,
  title: string,
  textColor: string
}


export type ListItemCheapModuleType = {
  hotelModule: moduleType[],
  lifeModule: moduleType[],
}

export type moduleType = {
  bigTitle: string,
  desctiprion1: string,
  desctiprion2: string,
  description3?: string,
  list: listType[],
  price: string
}

export type listType = {
  description: string,
  id: number,
  title: string
}

export type bannerUrlType = {
  id: number,
  imgUrl: string,
  name: string
}

export type recommendListType = {
  description: string,
  id: number,
  imgUrl: string,
  originPrice: string,
  price: string,
  title: string
}

export type superCheapType = {
  description: string,
  id: number,
  imgUrl: string,
  title: string
}

export type tabControlItemType = {
  detail: string,
  main: string
}