<template>
  <div>
    <ul class="flex flex-wrap justify-center items-center">
      <li v-for="item in homeBottomContentList" :key="item.title" class="w-[170px] h-[125px] flex flex-col justify-center items-center mr-[5px]">
        <img :src="getImg(item.imgUrl)" alt="" class="w-[100%] h-[90px]">
        <div class="flex w-[100%] justify-around mt-[5px]">
          <span class="text-[15px] text-[#33AEF6]">{{ item.title }}</span>
          <span class="text-[13px] text-[#6c6c6c]">{{ item.description }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type { homeBottomContentListType } from '../../types/homeType'
defineProps({
  homeBottomContentList: {
    type: Array as PropType<homeBottomContentListType[]>,
    default: []
  }
})

const getImg = (img: string) => {
 return new URL(img, import.meta.url).href
}

</script>
<style scoped lang="scss">
</style>