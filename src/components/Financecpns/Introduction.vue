<template>
  <div class="bg-[#414141] text-[#fff] flex flex-col justify-around items-center h-[170px]">
    <div class="text-[14px]">{{ detailData.title }}</div>

    <div class="flex flex-col">
      <span class="text-[24px]">{{ detailData.percentage }} <span class="text-[12px]">%</span></span>
      <span>{{ detailData.time }}</span>
    </div>

    <div class="flex w-[100%] justify-around">
      <div class="flex flex-col justify-center items-center">
        <span class="text-[15px]">{{ detailData.horizon }}</span>
        <span class="text-[#696969]">投资期限</span>
      </div>
      <div class="border-r-[10px] border-r-[#fff] h-[35px]"></div>
      <div class="flex flex-col justify-center items-center">
        <span class="text-[15px]">{{ detailData.minimum }}</span>
        <span class="text-[#696969]">起购金额</span>
      </div>
      <div class="border-r-[10px] border-r-[#fff] h-[35px]"></div>
      <div class="flex flex-col justify-center items-center">
        <span class="text-[15px]">{{ detailData.buyers }}</span>
        <span class="text-[#696969]">购买人数</span>
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { detailData } from "../../types/detail"
defineProps({
  detailData: {
    type: Object as PropType<detailData>,
    default: {}
  }
})

</script>
