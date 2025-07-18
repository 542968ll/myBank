// 中间tabItem
const tabControlItemList = [{
  main: "账",
  detail: "账户",
  textColor: "#4ab0ac"
}, {
  main: "转",
  detail: "转账",
  textColor: "#74b35f"
}, {
  main: "信",
  detail: "信用卡还款",
  textColor: "#efb34b"
}, {
  main: "收",
  detail: "收支",
  textColor: "#4892c6"
}, {
  main: "他",
  detail: "他行卡转入",
  textColor: "#efb34b"
}, {
  main: "借",
  detail: "借钱",
  textColor: "#efb34b"
}, {
  main: "缴",
  detail: "缴费",
  textColor: "#4ab0ac"
}, {
  main: "摩",
  detail: "摩羯智投",
  textColor: "#3573b9"
}, {
  main: "热",
  detail: "热门活动",
  textColor: "#e96f62"
}, {
  main: "全",
  detail: "全部",
  textColor: "#4892c6"
}]

// 新人专区
const newPeopleArea = [{
  title: '新手有礼',
  description: '80元现金礼券免费领',
  bgColor: '#ab483c'
}, {
  title: '使用攻略',
  description: '教你玩转招商银行app',
  bgColor: '#141315'
}, {
  title: '专享活动',
  description: '商场用券9.9包邮',
  bgColor: '#7e1d22'
}, {
  title: '闪电开户',
  description: '快速开通一网通账户',
  bgColor: '#888888'
}]

// 理财主题
const financeTheme = [{
  title: '行家投资',
  description: '跟着行家买买买',
  bgColor: '#ab483c'
}, {
  title: '优中优选',
  description: '10年以上收益长虹基金',
  bgColor: '#141315'
}, {
  title: '有钱任性',
  description: '从定投开始',
  bgColor: '#7e1d22'
}, {
  title: '1分钟就能买',
  description: '低门槛理财盘点',
  bgColor: '#888888'
}, {
  title: '钱越花越多？',
  description: '要懂得用支出理财',
  bgColor: '#ab483c'
}, {
  title: '稳中求胜',
  description: '稳健收益理财',
  bgColor: '#141315'
}, {
  title: '水电煤不发愁',
  description: '用闲钱缩减生活支出',
  bgColor: '#7e1d22'
}, {
  title: '备用金管理',
  description: '应急资金也能投资理财',
  bgColor: '#888888'
}]

// 首页底部  <!-- 首页底部  推荐内容~ -->
const homeBottomContentList = [{
  imgUrl: '../../assets/img/caijingPic.png',
  title: '美食',
  description: '代金券5折起'
}, {
  imgUrl: '../../assets/img/caijingPic.png',
  title: '影票',
  description: '特惠看大片'
}, {
  imgUrl: '../../assets/img/caijingPic.png',
  title: '限时特惠',
  description: '周三一起Buy'
}, {
  imgUrl: '../../assets/img/caijingPic.png',
  title: '商城',
  description: '新户立减8.9元'
}]


export default {
  url: '/api/home',
  method: 'get',
  response: () => {
    return {
      code: 200,
      data: {
        tabControlItemList,
        newPeopleArea,
        financeTheme,
        homeBottomContentList
      },
      message: '获取成功'
    }
  }
}