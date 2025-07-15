<template>
  <div 
    class="h-[100%]"
    :class='{
      "bg-[#6d6d6d]": showBG,
      "bg-[#efefef]": !showBG,
      "bg-[#fff]": showBGfff
    }'
  >
    <!-- <button @click="toFinancePage">跳转到理财页面</button>
    <button @click="toLifePage">跳转到生活页面</button> -->
    <router-view :key="$route.fullPath"></router-view>
  </div>

  <!-- <Login></Login> -->



</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Login from './components/Login.vue';


const route = useRoute()
console.log(route.path);

const showBG = computed(() => {
  return route.path === '/search'
})

const showBGfff = computed(() => {
  return (route.path === '/' || route.path === '/login')
})

const router = useRouter()
const toFinancePage = () => {
  router.push('/financeMain')
}

const toLifePage = () => {
  router.push('/lifeMain')
}


</script>
<style scoped lang="scss">
</style>