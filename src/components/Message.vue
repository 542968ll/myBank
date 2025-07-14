<template>
  <!-- 顶部 -->
  <div>
    <div class="h-[70px] flex justify-between items-center bg-[#fff]">
      <img src="../assets/img/leftReturn.svg" alt="" class="w-[45px] h-[45px]" @click="returnHandle">
      <div>消息</div>
      <img src="../assets/img/more.svg" alt="" class="w-[45px] h-[45px]">
    </div>
  </div>

  <!-- 中间内容 -->
  <ProductItem :mt="mt">
    <template #title>
      <div class="flex justify-center items-center">
        <img src="../assets/img/letter.svg" alt="" class="w-[36px] h-[36px] mr-[10px]">
        <span class="text-[12px] text-[#5b6b73]">我的客服</span>
      </div>
    </template>
  </ProductItem>
  <ProductItem :showRightArrow="showRightArrow" :time="time">
    <template #title>
      <div class="flex justify-center items-center">
        <img src="../assets/img/zhangben.svg" alt="" class="w-[36px] h-[36px] mr-[10px]">
        <div class="flex flex-col text-[12px] text-[#5b6b73]">
          <span>动账通知</span>
          <span>直付通/快捷支付扣款通知</span>
        </div>
      </div>
    </template>
  </ProductItem>

</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import ProductItem from './financeCpns/ProductItem.vue';

const mt = ref<boolean>(true)
const showRightArrow = ref<boolean>(true)
const time = ref<string>('昨天')

const router = useRouter()
const returnHandle = () => {
  router.go(-1)
}

</script>
<style scoped lang="scss">
</style>