<template>
  <div class="mb-[15px] bg-[#fff]">
    <div class="flex justify-between p-[10px]">
      <div class="flex-[1]" :class="circleShow ? 'flex' : ''">
        <slot name="title"></slot>
      </div>
      <img src="../assets/img/arrow.svg" :class="superCheap ? 'hidden' : ''">
    </div>
    <div class="flex items-center p-[10px]" 
      :class="{'flex-row': flexDir, 'flex-col': !flexDir, 'justify-center': !flexDir, 'justify-around': flexDir }"
      >
      <slot name="bodyItem"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'
const props = defineProps({
  circleShow: {
    type: Boolean,
    default: false
  },
  flexDir: {
    type: Boolean,
    default: false
  },
  superCheap: {
    type: Boolean,
    default: false
  }
})
const { circleShow } = props
console.log("aaaaaa", circleShow);

</script>
<style scoped lang="scss">
</style>