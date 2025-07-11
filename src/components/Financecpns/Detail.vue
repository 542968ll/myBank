<template>
  <Headers :detailHeader="detailHeader">
    <template #slot1>
      <div class="flex justify-center items-center">
        <img src="@/assets/img/return.svg" class="w-[35px] h-[35px]">
      </div>
    </template>
    <template #slot2>
      <span class="w-[60%] text-center">产品详情</span>
    </template>
  </Headers>


  <Introduction></Introduction>

  <DetailItem></DetailItem>


  <!-- 产品简述 -->
  <DetailContentItem>
    <template #title>
      <div class="h-[30px] leading-[30px] text-[#383838] mb-[5px]">产品简述</div>
    </template>
    <template #content>
      <div class="text-[14px] text-[#616161] mb-[10px]">短期系统银行理财产品，非保本浮动利益。全行客户，不限卡种；适合能够确定用款期限需求的客户；到期后自动赎回并返回银行账户，不用过多关注或担心错过赎回。</div>
      <div>
        <!-- echarts图 -->
        <div ref="chartDOM" class="w-[338px] h-[220px]"></div>
        <span class="h-[28px] bg-[#0074d9] text-[#fff] p-[5px] leading-[28px]">近1个月</span>
      </div>
    </template>
  </DetailContentItem>

  <!-- 买入规则 -->
  <DetailContentItem>
    <template #title>
      <div class="h-[30px] leading-[30px] text-[#383838] mb-[5px]">买入规则</div>
    </template>
    <template #content>
      <span class="text-[14px] text-[#616161] mb-[10px]">存续期内可在每天的9:30-22:30办理申购。</span>
    </template>
  </DetailContentItem>

  <!-- 收益规则 -->
  <DetailContentItem>
    <template #title>
      <div class="h-[30px] leading-[30px] text-[#383838] mb-[5px]">收益规则</div>
    </template>
    <template #content>
      <span class="text-[14px] text-[#616161] mb-[10px]">理财计划存续期每天9:30-22:30申购下一个工作日起息。每工作日9:30前公布当日到期产品自动赎回的持有期年化收益率。</span>
    </template>
  </DetailContentItem>

  <!-- 赎回规则 -->
  <DetailContentItem :redemption="redemption">
    <template #title>
      <div class="h-[30px] leading-[30px] text-[#383838] mb-[5px]">赎回规则</div>
    </template>
    <template #content>
      <div class="flex">
        <div class="text-[#979797] w-[70px]">普通赎回</div>
        <div class="text-[14px] text-[#616161] mb-[10px]">每个理财计划到期后本金自动赎回到张，本金和分红将在到期日后3个工作日内返回。</div>
      </div>
    </template>
  </DetailContentItem>

  <!-- 风险评级 -->
  <DetailContentItem :riskStyle="riskStyle">
    <template #title>
      <div class="h-[30px] leading-[30px] text-[#383838] mb-[5px]">风险评级</div>
    </template>
    <template #content>
      <div class="text-[14px] text-[#616161]">R2级(较低风险)</div>
      <div class="text-[14px] text-[#616161] mb-[10px]">稳健型，本金风险相对较小，收益浮动相对可控。</div>
    </template>
  </DetailContentItem>


  <!-- 产品介绍 & 产品公告 -->
  <ProductItem :mt="mt"></ProductItem>
  <ProductItem></ProductItem>

</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from 'vue'
import Headers from '../Headers.vue';
import Introduction from './Introduction.vue';
import DetailItem from './DetailItem.vue';
import DetailContentItem from './DetailContentItem.vue';
import ProductItem from './ProductItem.vue';

import * as echarts from 'echarts';



const detailHeader = ref<boolean>(true)

const redemption = ref<boolean>(true)
const riskStyle = ref<boolean>(true)
const mt = ref<boolean>(true)

// 获取DOM引用
const chartDOM = ref(null)
let chartInstance: any = null

// 初始化图表
const option = {
  title: {
    text: "上期年化",
    textStyle: {
      left: '50%',
    }
  },
  xAxis: {
    type: 'category',
    data: ['20170405', '20170428'],
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}%', // 格式化为百分比
    },
  },
  series: [{
    data: [10, 20, 30, 40, 50, 60],
    type: 'line'
  }]
};

const initChart = () => {
  if(!chartDOM.value) return;
  chartInstance = echarts.init(chartDOM.value)
  chartInstance.setOption(option)
}


onMounted(() => {
  initChart()
  window.addEventListener('resize', () => chartInstance?.resize())
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => chartInstance?.resize())
  chartInstance?.dispose()
})


</script>
<style scoped lang="scss">
</style>