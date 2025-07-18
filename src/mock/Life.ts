// TabControlItem1
const TabControlItem1 = [{
  main: "扫",
  detail: "扫一扫"
}, {
  main: "付",
  detail: "付款"
}, {
  main: "票",
  detail: "票务"
}, {
  main: "订",
  detail: "订单"
}]

// TabControlItem2
const TabControlItem2 = [{
  main: "生",
  detail: "生活缴费",
  textColor: "#58aaa6"
}, {
  main: "话",
  detail: "话费流量",
  textColor: "#43a09a"
}, {
  main: "礼",
  detail: "热门活动",
  textColor: "#e28076"
}, {
  main: "荐",
  detail: "荐者有份",
  textColor: "#dc685c"
}, {
  main: "全",
  detail: "全部",
  textColor: "#2b7ebf"
}]

// 中间横选模块
const LifeEntertainment = [{
  title: "饭票",
  description: "代金券5折起",
  imgUrl: "../../assets/img/daily.png",
  textColor: "#ff8341",
}, {
  title: "影票",
  description: "特惠看大片",
  imgUrl: "../../assets/img/daily.png",
  textColor: "#009af7",
}, {
  title: "限时特惠",
  description: "爆款限量秒杀",
  imgUrl: "../../assets/img/daily.png",
  textColor: "#ffbc53",
}, {
  title: "掌上商城",
  description: "立减8.9元",
  imgUrl: "../../assets/img/daily.png",
  textColor: "#fc4c5b",
}]

// 轮播图模块
const bannerUrl = [{
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
}, {
  id: 4,
  imgUrl: "../../assets/img/mojiezhitou.jpg",
  name: '图片4'
}]

// 超实惠模块
const superCheap = [{
  id: 1,
  title: "新农哥板栗仁",
  description: "甜香软糯",
  imgUrl: "../../assets/img/banli.png"
}, {
  id: 2,
  title: "威露士居家超",
  description: "成分温和 超值体",
  imgUrl: "../../assets/img/banli.png"
}, {
  id: 3,
  title: "可娜斯花露水",
  description: "温和不刺激",
  imgUrl: "../../assets/img/banli.png"
}]

// 生活 & 酒店出游特惠模块
const ListItemCheapModule = {
  lifeModule: {
    bigTitle: "新下载用户专享",
    desctiprion1: "商城10元无门槛现金券",
    desctiprion2: "用券",
    price: "9.9",
    description3: "包邮",
    list: [{
      title: "邀请好友",
      description: "赢爱奇艺会员",
      id: 1,
    }, {
      title: "屈臣氏",
      description: "满200减30",
      id: 2,
    }, {
      title: "芒果",
      description: "1元抢会员",
      id: 3,
    }]
  },
  hotelModule: {
    bigTitle: "品质春游",
    desctiprion1: "热门度假酒店",
    desctiprion2: "折促销",
    price: "7",
    list: [{
      title: "爆款酒店",
      description: "每周一上新",
      id: 1,
    }, {
      title: "试睡中心",
      description: "399元体验",
      id: 2,
    }, {
      title: "全球WIFI",
      description: "11元/天起",
      id: 3,
    }]
  },
}


// 为你推荐模块
const recommendList = [{
  imgUrl: "../../assets/img/car.png",
  id: 1,
  title: "日本马油洗发水",
  description: "无硅油防脱发",
  price: "￥59.9",
  originPrice: "￥198"
}, {
  imgUrl: "../../assets/img/car.png",
  id: 2,
  title: "蕉下蝴蝶结三折伞",
  description: "遮蔽90%紫外线",
  price: "￥199",
  originPrice: "￥499"
}, {
  imgUrl: "../../assets/img/car.png",
  id: 3,
  title: "施华洛世奇项链",
  description: "高贵典雅",
  price: "￥799",
  originPrice: "￥980"
}, {
  imgUrl: "../../assets/img/car.png",
  id: 4,
  title: "泰国茉莉香米",
  description: "买一送一生态好米",
  price: "￥19.9",
  originPrice: "￥51.2"
}, {
  imgUrl: "../../assets/img/car.png",
  id: 5,
  title: "初学者乌克丽丽",
  description: "热销饼干款",
  price: "￥499",
  originPrice: "￥500"
}]

export default {
  url: '/api/life',
  method: 'get',
  response: () => {
    return {
      code: 200,
      data: {
        TabControlItem1,
        TabControlItem2,
        LifeEntertainment,
        bannerUrl,
        superCheap,
        ListItemCheapModule,
        recommendList
      },
      message: '获取成功'
    }
  }
}





