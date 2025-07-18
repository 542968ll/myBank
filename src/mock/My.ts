const tabControlItemList = [{
  main: '高',
  detail: '高端权益',
  textColor: '#eeab3c'
}, {
  main: '账',
  detail: '账户',
  textColor: '#4ab1ad'
}, {
  main: '交',
  detail: '交易查询',
  textColor: '#84b773'
}, {
  main: '收',
  detail: '收支',
  textColor: '#5795c1'
}, {
  main: '全',
  detail: '全部',
  textColor: '#5795c1'
}]


export default {
  url: '/api/my',
  method: 'get',
  response: () => {
    return {
      code: 200,
      data: {
        tabControlItemList
      },
      message: '获取成功'
    }
  }
}

