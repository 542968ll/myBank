<template>
  <div 
    class="h-[100%]"
    :class='{
      "bg-[#6d6d6d]": showBG,
      "bg-[#efefef]": !showBG,
      "bg-[#fff]": showBGfff,
      
    }'
  >
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';



const route = useRoute()
console.log(route.path);

const showBG = computed(() => {
  return route.path === '/search'
})

const showBGfff = computed(() => {
  return (route.path === '/' || route.path === '/login')
})



</script>
