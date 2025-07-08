<template>
  <div class="flex justify-around items-center bg-[#3a3a3a] text-[#fff] pt-[10px] pb-[10px]">
    <slot name="slot1"></slot>
    <slot name="slot2"></slot>
    <div class="flex flex-col justify-center items-center relative">
      <img src="../assets/img/message.svg" alt="" class="h-[30px] w-[30px]">
      <span class="absolute top-[0] right-[5%] text-[#fff] w-[auto] rounded-[50%] bg-[#f00]">6</span>
      <span class="text-[12px]">消息</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'

</script>
<style scoped lang="scss">
</style>