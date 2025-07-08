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
        <input type="text" class="rounded-[15px] h-[25px] w-[100%]">
        <img src="../../assets/img/search.svg" alt="" class="absolute top-[25%] left-[5%]">
      </div>
    </template>
  </Headers>
  <TabControl></TabControl>
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
      <span>活期投资</span>  
    </template>
    <template #bodyItem>
      <div class="flex h-[88px]">
        <div class="flex flex-col justify-center items-center text-[#FC505F] text-[18px] w-[100px]">
          <span>3.27%</span>
          <span>上期年化</span>
        </div>
        <div class="flex flex-col w-[245px] justify-center ml-[10px]">
          <span>日益月鑫7天</span>
          <span class="text-[14px] text-[#999]">招行明星产品 5万起购 到期资金自动到账</span>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col justify-center items-center text-[#FC505F] text-[18px] w-[100px]">
          <span>4.13%</span>
          <span>近1年年化</span>
        </div>
        <div class="flex flex-col w-[245px] justify-center ml-[10px]">
          <span>天添金稳健型</span>
          <span class="text-[14px] text-[#999]">招行净值类明星理财 探索更高收益</span>
        </div>
      </div>
    </template>
  </ContentItem>

  <!-- 短期投资 -->
  <ContentItem :circleShow="circle">
    <template #title>
      <span class="w-[27px] h-[27px] bg-[#5b6b73] rounded-[50%] mr-[5px]"></span>
      <span>短期投资</span>  
    </template>
    <template #bodyItem>
      <div class="flex h-[88px]">
        <div class="flex flex-col justify-center items-center text-[#FC505F] text-[18px] w-[100px]">
          <span>4.18%</span>
          <span>上期年化</span>
        </div>
        <div class="flex flex-col w-[245px] justify-center ml-[10px]">
          <span>日益月鑫90天</span>
          <span class="text-[14px] text-[#999]">招行明星产品 5万起购 到期资金自动到账</span>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col justify-center items-center text-[#FC505F] text-[18px] w-[100px]">
          <span>4.08%</span>
          <span>上期年化</span>
        </div>
        <div class="flex flex-col w-[245px] justify-center ml-[10px]">
          <span>日益月鑫60天</span>
          <span class="text-[14px] text-[#999]">招行净值类明星理财 探索更高收益</span>
        </div>
      </div>
    </template>
  </ContentItem>

  <!-- 长期投资 -->
  <ContentItem :circleShow="circle">
    <template #title>
      <span class="w-[27px] h-[27px] bg-[#5b6b73] rounded-[50%] mr-[5px]"></span>
      <span>长期投资</span>  
    </template>
    <template #bodyItem>
      <div class="flex h-[88px]">
        <div class="flex flex-col justify-center items-center text-[#FC505F] text-[18px] w-[100px]">
          <span>22.98%</span>
          <span>近1年收益</span>
        </div>
        <div class="flex flex-col w-[245px] justify-center ml-[10px]">
          <span>创金沪港深</span>
          <span class="text-[14px] text-[#999]">金牛基金经理管理 积极参与打新</span>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col justify-center items-center text-[#FC505F] text-[18px] w-[100px]">
          <span>3.62%</span>
          <span>近1年收益</span>
        </div>
        <div class="flex flex-col w-[245px] justify-center ml-[10px]">
          <span>大摩强债基金</span>
          <span class="text-[14px] text-[#999]">一级债基 回撤控制好 反弹弹性足</span>
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
        <img src="../../assets/img/licaiganhuo.png" class="h-[133px] w-[100%]">
        <span class="absolute bottom-[0] w-[100%] bg-[#101010] text-[#fff] text-[14px] h-[30px] leading-[30px]">公积金“闲着也是闲着”，能取出来理财吗</span>
      </div>
      <ListItem></ListItem>
      <ListItem></ListItem>
      <ListItem></ListItem>
    </template>


  </ContentItem>

</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'
import Headers from '../Headers.vue';
import TabControl from '../TabControl.vue';
import Banner from '../Banner.vue';
import ContentItem from '../ContentItem.vue';
import WealthExperience from './WealthExperience.vue';
import ListItem from '../ListItem.vue';

const circle = ref<boolean>(true)



</script>
<style scoped lang="scss">
</style>