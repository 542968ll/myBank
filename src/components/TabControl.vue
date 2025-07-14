<template>
  <div
    :class="{
      'bg-[#3a3a3a]': !bgCol, 
      'bg-[#fff]': bgCol,
      'mt-[10px]': mt,
      'flex': searchStyle,
      'justify-around': searchStyle,
      'items-center':searchStyle,
      'relative': searchStyle
    }"
  >
    <slot name="tabControlItem"></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  bgCol: {
    type: Boolean,
    default: false
  },
  mt: {
    type: Boolean,
    default: false
  },
  searchStyle: {
    type: Boolean,
    default: false
  }
})


const { bgCol, searchStyle } = props
</script>
