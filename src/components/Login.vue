<template>
  <div class="h-[100%] flex flex-col justify-center items-center">
    <img src="../assets/img/zhaoshangyinhang.svg" alt="" class="w-[146px] h-[47px] m-[20px 0]">
    <div>
      <span class="mr-[12px]">一网通用户</span>
      <span>188****5515</span>
    </div>
    <div class="flex flex-col justify-center items-center mt-[10px]">
      <img src="../assets/img/zhiwen.svg" alt="" class="w-[70px] h-[70px] mb-[10px]">
      <span class="mb-[10px]">点击进行指纹登录</span>
      <span @click="moreHandle">更多</span>
      <!-- 底部弹出 -->
      <van-popup
        v-model:show="showBottom"
        position="bottom"
        :style="{ height: '38%', 'background-color': '#898989' }"
      >
        <div>
          <div class="rounded-t-[10px] h-[60px] text-[#0047D4] text-[21px] text-center leading-[60px] bg-[#fff]">手势登录</div>
          <div @click="passwordLogin" class="h-[60px] text-[#0047D4] text-[21px] text-center leading-[60px] bg-[#fff]">密码登录</div>
          <div class="rounded-b-[10px] h-[60px] text-[#0047D4] text-[21px] text-center leading-[60px] bg-[#fff] mb-[10px]">切换账号</div>
        </div>
        <div @click="cancelHandle" class="rounded-[10px] h-[60px] text-[#0047D4] text-[21px] text-center leading-[60px] bg-[#fff]">取消</div>
      </van-popup>
    </div>
    <Toast v-if="showToast" @changeShowToast="changeHandle"></Toast>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Toast from './Toast.vue'


const showBottom = ref<boolean>(false)
const showToast = ref<boolean>(false)

const moreHandle = () => {
  showBottom.value = !showBottom.value
}

const cancelHandle = () => {
  showBottom.value = false
}

const passwordLogin = () => {
  showToast.value = true
  showBottom.value = false
}

const changeHandle = (e: boolean) => {
  showToast.value = e
}


</script>



<style scoped>
:deep(--van-popup-background) {
  background-color: '#898989'
}
</style>