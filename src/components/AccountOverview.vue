<template>
  <Headers :detailHeader="detailHeader">
    <template #slot1>
      <div class="flex justify-center items-center" @click="returnHandle">
        <img src="@/assets/img/return.svg" class="w-[35px] h-[35px]" alt="">
      </div>
    </template>
    <template #slot2>
      <span class="w-[60%] text-center" @click="">账户总览</span>
    </template>
  </Headers>


  <Introduction></Introduction>


</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from "vue-router";
import Headers from './Headers.vue';
import Introduction from './financeCpns/Introduction.vue';


const detailHeader = ref<boolean>(true)

const router = useRouter()
const returnHandle = () => {
  router.go(-1)
}


</script>
<style scoped lang="scss">
</style>