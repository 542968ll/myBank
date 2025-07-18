<template>
  <Headers :detailHeader="detailHeader">
    <template #slot1>
      <div class="flex justify-center items-center" @click="returnHandle">
        <img src="@/assets/img/return.svg" class="w-[35px] h-[35px]" alt="">
      </div>
    </template>
    <template #slot2>
      <span class="w-[60%] text-center" @click="">产品详情</span>
    </template>
  </Headers>

  <Introduction v-if="showIntroduction" :detailData="detailData"></Introduction>

  <DetailItem v-if="financialCycle" :financialCycle="financialCycle"></DetailItem>

  <!-- 产品简述 -->
  <DetailContentItem>
    <template #title>
      <div class="h-[30px] leading-[30px] text-[#383838] mb-[5px]">{{ productDescription.title }}</div>
    </template>
    <template #content>
      <div class="text-[14px] text-[#616161] mb-[10px]">{{ productDescription.description }}</div>
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
      <div class="h-[30px] leading-[30px] text-[#383838] mb-[5px]">{{ buyInRules.title }}</div>
    </template>
    <template #content>
      <span class="text-[14px] text-[#616161] mb-[10px]">{{ buyInRules.description }}</span>
    </template>
  </DetailContentItem>

  <!-- 收益规则 -->
  <DetailContentItem>
    <template #title>
      <div class="h-[30px] leading-[30px] text-[#383838] mb-[5px]">{{ earningsRules.title }}</div>
    </template>
    <template #content>
      <span class="text-[14px] text-[#616161] mb-[10px]">{{ earningsRules.description }}</span>
    </template>
  </DetailContentItem>

  <!-- 赎回规则 -->
  <DetailContentItem :redemption="redemption">
    <template #title>
      <div class="h-[30px] leading-[30px] text-[#383838] mb-[5px]">{{ redemptionRules.title }}</div>
    </template>
    <template #content>
      <div class="flex">
        <div class="text-[#979797] w-[50%]">{{ redemptionRules.descriptTitle }}</div>
        <div class="text-[14px] text-[#616161]">{{ redemptionRules.description }}</div>
      </div>
    </template>
  </DetailContentItem>

  <!-- 风险评级 -->
  <DetailContentItem :riskStyle="riskStyle">
    <template #title>
      <div class="h-[30px] leading-[30px] text-[#383838] mb-[5px]">{{ riskRating.title }}</div>
    </template>
    <template #content>
      <div class="text-[14px] text-[#616161]">{{ riskRating.descriptTitle }}</div>
      <div class="text-[14px] text-[#616161] mb-[10px]">{{ riskRating.description }}</div>
    </template>
  </DetailContentItem>

  <!-- 产品介绍 & 产品公告 -->
  <ProductItem :mt="mt">
    <template #title>
      <span>产品介绍</span>
    </template>
  </ProductItem>
  <ProductItem>
    <template #title>
      <span>产品公告</span>
    </template>
  </ProductItem>


  <!-- 底部按钮 -->
  <div class="mt-[30px] h-[50px] flex justify-center items-center text-center">
    <div class="w-[60px] h-[100%] bg-[#fff]"></div>
    <div class="w-[100%] bg-[#0074d9] text-[#fff] h-[100%] leading-[50px]">购买</div>
  </div>

</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount, computed } from 'vue'
import { useRouter } from 'vue-router'
import Headers from '../Headers.vue';
import DetailItem from '../financeCpns/DetailItem.vue';
import DetailContentItem from '../financeCpns/DetailContentItem.vue';
import ProductItem from '../ProductItem.vue';

import * as echarts from 'echarts';
import Introduction from "../financeCpns/Introduction.vue";

import { fetchFinanceDetail } from "../../api/Finance"
import type { detailData, financialCycleType, rulesType } from "../../types/detail"



const detailHeader = ref<boolean>(true)

const redemption = ref<boolean>(true)
const riskStyle = ref<boolean>(true)
const mt = ref<boolean>(true)

const buyInRules = ref<rulesType>({} as rulesType)
const earningsRules = ref<rulesType>({} as rulesType)
const productDescription = ref<rulesType>({} as rulesType)
const redemptionRules = ref<rulesType>({} as rulesType)
const riskRating = ref<rulesType>({} as rulesType)
const detailData = ref<detailData>({} as detailData)
const financialCycle = ref<financialCycleType[]>([])

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

// onMounted
onMounted(async () => {
  initChart()
  window.addEventListener('resize', () => chartInstance?.resize())

  const res = await fetchFinanceDetail()
  detailData.value = res.detailData
  console.log("detailData", detailData.value);
  
  buyInRules.value = res.buyInRules
  earningsRules.value = res.earningsRules
  productDescription.value = res.productDescription
  redemptionRules.value = res.redemptionRules
  riskRating.value = res.riskRating
  financialCycle.value = res.financialCycle
})


// 计算属性
const showIntroduction = computed(() => {
  return Object.prototype.toString.call(detailData).slice(8, -1) !== '{}'
})


const router = useRouter()
const returnHandle = () => {
  router.go(-1)
}

// onBeforeUnmount
onBeforeUnmount(() => {
  window.removeEventListener('resize', () => chartInstance?.resize())
  chartInstance?.dispose()
})


</script>
