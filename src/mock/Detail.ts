// 详情页数据mock
// 基本信息
const detailData = {
  title: "日益月鑫60天(8905)",
  percentage: "4.08",
  time: "上期年化",
  horizon: "62天",
  minimum: "5万元",
  buyers: '1,008,790人',
}

// 理财周期
const financialCycle = [{
  title: "今日购买",
  time: "04-28"
}, {
  title: "产品起息",
  time: "2017-05-02"
}, {
  title: "产品到期",
  time: "2017-07-03"
}]

// 产品简述
const productDescription = {
  title: "产品简述",
  description: "短期系统银行理财产品，非保本浮动利益。全行客户，不限卡种；适合能够确定用款期限需求的客户；到期后自动赎回并返回银行账户，不用过多关注或担心错过赎回。"
}

// 买入规则
const buyInRules = {
  title: "买入规则",
  description: "存续期内可在每天的9:30-22:30办理申购。"
}
// 收益规则
const earningsRules = {
  title: "收益规则",
  description: "理财计划存续期每天9:30-22:30申购下一个工作日起息。每工作日9:30前公布当日到期产品自动赎回的持有期年化收益率。"
} 
// 赎回规则
const redemptionRules = {
  title: "赎回规则",
  descriptTitle: "普通赎回",
  description: "每个理财计划到期后本金自动赎回到账，本金和分红将在到期日后3个工作日内返回。"
}

// 风险评级
const riskRating = {
  title: "风险评级",
  descriptTitle: "R2级（较低风险）",
  description: "稳健型，本金风险相对较小，收益浮动相对可控。"
}

export default {
  url: "/api/detail",
  method: "get",
  response: () => {
    return {
      code: 200,
      data: {
        detailData,
        financialCycle,
        productDescription,
        buyInRules,
        earningsRules,
        redemptionRules,
        riskRating
      },
      message: "请求成功~"
    }
  }
}