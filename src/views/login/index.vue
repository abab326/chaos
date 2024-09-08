<template>
  <div
    class="w-full h-full login-page flex flex-col justify-center items-center"
  >
    <div
      class="w-[300px] flex flex-col p-10 bg-white rounded-lg shadow-lg shadow-blue"
    >
      <el-space class="w-full" direction="vertical" fill :size="20">
        <div>
          <span class="text-7 font-bold">欢迎登录</span>
          <span class="m-l-2 text-gray-400">混沌世界</span>
        </div>
        <el-input v-model="username" class="username" placeholder="用户名" />
        <el-input v-model="password" placeholder="密码" type="password " />
        <el-button type="primary" @click="submitLogin">登录</el-button>
      </el-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user-store'

const router = useRouter()

const { userLogin } = useUserStore()

const username = ref('')
const password = ref('')

const submitLogin = async () => {
  const result = await userLogin(username.value, password.value)
  if (result) {
    navToHome()
  }
}

const navToHome = () => {
  router.push('/home')
}
</script>

<style lang="scss" scoped>
.login-page {
  background-image: url('https://zmhd.sthjj.beijing.gov.cn/bjdangerout/login/images/backgroundA.jpg');
  background-size: cover;
}
</style>
