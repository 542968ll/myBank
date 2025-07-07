<template>
  <div class="mb-[15px]">
    <div class="flex justify-between p-[10px]">
      <div class="flex-[1]" :class="circleShow ? 'flex' : ''">
        <slot name="title"></slot>
      </div>
      <img src="../assets/img/arrow.svg" alt="">
    </div>
    <div class="flex flex-col justify-center items-center p-[10px]">
      <slot name="bodyItem"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'
const props = defineProps({
  circleShow: {
    type: Object,
    default: false
  }
})
const { circleShow } = props
console.log("aaaaaa", circleShow);

</script>
<style scoped lang="scss">
</style>