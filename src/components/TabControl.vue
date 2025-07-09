<template>
  <div
    :class="{
      'bg-[#3a3a3a]': !bgCol, 
      'bg-[#fff]': bgCol,
      'mt-[10px]': mt
    }"
  >
    <slot name="tabControlItem"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'
const props = defineProps({
  bgCol: {
    type: Boolean,
    default: false
  },
  mt: {
    type: Boolean,
    default: false
  }
})
const { bgCol } = props
</script>
<style scoped lang="scss">
</style>