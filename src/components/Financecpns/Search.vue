<template>
  <TabControl :searchStyle="searchStyle">
    <template #tabControlItem>
      <input type="text" class="w-[75%] mt-[10px] mb-[10px] h-[30px] rounded-[20px]">
      <span class="text-[#fff]" @click="cancelHandle">取消</span>
      <van-dropdown-menu 
        :overlay="false"
        class="absolute top-[0] left-[5%]">
        <van-dropdown-item
          v-model="value1" 
          :options="option1"
          @change="valueChange"
        />
      </van-dropdown-menu>
    </template>
  </TabControl>

  <!-- 历史搜索 -->
  <SearchContent v-if="showSearch">
    <template #title>
      <div class="flex justify-between items-center">
        <span>{{ historySearchList.title }}</span>
        <img src="../../assets/img/shanchu.svg" alt="" class="w-[30px] h-[30px]">
      </div>
    </template>
    <template #content>
      <ul class="flex flex-wrap">
        <li v-for="item in historySearchList.list" :key="item" class="border-[1px] border-solid border-[#fff] p-[5px] mr-[10px] rounded-[5px] mb-[10px]">
          {{ item }}
        </li>
      </ul>
    </template>
  </SearchContent>

  <!-- 热门搜索 -->
  <SearchContent v-if="showSearch">
    <template #title>
      <span>{{ hotSearchList.title }}</span>
    </template>
    <template #content>
      <ul class="flex flex-wrap">
        <li v-for="item in hotSearchList.list" :key="item" class="relative border-[1px] border-solid border-[#fff] p-[5px] mr-[10px] rounded-[5px] mb-[10px]">
          <span>{{ item }}</span>
          <div class="absolute top-[1px] left-[1px] h-[0px] w-[0px] border-[5px] border-t-[#F6514B] border-l-[#F6514B] border-r-transparent border-b-transparent"></div>
        </li>
      </ul>
    </template>
  </SearchContent>

</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router';
import TabControl from '../TabControl.vue';
import SearchContent from '../financeCpns/SearchContent.vue';
import { fetchSearchItem } from "../../api/Search";
import type { SearchType, searchItemType } from '../../types/search'

const searchStyle = ref<boolean>(true)
const searchItem = ref<searchItemType>({} as searchItemType)
const historySearchList = ref<SearchType>({} as SearchType)
const hotSearchList = ref<SearchType>({} as SearchType)

const value1 = ref(0);
const option1 = [
  { text: '全部', value: 0 },
  { text: '功能', value: 1 },
  { text: '产品', value: 2 },
  { text: '资讯', value: 3 },
  { text: '常见问题', value: 4 },
];


const router = useRouter()

onMounted(async () => {
  try {
    const res = await fetchSearchItem()
    historySearchList.value = res.searchItem.historySearch
    hotSearchList.value = res.searchItem.hotSearch
  } catch (error) {
    console.log(error);
   }
})


// 下拉框改变
const valueChange = (e: number) => {
  console.log("eeeeeeeeee", e);
  if(e === 3) {
    router.push('/FinancialInformation')
  }
}



const showSearch = computed(() => {
  return Object.prototype.toString.call(searchItem).slice(8, -1) !== '{}'
})



const cancelHandle = () => {
  router.go(-1)
}


</script>

<style scoped>
:deep(.van-dropdown-menu__bar) {
  @apply bg-transparent;
  @apply shadow-none;
  @apply top-[5px];
}

</style>
