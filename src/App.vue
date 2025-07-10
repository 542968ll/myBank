<template>
  <div class="bg-[#efefef]">
    <button @click="toFinancePage">跳转到理财页面</button>
    <button @click="toLifePage">跳转到生活页面</button>
    <!-- <RouterLink to="/financeMain">跳转到理财页面</RouterLink>
    <RouterLink to="/lifeMain">跳转到生活页面</RouterLink> -->
    <RouterView />

  </div>

</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import FinanceMain from './components/Financecpns/FinanceMain.vue';
import LifeMain from './components/Lifecpns/LifeMain.vue';

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