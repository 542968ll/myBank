<template>
  <div 
    class="bg-[#efefef]"
    
  >
    <button @click="toFinancePage">跳转到理财页面</button>
    <button @click="toLifePage">跳转到生活页面</button>
    <RouterView />

  </div>

</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// const showBgColor = ref<boolean>(false)

const route = useRoute()
console.log(route.path);

const showBG = computed(() => {
  return route.path === '/search'
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