<template>
  <div 
    class="flex p-[10px] h-[30px] justify-between items-center bg-[#fff]" 
    :class="{'mt-[10px]': mt}"
  >
    <span>产品公告</span>
    <img src="@/assets/img/youjiantou.svg" class="h-[30px] w-[30px]">
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'
defineProps({
  mt: {
    type: Boolean,
    default: false
  }
})

</script>
<style scoped lang="scss">
</style>