<template>
  <!-- 财富体验 -->
  <div class="bg-[#fff] mb-[15px] p-[10px] flex justify-between items-center">
    <div class="flex flex-col justify-center items-center p-[5px]">
      <img src="../../assets/img/heartbreak.svg" class="w-[45px] h-[45px]">
      <span class="text-[#5b6b73] text-[14px]">财富体验</span>
    </div>
    <div class="flex flex-col flex-1 p-[5px]">
      <div class="p-[5px]">
        <template v-for="item in 5" :key="item">
          <img src="../../assets/img/star.svg" class="w-[20px] h-[20px]">
        </template>
      </div>
      <span class="text-[#929292] text-[14px]">全国健康指数1颗星</span>
      <span class="text-[#929292] text-[14px]">2306036人参加</span>
    </div>
    <div class="p-[5px] h-[25px] leading-[25px] border-[1px] border-solid border-[#4395eb] text-[14px] text-[#4395eb]">立即体验</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'

</script>
<style scoped lang="scss">
</style>