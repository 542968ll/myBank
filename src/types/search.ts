export type searchItemType = {
  historySearch: SearchType,
  hotSearch: SearchType
}

export type SearchType = {
  title: string,
  list: string[]
}