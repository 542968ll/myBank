<template>
  <div 
    class="flex p-[10px] h-[30px] justify-between items-center bg-[#fff] border-b-[1px] border-b-[#f0f0f2]" 
    :class="{'mt-[10px]': mt}"
  >
    <slot name="title"></slot>
    <img v-if="!showRightArrow" src="@/assets/img/youjiantou.svg" class="h-[30px] w-[30px]" alt="">
    <span v-else class="text-[#5b6b73]">{{ time }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  mt: {
    type: Boolean,
    default: false
  },
  showRightArrow: {
    type: Boolean,
    default: false
  },
  time: {
    type: String,
    default: ''
  }
})

</script>
