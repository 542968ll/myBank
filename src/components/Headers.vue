<template>
  <div 
    class="flex justify-around items-center bg-[#3a3a3a] text-[#fff] pt-[10px] pb-[10px]"
    :class="{
      'bg-[#3a3a3a]': !myBG,
      'bg-[#cf0000]': myBG,
    }"
  >
    <slot name="slot1"></slot>
    <slot name="slot2"></slot>
    <div class="flex flex-col justify-center items-center relative z-1">
      <img v-if="!detailHeader" src="../assets/img/message.svg" alt="" class="h-[30px] w-[30px]">
      <img v-else src="../assets/img/more.svg" alt="" class="h-[45px] w-[45px]">
      <span v-if="!messageCount" class="absolute top-[0] right-[5%] text-[#f00] w-[auto] rounded-[50%] bg-[#fff]">6</span>
      <span v-if="!detailHeader" class="text-[12px]" @click="messageHandle">消息</span>
    </div>
  </div>
  <img v-if="homeBG" src="@/assets/img/homeBanner.png" alt="" class="top-[0] left-[0] h-[auto] w-[100%] mt-[-66px]">
  <div v-if="myBG" class="w-[100%] h-[88px] bg-[#cf0000] flex justify-between items-center text-[#fff]">
    <div class="flex ml-[15px]">
      <img src="@/assets/img/xiancai.jpg" alt="" class="w-[45px] h-[45px] mr-[15px] rounded-[50%]">
      <div class="flex flex-col">
        <span>尊敬的客人，您好</span>
        <span class="text-[12px]">欢迎您，晚上好</span>
      </div>
    </div>
    <div class="mr-[15px]">设置</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
defineProps({
  detailHeader: {
    type: Boolean,
    default: false
  },
  messageCount: {
    type: Boolean,
    default: false
  },
  homeBG: {
    type: Boolean,
    default: false
  },
  myBG: {
    type: Boolean,
    default: false
  }
})

const router = useRouter()
const messageHandle = () => {
  router.push('/message')
}

</script>
