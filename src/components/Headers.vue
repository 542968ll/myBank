<template>
  <div class="flex justify-around items-center bg-[#3a3a3a] text-[#fff] pt-[10px] pb-[10px]">
    <slot name="slot1"></slot>
    <slot name="slot2"></slot>
    <div class="flex flex-col justify-center items-center relative">
      <img v-if="!detailHeader" src="../assets/img/message.svg" alt="" class="h-[30px] w-[30px]">
      <img v-else src="../assets/img/more.svg" alt="" class="h-[45px] w-[45px]">
      <span class="absolute top-[0] right-[5%] text-[#f00] w-[auto] rounded-[50%] bg-[#fff]">6</span>
      <span v-if="!detailHeader" class="text-[12px]">消息</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'
defineProps({
  detailHeader: {
    type: Boolean,
    default: false
  }
})

</script>
<style scoped lang="scss">
</style>