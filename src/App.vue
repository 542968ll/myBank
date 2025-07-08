<template>
  <div class="bg-[#efefef]">
    <!-- <button @click="turnFinance()">跳转到理财页面</button>
    <button @click="turnLife()">跳转到生活页面</button> -->

    <!-- <FinanceMain></FinanceMain> -->


    <RouterLink to="/financeMain">跳转到理财页面</RouterLink>
    <RouterLink to="/lifeMain">跳转到生活页面</RouterLink>

    <RouterView />

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import FinanceMain from './components/Financecpns/FinanceMain.vue';
import LifeMain from './components/Lifecpns/LifeMain.vue';

const router = useRouter()


const turnFinance = () => {
  router.push('/financeMain')
}

const turnLife = () => {
  router.push('/lifemain')
}


</script>
<style scoped lang="scss">
</style>