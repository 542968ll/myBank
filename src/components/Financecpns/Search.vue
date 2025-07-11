<template>
  <TabControl :searchStyle="searchStyle">
    <template #tabControlItem>
      <input type="text" class="w-[75%] mt-[10px] mb-[10px] h-[30px] rounded-[20px]">
      <span class="text-[#fff]">取消</span>
      <van-dropdown-menu 
        :overlay="false"
        class="absolute top-[0] left-[5%]">
        <van-dropdown-item 
          v-model="value1" 
          :options="option1"
        />
      </van-dropdown-menu>
    </template>
  </TabControl>

  <!-- 历史搜索 -->
  <SearchContent v-if="showSearch">
    <template #title>
      <span>{{ searchItem.historySearch.title }}</span>
    </template>
    <template #content>
      <ul class="flex flex-wrap">
        <li v-for="item in searchItem.historySearch.list" :key="item" class="border-[1px] border-solid border-[#fff] p-[5px] mr-[10px] rounded-[5px] mb-[10px]">
          {{ item }}
        </li>
      </ul>
    </template>
  </SearchContent>

  <!-- 热门搜索 -->
  <SearchContent v-if="showSearch">
    <template #title>
      <span>{{ searchItem.hotSearch.title }}</span>
    </template>
    <template #content>
      <ul class="flex flex-wrap">
        <li v-for="item in searchItem.hotSearch.list" :key="item" class="border-[1px] border-solid border-[#fff] p-[5px] mr-[10px] rounded-[5px] mb-[10px]">{{ item }}</li>
      </ul>
    </template>
  </SearchContent>

</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import TabControl from '../TabControl.vue';
import SearchContent from './SearchContent.vue';
import { fetchSearchItem } from "../../api/Search";
import type { searchItemType } from '../../types/search'

const searchStyle = ref<boolean>(true)
const searchItem = ref<searchItemType>({} as searchItemType)

const value1 = ref(0);
const option1 = [
  { text: '全部', value: 0 },
  { text: '新款', value: 1 },
  { text: '活动', value: 2 },
];


onMounted(async () => {
  try {
    const res = await fetchSearchItem()
    searchItem.value = res.searchItem
    console.log("searchItem", searchItem.value);
  } catch (error) { }
})

const showSearch = computed(() => {
  return Object.prototype.toString.call(searchItem).slice(8, -1) !== '{}'
})
console.log('showSearch', showSearch.value);
console.log('searchItem', searchItem.value);


</script>
<style scoped lang="scss">
</style>