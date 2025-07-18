<template>
  <div class="h-[100%] absolute bg-[rgba(137,137,137,.5)] w-[100%] flex justify-center items-center">
    <div class="w-[300px] h-[250px] bg-[#fff] flex flex-col justify-around items-center">
      <div>
        <span>账  号：</span>
        <input type="text" v-model="username">
      </div>
      <div>
        <span>密  码：</span>
        <input type="password" v-model="password">
      </div>
      <div class="flex">
        <span class="w-[60px] h-[35px] leading-[35px] rounded-[10px] text-center bg-[#0074d9] text-[#fff] mr-[10px]" @click="confrimHandle">确认</span>
        <span class="w-[60px] h-[35px] leading-[35px] rounded-[10px] text-center bg-[#0074d9] text-[#fff] mr-[10px]" @click="cancelHandle">取消</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { userLogin } from '../api/User';
import { useRouter } from 'vue-router';

let username = ref<string>('')
let password = ref<string>('')

const router = useRouter()

const emit = defineEmits(['changeShowToast'])

const confrimHandle = async () => {
  if(!username || !password) return
  // 登录
  const res = await userLogin({ 
    username: username.value, 
    password: password.value
  })
  if(res.code !== 200) {
    alert(res.data.message)
  } else {
    emit('changeShowToast', false)
    router.replace('/home')
  }
}

const cancelHandle = () => {
  emit('changeShowToast', false)
}
</script>
