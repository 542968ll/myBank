<template>
  <!-- 导航 -->
  <Headers>
    <template #slot1>
      <div class="flex justify-center items-center">
        <img src="@/assets/img/address.svg" class="w-[30px] h-[30px]">
        <span>杭州</span>
      </div>
    </template>
    <template #slot2>
      <span class="w-[60%] text-center">生活</span>
    </template>
  </Headers>

  <TabControl :bgCol="bgCol"></TabControl>

  <LifeEntertainment></LifeEntertainment>

  <TabControl></TabControl>

  <Banner></Banner>

  <!-- 超实惠 -->
  <ContentItem :flexDir="flexDir">
    <template #title>
      <span>超实惠</span>  
    </template>

    <template #bodyItem>
      <div>
        <div class="flex flex-col mb-[5px]">
          <span class="text-[#767676]">新农哥板栗仁</span>
          <span class="text-[12px] text-[#fd7d87]">甜香软糯</span>
        </div>
        <img src="../../assets/img/banli.png" class="w-[95px] h-[95px]">
      </div>

      <div>
        <div class="flex flex-col mb-[5px]">
            <span class="text-[#767676]">威露士居家超</span>
            <span class="text-[12px] text-[#fd7d87]">成分温和 超值体</span>
          </div>
          <img src="../../assets/img/banli.png" class="w-[95px] h-[95px]">
      </div>

      <div>
        <div class="flex flex-col mb-[5px]">
          <span class="text-[#767676]">可娜斯花露水</span>
          <span class="text-[12px] text-[#fd7d87]">温和不刺激</span>
        </div>
        <img src="../../assets/img/banli.png" class="w-[95px] h-[95px]">
      </div>


    </template>
  </ContentItem>


  <!-- 生活特惠 -->
  <ContentItem :superCheap="superCheap">
    <template #title>
      <span>生活特惠</span>
    </template>

    <template #bodyItem>
      <div class="flex flex-col w-[100%] justify-center items-center bg-[#e5ebdf] text-[#5ea534] pt-[10px] pb-[10px]">
        <span class="text-[23px]">新下载用户专享</span>
        <span>商场10元无门槛现金券</span>
        <span>用券<span class="text-[23px]">9.9包邮</span></span>
      </div>
      <div class="text-[#5ea534] flex w-[100%] justify-between items-center">
        <div class="bg-[#e5ebdf] flex flex-col h-[90px] items-center justify-center mt-[5px] w-[30%]">
          <span>邀请好友</span>
          <span>赢爱奇艺会员</span>
        </div>
        <div class="bg-[#e5ebdf] flex flex-col h-[90px] items-center justify-center mt-[5px] w-[30%]">
          <span>屈臣氏</span>
          <span>满200减30</span>
        </div>
        <div class="bg-[#e5ebdf] flex flex-col h-[90px] items-center justify-center mt-[5px] w-[30%]">
          <span>芒果</span>
          <span>1元抢会员</span>
        </div>

      </div>
    </template>
  </ContentItem>


  <!-- 酒店出游特惠 -->
  <ContentItem :superCheap="superCheap">
    <template #title>
      <span>酒店出游</span>
    </template>

    <template #bodyItem>
      <div class="flex flex-col w-[90%] bg-[#8678af] text-[#fff] p-[5%]">
        <span class="text-[25px]">品质春游</span>
        <span class="text-[13px]">热门度假酒店</span>
        <p class="mt-[10px]"><span class="text-[25px]">7</span><span>折促销</span></p>
      </div>
      <div class="flex w-[100%] justify-between items-center">
        <div class="bg-[#c1d8e9] flex flex-col h-[90px] items-center justify-center mt-[5px] w-[30%]">
          <span class="text-[13px]">爆款酒店</span>
          <span class="text-[#7d7d7d] text-[11px]">每周一上新</span>
        </div>
        <div class="bg-[#c1d8e9] flex flex-col h-[90px] items-center justify-center mt-[5px] w-[30%]">
          <span class="text-[13px]">试睡中心</span>
          <span class="text-[#7d7d7d] text-[11px]">399元体验</span>
        </div>
        <div class="bg-[#c1d8e9] flex flex-col h-[90px] items-center justify-center mt-[5px] w-[30%]">
          <span class="text-[13px]">全球WIFI</span>
          <span class="text-[#7d7d7d] text-[11px]">11元/天起</span>
        </div>

      </div>
    </template>


  </ContentItem>


  <!-- 为您推荐 -->
  <ContentItem :superCheap="superCheap">
    <template #title>
      <span>为你推荐</span>
    </template>

    <template #bodyItem>
      <ListItem :lifeItem="lifeItem"></ListItem>
      <ListItem :lifeItem="lifeItem"></ListItem>
      <ListItem :lifeItem="lifeItem"></ListItem>
    </template>
  </ContentItem>

</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'
import Headers from '../Headers.vue';
import TabControl from '../TabControl.vue';
import LifeEntertainment from './LifeEntertainment.vue';
import Banner from '../Banner.vue';
import ContentItem from '../ContentItem.vue';
import ListItem from '../ListItem.vue';

const bgCol = ref<boolean>(true)
const flexDir = ref<boolean>(true)
const superCheap = ref<boolean>(true)
const lifeItem = ref<boolean>(true)

</script>
<style scoped lang="scss">
</style>