<template>
  <Headers :homeBG="homeBG">
    <template #slot1>
      <div class="flex flex-col justify-center items-center z-1">
        <img src="@/assets/img/qrcode.svg" alt="" class="h-[30px] w-[30px]">
        <span class="text-[12px]">扫一扫</span>
      </div>
    </template>
    <template #slot2>
      <div class="w-[60%] relative z-1">
        <input type="text" class="indent-[12%] rounded-[15px] h-[25px] w-[100%] bg-[rgba(255,255,255,.3)] border-[0]" @focus="handleFocus" placeholder="30年行庆明星理财">
        <img src="@/assets/img/search.svg" class="absolute top-[25%] left-[5%]" alt="">
      </div>
    </template>
  </Headers>

  <TabControl :homeBG="homeBG">
    <template #tabControlItem>
      <ul class="flex justify-around items-center flex-wrap">
        <li v-for="item in tabControlItemList1" @click="financeItem(item)" :key="item.detail" class="flex flex-col justify-center items-center pt-[10px] pb-[10px] h-[60px] w-[75px]">
          <span 
            class="w-[30px] h-[30px] leading-[30px] text-center text-[18px] rounded-[50%] border-[1px] border-solid"
            :style="{color: item.textColor}"  
          >{{ item.main }}</span>
          <span class="text-[12px] mt-[5px] text-[#a6a6a6]">{{ item.detail }}</span>
        </li>
      </ul>
    </template>
  </TabControl>

  <!-- 小招头条 -->
  <div class="flex h-[45px] bg-[#fff] w-[100%] mt-[10px] mb-[10px]">
    <div class="text-[#fe2446] font-[700] p-[10px]">小招头条</div>
    <div class="p-[10px] text-[#777]">5年收益翻倍，三招选出好基金</div>
  </div>

  <!-- 为您推荐模块 拿了活期投资的 -->
  <ContentItem :recommand="recommand">
    <template #title>
      <span>为您推荐</span>  
    </template>
    <template #bodyItem>
      <div 
        class="flex h-[70px]" 
        v-for="item in recommandList.list" 
        :key="item.title"
        @click="productDeatil"
      >
        <div class="flex flex-col justify-center items-center text-[#FC505F] text-[18px] w-[100px]">
          <span>{{ item.percentage }}</span>
          <span>{{ item.time }}</span>
        </div>
        <div class="flex flex-col w-[245px] justify-center ml-[10px]">
          <span>{{ item.title }}</span>
          <span class="text-[14px] text-[#999]">{{ item.description }}</span>
        </div>
      </div>
    </template>
  </ContentItem>

  <!-- 新人专区 -->
  <ScrollBar>
    <template #scrollBarContent>
      <div class="h-[150px] p-[10px] w-[360px]">
        <div>新人专区</div>
        <ul class="mt-[10px] flex flex-nowrap overflow-x-auto">
          <li 
            v-for="item in newPeopleArea1" :key="item.title" 
            class="text-[#fff] w-[150px] h-[90px] flex flex-col justify-center items-center flex-shrink-0 border-[1px] p-[5px] mr-[10px] text-center"
            :style="{backgroundColor: item.bgColor}"  
          >
            <div>{{ item.title }}</div>
            <div>{{ item.description }}</div>
          </li>
        </ul>
      </div>
    </template>
  </ScrollBar>

  <!-- 专享理财 差个圆圈状态-->
  <ContentItem :recommand="recommand">
    <template #title>
      <span>专享理财</span>  
    </template>
    <template #bodyItem>
      <div 
        class="flex h-[70px]" 
        v-for="item in recommandList.list" 
        :key="item.title"
        @click="productDeatil"
      >
        <div class="flex flex-col justify-center items-center text-[#FC505F] text-[18px] w-[100px]">
          <span>{{ item.percentage }}</span>
          <span>{{ item.time }}</span>
        </div>
        <div class="flex flex-col w-[245px] justify-center ml-[10px]">
          <span>{{ item.title }}</span>
          <span class="text-[14px] text-[#999]">{{ item.description }}</span>
        </div>
      </div>
    </template>
  </ContentItem>

  <!-- 理财主题 -->
  <ScrollBar>
    <template #scrollBarContent>
      <div class="h-[150px] p-[10px] w-[360px]">
        <div class="flex justify-between items-center">
          <span>理财主题</span>
          <img src="@/assets/img/arrow.svg" alt="" class="w-[30px] h-[30px]">
        </div>
        <ul class="mt-[10px] flex flex-nowrap overflow-x-auto">
          <li 
            v-for="item in financeTheme1" :key="item.title" 
            class="text-[#fff] w-[150px] h-[90px] flex flex-col justify-center items-center flex-shrink-0 border-[1px] p-[5px] mr-[10px] text-center"
            :style="{backgroundColor: item.bgColor}"    
          >
            <div>{{ item.title }}</div>
            <div>{{ item.description }}</div>
          </li>
        </ul>
      </div>
    </template>
  </ScrollBar>

  <!-- 理财参考 ---》理财干货 -->
  <ContentItem>
    <template #title>
      <span class="w-[27px] h-[27px] bg-[#5b6b73] rounded-[50%] mr-[5px]"></span>
      <span>理财参考</span>  
    </template>

    <template #bodyItem>
      <div class="relative flex w-[100%]">
        <img src="@/assets/img/caijingPic.png" class="h-[133px] w-[100%]" alt="">
        <span class="absolute bottom-[0] w-[100%] bg-[#101010] text-[#fff] text-[14px] h-[30px] leading-[30px]">公积金“闲着也是闲着”，能取出来理财吗</span>
      </div>
      <ListItem>
        <template #itemImg>
          <img src="@/assets/img/car.png" class="h-[68px] w-[110px] mr-[10px]" alt="">
        </template>
        <template #itemContent>
          <span>从小白到达人，理财如何赚更多？</span>
          <div>
            <span class="mr-[10px] text-[14px]">招财</span>
            <span class="text-[14px]">2小时前</span>
          </div>
        </template>
      </ListItem>

      <ListItem>
        <template #itemImg>
          <img src="@/assets/img/car.png" class="h-[68px] w-[110px] mr-[10px]" alt="">
        </template>
        <template #itemContent>
          <span>从小白到达人，理财如何赚更多？</span>
          <div>
            <span class="mr-[10px] text-[14px]">招财</span>
            <span class="text-[14px]">2小时前</span>
          </div>
        </template>
      </ListItem>

      <ListItem>
        <template #itemImg>
          <img src="@/assets/img/car.png" class="h-[68px] w-[110px] mr-[10px]" alt="">
        </template>
        <template #itemContent>
          <span>从小白到达人，理财如何赚更多？</span>
          <div>
            <span class="mr-[10px] text-[14px]">招财</span>
            <span class="text-[14px]">2小时前</span>
          </div>
        </template>
      </ListItem>
    </template>
  </ContentItem>

  <!-- 首页底部  推荐内容~ -->
  <HomeBottomContent :homeBottomContentList="homeBottomContentList1"></HomeBottomContent>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Headers from '../Headers.vue';
import TabControl from '../TabControl.vue';
import ContentItem from '../ContentItem.vue';
import ScrollBar from '../ScrollBar.vue';
import ListItem from '../ListItem.vue';
import HomeBottomContent from './HomeBottomContent.vue';
import type { investmentType } from '../../types/financeType'
import type { homeBottomContentListType, tabControlItemListType, scrollBarType } from '../../types/homeType'
import { useFinanceStore } from '../../store/Finance'
import { useHomeStore } from '../../store/Home';

const homeBG = ref<boolean>(true)
const recommand = ref<boolean>(true)


const financeStore = useFinanceStore()
const homeStore = useHomeStore()
const recommandList = ref<investmentType>({} as investmentType)


const tabControlItemList1 = ref<tabControlItemListType[]>([] as tabControlItemListType[])
const newPeopleArea1 = ref<scrollBarType[]>([] as scrollBarType[])
const financeTheme1 = ref<scrollBarType[]>([] as scrollBarType[])
const homeBottomContentList1 = ref<homeBottomContentListType[]>([] as homeBottomContentListType[])

onMounted(async () => {
  // 请求理财栏目数据
  await financeStore.financePageData()
  const { currentInvestmentList } = financeStore.$state
  recommandList.value = currentInvestmentList
  
  // 请求首页数据
  await homeStore.homePageData()
  const { tabControlItemList, newPeopleArea, financeTheme, homeBottomContentList } = homeStore.$state
  tabControlItemList1.value = tabControlItemList
  newPeopleArea1.value = newPeopleArea
  financeTheme1.value = financeTheme
  homeBottomContentList1.value = homeBottomContentList
})

const router = useRouter()
const productDeatil = () => {
  router.push('/productDetail')
}

const handleFocus = () => {
  router.push('/search')
}

const financeItem = (item: tabControlItemListType) => {
  if(item.detail !== '账户') return
  router.push('/accountOverview')
}

</script>


<style scoped lang="scss">
</style>