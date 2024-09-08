<template>
  <el-menu mode="vertical" :default-active="activeMenu" @select="onSelect">
    <LeftMenuItem v-for="item in menus" :key="item.id" :menu-item="item" />
  </el-menu>
</template>

<script setup lang="ts">
import { getMenuTreeList } from '@/api/modules/menu'
import { Menu } from '@/types/menu'
import LeftMenuItem from './LeftMenuItem.vue'

const activeMenu = ref('1')

const menus = ref<Menu[]>([
  {
    id: 1,
    name: '首页',
  },
  {
    id: 2,
    name: '系统管理',
    children: [
      { id: 201, name: '用户管理' },
      { id: 202, name: '角色管理' },
      { id: 203, name: '菜单管理' },
    ],
  },
  {
    id: 3,
    name: '权限管理',
    children: [
      { id: 301, name: '用户管理' },
      { id: 302, name: '角色管理' },
      { id: 303, name: '菜单管理' },
    ],
  },
  {
    id: 4,
    name: '日志管理',
    children: [
      { id: 401, name: '用户管理' },
      { id: 402, name: '角色管理' },
      { id: 403, name: '菜单管理' },
      { id: 404, name: '菜单管理' },
      { id: 405, name: '菜单管理' },
      { id: 406, name: '菜单管理' },
      { id: 407, name: '菜单管理' },
      { id: 408, name: '菜单管理' },
      { id: 409, name: '菜单管理' },
    ],
  },
  {
    id: 5,
    name: '其他',
  },
])

const onSelect = (key: string) => {
  console.log(key)
  activeMenu.value = key
}

onMounted(() => {
  getMenuTreeList()
})
</script>

<style lang="scss" scoped>
.el-menu {
  @apply border-none;
}
</style>
