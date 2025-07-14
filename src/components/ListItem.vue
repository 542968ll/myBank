<template>
  <div class="flex mt-[10px] items-center w-[100%]">
    <slot name="itemImg"></slot>
    <div class="flex flex-col text-[#6a6a6a]" 
      :class="{'h-[100px]': lifeItem, 'justify-between': lifeItem}">
      <slot name="itemContent"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  lifeItem: {
    type: Boolean,
    default: false
  }
})


</script>
