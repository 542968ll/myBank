<template>
  <div class="h-[160px] flex p-[15px] flex-col bg-[#fff] mt-[10px]">
    <slot name="accoumtItemTitle"></slot>
    
    <div class="flex flex-col ml-[60px] ">
      <slot name="accountItemContent"></slot>
    </div>
    <slot name="accountItemBottom"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'

</script>
<style scoped lang="scss">
</style>