<template>
  <div class="mt-[10px] h-[140px] flex flex-col justify-between p-[10px] bg-[#fff]">
    <div class="h-[25px] leading-[25px]">理财周期</div>
    <div class="flex justify-around flex-1">
      <div v-for="item in financialCycle" :key="item.title" class="flex flex-col items-center justify-around text-[12px] text-[#929292]">
        <span class="w-[30px] h-[30px] rounded-[50%] bg-[#5b6b73]"></span>
        <span>{{ item.title }}</span>
        <span>{{ item.time }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import type { PropType } from 'vue'
import type { financialCycleType } from '../../types/detail'
defineProps({
  financialCycle: {
    type: Array as PropType<financialCycleType[]>,
    default: []
  }
})
</script>
