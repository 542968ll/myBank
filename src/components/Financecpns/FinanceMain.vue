<template>

  <Headers>
    <template #slot1>
      <div class=" flex flex-col justify-center items-center">
        <img src="../../assets/img/qrcode.svg"  alt="" class="h-[30px] w-[30px]">
        <span class="text-[12px]">扫一扫</span>
      </div>
    </template>
    <template #slot2>
      <div class="w-[60%] relative">
        <input type="text" class="indent-[12%] rounded-[15px] h-[25px] w-[100%]" @focus="handleFocus" placeholder="30年行庆明星理财">
        <img src="../../assets/img/search.svg" class="absolute top-[25%] left-[5%]">
      </div>
    </template>
  </Headers>

  <TabControl>
    <template #tabControlItem>
      <ul class=" flex justify-around items-center text-[#fff]">
        <li v-for="item in tabControlItemList" :key="item.detail" class="flex flex-col justify-center items-center pt-[10px] pb-[10px]">
          <span class="w-[30px] h-[30px] leading-[30px] text-center border-[1px] border-solid border-[#fff] text-[18px] rounded-[50%]">{{ item.main }}</span>
          <span class="text-[12px] mt-[5px] text-[#a6a6a6]">{{ item.detail }}</span>
        </li>
      </ul>
    </template>
  </TabControl>

  <Banner></Banner>

  <!-- 我的关注 -->
  <ContentItem>
    <template #title>我的关注（0）</template>
    <template #bodyItem>
      <div class="w-[345px] h-[68px] flex justify-center items-center border-[1px] border-dashed border-[#bbb]">
        <img src="../../assets/img/rightArrow.svg" class="w-[45px] h-[45px]">
        <span>导入持仓</span>
      </div>
      <div class="text-center mt-[10px]">
        <span class="font-medium">您还没有关注任何产品~</span><br>
        <span class="text-[#969696] text-[14px]">将持仓产品导入关注，可及时跟踪产品涨跌！</span>
      </div>
    </template>
  </ContentItem>

  <!-- 活期投资 -->
  <ContentItem :circleShow="circle">
    <template #title>
      <span class="w-[27px] h-[27px] bg-[#5b6b73] rounded-[50%] mr-[5px]"></span>
      <span>{{ currentInvestmentList.title }}</span>  
    </template>
    <template #bodyItem>
      <div 
        class="flex h-[70px]" 
        v-for="item in currentInvestmentList.list" 
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

  <!-- 短期投资 -->
  <ContentItem :circleShow="circle">
    <template #title>
      <span class="w-[27px] h-[27px] bg-[#5b6b73] rounded-[50%] mr-[5px]"></span>
      <span>{{ shortItemInvestmentList.title }}</span>  
    </template>
    <template #bodyItem>
      <div class="flex h-[70px]" v-for="item in shortItemInvestmentList.list" :key="item.title" @click="productDeatil">
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

  <!-- 长期投资 -->
  <ContentItem :circleShow="circle">
    <template #title>
      <span class="w-[27px] h-[27px] bg-[#5b6b73] rounded-[50%] mr-[5px]"></span>
      <span>{{ longItemInvestmentList.title }}</span>  
    </template>
    <template #bodyItem>
      <div class="flex h-[70px]" v-for="item in longItemInvestmentList.list" :key="item.title" @click="productDeatil">
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
  <ContentItem>
    <template #title>
      <span class="w-[27px] h-[27px] bg-[#5b6b73] rounded-[50%] mr-[5px]"></span>
      <span>理财主题</span>  
    </template>
    <template #bodyItem>
      <div class="flex flex-wrap text-[#fff] justify-around">
        <div class="w-[48%] h-[100px] flex flex-col justify-center items-center mb-[8px] bg-[#640000]">
          <span>优中优选</span>
          <span>10年以上收益长虹基金</span>
        </div>
        <div class="w-[48%] h-[100px] flex flex-col justify-center items-center mb-[8px] bg-[#003e7c]">
          <span>有钱任性</span>
          <span>从定投开始</span>
        </div>
        <div class="w-[48%] h-[100px] flex flex-col justify-center items-center mb-[8px] bg-[#7d7b76]">
          <span>1分钱就能买</span>
          <span>低门槛理财盘点</span>
        </div>
        <div class="w-[48%] h-[100px] flex flex-col justify-center items-center mb-[8px] bg-[#736651]">
          <span>行家投资</span>
          <span>跟着行家买买买</span>
        </div>
      </div>
    </template>
  </ContentItem>

  <!-- 财富体验 -->
  <WealthExperience></WealthExperience>

  <!-- 理财干货 -->
  <ContentItem>
    <template #title>
      <span class="w-[27px] h-[27px] bg-[#5b6b73] rounded-[50%] mr-[5px]"></span>
      <span>理财干货</span>  
    </template>

    <template #bodyItem>
      <div class="relative flex w-[100%]">
        <img src="../../assets/img/licaiganhuo.png" class="h-[133px] w-[100%]" alt="">
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

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Headers from '../Headers.vue';
import TabControl from '../TabControl.vue';
import Banner from '../Banner.vue';
import ContentItem from '../ContentItem.vue';
import WealthExperience from '../financeCpns/WealthExperience.vue';
import ListItem from '../ListItem.vue';
import { fetchShowFinance } from '../../api/Finance';
import { useRouter } from 'vue-router';
import type { tabControlItemType, investmentType } from '../../types/financeType'

const circle = ref<boolean>(true)

const tabControlItemList = ref<tabControlItemType[]>([])
const shortItemInvestmentList = ref<investmentType>({} as investmentType)
const longItemInvestmentList = ref<investmentType>({} as investmentType)
const currentInvestmentList = ref<investmentType>({} as investmentType)


onMounted(async () => {
  const res = await fetchShowFinance()
  tabControlItemList.value = res.tabControlItem
  shortItemInvestmentList.value = res.shortItemInvestment
  longItemInvestmentList.value = res.longItemInvestment
  currentInvestmentList.value = res.currentInvestment
})

const router = useRouter()
const handleFocus = () => {
  router.push('/search')
}

const productDeatil = () => {
  router.push('/productDetail')
}
 
</script>


