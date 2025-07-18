<template>
  <!-- 头部 -->
  <Headers :setting="setting">
    <template #slot1>
      <div class="flex flex-col justify-center items-center ml-[10px]" @click="returnMyMain">
        <img src="@/assets/img/leftReturn.svg" alt="" class="h-[30px] w-[30px]">
      </div>
    </template>
    <template #slot2>
      <div class="flex-1 justify-center flex">
        <span>设置</span>
      </div>
    </template>
  </Headers>

  <ProductItem>
    <template #title>
      <span>个人信息</span>
    </template>
  </ProductItem>
  <ProductItem :mt="mt">
    <template #title>
      安全设置
    </template>
  </ProductItem>
  <ProductItem>
    <template #title>
      通知
    </template>
  </ProductItem>
  <ProductItem :mt="mt">
    <template #title>
      反馈建议
    </template>
  </ProductItem>
  <ProductItem>
    <template #title>
      关于
    </template>
  </ProductItem>

  <div class="mt-[10px] flex justify-center items-center" >
    <span class="w-[300px] h-[45px] bg-[#0074d9]  rounded-[10px] text-[#fff] leading-[45px] text-center" @click="exit">安全退出</span>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import Headers from './Headers.vue';
import ProductItem from './ProductItem.vue';


const setting = ref<boolean>(true)
const mt = ref<boolean>(true)


const router = useRouter()
const returnMyMain = () => {
  router.go(-1)
}

const exit = () => {
  localStorage.removeItem('token')
  router.push('/login')
}


</script>
<style scoped lang="scss">
</style>