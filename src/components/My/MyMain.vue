<template>
  <!-- 头部 -->
  <Headers :myBG="myBG">
    <template #slot1>
      <div class=" flex flex-col justify-center items-center w-[30px]">
        <span class="text-[12px]">安全退出</span>
      </div>
    </template>
    <template #slot2>
      <div class="w-[60%] relative">
        <input type="text" class="indent-[12%] rounded-[15px] h-[25px] w-[100%] bg-[rgba(255,255,255,.6)] border-[0]" @focus="handleFocus" placeholder="30年行庆明星理财">
        <img src="@/assets/img/search.svg" class="absolute top-[25%] left-[5%]" alt="">
      </div>
    </template>
  </Headers>

  <!-- 选项 -->
  <div class="h-[44px] bg-[#fff]">
    <ul class="flex justify-around items-center">
      <li class="w-[120px] h-[44px] flex justify-center items-center">
        <img src="@/assets/img/note.png" alt="" class="w-[30px] h-[30px] mr-[5px]">
        <span>银行卡</span>
      </li>
      <li class="w-[120px] h-[44px] flex justify-center items-center">
        <img src="@/assets/img/note.png" alt="" class="w-[30px] h-[30px] mr-[5px]">
        <span>日历</span>
      </li>
      <li class="w-[120px] h-[44px] flex justify-center items-center">
        <img src="@/assets/img/note.png" alt="" class="w-[30px] h-[30px] mr-[5px]">
        <span>票券</span>
      </li>
    </ul>
  </div>

  <!-- TabControl -->
  <TabControl :myBG="myBG">
    <template #tabControlItem>
      <ul class=" flex justify-around items-center">
        <li v-for="item in tabControlItemList" :key="item.detail" class="flex flex-col justify-center items-center pt-[10px] pb-[10px]">
          <span 
            class="w-[30px] h-[30px] leading-[30px] text-center border-[1px] border-solid text-[18px] rounded-[50%]"
            :style="{borderColor: item.textColor, color: item.textColor}"  
          >{{ item.main }}</span>
          <span class="text-[12px] mt-[5px] text-[#a6a6a6]">{{ item.detail }}</span>
        </li>
      </ul>
    </template>
  </TabControl>

  <!-- 账户总览 || 收支记录 || 个人消费信用卡 -->
  <AccountItem>
    <template #accoumtItemTitle>
      <div class="mb-[15px]">账户总览</div>
    </template>
    <template #accountItemContent>
      <div class="mb-[10px]">
        <span class="text-[14px] mr-[16px]">总 资 产</span>
        <span class="text-[23px]">￥10,000,000.00</span>
      </div>
      <div class="mb-[10px]">
        <span class="text-[14px] mr-[12px]">昨日收益</span>
        <span class="text-[18px] text-[#0074d9]">￥0.00</span>
      </div>
    </template>
    <template #accountItemBottom>
      <div class="text-[12px] text-center mt-[15px]">谈钱很俗,但我就想帮你多赚点</div>
    </template>
  </AccountItem>

  <!-- 第三行家动态 -->
  <div class="flex h-[45px] bg-[#fff] mt-[10px] justify-around items-center">
    <div class="w-[30px] h-[30px] bg-[#5b6b73] rounded-[50%] mr-[10px]"></div>
    <div>第三期行家动态：轻仓静待抄底时机。</div>
    <img src="../../assets/img/arrow.svg" alt="" class="w-[25px] h-[25px]">
  </div>

  <!-- 收支记录 -->
  <AccountItem>
    <template #accoumtItemTitle>
      <div class="mb-[15px]">收支记录</div>
    </template>
    <template #accountItemContent>
      <div class="mb-[10px]">
        <span class="text-[14px] mr-[16px]">本月收入</span>
        <span class="text-[23px]">
          <span>￥50,000.00</span>
          <span></span>
        </span>
      </div>
      <div class="mb-[10px]">
        <span class="text-[14px] mr-[12px]">本月支出</span>
        <span class="text-[18px] text-[#0074d9]">
          <span>￥5,654.16</span>
          <span></span>
        </span>
      </div>
    </template>
    <template #accountItemBottom>
      <div class="text-[12px] text-center mt-[15px]">活期余额 ￥10,000,000.00</div>
    </template>
  </AccountItem>

  <!-- 个人消费信用卡 -->
  <AccountItem>
    <template #accoumtItemTitle>
      <div class="mb-[15px]">个人消费信用卡</div>
    </template>
    <template #accountItemContent>
      <div class="mb-[10px]">
        <span class="text-[14px] mr-[16px]">剩余应还</span>
        <span class="text-[23px]">
          <span>￥0.00</span>
          <span></span>
        </span>
      </div>
    </template>
    <template #accountItemBottom>
      <div class="text-[12px] text-center mt-[15px]">
        <span>还款日</span>
        <span>05-07</span>
        <span>当前可用额度</span>
        <span>99,225.66</span>
      </div>
    </template>
  </AccountItem>



</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'
import Headers from '../Headers.vue';
import TabControl from '../TabControl.vue';
import AccountItem from '../AccountItem.vue';

const myBG = ref<boolean>(true)

const tabControlItemList = [{
  main: '高',
  detail: '高端权益',
  textColor: '#eeab3c'
}, {
  main: '账',
  detail: '账户',
  textColor: '#4ab1ad'
}, {
  main: '交',
  detail: '交易查询',
  textColor: '#84b773'
}, {
  main: '收',
  detail: '收支',
  textColor: '#5795c1'
}, {
  main: '全',
  detail: '全部',
  textColor: '#5795c1'
}]

</script>
<style scoped lang="scss">
</style>