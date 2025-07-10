// tabControlItem
const tabControlItem = [{
  main: "理",
  detail: "理财产品"
}, {
  main: "基",
  detail: "基金"
}, {
  main: "证",
  detail: "证券交易"
}, {
  main: "贵",
  detail: "贵金属"
}, {
  main: "全",
  detail: "全部"
}]

// bannerList
const bannerList = [{
  id: 1,
  imgUrl: "../../assets/img/mojiezhitou.jpg",
  name: '图片1'
}, {
  id: 2,
  imgUrl: "../../assets/img/mojiezhitou.jpg",
  name: '图片2'
}, {
  id: 3,
  imgUrl: "../../assets/img/mojiezhitou.jpg",
  name: '图片3'
}]

// 活期投资
const currentInvestment = {
  title: "活期投资",
  list: [{
    percentage: "3.27%",
    time: "上期年化",
    title: "日益月鑫7天",
    description: "招行明星产品 5万起购 到期资金自动到账"
  }, {
    percentage: "4.13%",
    time: "近1年年化",
    title: "天添金稳健型",
    description: "招行净值类明星理财 探索更高收益"
  }]
}

// 短期投资
const shortItemInvestment = {
  title: "短期投资",
  list: [{
    percentage: "4.18%",
    time: "上期年化",
    title: "日益月鑫90天",
    description: "招行明星产品 5万起购 到期资金自动到账"
  }, {
    percentage: "4.08%",
    time: "上期年化",
    title: "日益月鑫60天",
    description: "招行净值类明星理财 探索更高收益"
  }]
  
}

// 长期投资
const longItemInvestment = {
  title: "长期投资",
  list: [{
    percentage: "22.98%",
    time: "近1年收益",
    title: "创金沪港深",
    description: "金牛基金经理管理 积极参与打新"
  }, {
    percentage: "3.62%",
    time: "近1年收益",
    title: "大摩强债基金",
    description: "一级债基 回撤控制好 反弹弹性足"
  }]
}



export default {
  url: '/api/finance',
  method: 'get',
  response: () => {
    return {
      code: 200,
      data: {
        tabControlItem,
        bannerList,
        currentInvestment,
        shortItemInvestment,
        longItemInvestment
      },
      message: '获取成功'
    }
  }
}
