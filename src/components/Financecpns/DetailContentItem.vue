<template>
  <div class="p-[10px] bg-[#fff] mt-[10px]">
    <slot name="title"></slot>
    <slot name="content"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'
defineProps({
  redemption: {
    type: Boolean,
    default: false
  },
  riskStyle: {
    type: Boolean,
    default: false
  }
})
</script>
<style scoped lang="scss">
</style>