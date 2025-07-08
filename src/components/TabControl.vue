<template>
  <!--  :class="bgCol ? 'bg-[#fff]' : ''" -->
  <div class="bg-[#3a3a3a] text-[#fff]">
    <ul class=" flex justify-around items-center">
      <li class="flex flex-col justify-center items-center pt-[10px] pb-[10px]">
        <span class="w-[30px] h-[30px] leading-[30px] text-center border-[1px] border-solid border-[#fff] text-[18px] rounded-[50%]">理</span>
        <span class="text-[12px] mt-[5px]">理财产品</span>
      </li>
      <li class=" flex flex-col justify-center items-center pt-[10px] pb-[10px]">
        <span class="w-[30px] h-[30px] leading-[30px] text-center border-[1px] border-solid border-[#fff] text-[18px] rounded-[50%]">基</span>
        <span class="text-[12px] mt-[5px]">基金</span>
      </li>
      <li class="flex flex-col justify-center items-center pt-[10px] pb-[10px]">
        <span class="w-[30px] h-[30px] leading-[30px] text-center border-[1px] border-solid border-[#fff] text-[18px] rounded-[50%]">证</span>
        <span class="text-[12px] mt-[5px]">证券交易</span>
      </li>
      <li class="flex flex-col justify-center items-center pt-[10px] pb-[10px]">
        <span class="w-[30px] h-[30px] leading-[30px] text-center border-[1px] border-solid border-[#fff] text-[18px] rounded-[50%]">贵</span>
        <span class="text-[12px] mt-[5px]">贵金属</span>
      </li>
      <li class=" flex flex-col justify-center items-center pt-[10px] pb-[10px]">
        <span class="w-[30px] h-[30px] leading-[30px] text-center border-[1px] border-solid border-[#fff] text-[18px] rounded-[50%]">全</span>
        <span class="text-[12px] mt-[5px]">全部</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'
const props = defineProps({
  bgCol: {
    type: Boolean,
    default: false
  }
})
const { bgCol } = props
</script>
<style scoped lang="scss">
</style>