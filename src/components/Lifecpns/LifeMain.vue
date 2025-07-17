<template>
  <button @click="toFinancePage">跳转到理财页面</button>
  <!-- 导航 -->
  <Headers>
    <template #slot1>
      <div class="flex justify-center items-center">
        <img src="@/assets/img/address.svg" class="w-[30px] h-[30px]" alt="">
        <span>杭州</span>
      </div>
    </template>
    <template #slot2>
      <span class="w-[60%] text-center">生活</span>
    </template>
  </Headers>

  <!-- tabControlItem1 1 -->
  <TabControl :bgCol="bgCol">
    <template #tabControlItem>
      <ul class=" flex justify-around items-center text-[#929292]">
        <li v-for="item in tabControlItem1" :key="item.main" class="flex flex-col justify-center items-center pt-[10px] pb-[10px] hover:text-[#ea5563]">
          <span class="w-[30px] h-[30px] leading-[30px] text-center border-[1px] border-solid border-[#000] text-[18px] rounded-[50%] hover:border-[#ea5563]">{{ item.main }}</span>
          <span class="text-[12px] mt-[5px]">{{ item.detail }}</span>
        </li>
      </ul>
    </template>
  </TabControl>

  <!-- 娱乐模块 1 -->
  <LifeEntertainment v-if="LifeEntertainmentList.length > 0" :LifeEntertainmentList="LifeEntertainmentList"></LifeEntertainment>

  <!-- tabControlItem2 1 -->
  <TabControl :bgCol="bgCol" :mt="mt">
    <template #tabControlItem>
      <ul class=" flex justify-around items-center">
        <li v-for="item in tabControlItem2" :key="item.main" class="flex flex-col justify-center items-center pt-[10px] pb-[10px]">
          <span class="w-[30px] h-[30px] leading-[30px] text-center border-[1px] border-solid border-[#2fa099] text-[18px] text-[#2fa099] rounded-[50%]">{{ item.main }}</span>
          <span class="text-[12px] mt-[5px] text-[#a6a6a6]">{{ item.detail }}</span>
        </li>
      </ul>
    </template>
  </TabControl>

  <Banner></Banner>

  <!-- 超实惠 1 -->
  <ContentItem :flexDir="flexDir">
    <template #title>
      <span>超实惠</span>  
    </template>

    <template #bodyItem>
      <div v-for="item in superCheapList" :key="item.id">
        <div class="flex flex-col mb-[5px]">
          <span class="text-[#767676]">{{ item.title }}</span>
          <span class="text-[12px] text-[#fd7d87]">{{ item.description }}</span>
        </div>
        <img :src="getImg(item.imgUrl)" class="w-[95px] h-[95px]" alt="">
      </div>

    </template>
  </ContentItem>


  <!-- 生活特惠 1 -->
  <ContentItem :superCheap="superCheap">
    <template #title>
      <span>生活特惠</span>
    </template>
    <template #bodyItem>
      <div class="flex flex-col w-[100%] justify-center items-center bg-[#e5ebdf] text-[#5ea534] pt-[10px] pb-[10px]">
        <span class="text-[23px]">{{lifeModuleList.bigTitle}}</span>
        <span>{{ lifeModuleList.desctiprion1 }}</span>
        <span>{{ lifeModuleList.desctiprion2 }}<span class="text-[23px]">{{ lifeModuleList.price }}</span><span>{{ lifeModuleList.description3 }}</span></span>
      </div>
      <div class="text-[#5ea534] flex w-[100%] justify-between items-center">

        <div v-for="item in lifeModuleList.list" :key="item.id" class="bg-[#e5ebdf] flex flex-col h-[90px] items-center justify-center mt-[5px] w-[30%]">
          <span class="text-[13px]">{{ item.title }}</span>
          <span class="text-[11px]">{{ item.description }}</span>
        </div>

      </div>
    </template>
  </ContentItem>


  <!-- 酒店出游特惠 1 -->
  <ContentItem :superCheap="superCheap">
    <template #title>
      <span>酒店出游</span>
    </template>
    <template #bodyItem>
      <div class="flex flex-col w-[90%] bg-[#8678af] text-[#fff] p-[5%]">
        <span class="text-[25px]">{{ hotelModuleList.bigTitle }}</span>
        <span class="text-[13px]">{{ hotelModuleList.desctiprion1 }}</span>
        <p class="mt-[10px]"><span class="text-[25px]">{{ hotelModuleList.price }}</span><span>{{ hotelModuleList.desctiprion2 }}</span></p>
      </div>
      <div class="flex w-[100%] justify-between items-center">
        <div v-for="item in hotelModuleList.list" :key="item.id" class="bg-[#c1d8e9] flex flex-col h-[90px] items-center justify-center mt-[5px] w-[30%]">
          <span class="text-[13px]">{{ item.title }}</span>
          <span class="text-[#7d7d7d] text-[11px]">{{ item.description }}</span>
        </div>
      </div>
    </template>
  </ContentItem>


  <!-- 为您推荐 1 -->
  <ContentItem :superCheap="superCheap">
    <template #title>
      <span>为你推荐</span>
    </template>
    <template #bodyItem>
      <ListItem :lifeItem="lifeItem" v-for="item in recommendList" :key="item.id">
        <template #itemImg>
          <img :src="getImg(item.imgUrl)" class="h-[100px] w-[100px] mr-[10px]" alt="">
        </template>
        <template #itemContent>
          <div class="flex flex-col">
            <span class="text-[#2c2c2c]">{{ item.title }}</span>
            <span class="text-[#919191] text-[14px]">{{ item.description }}</span>
          </div>
          <div>
            <span class="mr-[5px] text-[#fc4c5b]">{{ item.price }}</span>
            <span class="text-[12px] text-[#a8a8a8] line-through">{{ item.originPrice }}</span>
          </div>
        </template>
      </ListItem>
    </template>
  </ContentItem>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Headers from '../Headers.vue';
import TabControl from '../TabControl.vue';
import LifeEntertainment from '../lifeCpns/LifeEntertainment.vue';
import Banner from '../Banner.vue';
import ContentItem from '../ContentItem.vue';
import ListItem from '../ListItem.vue';
import { fetchShowLife } from '../../api/Life'
import { useRouter } from 'vue-router';
import type { 
  LifeEntertainmentType,
  bannerUrlType, 
  recommendListType, 
  superCheapType,
  moduleType,
  tabControlItemType
} from '../../types/lifeType'

import { useLifeStore } from '../../store/Life'

// 使用pinia仓库
let lifeStore = useLifeStore()

console.log('useStore', lifeStore.lifePageData());



const bgCol = ref<boolean>(true)
const mt = ref<boolean>(true)
const flexDir = ref<boolean>(true)
const superCheap = ref<boolean>(true)
const lifeItem = ref<boolean>(true)

// 娱乐板块
const LifeEntertainmentList = ref<LifeEntertainmentType[]>([])

// 生活&旅游特惠
const lifeModuleList = ref<moduleType>({} as moduleType)
const hotelModuleList = ref<moduleType>({} as moduleType)

// banner板块
const bannerUrlList = ref<bannerUrlType[]>([])
// 为你推荐模块
const recommendList = ref<recommendListType[]>([])
// 超实惠模块
const superCheapList = ref<superCheapType[]>([])

// TabControlItem
const tabControlItem1 = ref<tabControlItemType[]>([])
const tabControlItem2 = ref<tabControlItemType[]>([])

onMounted(async () => {
  try {
    const res = await fetchShowLife()
    LifeEntertainmentList.value = res.LifeEntertainment
    lifeModuleList.value = res.ListItemCheapModule.lifeModule
    hotelModuleList.value = res.ListItemCheapModule.hotelModule
    bannerUrlList.value = res.bannerUrl
    recommendList.value = res.recommendList
    superCheapList.value = res.superCheap
    tabControlItem1.value = res.TabControlItem1
    tabControlItem2.value = res.TabControlItem2
  } catch (error) {
    console.log(error);
  }
})

const getImg = (img: string) => {
 return new URL(img, import.meta.url).href
}

const router = useRouter()
const toFinancePage = () => {
  router.push('/financeMain')
}


</script>
