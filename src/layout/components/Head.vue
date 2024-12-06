<template>
  <div class="h-full flex items-center gap-2">
    <el-image w-full h-8 :src="url" fit="fill" />
    <div flex-1></div>
    <div flex gap-1>
      <el-icon :size="16"> <User /></el-icon>
      <span text-xs>{{ user?.name }}--个人信息</span>
    </div>
    <div flex gap-1 @click="onLogout">
      <el-avatar :size="16" :src="circleUrl" />
      <span text-xs>{{ isLogin ? '已登录' : '未登录' }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user-store'

const router = useRouter()

const userStore = useUserStore()
const { isLogin, user } = storeToRefs(userStore)
const url =
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
const circleUrl =
  'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'

const onLogout = () => {
  if (isLogin.value) {
    userStore.userLogout()
  } else {
    router.push('/login')
  }
}
</script>

<style lang="scss" scoped></style>
