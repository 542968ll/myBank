<template>
  <div class="mt-[10px] h-[140px] flex flex-col justify-between p-[10px] bg-[#fff]">
    <div class="h-[25px] leading-[25px]">理财周期</div>
    <div class="flex justify-around flex-1">
      <div class="flex flex-col items-center justify-around text-[12px] text-[#929292]">
        <span class="w-[30px] h-[30px] rounded-[50%] bg-[#5b6b73]"></span>
        <span>今日购买</span>
        <span>04-28</span>
      </div>
      <div class="flex flex-col items-center justify-around text-[12px] text-[#929292]">
        <span class="w-[30px] h-[30px] rounded-[50%] bg-[#5b6b73]"></span>
        <span>产品起息</span>
        <span>2017-05-02</span>
      </div>
      <div class="flex flex-col items-center justify-around text-[12px] text-[#929292]">
        <span class="w-[30px] h-[30px] rounded-[50%] bg-[#5b6b73]"></span>
        <span>产品到期</span>
        <span>2017-07-03</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'

</script>
<style scoped lang="scss">
</style>