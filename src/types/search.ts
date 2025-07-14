export type searchItemType = {
  searchItem: searchItemType | { historySearch: { title: string; list: string[] }; hotSearch: { title: string; list: string[] } }
  historySearch: SearchType,
  hotSearch: SearchType
}

export type SearchType = {
  title: string,
  list: string[]
}