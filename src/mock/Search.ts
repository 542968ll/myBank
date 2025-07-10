// 搜索页item显示
const searchItem = {
  historySearch: {
    title: "历史搜索",
    list: ['招招盈', '年度账单']
  },
  hotSearch: {
    title: "热门搜索",
    list: ['第一套房怎么买？', '信用卡""赚钱攻略', '五险一金新规', '年轻人理财', '第一桶金'] 
  }
}

export default {
  url: '/api/search',
  method: 'get',
  response: () => {
    return {
      code: 200,
      data: {
        searchItem
      },
      message: '获取成功'
    }
  }
  
}