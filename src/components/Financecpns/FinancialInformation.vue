<template>
  <Headers :detailHeader="detailHeader" :messageCount="messageCount">
    <template #slot1>
      <div class="flex justify-center items-center" @click="returnHandle">
        <img src="@/assets/img/return.svg" class="w-[35px] h-[35px]" alt="">
      </div>
    </template>
    <template #slot2>
      <span class="w-[60%] text-center">财经资讯</span>
    </template>
  </Headers>

  <!-- 内容 -->
  <div class="bg-[#fff] p-[20px] flex flex-col">
    <div class="text-[20px] mb-[10px] font-bold">从小白到达人，理财如何赚更多？</div>
    <div class="text-[#989898] text-[14px] mb-[10px]">
      <span class="mr-[15px]">2017-04-26 10:18</span>
      <span>招财</span>
    </div>
    <span class="text-[#383838]">理财是需要循序渐进的。先迈开第一步，之后再不断学习，慢慢修正，从小白成长为达人还是很快的。</span>
    <img src="../../assets/img/caijingPic.png" alt="">
    <span class="text-[#383838]">理财这几年，米米虽然没有成为小富婆，但口袋也确实鼓了不少。现阶段努力奋斗的目标就是实现财务自由。从开始理财，到一点点学习，再到进入这个行业……其实我真走过不少错路。但好在有了经验后，十之八九的理财投资也都达到了预期目标。身边总有人喜欢问我，“你是怎么理财的呀？”“你投了哪些产品？”“你理财有什么方法和习惯吗？”问题很多，咱们一个个来。今天就先和大家聊聊，我在理财中养成的那些有用的小习惯。先说说信用卡，我办的不多，就两张，一张额度2万的，一张额度5万的。平时用额度低的卡比较多，买衣服、聚餐……能刷卡就刷卡，而且一定要到还款日再还钱。信用卡的免息期能达到50天左右，要好好利用这个时间。而银行卡的话，米米办的比较多，但是每张卡的用途我都很清楚。</span>
  </div>


</template>

<script setup lang="ts">
import { ref } from 'vue'
import Headers from '../Headers.vue';
import { useRouter } from 'vue-router'

const detailHeader = ref<boolean>(true)
const messageCount = ref<boolean>(true)

const router = useRouter()
const returnHandle = () => {
  router.go(-1)
}

</script>
<style scoped lang="scss">
</style>