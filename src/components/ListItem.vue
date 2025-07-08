<template>
  <div class="flex mt-[10px] items-center">
    <img src="@/assets/img/car.png" 
      class="h-[68px] w-[110px] mr-[10px]"
      :class="lifeItem ? {} : {}"
    >
    <div class="flex flex-col text-[#6a6a6a]">
      <span>从小白到达人，理财如何赚更多？</span>
      <div>
      <span class="mr-[10px] text-[14px]">招财</span>
      <span class="text-[14px]">2小时前</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'
defineProps({
  lifeItem: {
    type: Boolean,
    default: false
  }
})


</script>
<style scoped lang="scss">
</style>