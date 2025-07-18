<template>
  <div class="bg-[#fff] mt-[10px]">
    <ul class="flex flex-wrap">
      <li v-for="item in LifeEntertainmentList" :key="item.title" class="w-[45%] flex justify-around items-center mt-[10px] mb-[10px] pr-[5px] pl-[5px]">
        <div class="flex flex-col">
          <span
            :style="{color: item.textColor}"
          >{{ item.title}}</span>
          <span class="text-[12px] text-[#a3a3a3]">{{item.description}}</span>
        </div>
        <img :src="getImg(item.imgUrl)" class="w-[60px] h-[60px] rounded-[50%]" alt="">
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import type { PropType } from 'vue'
import type { LifeEntertainmentType } from '../../types/lifeType'
const props = defineProps({
  LifeEntertainmentList: {
    type: Array as PropType<LifeEntertainmentType[]>,
    default: []
  }
})
const { LifeEntertainmentList } = props

const getImg = (img: string) => {
 return new URL(img, import.meta.url).href
}


</script>
